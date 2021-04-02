import express from 'express'
import ConnectDb from './config/db.js'
import userRoute from './routes/userRoute.js'

ConnectDb()

const app = express()

app.use(express.json())

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
    res.send('API IS RUNNING...')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))