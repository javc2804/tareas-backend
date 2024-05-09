// src/app.ts
import express from "express";
import userRoutes from "./routes/user";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json()); // Asegúrate de usar el middleware express.json() para poder parsear el cuerpo de las solicitudes HTTP en formato JSON
server.use(userRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
