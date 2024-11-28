import { Router } from "express"
import { WishlistController } from "../controller/wishlist.controller.js"
import { validateWishlist } from "../middleware/wishlist.validator.js"

export const wishlistRouter = Router()

wishlistRouter.get("/getAll", WishlistController.getAll)
wishlistRouter.get("/getOne", WishlistController.getOne)
wishlistRouter.post("/create", validateWishlist, WishlistController.create)
wishlistRouter.put("/update/:id", validateWishlist, WishlistController.update)
wishlistRouter.delete("/delete/:id", WishlistController.delete)
