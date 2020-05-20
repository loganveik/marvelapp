// This is middleware for restricting routes a user is not allowed to visit if logged in
module.exports = function (req, res, next) {
    // basically, if user is signed in, they cant just enter the '/' and go back to home. they HAVE to log out to get back to the '/' route that way they are succsessfully logged out.
    if (req.user) {
        return res.redirect('/profile');
    }
    next()
};