import express from "express";
import {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
} from "../controllers/task";

const router = express.Router();

router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks", getTasks);

export default router;
