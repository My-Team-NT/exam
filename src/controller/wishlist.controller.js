import { WishlistService } from "../service/wishlist.service.js"
import { logger } from "../utils/logger.js"

const responseHandler = (result, res) => {
    if (!result.success) {
        return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
}

export const WishlistController = {
    create: async (req, res, next) => {
        try {
            const data = req.validatedWishlist
            const result = await WishlistService.create(data)
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
            const result = await WishlistService.getAll(page, limit)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await WishlistService.getOne(id)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const id = req.params.id
            const data = req.validatedWishlist
            const result = await WishlistService.update(id, data)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await WishlistService.delete(id)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
}
