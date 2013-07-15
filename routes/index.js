var fs = require('fs');
var md = require('markdown');
var ejs = require('ejs');
var view = (process.env.NODE_ENV === 'production' ?
  './views/production.ejs' : './views/development.ejs');
var rendered;

fs.readFile('./content/about.md', 'utf8', function (err, data) {
  var about = md.parse(data);
  ejs.renderFile(view, {
    title: "Matias Doyle",
    about: about
  }, function(err, str) {
    if (err) throw err;
    rendered = str;
  });
});

exports.index = function (req, res) {
  res.send(rendered);
};
