import db from "../database/index.js"

const tableName = "categories"
export const CategoryService = {
    create: async (data) => {
        try {
            console.log(data)
            const res = await db(tableName).insert(data).returning("*")
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 500,
                    message: "Categoryni databasega qo'shib bo'lmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: res[0],
            }
        } catch (error) {
            console.log(error.message)
            throw new Error(error)
        }
    },
    getAll: async (page = 1, limit = 10, name, value) => {
        try {
            const offset = (page - 1) * limit
            let res
            if (name && value) {
                res = await db(tableName)
                    .select("*")
                    .where(name, "ILIKE", `%${value}%`)
                    .limit(limit)
                    .offset(offset)
            } else {
                res = await db(tableName)
                    .select("*")
                    .limit(limit)
                    .offset(offset)
            }
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Category lar topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: res,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (id) => {
        try {
            const res = await db(tableName).select("*").where("id", "=", id)
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Category topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: res[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (id, data) => {
        try {
            const res = await db(tableName)
                .update(data)
                .where("id", "=", id)
                .returning("*")
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Category topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: res[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (id) => {
        try {
            const res = await db(tableName)
                .delete()
                .where("id", "=", id)
                .returning("*")
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Category topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: res[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
}
