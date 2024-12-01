import { Router } from "express"
import { WishlistController } from "../controller/wishlist.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { wishlistValidate } from "../validator/wishlist.validator.js"

export const wishlistRouter = Router()

wishlistRouter.get("/getAll", WishlistController.getAll)
wishlistRouter.get("/getOne", WishlistController.getOne)
wishlistRouter.post("/create", validateRequest(wishlistValidate), WishlistController.create)
wishlistRouter.put("/update/:id", validateRequest(wishlistValidate), WishlistController.update)
wishlistRouter.delete("/delete/:id", WishlistController.delete)
