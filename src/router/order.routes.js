import { Router } from "express"
import { OrderController } from "../controller/orders.controller.js"
import { validateOrder } from "../middleware/order.middleware.js"

export const orderRouter = Router()

orderRouter.get("/getAll", OrderController.getAll)
orderRouter.get("/getOne", OrderController.getOne)
orderRouter.post("/create", validateOrder, OrderController.create)
orderRouter.put("/update/:id", validateOrder, OrderController.update)
orderRouter.delete("/delete/:id", OrderController.delete)
