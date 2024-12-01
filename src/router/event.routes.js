import { Router } from "express"
import { EventController } from "../controller/event.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { eventValidator } from "../validator/event.validator.js";

export const eventRouter = Router()

eventRouter.get("/", EventController.getAll)
eventRouter.get("/:id", EventController.getOne)
eventRouter.post("", validateRequest( eventValidator ), EventController.create)
eventRouter.put("/:id", validateRequest( eventValidator ), EventController.update)
eventRouter.delete("/:id", EventController.delete)
