var db = require('../utilities/database');

var getMenu = function(req, res, next){
  var cod = parseInt(req.params.cod);
  db.database().any('select cod_menu, nombre_menu, url_menu from menu_comite where cod_comite = $1 order by cod_menu', cod)
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
  getMenu: getMenu
};