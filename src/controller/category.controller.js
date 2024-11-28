import { CategoryService } from "../service/index.js"
import { categoryValidation } from "../validator/index.js"
export const CategoryController = {
    getAll: async (req, res, next) => {
        try {
            const AllData = await CategoryService.getAll()
            return res.status(200).send({ status: "Success", data: AllData })
        } catch (error) {
            next(error)
        }
    },
    getById: async (req, res, next) => {
        try {
            const Category = await CategoryService.getById(req.params.id)
            if (!Category) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: Category })
        } catch (error) {
            next(error)
        }
    },
    getPage: async (req, res, next) => {
        try {
            const { page, limit } = req.query
            const skip = (page - 1) * limit
            const Category = await CategoryService.getPage(skip, limit)
            if (!Category) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: Category })
        } catch (error) {
            next(error)
        }
    },
    getFilter: async (req, res, next) => {
        try {
            const key = String(Object.keys(req.query)[0])
            const Category = await CategoryService.getFilter(
                key,
                req.query[key],
            )
            if (!Category) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: Category })
        } catch (error) {
            next(error)
        }
    },
    getSearch: async (req, res, next) => {
        try {
            const search = req.query.name || ""
            const Category = await CategoryService.getSearch(search)
            if (!Category) {
                return res.status(404).send("Malumot Topilmadi")
            }
            return res.status(200).send({ status: "Success", data: Category })
        } catch (error) {
            next(error)
        }
    },
    createCategory: async (req, res, next) => {
        try {
            const { error } = categoryValidation(req.body)
            if (error) {
                return res.status(400).send("Malumotlarni Togri kiriting")
            }
            const Category = await CategoryService.createCategory(req.body)
            return res.status(201).send({ status: "Created"})
        } catch (error) {
            next(error)
        }
    },
    updateCategory: async (req, res, next) => {
        try {
            const Category = await CategoryService.getById(req.params.id)
            if (!Category) {
                return res.status(404).send("Malumot Topilmadi")
            }
            const newDate = { ...Category[0], ...req.body }
            const newCategory = await CategoryService.updateCategory(
                req.params.id,
                newDate,
            )
            return res
                .status(200)
                .send({ status: "Success", id: newCategory[0].id })
        } catch (error) {
            next(error)
        }
    },
    deleteCategory: async (req, res, next) => {
        try {
            const Category = await CategoryService.getById(req.params.id)
            if (!Category) {
                return res.status(404).send("Malumot Topilmadi")
            }
            const deleteUser = await CategoryService.deleteCategory(
                req.params.id,
            )
            return res
                .status(200)
                .send({ status: "Success", id: deleteUser[0].id })
        } catch (error) {
            next(error)
        }
    },
}
