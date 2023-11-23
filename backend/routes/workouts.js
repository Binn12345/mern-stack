const express = require('express')

const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// router.get('/', (req , res) => {
//     res.json({mssg: 'Process all workouts'})
// })

router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', updateWorkout)

// router.get('/hello', () =>{})

//GET A SINGLE WORKOUT

// router.get('/:id', (req, res) => {
//     res.json({mssg: 'Process single workouts'})
// })

// POST A NEW WORKOUT

// // DELETE WORKOUT
// router.delete('/:id', (req , res) => {
//     res.json({mssg: 'Delete a workouts'})
// })

// // UPDATE WORKOUT 
// router.patch('/:id', (req , res) => {
//     res.json({mssg: 'Update workouts'})
// })

module.exports = router 


// POST A NEW WORKOUT
// router.post('/', async (req , res) => {

//     const {title, load, reps} = req.body
//     try {
//         const workout = await Workout.create({title, load, reps})
//         res.status(200).json(workout)
//     } catch (error) {
//         // execute when pass thru data wrong
//         res.status(400).json({error: error.message})
//     }
//     // res.json({mssg: 'Process new workouts'})
// })