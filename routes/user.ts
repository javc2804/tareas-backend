// src/routes/userRoutes.ts
import express from "express";
import { createUser, loginUser } from "../controllers/user";

const router = express.Router();

router.post("/auth/user", createUser);
router.post("/auth/login", loginUser);

export default router;
