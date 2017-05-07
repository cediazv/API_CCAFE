var db = require('../utilities/database');

var test = function(req, res, next){
	db.database().any('select * from test')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Test complete'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  ping: test
};