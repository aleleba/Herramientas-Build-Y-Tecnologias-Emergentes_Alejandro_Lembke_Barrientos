import React from 'react';
import '../../../../api-app/assets/css/catalogo/modal/modal.component.css';

let Modals = props => {
	return(
	<div>
		{
			props.productos.map((item) => {
				return (
					<div key={item.id} className="modal fade" id={`Modal${item.producto}`} tabIndex="-1" role="dialog" aria-labelledby={`Modal${item.producto}Label`} aria-hidden="true"> {/*<!-- Modal -->*/}
					  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div className="modal-content">
						  <div className="modal-header">
							<h2 className="modal-title" id={`Modal${item.producto}Label`}>{item.producto}</h2>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div className="modal-body">
					  		<div className="row">
								<div className="col-12 col-md-6">
									<img className="img-responsive col-12" src={`http://localhost/${item.imgUrl}`} alt={item.imgUrl} />
								</div>
								<div className="col-12 col-md-6">
									<p><strong>Precio:</strong> Q.{item.precio}</p>
									<p><strong>Unidades Disponibles:</strong> {item.unidadesDisponibles}</p>
								</div>
							</div>
						  </div>
						  <div className="modal-footer d-flex justify-content-start">
							<button type="button" className="btn btn-light" data-dismiss="modal">Atras</button>
						  </div>
						</div>
					  </div>
					</div>
				)
			})
		}
		
	</div>
)}

export default Modals;