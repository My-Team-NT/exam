import { Router } from "express"
import { PaymentController } from "../controller/payment.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { paymentValidate } from "../validator/payment.validator.js"

export const paymentRouter = Router()

paymentRouter.get("/getAll", PaymentController.getAll)
paymentRouter.get("/getOne", PaymentController.getOne)
paymentRouter.post("/create", validateRequest(paymentValidate), PaymentController.create)
paymentRouter.put("/update/:id", validateRequest(paymentValidate), PaymentController.update)
paymentRouter.delete("/delete/:id", PaymentController.delete)
