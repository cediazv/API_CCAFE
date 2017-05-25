var db = require('../utilities/database');
var fs = require('fs');

var dropScript = function(req, res, next){
  var sqls = [];
  var lineReader = require('readline').createInterface({
    input: fs.createReadStream('scripts/drop.sql')
  });
  lineReader.on('line', function (line) {
    sqls.push(line);
  });
  lineReader.on('end', function (line) {
    db.database().tx(t => {
        var queries = ['DROP TABLE integrante_comite;'];
        /*sqls.forEach(function(s){
          queries.push(t.none(s));
        });*/
        return t.batch(queries);
    })
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Eliminó toda la estructura: ' + sqls.join('[]')
        });
    })
    .catch(function (err) {
      return next(err);
    });
  });
}

module.exports = {
  drop: dropScript
};