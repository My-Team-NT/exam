import Joi, { date } from "joi"

export const userValidation = (data) => {
    const validation = Joi.object({
        fistname: Joi.string().min(2).required(),
        lastname: Joi.string().min(2).required(),
        eamil: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .required(),
        phone: Joi.string().required(),
        birthdate: Joi.date().required(),
    })
}

export const loginValidation = (data) => {
    const validation = Joi.object({
        eamil: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string().required(),
    })
}

export const otpValidation = (data) => {
    const validation = Joi.object({
        eamil: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        otp:Joi.string().required(),
    })
}
