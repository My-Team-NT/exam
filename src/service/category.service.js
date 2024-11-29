import db from "../database/index.js"

export const CategoryService = {
    getAll: async () => {
        try {
            return db("category").select("*")
        } catch (error) {
            throw error
        }
    },
    getById: async (id) => {
        try {
            return db("category").select("*").where("id", "=", id)
        } catch (error) {
            throw error
        }
    },
    getPage: async (page, limit) => {
        try {
            return db("category").select("*").limit(limit).offset(page)
        } catch (error) {
            throw error
        }
    },
    getFilter: async (name, value) => {
        try {
            return db("category").select("*").where(name, "=", value)
        } catch (error) {
            throw error
        }
    },
    getSearch: async (search) => {
        try {
            return db("category")
                .select("*")
                .where("name", "ILIKE", `%${search}%`)
        } catch (error) {
            throw error
        }
    },
    createcategory: async (data) => {
        try {
            return db("category").insert(data).returning("*")
        } catch (error) {
            throw error
        }
    },
    updatecategory: async (id, data) => {
        try {
            return db("category").where("id", "=", id).update(data)
        } catch (error) {
            throw error
        }
    },
    deletecategory: async (id) => {
        try {
            return db("category").where("id", "=", id).del()
        } catch (error) {
            throw error
        }
    },
}