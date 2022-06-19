const express = require("express")
const port = process.env.PORT || 5000 
const cors = require("cors")
const app = express()
const connectToMongo = require("./db")

connectToMongo()
app.use(express.json())
app.use(cors())
app.use("/", require("./routes/gmailRoutes"))

app.listen(port, () =>{
    console.log(`Connected at port ${port}`);
})