import React, { Component } from 'react';
import '../../../api-app/assets/css/log-in/log-in.component.css';

import { Redirect } from 'react-router';


import logIn from '../ConexionApi/FetchLogInPromise';

class LogIn extends Component {
	
	constructor(props){
		
		super(props)
		
		this.state = {
			conexion: false
		}
		
		this.OnLogIn = this.OnLogIn.bind(this);
	}
	
	componentDidMount() {
		
	  //Obtener datos almacenados Res
	  let conexionSession = sessionStorage.getItem("ResConexion");
	  
	  if(conexionSession === null){
		  
		  this.setState({ conexion: false });
		  
	  } else {
		  
		  //String to JSON la conexion a la sessión
		  let conexionSessionJson = JSON.parse(conexionSession);
		  
		  //asignar valor de sessión a variable de conexión
		  this.setState({ conexion: conexionSessionJson.conexion });
		  
		  if(this.state.conexion === true){
			    return <Redirect to='/productos' />
				//console.log(this.state.conexion)
			}else {
				//console.log(this.usuario.conexion)
			}
		  
	  }
	  
  	}
	
	OnLogIn(event){
		
		event.preventDefault();
			
		let valpass = document.querySelector('#password').value
			
		let email = document.querySelector('#email').value

		let serializeinfo = `email=${email}&password=${valpass}`;
		  
		//console.log(valpass, email, serializeinfo)
			
		let url = "http://localhost/api/users";
			
		logIn(url, serializeinfo, this);
		
		if(this.state.conexion === false){
			document.querySelector('#error').style.display = "block";
		}
		
	}
	
	render(){
		//console.log(this.state.conexion);
		if (this.state.conexion === true) {
		  return <Redirect to='/productos' />
		} else {
			return(
				<div id="logIn-container" className="container-fluid">
					<div id="formContainer" className="row align-items-center">
						<div className="card card-outline-secondary col-12 col-sm-6 col-lg-4 mx-auto">
							<div className="card-header">
								<h3 className="text-center">Iniciar Sesión</h3>
							</div>
							<div className="card-body">
								<form className="form text-center" id="loginForm" onSubmit={this.OnLogIn} >
									<div className="form-group text-left">
										<label htmlFor="email">Correo Electrónico</label>
										<input type="email" className="form-control" name="email" id="email" defaultValue="" required />
									</div>
									<div className="form-group text-left">
										<label htmlFor="password">Contraseña</label>
										<input type="password" className="form-control" id="password" defaultValue="" required />
									</div>
									<div id="error" className="form-group text-left">
										<p className="text-danger text-left">Error en el inicio de sesión</p>
									</div>
									<button type="submit" className="btn btn-success btn-lg" id="btnLogin">Ingresar</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default LogIn;