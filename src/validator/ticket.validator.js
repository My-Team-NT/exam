import Joi from "joi"

export const ticketValidator = (ticket) => {
    const schema = Joi.object({
        id: Joi.string().uuid().required().messages({
            "string.empty": "\"id\" bo'sh bo'lishi mumkin emas",
            "string.uuid": '"id" UUID formatida bo\'lishi kerak',
            "any.required": '"id" maydoni talab qilinadi',
        }),
        event_id: Joi.string().uuid().required().messages({
            "string.empty": "\"eventid\" bo'sh bo'lishi mumkin emas",
            "string.uuid": '"eventid" UUID formatida bo\'lishi kerak',
            "any.required": '"eventid" maydoni talab qilinadi',
        }),
        type: Joi.string()
            .valid("type1", "type2", "type3")
            .required()
            .messages({
                "string.empty": "\"type\" bo'sh bo'lishi mumkin emas",
                "string.valid":
                    '"type" faqat quyidagi qiymatlardan biri bo\'lishi kerak: type1, type2, type3',
                "any.required": '"type" maydoni talab qilinadi',
            }),
        price: Joi.number().precision(2).required().messages({
            "number.base": '"price" raqam bo\'lishi kerak',
            "number.precision": '"price" 2 ta kasr raqamidan oshmasligi kerak',
            "any.required": '"price" maydoni talab qilinadi',
        }),
        currency: Joi.string().max(3).required().messages({
            "string.empty": "\"currency\" bo'sh bo'lishi mumkin emas",
            "string.max": '"currency" uzunligi 3 ta belgidan oshmasligi kerak',
            "any.required": '"currency" maydoni talab qilinadi',
        }),
        seat_number: Joi.string().max(10).required().messages({
            "string.empty": "\"seatNumber\" bo'sh bo'lishi mumkin emas",
            "string.max":
                '"seatNumber" uzunligi 10 ta belgidan oshmasligi kerak',
            "any.required": '"seatNumber" maydoni talab qilinadi',
        }),
        status: Joi.string().valid("active", "inactive").required().messages({
            "string.empty": "\"status\" bo'sh bo'lishi mumkin emas",
            "string.valid":
                '"status" faqat quyidagi qiymatlardan biri bo\'lishi kerak: active, inactive',
            "any.required": '"status" maydoni talab qilinadi',
        }),
    })

    return schema.validate(ticket, { abortEarly: false })
}