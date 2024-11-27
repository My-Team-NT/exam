import { Router } from "express"
import { CartItemController } from "../controller/cart_item.controller.js"
import { validateCartItem } from "../middleware/cart_item.middleware.js"

export const cartItemRouter = Router()

cartItemRouter.get("/getAll", CartItemController.getAll)
cartItemRouter.get("/getOne", CartItemController.getOne)
cartItemRouter.post("/create", validateCartItem, CartItemController.create)
cartItemRouter.put("/update/:id", validateCartItem, CartItemController.update)
cartItemRouter.delete("/delete/:id", CartItemController.delete)
