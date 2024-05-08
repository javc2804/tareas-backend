// controllers/taskController.ts
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
};
