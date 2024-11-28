import { Router } from "express"
import { AddressController } from "../controller/address.controller.js"
import { validateAddress } from "../middleware/address.middleware.js"

export const addressRouter = Router()

addressRouter.get("/getAll", AddressController.getAll)
addressRouter.get("/getOne", AddressController.getOne)
addressRouter.post("/create", validateAddress, AddressController.create)
addressRouter.put("/update/:id", validateAddress, AddressController.update)
addressRouter.delete("/delete/:id", AddressController.delete)
