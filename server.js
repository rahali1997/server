const  express =require('express')
const  ConnectDb =require('./config/db.js')

const userRoute = require('./routes/userRoute.js')

ConnectDb()

const app = express()

app.use(express.json())

app.use('/api', userRoute)


const PORT =  5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
