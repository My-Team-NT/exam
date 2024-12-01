import { Router } from "express"
import { OrderController } from "../controller/orders.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { orderValidate } from "../validator/order.validator.js";

export const orderRouter = Router()

orderRouter.get("/getAll", OrderController.getAll)
orderRouter.get("/getOne", OrderController.getOne)
orderRouter.post("/create", validateRequest(orderValidate), OrderController.create)
orderRouter.put("/update/:id", validateRequest(orderValidate), OrderController.update)
orderRouter.delete("/delete/:id", OrderController.delete)
