var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/customer", function(req, res) {
    db.Example.findAll({}).then(function(dbExample) {
      res.render("customers", {
        example: dbExample
      });
    });
  });



  app.get("/profiles", function(req, res) {
    db.Sitters.findAll({}).then(function(dbSitters) {
      res.render("profiles", {
        sitters: dbSitters
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
