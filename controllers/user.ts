// src/controllers/UserController.ts
import { Request, Response } from "express";
import db from "../config/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

export const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const userRef = doc(collection(db, "users"));
    await setDoc(userRef, { email });
    res.send("Usuario creado");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
