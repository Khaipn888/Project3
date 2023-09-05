import express  from "express";
require('dotenv').config()
import cors from 'cors'
const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({extend: true}))
app.use('/', (req, res) => {res.send('server on ....')})

const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`server is running on port ${listener.address().port}`)
})

