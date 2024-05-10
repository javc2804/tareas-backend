// src/controllers/UserController.ts
import { Request, Response } from "express";
import db from "../config/firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const userRef = doc(collection(db, "users"));
    await setDoc(userRef, { email });
    res.status(201).json({ ok: true, message: "Usuario creado" });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  console.log(email);

  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      res.status(200).json({ ok: true, message: "Usuario logueado" });
    } else {
      res.status(404).json({ ok: false, message: "Usuario no encontrado" });
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
