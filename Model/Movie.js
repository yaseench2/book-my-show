const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    id: String,
    mname: String,
    mimage: String,
    admin: String
})

module.exports = mongoose.model('Movie', MovieSchema)