'use strict'

var UserModel = require('../models/users-model'),
	bcrypt = require('bcryptjs'),
	UsersController = () => {}

UsersController.getAll = (req, res, next) => {
	
	UserModel.getAll( (err, result) => {
		
		if(err) throw err
		
		res.send( result )
		
	})
}


UsersController.logIn = (req, res, next) => {
	
	UserModel.getAll( (err, result) => {
		
		if(err) throw err
		
		let resultString = JSON.stringify(result, null, 2).replace(/[\[\]]$/g,'').replace(/^[\[\]]/g,''),
			resultJson = JSON.parse(resultString),
			resultPass = bcrypt.compareSync(req.body.password, resultJson.password);
		
		//console.log(req.body.email, req.body.password)
		
		if((resultPass == true) && (req.body.email == resultJson.correo)){
			res.send({
				id: resultJson.id,
				email: resultJson.correo,
				carrito: resultJson.carrito,
				conexion: resultPass
			})
			/*res.send({
				conexion: resultPass
			})*/
		}else{
			res.send({
				conexion: false
			})
		}
		
	})
	
}

module.exports = UsersController