import { Router } from "express"
import { AddressController } from "../controller/address.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { roleGuard } from "../middleware/index.js"
import { addressValidator } from "../validator/address.validator.js";

export const addressRouter = Router()

addressRouter.get("/", roleGuard("admin"), AddressController.getAll)
addressRouter.get("/:id", AddressController.getOne)
addressRouter.post("/", validateRequest(addressValidator), AddressController.create)
addressRouter.put("/:id", roleGuard('admin'), validateRequest(addressValidator), AddressController.update)
addressRouter.delete("/:id", roleGuard('admin'), AddressController.delete)
