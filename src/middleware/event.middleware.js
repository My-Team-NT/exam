import { eventValidator } from "../validator/event.validator.js"

export const validateEvent = (req, res, next) => {
    const { error, value } = eventValidator(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedEvent = value
    next()
}
