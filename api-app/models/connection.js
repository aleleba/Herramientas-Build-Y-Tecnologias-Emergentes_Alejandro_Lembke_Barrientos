'use strict'

var r = require('rethinkdb'),
	conf = require('./db-conf'),
	dbOptions = {
		host: conf.rethinkdb.host, 
		port: conf.rethinkdb.port,
		user: conf.rethinkdb.user,
		password: conf.rethinkdb.password,
		db: conf.rethinkdb.db
	},
	
	myConn = r.connect(dbOptions, (err) => {
		return (err) ? console.log(`Error al conectarse a rethinkdb: ${err.stack}`) : console.log(`Conexion establecida con rethinkdb`)
	})

module.exports = myConn

module.exports.close = function ( req, res, next ) {
    req.myConn.close();
};