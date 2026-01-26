import express, { Router } from "express";
import { signUp } from "../controllers/user.controllers.js";

const authRouter = express(Router())
authRouter.post("/signup", signUp)

export default authRouter