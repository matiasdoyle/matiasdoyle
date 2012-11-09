var fs = require('fs'),
    md = require('markdown');

exports.index = function (req, res) {
  fs.readFile('./content/about.md', 'utf8', function (err, data) {
    var out = md.parse(data);

    res.render('index', {
      title : 'Matias Doyle',
      about : out
    });
  });
};