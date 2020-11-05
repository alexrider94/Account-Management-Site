import express from 'express';
import { findUser, register, login } from "./controller/UserController.js";

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);

