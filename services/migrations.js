var db = require('../utilities/database');
var fs = require('fs');
var path = require('path');

function sql(file) {
    var fullPath = path.join(__dirname, file);
    return new db.pgp.QueryFile(fullPath, {minify: true});
}

var sqlDrop = sql('../scripts/drop.sql');
var sqlCreate = sql('../scripts/tablas.sql');
var sqlInserts = sql('../scripts/inserts.sql');

var dropScript = function(req, res, next){
    db.database().none(sqlDrop)
    .then(data=> {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Eliminó toda la estructura'
          });
    })
    .catch(error=> {
        return next(error);
    });
}

var createScript = function(req, res, next){
    db.database().none(sqlCreate)
    .then(data=> {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Creó toda la estructura'
          });
    })
    .catch(error=> {
        return next(error);
    });
}

var insertScript = function(req, res, next){
    db.database().none(sqlInserts)
    .then(data=> {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Insertó todos los datos'
          });
    })
    .catch(error=> {
        return next(error);
    });
}

module.exports = {
  drop: dropScript,
  create: createScript,
  insert: insertScript
};