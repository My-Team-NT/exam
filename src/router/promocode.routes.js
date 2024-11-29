import { Router } from "express"
import { PromocodeController } from "../controller/promocode.controller.js"
import { validatePromocode } from "../middleware/promocode.middleware.js"

export const promocodeRouter = Router()

promocodeRouter.get("/getAll", PromocodeController.getAll)
promocodeRouter.get("/getOne/:id", PromocodeController.getOne)
promocodeRouter.post("/create", validatePromocode, PromocodeController.create)
promocodeRouter.put(
    "/update/:id",
    validatePromocode,
    PromocodeController.update,
)
promocodeRouter.delete("/delete/:id", PromocodeController.delete)
