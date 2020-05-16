const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./models');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require("./routes/api-routes")(app);
require("./routes/handlebars-routes")(app);

// Sequelize sync and run server
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
