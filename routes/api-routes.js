// Require NPM packages

// const results = require('../personalities/personality');
// const charImgName = require('../public/js/writereview');
const db = require('../models');
// const bcrypt = require('bcryptjs');

// Render 'Home' handlebars template at root
// module.exports = function(app) {
// app.get('/', (req, res) => res.render('profile'));    
// }

module.exports = function (app) {
  // POST route for saving a new todo. We can create todo with the data in req.body
  app.get("/api/all", function (req, res) {
    db.Character.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  app.post("/api/create", function (req, res) {
    db.Character.create({
      name: req.body.name,
      imgurl: req.body.imgurl,
      review: req.body.review
    }).then(function (response) {
      console.log(response);
      res.json(response);
    })
  });

}
// module.exports = router;