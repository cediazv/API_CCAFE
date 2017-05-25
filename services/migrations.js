var db = require('../utilities/database');
var fs = require('fs');

var dropScript = function(req, res, next){
  fs.readFile('scripts/drop.sql', 'utf8', function(err, data_sql) {
    if (err) return next(err);

    db.database().tx(t => {
        var queries = [
            t.none(data_sql)
        ];
        return t.batch(queries);
    })


    //result(data_sql)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Eliminó toda la estructura'
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