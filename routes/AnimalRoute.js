const express = require("express");
const router = express.Router();
const {getAnimals, getUser} = require("../controllers/AnimalController.js");

router.route('/animals').get(getAnimals);

router.route('/profile').get(getUser);

module.exports = router;
