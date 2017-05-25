var promise = require('bluebird');
var fs = require('fs');
var string = require('util');

var options = {
  // Initialization Options
  promiseLib: promise
};

var connectionString = 'postgres://';

fs.readFile('dbConfig.txt', 'utf8', function(err, data) {
	if (err) return next(err);

	var sp = data.split(',');

	data = {
	        username: sp[0],
	        password: sp[1],
	        host: sp[2],
	        port: sp[3],
	        database: sp[4]
	      };
	
	connectionString = string.format('postgres://%s:%s@%s:%s/%s', data.username, data.password, data.host, data.port, data.database);
});

var pgp = require('pg-promise')(options);

module.exports = {
	database: function(){
		var client = new require("pg").Client(connectionString);
		client.connect();
		return client;
	}
}