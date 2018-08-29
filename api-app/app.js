'use stric'

var express = require('express'),
	controllers = require('./controllers/index'),
	bodyParser = require('body-parser'),
	restFul = require('express-method-override')('_method'),
	publicAssets = express.static(`${__dirname}/assets`),
	port = (process.env.PORT || 80),
	app = express()
	
app
	//configurando app
	.set('port', port)
	.use(restFul)
	//parse application/json
	.use( bodyParser.json() )
	//parse application/x-www-form-urlencoded
	.use( bodyParser.urlencoded({extended: false}) )
	.use('/', express.static(`${__dirname}/public`))
	.use('/assets', publicAssets)
	.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	})
	.get('/api/productos', controllers.productosController.getAll )
	.get('/api/users', controllers.UsersController.getAll )
	.post('/api/users', controllers.UsersController.logIn)
	.post('/api/productos', controllers.productosController.insert)

module.exports = app