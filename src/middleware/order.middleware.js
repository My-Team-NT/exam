import { orderValidate } from "../validator/order.validator.js"

export const validateOrder = (req, res, next) => {
    const { error, value } = orderValidate(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedOrder = value
    next()
}
