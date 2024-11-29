import db from "../database/index.js"
export const createOtp = (data) => {
    try {
        return db("otp").insert(data).returning("*")
    } catch (error) {
        throw error
    }
}
export const getOtpService = (user_id) => {
    try {
        return db("otp").insert("*").where("user_id", "=", user_id)
    } catch (error) {
        throw error
    }
}

export const deleteOtpService = (id) => {
    try {
        return db("otp").where("user_id", "=", id).del()
    } catch (error) {
        throw error
    }
}

export const getUserByEmailService = (email) => {
    try {
        return db("users").select("*").where("email", "=", email)
    } catch (error) {
        throw error
    }
}
