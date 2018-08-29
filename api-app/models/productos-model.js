'use strict'

var r = require('rethinkdb'),
	conn = require('./connection'),
	ProductosModel = () => {}

ProductosModel.getAll = (cb) => {
	conn.then( (conn) => {
		r.table('Productos').orderBy({index: r.asc('id')}).run(conn, (err, cursor) => {
			if(err) throw err
			cursor.toArray(cb)
		})
	}).error( (error) => {
		console.log('Error de connexion a la base de datos')
	})
}

ProductosModel.insert = (data,cb) => {
	
	conn.then( (conn) => {
		
		data.map((item)=>{
			let nuevoUnidadesDisponibles = item.unidadesDisponibles - item.productoCant;
		
			r.table('Productos').get(item.id).update({unidadesDisponibles: nuevoUnidadesDisponibles}).run(conn);
			//console.log(`las nuevas Unididades disponibles son: ${nuevoUnidadesDisponibles}`);
		});
		//.update({unidadesDisponibles: 50}) //Para REthinkDB
	}).error( (error) => {
		console.log('Error de connexion a la base de datos')
	})
}

module.exports = ProductosModel