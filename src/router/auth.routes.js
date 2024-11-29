import { Router } from "express"
import {
    googlePassportRegisterController,
    loginController,
    registerController,
    verifyTokenController,
} from "../controller/index.js"
import passport from "passport"
import "../stratgis/possport-google.js";

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
authRouter.post("/vrifyToken", verifyTokenController)
