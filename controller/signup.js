const User = require('../Model/Client')

exports.signuppush = async (req, res) => {
    let { username, password, email } = req.body
    let id = `${Date.now()}`
    await User.create({
        id: id,
        username: username,
        password: password,
        email: email,
    })
    res.redirect('/login')
}
exports.signup = (req, res) => {
    return res.render('signuppage')
}