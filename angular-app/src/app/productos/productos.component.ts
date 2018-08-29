import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';

import { Router } from '@angular/router';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../../../../api-app/assets/css/productos/productos.component.css']
})

export class ProductosComponent implements OnInit {
  
  constructor( private router:Router ) { }
	
  ngOnInit() {
	  
	  //Obtener datos almacenados Res
	  let conexionSession = sessionStorage.getItem("ResConexion");
	  
	  //String to JSON la conexion a la sessión
	  let conexionSessionJson = JSON.parse(conexionSession);
	  
	  if(conexionSession === null || conexionSessionJson.conexion === false){
		  
		  this.router.navigate(['/'])
		  
	  } else if(conexionSessionJson.conexion === true){
		  
		  this.router.navigate(['/productos'])
		  
	  }
  }

}
