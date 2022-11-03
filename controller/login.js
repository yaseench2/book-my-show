const User = require('../Model/Client')
const cookieToken = require('../cookieToken/CookieToken')

exports.loginpost = async (req, res) => {
    const { username, password } = req.body
    let user = await User.findOne({ username })
    if (username == 'admin' || password == 'admin') {
        return res.redirect('/admin')
    } else {

        if (!user) {
            return res.redirect('/login')
        }
        if (!user.password == password) {
            return res.redirect('/login')
        }
        cookieToken(user, res)
        res.render('loginpage')
    }
}


exports.logout = async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).redirect('/login')
}



exports.login = (req, res) => {
    return res.render('loginpage')
}
