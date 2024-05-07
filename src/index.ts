// index.ts
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/users";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB().then((db) => {
  app.use("/users", userRoutes);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
