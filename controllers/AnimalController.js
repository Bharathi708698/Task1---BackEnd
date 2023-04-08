const Animal = require('../models/animalModel.js');
const User = require("../models/userModel.js");

exports.getAnimals = async (req, res, next) => {
    const animals = await Animal.find();
    console.log(animals);

    res.status(200).json({
        success: true,
        animals
    })
};

exports.getUser = async (req, res, next) => {
    const user = await User.find();
    console.log(user);

    res.status(200).json({
        success: true,
        user
    })
};