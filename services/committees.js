var db = require('../utilities/database');

var getAll = function(req, res, next){
	db.database().any('select * from comites')
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