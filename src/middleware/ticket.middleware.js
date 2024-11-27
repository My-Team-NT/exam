import { ticketValidator } from "../validator/ticket.validator.js"

export const validateTicket = (req, res, next) => {
    const { error, value } = ticketValidator(req.body)

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validatsiya xatosi",
            errors: error.details.map((err) => err.message),
        })
    }

    req.validatedTicket = value
    next()
}
