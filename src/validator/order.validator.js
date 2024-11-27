import Joi from "joi"

export const orderValidate = (data) => {
    const schema = Joi.object({
        user_id: Joi.string().required(),
        ticket_id: Joi.string().required(),
        total_amount: Joi.number().required(),
        status: Joi.string().valid("", "EUR", "UZS").required(),
    })

    return schema.validate(data)
}
