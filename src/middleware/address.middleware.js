import { addressValidator } from "../validator/address.validator.js"

export const validateAddress = (req, res, next) => {
    const { error, value } = addressValidator(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedAddress = value
    next()
}
