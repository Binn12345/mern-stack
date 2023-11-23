const Workout = require('../models/workoutModels')


// get all data 
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({

    }).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get single data
const getWorkout = async (req, res) => {
    const {id} = req.params

    const workout = await Workout.findById(id) 

    if (!workout) {
        return res.status(404).json({error: 'No such workout'})
    } 

    res.status(200).json(workout)
}




// create data 
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        // execute when pass thru data wrong
        res.status(400).json({error: error.message})
    } 
}

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout
}