import { FeedBackService } from "../service/index.js"
import { feedbackValidation } from "../validator/index.js"
export const FeedBackController = {
    getAll: async (req, res, next) => {
        try {
            const AllData = await FeedBackService.getAll()
            return res.status(200).send({ status: "Success", data: AllData })
        } catch (error) {
            next(error)
        }
    },
    getById: async (req, res, next) => {
        try {
            const feedback = await FeedBackService.getById(req.params.id)
            if (!feedback) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: feedback })
        } catch (error) {
            next(error)
        }
    },
    getPage: async (req, res, next) => {
        try {
            const { page, limit } = req.query
            const skip = (page - 1) * limit
            const feedback = await FeedBackService.getPage(skip, limit)
            if (!feedback) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: feedback })
        } catch (error) {
            next(error)
        }
    },
    getFilter: async (req, res, next) => {
        try {
            const key = String(Object.keys(req.query)[0])
            const feedback = await FeedBackService.getFilter(
                key,
                req.query[key],
            )
            if (!feedback) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: feedback })
        } catch (error) {
            next(error)
        }
    },
    getSearch: async (req, res, next) => {
        try {
            const search = req.query.name || ""
            const feedback = await FeedBackService.getSearch(search)
            if (!feedback) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: feedback })
        } catch (error) {
            next(error)
        }
    },
    createFeedBack: async (req, res, next) => {
        try {
            const { error } = feedbackValidation(req.body)
            if (error) {
                return res.status(400).send("Malumotlarni Togri kiriting")
            }
            const feedback = await FeedBackService.createFeedBack(req.body)
            return res.status(201).send({ status: "Created"})
        } catch (error) {
            next(error)
        }
    },
    updateFeedBack: async (req, res, next) => {
        try {
            const feedback = await FeedBackService.getById(req.params.id)
            if (!feedback) {
                return res.status(404).send("Malumot Topilmadi")
            }
            const newDate = { ...feedback[0], ...req.body }
            const newFeedBack = await FeedBackService.updateFeedBack(
                req.params.id,
                newDate,
            )
            return res
                .status(200)
                .send({ status: "Success", id: newFeedBack[0].id })
        } catch (error) {
            next(error)
        }
    },
    deleteFeedBack: async (req, res, next) => {
        try {
            const feedback = await FeedBackService.getById(req.params.id)
            if (!feedback) {
                return res.status(404).send("Malumot Topilmadi")
            }
            const deleteUser = await FeedBackService.deleteFeedBack(
                req.params.id,
            )
            return res
                .status(200)
                .send({ status: "Success", id: deleteUser[0].id })
        } catch (error) {
            next(error)
        }
    },
}
