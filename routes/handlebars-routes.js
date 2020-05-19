const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get('/', (req, res) => {
        if (req.user) {
            res.redirect("/profile");
        }
        res.render('home')
    });
    app.get('/profile', isAuthenticated, (req, res) => res.render('profile'));
    app.get('/search/character', isAuthenticated, (req, res) => res.render('character'));
    app.get('/search/comicbook', isAuthenticated, (req, res) => res.render('comicbook'));
    app.get('/write/review', isAuthenticated, (req, res) => res.render('writereview'));
    app.get('/view/review', isAuthenticated, (req, res) => res.render('myreviews'));
};
