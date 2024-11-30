import { Router } from "express"
import { CartController } from "../controller/cart.controller.js"
import { validateCart } from "../middleware/cart.middleware.js"
import { roleGuard } from "../middleware/index.js"

export const cartRouter = Router()

cartRouter.get("/", CartController.getAll)
cartRouter.get("/:id", CartController.getOne)
cartRouter.post("/", roleGuard("admin"), validateCart, CartController.create)
cartRouter.put("/:id", roleGuard("admin"), validateCart, CartController.update)
cartRouter.delete("/:id", roleGuard("admin"), CartController.delete)
