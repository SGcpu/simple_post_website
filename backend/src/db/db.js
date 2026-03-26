require("dotenv").config();
const mongoose = require('mongoose')

async function ConnectDB() {
    await mongoose.connect(process.env.DATABASE_URL)

    console.log("Connected to DB")
}

module.exports = ConnectDB;