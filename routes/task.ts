import express from "express";
import {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
} from "../controllers/task";

const router = express.Router();

router.post("/task", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);
router.get("/task", getTasks);

export default router;
