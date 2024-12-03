import db from "../database/index.js"

const tableName = "address"
export const AddressService = {
    create: async (data) => {
        try {
            const address = await db(tableName).insert(data).returning("*")
            if (!address || address.length == 0) {
                return {
                    success: false,
                    status: 500,
                    message: "Addressni databasega qo'shib bo'lmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: address[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    getAll: async (page, limit) => {
        try {
            const offset = (page - 1) * limit
            const address = await db(tableName)
                .select("*")
                .limit(limit)
                .offset(offset)
            if (!address || address.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Address lar topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: address,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (id) => {
        try {
            const address = await db(tableName).select("*").where("id", "=", id)
            if (!address || address.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Address topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: address[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (id, data) => {
        try {
            const address = await db(tableName)
                .update(data)
                .where("id", "=", id)
                .returning("*")
            if (!address || address.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Address topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: address[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (id) => {
        try {
            const address = await db(tableName)
                .delete()
                .where("id", "=", id)
                .returning("*")
            if (!address || address.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Address topilmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: address[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
}
