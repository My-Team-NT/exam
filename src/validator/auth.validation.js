import Joi from "joi"

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
    return validation.validate(data)
}

export const googleValidation = (data) => {
    const validation = Joi.object({
        fistname: Joi.string().min(2).required(),
        lastname: Joi.string().min(2).required(),
        eamil: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string().default(""),
        google_id: Joi.string().required(),
        phone: Joi.string().required(),
        birthdate: Joi.date().required(),
    })
    return validation.validate(data)
}

export const loginValidation = (data) => {
    const validation = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string().required(),
    })
    return validation.validate(data)
}

export const otpValidation = (data) => {
    const validation = Joi.object({
        eamil: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        otp: Joi.string().required(),
    })
    return validation.validate(data)
}
