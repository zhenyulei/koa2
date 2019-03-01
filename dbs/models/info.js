const mongoose = require('mongoose')

let infoSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String
})

module.exports = mongoose.model('info',infoSchema)