const Movie = require('../Model/Movie')
const Theater = require('../Model/Theater')

exports.uploadmovie = async (req, res) => {
    let { mname, mimage } = req.body
    let id = `${Date.now()}`
    await Movie.create({
        id: id,
        mname: mname,
        mimage: mimage,
    })
    res.redirect('/admin')
}
exports.adminviewmovie = async (req, res) => {
    let movies = await Movie.find()
    return res.render('adminviewmovies', { movies })
}

exports.adminviewtheater = async (req, res) => {
    let theater = await Theater.find()
    return res.render('adminviewtheaters', { theater })
}
exports.adminupdatetheater = async (req, res) => {
    let id = `${Date.now()}`
    let { thname, thtime, thseats, movie } = req.body
    await Theater.create({
        id: id,
        thname: thname,
        thseats: thseats,
        thtime: thtime,
        mname: movie,
    })
    res.redirect('/admin/adminviewtheater')
}