import Joi from "joi"

export const feedbackValidation = (data) => {
    const validation = Joi.object({
        user_id: Joi.number().required(),
        type: Joi.string().min(2).required(),
        message: Joi.string().required(),
        status: Joi.string().required(),
    })
    return validation.validate(data)
}
