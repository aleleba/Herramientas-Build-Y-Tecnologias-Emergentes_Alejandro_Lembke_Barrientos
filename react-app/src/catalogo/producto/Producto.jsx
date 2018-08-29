import React from 'react';
import '../../../../api-app/assets/css/catalogo/producto/producto.component.css';

let Producto = props => {
	
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
	
	let filteredProductos = props.productos.filter(
		(item) => {
			return item.producto.toLowerCase().indexOf(props.busqueda.toLowerCase()) !== -1;
		}
	);
	
	//Funcion para validar is hay producto en el carrito
	function findObjectByKey(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
		return null;
	}
	
	//
	let añadirCarrito = (event) => {
		
		//Hacer This a Button
		let This = event.target;
		//Obtener datos almacenados de This
		let ThisData = This.dataset.carrito;
		
		//String to JSON This
		let ThisDataJson = JSON.parse(ThisData);
		
		//Tomando datos de CantInput
		let cant = This.nextSibling.value
		
		//Añadiendo Cantidad de Productos a ThisDataJson
		Object.assign(ThisDataJson,
			{
				"productoCant": Number(cant)
			}
		);
		
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
		  container.innerHTML= content; 
			
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
	
	return(
		<div id="producto-container" className="row">
			{
				filteredProductos
					.map((item)=>{
					return (
						<div id={`card${item.producto}`} className="card-container col-sm-6 col-lg-4 col-xl-3" key={item.id}>
							<div className="card">
							  <img src={`http://localhost/${item.imgUrl}`} alt={item.imgUrl} className="card-img-top" />
							  <div className="card-body">
								<h5 className="card-title text-left">{item.producto}</h5>
								<p className="card-text">Precio: Q. {item.precio}</p>
								<p className="card-text">Unidades Disponibles: {item.unidadesDisponibles}</p>
								<form className="row">
									<div className="col-6 d-flex justify-content-start">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#Modal${item.producto}`}>Ver Mas</button>
									</div>
									<div className="d-flex col-6 justify-content-end">
										<button type="button" className="btn btn-warning mr-2" onClick={añadirCarrito} data-carrito={`{"id": ${item.id}, "producto": "${item.producto}", "precio": ${item.precio}, "unidadesDisponibles": ${item.unidadesDisponibles}, "imgUrl": "${item.imgUrl}"}`}>Añadir</button>
										<input id={`cant${item.producto}`} data-carrito={`${item.producto}`} type="number" min="1" defaultValue="1" />
									</div>
								</form>
							  </div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Producto;