import React from 'react';
import '../../../api-app/assets/css/productos/productos.component.css';

import { Redirect } from 'react-router';

import Navbar from '../nav-bar/NavBar.jsx';
import Catalogo from '../catalogo/Catalogo.jsx';

let Productos = props => {
	
	//Obtener datos almacenados Res
	let conexionSession = sessionStorage.getItem("ResConexion");

	//String to JSON la conexion a la sessión
	let conexionSessionJson = JSON.parse(conexionSession);
	
	if(conexionSession === null || conexionSessionJson.conexion === false){
			  
		return <Redirect to='/' />

	} else if(conexionSessionJson.conexion === true) {
			  
		return(
			<div id="productosContainer">
				<Navbar />
				<Catalogo />
			</div>
		)

	}
	
}

export default Productos;