import { Component, OnInit } from '@angular/core';

import { NavBarComponent } from '../nav-bar/nav-bar.component';

import { Router } from '@angular/router';

import { FetchProductosPromiseService } from '../ConexionApi/fetch-productos-promise.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['../../../../api-app/assets/css/carrito/carrito.component.css']
})
export class CarritoComponent implements OnInit {
	
  public carrito: any[] = []
  
  public total: number
  
  public conexionSessionCarrito: any
  
  public conexionSessionCarritoJson: any

  constructor( private router:Router, private ProductosService : FetchProductosPromiseService ) { }
	
  CancelarCarrito = () => {
	  
	  	//Obtener datos almacenados Res
		let conexionSession = sessionStorage.getItem("ResConexion");

		//String to JSON la conexion a la sessión
		let conexionSessionJson = JSON.parse(conexionSession);
		
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
  
  PagarCarrito = () => {
	  
	  let carrito = this.carrito;
	  
	  this.ProductosService.Pagar(carrito).subscribe()
	  
	  this.CancelarCarrito()
	  
  }

  ngOnInit() {
	//Obtener datos almacenados Res
	let conexionSession = sessionStorage.getItem("ResConexion");

	//String to JSON la conexion a la sessión
	let conexionSessionJson = JSON.parse(conexionSession);
	
	if(conexionSession === null || conexionSessionJson.conexion === false){
			  
		this.router.navigate(['/'])

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
		
		this.carrito = carrito
		
		this.total = total
		
		//console.log(total);

	}
  }

}
