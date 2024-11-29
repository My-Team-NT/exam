import db from '../database/index.js'

export const FeedBackService = {
    getAll: async () => {
        try {
            return db("feedback").select("*")
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            return db("feedback").select("*").where('id' , '=' , id)
        } catch (error) {
            throw error;
        }
    },
    getPage: async (page , limit) => {
        try {
            return db("feedback").select("*").limit(limit).offset(page)
        } catch (error) {
            throw error;
        }
    },
    getFilter: async (name , value) => {
        try {
            return db("feedback").select("*").where(name, "=", value)
        } catch (error) {
            throw error;
        }
    },
    getSearch: async (search) => {
        try {
            return db("feedback").select("*").where("message", "ILIKE", `%${search}%`)
        } catch (error) {
            throw error;
        }
    },
    createFeedBack: async (data) => {
        try {
            return  db("feedback").insert(data).returning("*");
        } catch (error) {
            throw error;
        }
    },
    updateFeedBack: async (id , data) => {
        try {
            return  db("feedback").where("id", "=", id).update(data)
        } catch (error) {
            throw error;
        }
    },
    deleteFeedBack: async (id) => {
        try {
            return db("feedback").where("id", "=", id).del()
        } catch (error) {
            throw error;
        }
    },
}
