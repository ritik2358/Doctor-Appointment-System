const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const CORS = require('CORS')

//dotenv config
dotenv.config();

//mongodb connection
connectDB()

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use("/api/v1/user", require("./routes/userRoutes"))
// app.get('/', (req, res) => {
//     res.status(200).send({ message: "server running", })
// })
//port
const port = process.env.PORT || 8080
//listen port
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white)
})