import Joi from "joi"

export const adminValidation = (data) => {
    const validation = Joi.object({
        firstname: Joi.string().min(2).required(),
        lastname: Joi.string().min(2).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .required(),
        role: Joi.string().valid(['admin', 'user']).default('user'),
        phone: Joi.string().required(),
        birth_date: Joi.date().required(),
    })
    return validation.validate(data)
}