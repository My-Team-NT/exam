import express from "express"
import morgan from "morgan"
import { authGuard } from "./middleware/index.js"
import {
    authRouter,
    categoryRouter,
    feedbackRouter,
    userRouter,
    addressRouter,
    cartRouter,
    cartItemRouter,
    eventRouter,
    orderRouter,
    paymentRouter,
    promocodeRouter,
    ticketRouter,
    wishlistRouter,
} from "./router/index.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/auth", authRouter)
app.use("/user", authGuard, userRouter)
app.use("/address", authGuard, addressRouter)
app.use("/cart", authGuard, cartRouter)
app.use("/cartItem", authGuard, cartItemRouter)
app.use("/feedback", authGuard, feedbackRouter)
app.use("/category", authGuard, categoryRouter)
app.use("/event", authGuard, eventRouter)
app.use("/order", authGuard, orderRouter)
app.use("/payment", authGuard, paymentRouter)
app.use("/promocode", authGuard, promocodeRouter)
app.use("/ticket", authGuard, ticketRouter)
app.use("/wishlist", authGuard, wishlistRouter)

app.use((err, req, res, next) => {
    if (err) return res.send(err.messages)
    res.send("Not found")
})

export default app
