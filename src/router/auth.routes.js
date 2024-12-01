import { Router } from "express"
import {
    googlePassportRegisterController,
    loginController,
    registerController,
    verifyTokenController,
} from "../controller/auth.controller.js"
import passport from "passport"
import "../strategies/passport-google.js"

export const authRouter = Router()

authRouter.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] }),
)
authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        session: false,
    }),
    googlePassportRegisterController,
)
authRouter.post("/register", registerController)
authRouter.post("/login", loginController)
authRouter.post("/verifyToken", verifyTokenController)