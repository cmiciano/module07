// M4 Lecture 7: Create basic APIs with Node and Express
// loading static content

import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import {} from './db/connect.js' // M6 lecture 2 method 1 mongoose
import connectDB from './db/connect.js'   // M6 lecture 2 method 2 mongoose
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

// LOAD STATIC FILES
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
    res.sendFile('/public/index.html', {root : __dirname })
})

// LOAD ROUTES INTO OUR MAIN FILE
// if /api/v1/employees/ route is detected


//put bodyparser before the route middleware calls
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //without this middleware, wouldn't be able to decipher data being sent to node from an application
app.use('/', routes)


app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

const PORT = process.env.PORT || 8000
//app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)) // M6 lecture 2 method 1 mongoose

// M6 lecture 2 method 2 mongoose async await, makes it more flexible to whatever the connection string is
const init = async() => {
    try {
        connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

init()





