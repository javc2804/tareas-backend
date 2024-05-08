// routes/tasks.ts
import { Router } from "express";
import { body } from "express-validator";
import { getTasks, createTask, updateTask } from "../controllers/task";

const router = Router();

router.get("/", getTasks);
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
  ],
  createTask
);
router.put("/:id", updateTask);

export default router;
