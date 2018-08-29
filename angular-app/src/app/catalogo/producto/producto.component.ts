import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['../../../../../api-app/assets/css/catalogo/producto/producto.component.css']
})
export class ProductoComponent implements OnInit {

 @Input('productos') productos;
 @Input('productoFilter') productoFilter;
  
  public carrito: any[] = []
  
  public conexionSessionCarrito: any
  
  public conexionSessionCarritoJson: any
	
  constructor() { }
  
  anadirCarrito = (event) => {
	  
	   //Obtener datos almacenados Carrito
		let conexionSessionCarrito = sessionStorage.getItem("ResConexion");

		//String to JSON la session Carrito
		let conexionSessionCarritoJson = JSON.parse(conexionSessionCarrito);

		let carrito;

		if(conexionSessionCarritoJson === null){
			//Creando el Carrito
			carrito = []
		}else{
			//Creando el Carrito
			carrito = conexionSessionCarritoJson.carrito
		}
	  
	   //Funcion para validar is hay producto en el carrito
  		function findObjectByKey(array, key, value) {
				for (var i = 0; i < array.length; i++) {
					if (array[i][key] === value) {
						return array[i];
					}
				}
				return null;
		}
		
		//Hacer This a Button
		let This = event.target;
	  
		//Obtener datos almacenados de This
		let ThisData = This.dataset.carrito;
	  
		//Remplazando ' por "
		let ThisDataReplace = ThisData.replace(/[']/g,'"')
		
		//String to JSON This
		let ThisDataJson = JSON.parse(ThisDataReplace);
		
		//Tomando datos de CantInput
		let cant = This.nextSibling.value
		
		//Añadiendo Cantidad de Productos a ThisDataJson
		Object.assign(ThisDataJson,
			{
				"productoCant": Number(cant)
			}
		);
	  
	  	//console.log(ThisDataJson)
		
		if(carrito.length === null){
			//Si el carrito no tiene ningun producto
			carrito.push(ThisDataJson)
			//console.log(carrito)
		} else {
			//Si el carrito Tiene algun producto
			
			//validar si el Producto ya existe en el carrito
			var objCarrito = findObjectByKey(carrito, 'id', ThisDataJson.id);
			//var objCarrito = carrito.find( (item)=>{ return item.id === ThisDataJson.id }) //ES6
			
			if(objCarrito === null){
				//Si el Producno no Existe en el carrito
				carrito.push(ThisDataJson)
				//console.log(carrito)
			}else if(objCarrito.producto === ThisDataJson.producto){
				//Si el Producto ya Existe en el carrito
				console.log('Este item ya existe', ThisDataJson.producto)
				
				if(objCarrito.productoCant !== ThisDataJson.productoCant){
					//Si Agregan más productos al Carrito
					var res = carrito.map(obj => [ThisDataJson].find(o => o.id === obj.id) || obj);
					carrito = res
					//console.log(carrito);
				}
			}
		}
		
		//Añadiendo Cantidad de Productos a ThisDataJson
		Object.assign(conexionSessionCarritoJson,
			{
				"carrito": carrito
			}
		);
		
		//Total Cantidad de Productos para el Nav
		//Cantidad de Productos para sacar Total
		let CantidadProd = carrito.map((item)=>{
			return item.productoCant
		})
		
		//Sacando el Total Cantidad de Productos
		var totalCantidadProductosVar = 0;
		
		for (var i = 0; i < CantidadProd.length; i++) {
			
		  totalCantidadProductosVar += CantidadProd[i]
		  
		  var container = document.getElementById('CantTxt');
		  var content = totalCantidadProductosVar;
		  container.innerHTML= String(content); 
			
		}
		
		//Termina Total Cantidad de Productos para el Nav
		
		//JSON to String Carrito
		let carritoString = JSON.stringify(conexionSessionCarritoJson)
		
		//Almacenar los datos del carrito en Sessión
		sessionStorage.setItem("ResConexion", carritoString);
		
		//Obtener datos almacenados Carrito
		//let conexionSessionCarrito1 = sessionStorage.getItem("ResConexion");
		
		//String to JSON la session Carrito
		//let conexionSessionCarritoJson1 = JSON.parse(conexionSessionCarrito1);
		
		//console.log(conexionSessionCarritoJson1);
		
		document.getElementById('infoCarrito').style.display = 'block';
		
	}
	//terminaAñadirCarrito

  ngOnInit() {
	//Obtener datos almacenados Carrito
	/*let conexionSessionCarrito = sessionStorage.getItem("ResConexion");
		
	//String to JSON la session Carrito
	let conexionSessionCarritoJson = JSON.parse(conexionSessionCarrito);
	
	let carrito;
	
	if(conexionSessionCarritoJson === null){
		//Creando el Carrito
		carrito = []
	}else{
		//Creando el Carrito
		carrito = conexionSessionCarritoJson.carrito
	}*/
	
	//
  }

}
