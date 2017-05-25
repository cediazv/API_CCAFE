var promise = require('bluebird');
var fs = require('fs');
var string = require('util');

var options = {
  // Initialization Options
  promiseLib: promise
};

var connectionString = 'postgres://';
var connectionStringClient = 'pg://';

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
	connectionStringClient = string.format('pg://%s:%s@%s:%s/%s', data.username, data.password, data.host, data.port, data.database);
});

var pgp = require('pg-promise')(options);
var pg = require("pg");

module.exports = {
	database: function(){
		return pgp(connectionString);
	},
	databaseClient: function(){
		var client = new pg.Client(conString);
		return client;
	}
}