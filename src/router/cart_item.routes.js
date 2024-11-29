import { Router } from "express"
import { CartItemController } from "../controller/cart_item.controller.js"
import { validateCartItem } from "../middleware/cart_item.middleware.js"
import { roleGuard } from "../middleware/index.js"

export const cartItemRouter = Router()

cartItemRouter.get("/", CartItemController.getAll)
cartItemRouter.get("/:id", CartItemController.getOne)
cartItemRouter.post("/", roleGuard('admin'), validateCartItem, CartItemController.create)
cartItemRouter.put("/:id",roleGuard('admin'), validateCartItem, CartItemController.update)
cartItemRouter.delete("/:id", roleGuard('admin'), CartItemController.delete)
