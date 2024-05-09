import express from "express";
import userRoutes from "./routes/user";
import cors from "cors";

import taskRoutes from "./routes/task";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(userRoutes);
server.use(taskRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
