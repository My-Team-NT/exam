import { Router } from "express"
import { OrderController } from "../controller/orders.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { orderValidate } from "../validator/order.validator.js";

export const orderRouter = Router()

orderRouter.get("/", OrderController.getAll)
orderRouter.get("/:id", OrderController.getOne)
orderRouter.post("/", validateRequest(orderValidate), OrderController.create)
orderRouter.put("/:id", validateRequest(orderValidate), OrderController.update)
orderRouter.delete("/:id", OrderController.delete)
