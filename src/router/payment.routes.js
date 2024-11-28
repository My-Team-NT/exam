import { Router } from "express"
import { PaymentController } from "../controller/payment.controller.js"
import { validatePayment } from "../middleware/payment.validator.js"

export const paymentRouter = Router()

paymentRouter.get("/getAll", PaymentController.getAll)
paymentRouter.get("/getOne", PaymentController.getOne)
paymentRouter.post("/create", validatePayment, PaymentController.create)
paymentRouter.put("/update/:id", validatePayment, PaymentController.update)
paymentRouter.delete("/delete/:id", PaymentController.delete)
