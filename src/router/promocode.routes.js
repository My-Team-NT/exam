import { Router } from "express"
import { PromocodeController } from "../controller/promocode.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { promocodeValidator } from "../validator/promocode.validator.js"

export const promocodeRouter = Router()

promocodeRouter.get("/getAll", PromocodeController.getAll)
promocodeRouter.get("/getOne/:id", PromocodeController.getOne)
promocodeRouter.post("/create", validateRequest(promocodeValidator), PromocodeController.create)
promocodeRouter.put(
    "/update/:id",
    validateRequest(promocodeValidator),
    PromocodeController.update,
)
promocodeRouter.delete("/delete/:id", PromocodeController.delete)
