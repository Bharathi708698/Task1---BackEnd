const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    id : {
        type: String,
    },
    name : {
        type: String,
    },
    species : {
        type: String,
    },
})

let schema = mongoose.model('Animal', animalSchema)

module.exports = schema;