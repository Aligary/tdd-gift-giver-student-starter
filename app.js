const express = require("express")
const morgan = require("morgan")
const giftExchangeRouter = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", giftExchangeRouter)


app.get("/", async(req, res, next) => {
    res.status(200).json({"ping": "pong"})
})

//handle 404 errors
app.use((req, res, next) => {
    return next(new NotFoundError())
})

//Generic Error handler
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message

    return res.status(status).json({
        error: {message, status}
    })
})

module.exports = app