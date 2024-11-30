import Joi from "joi"

export const feedbackValidation = (data) => {
    const validation = Joi.object({
        user_id: Joi.string().required(),
        type: Joi.string().required(),
        message: Joi.string().required(),
        status: Joi.string().required(),
    })
    return validation.validate(data)
}
