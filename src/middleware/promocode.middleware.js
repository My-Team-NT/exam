import { promocodeValidator } from "../validator/promocode.validator.js"

export const validatePromocode = (req, res, next) => {
    const { error, value } = promocodeValidator(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedPromocode = value
    next()
}
