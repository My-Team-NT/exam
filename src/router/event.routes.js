import { Router } from "express"
import { EventController } from "../controller/event.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { eventValidator } from "../validator/event.validator.js";

export const eventRouter = Router()

eventRouter.get("/getAll", EventController.getAll)
eventRouter.get("/getOne/:id", EventController.getOne)
eventRouter.post("/create", validateRequest( eventValidator ), EventController.create)
eventRouter.put("/update/:id", validateRequest( eventValidator ), EventController.update)
eventRouter.delete("/delete/:id", EventController.delete)
