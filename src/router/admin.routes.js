import { Router } from "express"
import { AdminController } from "../controller/admins.controller.js"
import { validateRequest } from "../middleware/validate.middleware.js"
import { cheackMiddleware, roleGuard, cheacAdmin } from "../middleware/index.js"
import { adminValidation } from "../validator/admin.validator.js"

export const adminRouter = Router()

adminRouter.get("/", roleGuard("superAdmin", 'admin'), AdminController.getAll)
adminRouter.get("/:id", roleGuard("superAdmin", 'admin'), AdminController.getOne)
adminRouter.post("/", roleGuard("superAdmin", 'admin'), validateRequest(adminValidation), AdminController.create)
adminRouter.put("/:id", roleGuard("superAdmin","admin"), cheacAdmin, AdminController.update)
adminRouter.delete("/:id", roleGuard("superAdmin"), AdminController.delete)
