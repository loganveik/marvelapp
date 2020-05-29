// dependencies
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./models');

// passport and sessions code
const session = require("express-session");
const passport = require("./config/passport");
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// using express 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// requiring routes for backend api routes 
require("./routes/api-routes")(app);
require("./routes/handlebars-routes")(app);

// Sequelize sync and run server
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
