// Database configurations

const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async () =>{
    try{
        mongoose.set("strictQuery", false);
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to the DB ,(${connect.connection.id})`)
    }catch(err){
        console.log(`DB Error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB
