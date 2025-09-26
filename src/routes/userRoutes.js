import express from "express";
import {
  createUser_Controller,
  getAllUsers_Controller,
  getUserById_Controller,
  deleteUserById_Controller,
  updateUserItemById_Controller,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers_Controller);

router.post("/user", createUser_Controller);

router.get("/user/:id", getUserById_Controller);

router.delete("/basket/deleteItem/:id", deleteUserById_Controller);

router.patch("/basket/updateItem/:id", updateUserItemById_Controller);

export default router;
