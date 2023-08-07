require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleWare')
const fileUpload = require('express-fileupload')
const path = require('path')


const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.static(path.resolve(__dirname, 'static')))



app.use(errorHandler)


// app.get('/',(req, res) => {
//     res.status(200).json({message:'working?'})
// })



const start = async () =>{
    try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT,()=> console.log(`listening on port ${PORT} `))

    } catch (error) {
        console.log(error);
    }
}

start();

