import React from 'react';
import '../../../api-app/assets/css/carrito/carrito.component.css';

import FetchPago from '../ConexionApi/FetchPagarPromise';

import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

import Navbar from '../nav-bar/NavBar.jsx';

let Carrito = props => {
	
	//Obtener datos almacenados Res
	let conexionSession = sessionStorage.getItem("ResConexion");

	//String to JSON la conexion a la sessión
	let conexionSessionJson = JSON.parse(conexionSession);
	
	let CancelarCarrito = () => {
		
		//Creando el Carrito
		let carrito = conexionSessionJson.carrito
		carrito = []
		
		//Vaciando Productos de ThisDataJson
		Object.assign(conexionSessionJson,
			{
				"carrito": carrito
			}
		);

		//JSON to String Carrito
		let carritoString = JSON.stringify(conexionSessionJson)

		//Almacenar los datos del carrito en Sessión
		sessionStorage.setItem("ResConexion", carritoString);

	}
	
	if(conexionSession === null || conexionSessionJson.conexion === false){
			  
		return <Redirect to='/' />

	} else if(conexionSessionJson.conexion === true) {
		
		//Creando el Carrito
		let carrito = conexionSessionJson.carrito
		
		//console.log(carrito)
		
		//Subtotal para sacar Total
		let subtotal = carrito.map((item)=>{
			return item.precio * item.productoCant
		})
		//console.log(subtotal);
		
		//Sacando el Total
		var total = 0;
		
		for (var i = 0; i < subtotal.length; i++) {
		  total += subtotal[i]
		}
		
		//console.log(carrito);
		
		let PagarCarrito = () => {
			let CarritoStr = JSON.stringify(carrito)
			let serializeinfo = `carrito=${CarritoStr}`;
			let url = "http://localhost/api/productos";
			FetchPago(url, serializeinfo, this);
			
			CancelarCarrito()
			
		}
		
		return(
			<div id="carritoContainer">
				<Navbar />
				<div id="carritoSubContainer" className="container-fluid">
					<div className="row">
						<div className="col-12 col-sm-6">
							<h1 className="text-left">Carrito de Compras</h1>
						</div>
					</div>
					<div className="row">
						<div id="carritoProductoContainer" className="col-12 col-sm-6">
							{
								carrito.map((item)=>{
									
									//sacando los subtotales
									let subtotal = item.precio * item.productoCant 

									return(
										<div className="row" key={item.id}>
											<div className="col-12 col-sm-6">
												<img className="img-responsive col-12" src={`http://localhost/${item.imgUrl}`} alt={item.imgUrl}/>
												<p className="col-12"><strong>Subtotal:</strong> Q.{subtotal}</p>
											</div>
											<div className="col-12 col-sm-6">
												<h5 className="col-12">{item.producto}</h5>
												<p className="col-12"><strong>Unidades:</strong> {item.productoCant}</p>
											</div>
										</div>
									)
								})

							}
						</div>
						<div className="col-12 col-sm-6">
							<h2>Total: Q.{total}</h2>
							<div className="btn-group" role="group" aria-label="Basic example">
							  <NavLink exact to="/productos" onClick={CancelarCarrito}><button id="botonCancelar" type="button" className="btn btn-light">Cancelar</button></NavLink>
							  <NavLink exact to="/productos" onClick={PagarCarrito}><button id="botonPagar" type="button" className="btn btn-light">Pagar</button></NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}
}

export default Carrito;