// users.ts
import { Request, Response, Router } from "express";
import { getAllUsers, createUser, getUser } from "../controllers/users";

const router = Router();

router.get("/", getAllUsers);
router.get("/:email", getUser);
router.post("/", createUser);

export default router;
