var promise = require('bluebird');
var fs = require('fs');
var string = require('util');

var options = {
  // Initialization Options
  promiseLib: promise
};

var optionsSql ={
  user: '', //env var: PGUSER 
  database: '', //env var: PGDATABASE 
  password: '', //env var: PGPASSWORD 
  host: '', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000
}

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
	optionsSql.user = data.username;
	optionsSql.database = data.database;
	optionsSql.password = data.password;
	optionsSql.host = data.host;
	optionsSql.port = data.port;
});

var pgp = require('pg-promise')(options);
var pg = require("pg");

module.exports = {
	database: function(){
		return pgp(connectionString);
	},
	databaseClient: function(){
		var client = new pg.Pool(optionsSql);
		return client;
	}
}