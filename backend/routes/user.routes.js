import express, { Router } from "express";
import { logIn, signUp } from "../controllers/user.controllers.js";

const authRouter = express(Router())
authRouter.post("/signup", signUp)
authRouter.post("/login", logIn)

export default authRouter