import {Router} from "express";
import { loginController, registerController, verifyTokenController } from '../controller/index.js'

export const authRouter = Router()

authRouter.get('/google/')
authRouter.post('/register' , registerController) 
authRouter.post('/login' , loginController) 
authRouter.post('/vrifyToken' , verifyTokenController)