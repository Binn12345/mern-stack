const Workout  = require('../models/workoutModels')
const mongoose = require('mongoose')


// GET ALL DATA
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({

    }).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// GET SINGLE DATA
const getWorkout = async (req, res) => {
    const {id} = req.params

    // check if they exist
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }


    const workout = await Workout.findById(id) 

    if (!workout) {
        return res.status(404).json({error: 'No such workout'})
    } 

    res.status(200).json(workout)
}


// DELETE SINGLE DATA 
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    // check if they exist
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id : id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


// UPDATE SINGLE DATA
const updateWorkout = async (req, res) => {
    const {id} = req.params

    // check if they exist
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!workout){
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
    createWorkout,
    deleteWorkout,
    updateWorkout

}