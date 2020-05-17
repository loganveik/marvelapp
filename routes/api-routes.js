const db = require('../models');

module.exports = function (app) {

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

}

