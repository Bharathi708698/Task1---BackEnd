const express = require('express');
const app = express();
const cors = require("cors");


const connectDatabase = require('./database.js');
const animals = require("./routes/AnimalRoute.js");

app.use(express.json());
app.use(cors());

connectDatabase();


app.use("/api", animals);



app.listen(5000, () => {
    console.log('server is running on port 5000');
})