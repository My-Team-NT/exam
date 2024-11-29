import { Router } from "express"
import { TicketController } from "../controller/ticket.controller.js"
import { validateTicket } from "../middleware/ticket.middleware.js"

export const ticketRouter = Router()

ticketRouter.get("/getAll", TicketController.getAll)
ticketRouter.get("/getOne/:id", TicketController.getOne)
ticketRouter.post("/create", validateTicket, TicketController.create)
ticketRouter.put("/update/:id", validateTicket, TicketController.update)
ticketRouter.delete("/delete/:id", TicketController.delete)
