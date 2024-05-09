// src/routes/userRoutes.ts
import express from "express";
import * as UserController from "../controllers/user";

const router = express.Router();

// router.get("/user", UserController.getUser);
router.post("/auth/user", UserController.createUser);

export default router;
