const mongoose = require('mongoose')

const TheaterSchema = new mongoose.Schema({
    id: String,
    thname: String,
    thseats: String,
    thtime: String,
    mname: String,

})

module.exports = mongoose.model('Theater', TheaterSchema)