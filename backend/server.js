require('dotenv').config() 

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// express app
const app = express()

// MIDDLEWARE
app.use(express.json()) 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// app.get('/', (req, res) => {
//     res.json({mssg: 'Processing . . . .  . .'})
// })

// app.post('/', (req, res) => {
//     res.json({mssg: 'Processing . . . .  . .'})
// })

// ROUTES
app.use('/api/workouts', workoutRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log('Connected to db && listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })



// LISTEN FOR REQUEST
// app.listen(4000, () => {
//     console.log('listening on port 4000')
// })