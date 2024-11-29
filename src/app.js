import express from "express"
import morgan from "morgan"
import { authGuard } from "./middleware/index.js"
import {
    authRouter,
    categoryRouter,
    feedbackRouter,
    userRouter,
} from "./router/index.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/auth", authRouter)
app.use("/user", authGuard, userRouter)
app.use("/feedback", authGuard, feedbackRouter)
app.use("/category", authGuard, categoryRouter)

app.use((err, req, res, next) => {
    if (err) return res.send(err.messages)
    res.send("Not found")
})

export default app
