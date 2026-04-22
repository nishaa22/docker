import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://db:27017/docker"

app.get("/", (req, res) => {
    res.send("Hello Docker")
})


const connectDB = async () => {
    while (true) {
        try {
            await mongoose.connect(MONGO_URI)
            console.log("MongoDB Connected ✅")
            return
        } catch (error) {
            console.error("MongoDB Connection Error ❌", error.message)
        }
    }
}

const startServer = async () => {
    await connectDB()

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })
}

startServer()
