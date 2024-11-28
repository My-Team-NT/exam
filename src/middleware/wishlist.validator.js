import { wishlistValidate } from "../validator/wishlist.validator.js"

export const validateWishlist = (req, res, next) => {
    const { error, value } = wishlistValidate(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedWishlist = value
    next()
}
