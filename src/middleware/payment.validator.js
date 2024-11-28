import { paymentValidate } from "../validator/order.validator.js"

export const validatePayment = (req, res, next) => {
    const { error, value } = paymentValidate(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedPayment = value
    next()
}
