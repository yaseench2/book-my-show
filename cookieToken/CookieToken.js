const cookieToken = async (user, res) => {
    const token = { user: user.username }
    console.log(token)
    // blank aanel login pagilek povaa allel main pagilek povaa
    let goto = user.username == '' ? '/login' : '/userhome'
    const options = {
        expires: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    return res.cookie('token', token).redirect(`${goto}`)
}

module.exports = cookieToken