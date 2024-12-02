import db from "../database/index.js"
import { hashPassword } from "../utils/index.js"

const tableName = "users"
export const AdminService = {
    create: async (data) => {
        try {
            data.password = await hashPassword(data.password)
            const res = await db(tableName).insert(data).returning("*")
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 500,
                    message: "Adminni databasega qo'shib bo'lmadi",
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
    getAll: async (page, limit) => {
        try {
            const offset = (page - 1) * limit
            const res = await db(tableName)
                .select("*")
                .limit(limit)
                .offset(offset)
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Admin lar topilmadi",
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
                    message: "Admin topilmadi",
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
                .update({role: "admin"})
                .where("id", "=", id)
                .returning("*")
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "User topilmadi",
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
                    message: "User topilmadi",
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
