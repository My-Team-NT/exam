import { cartValidator } from "../validator/cart.validator.js"

export const validateCart = (req, res, next) => {
    const { error, value } = cartValidator(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Cart validatsiyasi xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedCart = value
    next()
}
