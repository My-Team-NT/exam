import { Router } from "express"
import { WishlistController } from "../controller/wishlist.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { wishlistValidate } from "../validator/wishlist.validator.js"

export const wishlistRouter = Router()

wishlistRouter.get("/", WishlistController.getAll)
wishlistRouter.get("/:id", WishlistController.getOne)
wishlistRouter.post("/", validateRequest(wishlistValidate), WishlistController.create)
wishlistRouter.put("/:id", validateRequest(wishlistValidate), WishlistController.update)
wishlistRouter.delete("/:id", WishlistController.delete)
