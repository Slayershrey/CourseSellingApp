const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")
require("dotenv").config()

const app = express()
const port = process.env.PORT
const dbstring = process.env.DATABASE_URL

app.use(cors())
app.use(express.json())

app.use("/admin", adminRouter)
app.use("/user", userRouter)

mongoose.connect(dbstring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "CourseSellingApp",
})

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${port}`)
)
