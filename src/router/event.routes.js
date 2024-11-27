import { Router } from "express"
import { EventController } from "../controller/event.controller.js"
import { validateEvent } from "../middleware/event.middleware.js"

export const eventRouter = Router()

eventRouter.get("/getAll", EventController.getAll)
eventRouter.get("/getOne/:id", EventController.getOne)
eventRouter.post("/create", validateEvent, EventController.create)
eventRouter.put("/update/:id", validateEvent, EventController.update)
eventRouter.delete("/delete/:id", EventController.delete)
