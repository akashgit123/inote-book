const mongoose = require('mongoose');

const connectToDb = async() =>{
    mongoose.connect('mongodb://127.0.0.1:27017/inote-book')
    .then(() => console.log('Connected!'));
}

module.exports = connectToDb;