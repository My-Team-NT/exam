import express from "express"
import morgan from "morgan"
import { indexRouter } from "./router/index.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/v1", indexRouter)

app.use((err, req, res, next) => {
    if (err) return res.send(err.messages)
    res.send("Not found")
})


process.on("uncaughtException", (err) => {
    console.error("Kutilmagan xatolik:", err.message);
    process.exit(1)
});


process.on("unhandledRejection", (reason, promise) => {
    console.error("Promise bajarilmagan:", reason);
    process.exit(1)
});

export default app
