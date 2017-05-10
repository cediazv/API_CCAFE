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

module.exports = {
  getAll: getAll
};