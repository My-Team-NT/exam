import Joi from "joi"

export const cartValidator = (cart) => {
    const schema = Joi.object({
        user_id: Joi.string().uuid().required().messages({
            "string.empty": "\"user_id\" bo'sh bo'lishi mumkin emas",
            "string.uuid": '"user_id" UUID formatida bo\'lishi kerak',
            "any.required": '"user_id" maydoni talab qilinadi',
        }),
        total: Joi.number().min(0).required().messages({
            "number.base": '"total" son bo\'lishi kerak',
            "number.min": '"total" qiymati 0 yoki undan katta bo\'lishi kerak',
            "any.required": '"total" maydoni talab qilinadi',
        }),
    })

    return schema.validate(cart, { abortEarly: false })
}
