require("dotenv").config()
const mongoose = require("mongoose")

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5eh4h.mongodb.net/?retryWrites=true&w=majority`

const connectToMongo = () =>{
    mongoose.connect(mongoURI, () =>{
        console.log("Connected to Mongo..");
    })
}

module.exports = connectToMongo