// users.ts
import { Request, Response, Router } from "express";
import { getAllUsers, createUser, getUser } from "../controllers/users";

const router = Router();

router.get("/", getAllUsers);
router.get("/:email", getUser); // new route for getting a specific user
router.post("/", createUser);

export default router;
