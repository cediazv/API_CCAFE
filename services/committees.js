var db = require('../utilities/database').database;

var getAll = function(req, res, next){
	db.any('select * from test')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL peoples'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAll: getAll
};