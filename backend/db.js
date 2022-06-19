const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://admin:gmail_clone@cluster0.5eh4h.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, () =>{
        console.log("Connected to Mongo..");
    })
}

module.exports = connectToMongo