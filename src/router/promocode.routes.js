import { Router } from "express"
import { PromocodeController } from "../controller/promocode.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { promocodeValidator } from "../validator/promocode.validator.js"

export const promocodeRouter = Router()

promocodeRouter.get("/", PromocodeController.getAll)
promocodeRouter.get("/:id", PromocodeController.getOne)
promocodeRouter.post(
    "/",
    validateRequest(promocodeValidator),
    PromocodeController.create,
)
promocodeRouter.put(
    "/:id",
    validateRequest(promocodeValidator),
    PromocodeController.update,
)
promocodeRouter.delete("/:id", PromocodeController.delete)
