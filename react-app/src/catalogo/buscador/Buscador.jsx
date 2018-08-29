import React from 'react';
import '../../../../api-app/assets/css/catalogo/buscador/buscador.component.css';

let Buscador = props => (
	<form 
		onSubmit={props.handleSubmit.bind(this)}
	>
		<div className="form-group">
			<label htmlFor="buscador">¿Qué estás Buscando?</label>
			<input
				type="text" 
				className="form-control" 
				id="buscador" 
				placeholder="Buscar Producto"
				value={props.busqueda}
				onChange={props.handleSearch.bind(this)}
			/>
		</div>
	</form>
)

export default Buscador;