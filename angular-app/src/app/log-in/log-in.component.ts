import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FetchLogInPromiseService } from '../ConexionApi/fetch-log-in-promise.service';

@Component({
  selector: 'LogIn',
  templateUrl: './log-in.component.html',
  styleUrls: ['../../../../api-app/assets/css/log-in/log-in.component.css']
})
export class LogInComponent implements OnInit {
	
  public usuario: any = {
	  conexion: false
  }
	
  constructor( private logInService : FetchLogInPromiseService, private router:Router ) { }
	
  OnLogIn(event){
	  
	event.preventDefault();
	  
	let valpass = (<HTMLInputElement>document.querySelector('#password')).value
  
	let email = (<HTMLInputElement>document.querySelector('#email')).value
	
	this.logInService.logIn(email, valpass).subscribe(res => {
		
		//JSON to String Res
		let ResString = JSON.stringify(res);
		
		//Almacenar los datos Res
		sessionStorage.setItem("ResConexion", ResString);
		
		//Obtener datos almacenados Res
		let conexionSession = sessionStorage.getItem("ResConexion");
		
		//String to JSON la conexion a la sessión
		let conexionSessionJson = JSON.parse(conexionSession);
		
		//asignar valor de sessión a variable de conexión
		this.usuario = conexionSessionJson;
		
		if(this.usuario.conexion === true){
			this.router.navigate(['/productos'])
			//console.log(this.usuario.conexion)
		}else if(this.usuario.conexion === false){
			(<HTMLInputElement>document.querySelector('#error')).style.display = "block";
		}
	})  
  }

   ngOnInit() {
	    
	  //Obtener datos almacenados Res
	  let conexionSession = sessionStorage.getItem("ResConexion");
	  
	  if(conexionSession === null){
		  this.usuario.conexion = false
	  } else {
		  //String to JSON la conexion a la sessión
		  let conexionSessionJson = JSON.parse(conexionSession);
		  //asignar valor de sessión a variable de conexión
		  this.usuario = conexionSessionJson;
		  
		  if(this.usuario.conexion === true){
			this.router.navigate(['/productos'])
				//console.log(this.usuario.conexion)
			}else {
				//console.log(this.usuario.conexion)
			}
	  }
	   
  }

}
