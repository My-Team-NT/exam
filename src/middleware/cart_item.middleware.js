import { cartItemValidator } from '../validator/cart_item.validator.js'

export const validateCartItem = (req, res, next) => {
    const { error, value } = cartItemValidator(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Cart item validatsiyasi xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedCartItem = value
    next()
}
