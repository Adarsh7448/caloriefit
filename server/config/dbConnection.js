const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_LOCAL_URI)
        console.log("db connected successfully")
        console.log(`CONNECTION HOST: ${connect.connection.host}`)
        console.log(`CONNECTION NAME: ${connect.connection.name}`)
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR: ", error)
        process.exit(1)
    }    
}

module.exports = dbConnection;