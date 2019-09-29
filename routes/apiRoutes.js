var db = require("../models");

module.exports = function(app) {
  app.get("/api/sitters", function(req, res) {
    db.Sitters.findAll({
      where: {
        dogs: 1
      }
    }).then(function(dbSitters) {
      res.json(dbSitters);
    });
  });

  // Delete an example by id
  app.delete("/api/sitters/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Sitters.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSitters) {
      res.json(dbSitters);
    });

  });
};