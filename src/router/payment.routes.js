import { Router } from "express"
import { PaymentController } from "../controller/payment.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { paymentValidate } from "../validator/payment.validator.js"

export const paymentRouter = Router()

paymentRouter.get("/", PaymentController.getAll)
paymentRouter.get("/:id", PaymentController.getOne)
paymentRouter.post("/", validateRequest(paymentValidate), PaymentController.create)
paymentRouter.put("/:id", validateRequest(paymentValidate), PaymentController.update)
paymentRouter.delete("/:id", PaymentController.delete)
