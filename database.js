const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb+srv://Bharathi_M:Murugesan@cluster0.clfwhvo.mongodb.net/task1?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(con=>{
    console.log(`MongoDB is connected to the host: ${con.connection.host} `)
})
}

module.exports = connectDatabase;