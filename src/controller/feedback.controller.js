import { FeedBackService } from "../service/feedback.service.js"
import { logger } from "../utils/logger.js"

const responseHandler = (result, res) => {
    if (!result.success) {
        return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
}

export const FeedBackController = {
    create: async (req, res, next) => {
        try {
            const data = req.validatedData
            const result = await FeedBackService.create(data)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const page = req.query.page || 1
            const limit = req.query.limit || 10
            const result = await FeedBackService.getAll(page, limit)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await FeedBackService.getOne(id)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const id = req.params.id
            const data = req.validatedData
            const result = await FeedBackService.update(id, data)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await FeedBackService.delete(id)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
}
