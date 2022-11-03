exports.ifLoggedin = async (req, res, next) => {
    const token = req.cookies.token

    if (token) {
        return res.redirect('/userhome')
    }
    next()
}
exports.isadmin1 = async (req, res, next) => {
    let token = req.cookies.token
    let curuser = token.user
    if (!(curuser == 'admin')) {
        return res.redirect('/userhome')
    }
    next()
}
