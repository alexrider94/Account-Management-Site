import express from 'express';
import { findUser, register, login, authCheck } from "./controller/UserController.js";
import { makeAccount, getAccount } from "./controller/BankController.js";

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/authCheck", authCheck);

router.post("/getAccount", getAccount);
router.get("/makeAccount", makeAccount);