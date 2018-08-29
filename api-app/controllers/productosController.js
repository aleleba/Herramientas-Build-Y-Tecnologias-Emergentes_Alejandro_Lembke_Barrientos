'use strict'

var ProductosModel = require('../models/productos-model'),
	ProductosController = () => {}

ProductosController.getAll = (req, res, next) => {
	
	ProductosModel.getAll( (err, result) => {
		if(err) throw err
		//Enviando todos los Resultados
		res.send( result )
	})
}

ProductosController.insert = (req, res, next) => {
	
	let data = req.body.carrito,
		dataJson = JSON.parse(data)
	
	//Creando un callback para disparar función despues de pasar datos al Modelo
	let cb = () => {	
	}
	
	//pasando datos al Modelo
	ProductosModel.insert(dataJson, cb)
	
}

module.exports = ProductosController