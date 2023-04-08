//const animal= require("../data/animals.json");
const user = require("../data/user.json")
//const Animal= require('../models/animalModel.js');
const User = require("../models/userModel.js");
const connectDatabase = require('../database.js')


connectDatabase();

const seedProducts = async ()=>{
    try{
        await User.deleteMany();
        console.log('Animals data deleted!')
        await User.insertMany(user);
        console.log('Animals data added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();