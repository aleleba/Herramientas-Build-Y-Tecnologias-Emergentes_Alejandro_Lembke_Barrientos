import React, { Component } from 'react';
import '../../../api-app/assets/css/catalogo/catalogo.component.css';

//Components
import Buscador from './buscador/Buscador.jsx';
import Producto from './producto/Producto.jsx';
import Modal from './modal/Modal.jsx';

//llamada de datos
import fetchProductos from '../ConexionApi/FetchProductosPromise';

class Catalogo extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			productos: [],
			busqueda: ''
		}
	}
	
	componentDidMount() {
	  
	  fetchProductos('http://localhost/api/productos', this)
	  
  	}
	
	handleSubmit = event => {
		event.preventDefault();
	}
	
	handleSearch = event => {
		this.setState({
			busqueda: event.target.value
		})
	}
	
	render(){
		return(
			<div id="catalogoContainer" className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-6">
						<h1 className="text-left">Catálogo de Productos</h1>
					</div>
					<div className="col-12 col-sm-6">
						<Buscador handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} busqueda={this.state.busqueda}/>
					</div>
				</div>
				<Producto productos={this.state.productos} busqueda={this.state.busqueda}/>
				<Modal productos={this.state.productos} />
			</div>
		)
	}
}

export default Catalogo;