const mongoose = require('mongoose')

const Schema = mongoose.Schema

// passing object
// 1st agru. ..  
const workoutSchema = new Schema({
    // properpty
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    load : {
        type : Number,
        required : true
    }
}, { timestamps: true })


// model
module.exports = mongoose.model('Workout', workoutSchema)




// Workout.find() 