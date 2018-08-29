import { Component, OnInit } from '@angular/core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../../../api-app/assets/css/nav-bar/nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	
  faTh = faTh;
  faShoppingCart = faShoppingCart;
  faInbox = faInbox;
  faSignOutAlt = faSignOutAlt;
  
  constructor( ) { }
	
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

  ngOnInit() {
  }

}
