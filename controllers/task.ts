import { Request, Response } from "express";
import db from "../config/firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const pageIndex = Number(req.query.pageIndex);
    const pageSize = Number(req.query.pageSize);

    const tasksRef = collection(db, "tasks");
    const q = query(
      tasksRef,
      where("status", "==", false),
      orderBy("createdAt", "desc")
    );

    const tasksSnapshot = await getDocs(q);
    const tasks = tasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const paginatedTasks = tasks.slice(
      pageIndex * pageSize,
      (pageIndex + 1) * pageSize
    );

    res.json(paginatedTasks);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, createdAt } = req.body;

  try {
    const taskRef = doc(collection(db, "tasks"));
    await setDoc(taskRef, {
      title,
      description,
      status,
      createdAt,
    });
    res.status(201).json({ ok: true, message: "Tarea creada" });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, createdAt } = req.body;

  if (!id) {
    return res.status(400).send("Se requiere el campo id");
  }

  try {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, {
      title,
      description,
      status,
      createdAt,
    });
    res.status(200).json({ ok: true, message: "Tarea actualizada" });
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Se requiere el campo id");
  }

  try {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
    res.status(201).json({ ok: true, message: "Tarea eliminada" });
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message });
  }
};
