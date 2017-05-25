var db = require('../utilities/database');
var fs = require('fs');
var dropScript = function(req, res, next){

  fs.readFile('scripts/drop.sql', 'utf8', function(err, data_sql) {
    if (err) return next(err);

    var sqls = data_sql.split('\n');
    var c = 0;
    sqls.forEach(function(s){
      db.database().none(s)
      .then(data=> {
        c++;
        if (c==sqls.length){
          res.status(200)
            .json({
              status: 'success',
              data: data,
              message: 'Eliminó toda la estructura'
            });
        }
      })
      .catch(error=> {
          return next(error);
      });
    });
});
}

module.exports = {
  drop: dropScript
};