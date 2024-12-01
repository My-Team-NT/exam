import { Router } from "express"
import { TicketController } from "../controller/ticket.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { ticketValidator } from "../validator/ticket.validator.js"

export const ticketRouter = Router()

ticketRouter.get("/getAll", TicketController.getAll)
ticketRouter.get("/getOne/:id", TicketController.getOne)
ticketRouter.post("/create", validateRequest(ticketValidator), TicketController.create)
ticketRouter.put("/update/:id", validateRequest(ticketValidator), TicketController.update)
ticketRouter.delete("/delete/:id", TicketController.delete)
