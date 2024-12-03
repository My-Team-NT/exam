import email from "../config/email.js"
import db from "../database/index.js"
import { hashPassword } from "../utils/index.js"

const tableName = "users"
export const AdminService = {
    create: async (data) => {
        try {
            
            const userExists = await db('users').select('*').where('email', '=', data.email)

            if(userExists.length != 0){
                return {
                    success: false,
                    status: 409,
                    message: `${data.email} already exists`
                }
            }


            data.password = await hashPassword(data.password)
            let users = await db(tableName).insert(data).returning("*")
            
            if (!users || users.length == 0) {
                return {
                    success: false,
                    status: 500,
                    message: "Adminni databasega qo'shib bo'lmadi",
                }
            }
            users = users.map(user => {
                delete user.password
                return user
            })
            return {
                success: true,
                status: 200,
                message: users[0],
            }
        } catch (error) {
            console.log(error.message)
            throw new Error(error)
        }
    },
    getAll: async (page, limit) => {
        try {
            const offset = (page - 1) * limit
            let users = await db(tableName)
                .select("*")
                .where('role', '=', 'admin')
                .limit(limit)
                .offset(offset)
            if (!users || users.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Admin lar topilmadi",
                }
            }
            users = users.map(user => {
                delete user.password;
                return user;
            });
            return {
                success: true,
                status: 200,
                message: users,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (id) => {
        try {
            let users = await db(tableName).select("*").where("id", "=", id)
            if (!users || users.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "Admin topilmadi",
                }
            }
            users = users.map(user => {
                delete user.password;
                return user;
            });
            return {
                success: true,
                status: 200,
                message: users[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (id) => {
        try {
            const users = await db(tableName)
                .update({
                    role: "admin",
                    is_active: true
                })
                .where("id", "=", id)
                .returning("*")
            if (!users || users.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "User topilmadi",
                }
            }
            users = users.map(user => {
                delete user.password;
                return user;
            });
            return {
                success: true,
                status: 200,
                message: users[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (id) => {
        try {
            const users = await db(tableName)
                .delete()
                .where("id", "=", id)
                .returning("*")
            if (!users || users.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: "User topilmadi",
                }
            }
            users = users.map(user => {
                delete user.password;
                return user;
            });
            return {
                success: true,
                status: 200,
                message: users[0],
            }
        } catch (error) {
            throw new Error(error)
        }
    },
}
