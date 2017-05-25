var db = require('../utilities/database');
var fs = require('fs');
var path = require('path');

// Helper for linking to external query files:
function sql(file) {
    return new db.database().QueryFile(file, {minify: true});
}

var sqlDrop = sql('scripts/drop.sql');

var dropScript = function(req, res, next){

  db.none(sqlDrop)
    .then(data=> {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Eliminó toda la estructura'
        });
    })
    .catch(error=> {
        return next(err);
    });
}

module.exports = {
  drop: dropScript
};