var db = require('../utilities/database');

var getAll = function(req, res, next){
	db.database().any('select cod_comite, nombre_comite, icono_comite, url_comite, banner_comite from comite order by cod_comite')
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
  db.database().one('select cod_comite, nombre_comite, to_char(f_creacion_comite, \'DD/MM/YYYY\') as f_creacion_comite, banner_comite from comite where cod_comite = $1', cod)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna los datos de un comité de la facultad'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

var getIndexContent = function(req, res, next){
  var cod = parseInt(req.params.cod);
  db.database().one('select contenido_comite, url_comite from comite where cod_comite = $1', cod)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna el contenido de la página inicial de un comité de la facultad'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  getIndexContent: getIndexContent
};