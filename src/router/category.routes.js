import express from "express"
import { CategoryController } from "../controller/index.js"
import { roleGuard } from "../middleware/index.js"

export const categoryRouter = express.Router()

categoryRouter.get("/page", CategoryController.getPage)
categoryRouter.get("/filter", CategoryController.getFilter)
categoryRouter.get("/search", CategoryController.getSearch)
categoryRouter.get("/", CategoryController.getAll)
categoryRouter.get("/:id", CategoryController.getById)
categoryRouter.post("/", roleGuard("admin"), CategoryController.createCategory)
categoryRouter.put(
    "/:id",
    roleGuard("admin"),
    CategoryController.updateCategory,
)
categoryRouter.delete(
    "/:id",
    roleGuard("admin"),
    CategoryController.deleteCategory,
)
