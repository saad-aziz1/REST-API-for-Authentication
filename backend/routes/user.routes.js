import express, { Router } from "express";
import { logIn, logOut, signUp } from "../controllers/user.controllers.js";
import { uploadMulterUsewithRoutes } from "../middlewares/multer.js";

const authRouter = express(Router())
authRouter.post("/signup",uploadMulterUsewithRoutes.single("profileImage"), signUp)
authRouter.post("/login", logIn)
authRouter.post("/logout", logOut)

export default authRouter