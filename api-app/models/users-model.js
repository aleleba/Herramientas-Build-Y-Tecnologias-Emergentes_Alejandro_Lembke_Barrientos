'use strict'

var r = require('rethinkdb'),
	conn = require('./connection'),
	UserModel = () => {}

UserModel.getAll = (cb) => {
	conn.then( (conn) => {
		r.table('Usuarios').run(conn, (err, cursor) => {
			if(err) throw err
			cursor.toArray(cb)
		})
	}).error( (error) => {
		console.log('Error de connexion a la base de datos')
	})
}

module.exports = UserModel