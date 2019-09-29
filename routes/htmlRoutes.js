var path = require("path");
module.exports = function(app) {
 // Load index page
 // Each of the below routes just handles the HTML page that the user gets sent to.
 // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
