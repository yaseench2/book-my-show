const mongoose = require('mongoose')

const SeatSchema = new mongoose.Schema({
    id: String,
    seatsbooked: Array,
    thname: String,
    username: String,
    mname: String,
    thtime: String,

})

module.exports = mongoose.model('Seat', SeatSchema)