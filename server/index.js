require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const app = express()
const port = process.env.PORT
const dbstring = process.env.DATABASE_URL

app.use(cors())
app.use(express.json())

app.use("/admin", adminRouter)
app.use("/user", userRouter)

mongoose
  .connect(dbstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "CourseSellingApp",
  })
  .then(() => {
    console.log("MongoDB connected successfully")
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
  })
