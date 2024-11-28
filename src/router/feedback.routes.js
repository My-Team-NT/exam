import express from "express"
import { FeedBackController } from "../controller/index.js"
import { roleGuard, authGuard } from "../middleware/index.js"

export const feedbackRouter = express.Router()

feedbackRouter.get("/page", FeedBackController.getPage)
feedbackRouter.get("/filter", FeedBackController.getFilter)
feedbackRouter.get("/search", FeedBackController.getSearch)
feedbackRouter.get("/", FeedBackController.getAll)
feedbackRouter.get("/:id", FeedBackController.getById)
feedbackRouter.post("/",authGuard ,FeedBackController.createFeedBack,)
feedbackRouter.put("/:id",authGuard ,roleGuard("admin"),FeedBackController.updateFeedBack,)
feedbackRouter.delete("/:id",authGuard , roleGuard("admin"),FeedBackController.deleteFeedBack,)
