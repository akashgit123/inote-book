const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.MONGODB_URI;

const connectToDb = async() =>{
    mongoose.connect(dbUri)
    .then(() => console.log('Connected!'));
}

module.exports = connectToDb;