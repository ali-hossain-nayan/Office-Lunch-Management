import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import EmployeeRouter from './routes/employeeRoute.js'
import 'dotenv/config'


//pass: 01690205129

// username: AliNayan123
// mongodb+srv://AliNayan123:01690205129@cluster0.jgvumox.mongodb.net/?

//app config

const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//database connection
connectDB()

//api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', EmployeeRouter)


app.get('/', (req, res) => {
    res.send('API is Working..')
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})