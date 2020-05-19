const db = require('../models');
const passport = require("../config/passport");

module.exports = function (app) {

  // review model routes
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
      res.json(response);
    })
  });

  app.delete("/api/delete/:id", function (req, res) {
    db.Character.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (response) {
        res.json(response);
      });
  });

  app.delete("/api/deleteall", function (req, res) {
    db.Character.destroy({
      where: {}
    })
      .then(function (response) {
        res.json(response);
      });
  });

  // user routes
  app.post("/api/register", function (req, res) {
    console.log(res);
    db.User.create({
      firstname: req.body.firstname,
      username: req.body.username,
      password: req.body.password
    }).then(function (response) {
      res.json(response);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function (req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
}

