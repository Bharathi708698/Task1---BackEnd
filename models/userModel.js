const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    studentId : {
        type: String,
    },
    login : {
        type: String,
    },
    program : {
        type: String,
    },
    country : {
        type: String,
    },
})

let schema = mongoose.model('User', userSchema)

module.exports = schema;