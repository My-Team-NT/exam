import { getByIdUserService } from "../service/users.service.js";
export const cheacAdmin = async (req,res, next) => {
    const currenUser = await getByIdUserService(req.params.id)
    if (currenUser.role == "superAdmin") {
        return res.status(403).send("Access Deny")
    }
    next()
}