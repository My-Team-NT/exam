import { Router } from "express"
import { CartController } from "../controller/cart.controller.js"
import { validateCart } from "../middleware/cart.middleware.js"

export const cartRouter = Router()

cartRouter.get("/getAll", CartController.getAll)
cartRouter.get("/getOne", CartController.getOne)
cartRouter.post("/create", validateCart, CartController.create)
cartRouter.put("/update/:id", validateCart, CartController.update)
cartRouter.delete("/delete/:id", CartController.delete)
