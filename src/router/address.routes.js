import { Router } from "express"
import { AddressController } from "../controller/address.controller.js"
import { validateAddress } from "../middleware/address.middleware.js"
import { roleGuard } from "../middleware/index.js"

export const addressRouter = Router()

addressRouter.get("/", roleGuard("admin"), AddressController.getAll)
addressRouter.get("/:id", AddressController.getOne)
addressRouter.post("/", validateAddress, AddressController.create)
addressRouter.put(
    "/:id",
    roleGuard("admin"),
    validateAddress,
    AddressController.update,
)
addressRouter.delete("/:id", roleGuard("admin"), AddressController.delete)
