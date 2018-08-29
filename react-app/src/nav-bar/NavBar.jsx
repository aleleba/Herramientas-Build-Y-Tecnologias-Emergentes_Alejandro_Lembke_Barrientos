import React, { Component } from 'react';
import '../../../api-app/assets/css/nav-bar/nav-bar.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	
	constructor(props){
		
		super(props)
		
		/*this.state = {
			totalCantidadProductos: 0
		}*/
		
		this.OnLogOut = this.OnLogOut.bind(this);
	}
	
	componentDidMount() {
	  
  	}
	
	OnLogOut() {

		//Obtener datos almacenados Res
		let conexionSession = sessionStorage.getItem("ResConexion");

		//String to JSON la conexion a la sessión
		let conexionSessionJson = JSON.parse(conexionSession);

		//Convertir la conexion a false
		conexionSessionJson = { conexion: false };

		//Convertir JSON de LogOut a String
		let conexionLogOutString = JSON.stringify(conexionSessionJson);

		//Almacenar los datos LogOut
		sessionStorage.setItem("ResConexion", conexionLogOutString);

	}
	
	render(){
		
		return(
				<nav className="navbar navbar-expand-md navbar-light bg-light">
				  <a className="navbar-brand" href="">La Bodega</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse justify-content-center justify-content-md-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
					  <NavLink exact to="/productos" activeClassName="active" className="nav-item nav-link text-center text-md-right"><FontAwesomeIcon icon="th" /></NavLink>
					  <NavLink exact to="/carrito" activeClassName="active" className="nav-item nav-link text-center text-md-right"><FontAwesomeIcon icon="shopping-cart" />
					  	<div id="infoCarrito">
					  		<p id="CantTxt"></p>
					  	</div>
					  </NavLink>
					  <a className="nav-item nav-link text-center text-md-right" href=""><FontAwesomeIcon icon="inbox" /></a>
					  <NavLink onClick={this.OnLogOut} exact to="/" activeClassName="active" className="nav-item nav-link text-center text-md-right"><FontAwesomeIcon icon="sign-out-alt" /></NavLink>
					</div>
				  </div>
				</nav>
			)
	}
	
}

export default Navbar;