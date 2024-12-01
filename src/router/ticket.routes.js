import { Router } from "express"
import { TicketController } from "../controller/ticket.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { ticketValidator } from "../validator/ticket.validator.js"

export const ticketRouter = Router()

ticketRouter.get("/", TicketController.getAll)
ticketRouter.get("/:id", TicketController.getOne)
ticketRouter.post("", validateRequest(ticketValidator), TicketController.create)
ticketRouter.put("/:id", validateRequest(ticketValidator), TicketController.update)
ticketRouter.delete("/:id", TicketController.delete)
