var db = require('../utilities/database');
var fs = require('fs');

var dropScript = function(req, res, next){

  fs.readFile('scripts/drop.sql', 'utf8', function(err, data_sql) {
    if (err) return next(err);

    var sqls = data_sql.split('\n');

    db.database().tx(t => {
        var queries = [];
        sqls.forEach(function(s){
          queries.push(t.none(s));
        });
        return t.batch(queries);
    })
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Eliminó toda la estructura: ' + sqls.join('--')
        });
    })
    .catch(function (err) {
      return next(err);
    });
  });
  
    /*db.database().tx(t => {
        var queries = ['DROP TABLE integrante_comite;'];
        //sqls.forEach(function(s){
          //queries.push(t.none(s));
        //});
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
    });*/
}

module.exports = {
  drop: dropScript
};