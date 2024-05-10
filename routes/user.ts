import express from "express";
import { createUser, loginUser } from "../controllers/user";

const router = express.Router();

router.get("/users/:email", loginUser);
router.post("/users", createUser);

export default router;
