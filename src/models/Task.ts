import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: "false" },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
