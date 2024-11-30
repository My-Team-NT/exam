import db from "../database/index.js"

export const CategoryService = {
    getAll: async () => {
        try {
            return db("categorys").select("*")
        } catch (error) {
            throw error
        }
    },
    getById: async (id) => {
        try {
            return db("categorys").select("*").where("id", "=", id)
        } catch (error) {
            throw error
        }
    },
    getPage: async (page, limit) => {
        try {
            return db("categorys").select("*").limit(limit).offset(page)
        } catch (error) {
            throw error
        }
    },
    getFilter: async (name, value) => {
        try {
            return db("categorys").select("*").where(name, "=", value)
        } catch (error) {
            throw error
        }
    },
    getSearch: async (search) => {
        try {
            return db("categorys")
                .select("*")
                .where("name", "ILIKE", `%${search}%`)
        } catch (error) {
            throw error
        }
    },
    createcategory: async (data) => {
        try {
            return db("categorys").insert(data).returning("*")
        } catch (error) {
            throw error
        }
    },
    updatecategory: async (id, data) => {
        try {
            return db("categorys").where("id", "=", id).update(data)
        } catch (error) {
            throw error
        }
    },
    deletecategory: async (id) => {
        try {
            return db("categorys").where("id", "=", id).del()
        } catch (error) {
            throw error
        }
    },
}
