var db = require('../utilities/database');

var getAll = function(req, res, next){
	db.database().any('select * from comite order by cod_comite')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna todos los comités de la facultad'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

var getSingle = function(req, res, next){
  var cod = parseInt(req.params.cod);
  db.database().one('select * from comite where cod_comite = $1', cod)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna todos los comités de la facultad'
        });
    })
    .catch(function (err) {
      return next(err);
    });


  db.database().any('select * from comite where ')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna todos los comités de la facultad'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle
};