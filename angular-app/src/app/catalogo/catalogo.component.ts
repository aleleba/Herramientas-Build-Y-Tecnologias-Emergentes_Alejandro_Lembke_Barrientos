import { Component, OnInit } from '@angular/core';

import { ProductoComponent } from './producto/producto.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ModalComponent } from './modal/modal.component';

import { FetchProductosPromiseService } from '../ConexionApi/fetch-productos-promise.service';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['../../../../api-app/assets/css/catalogo/catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
	
  public productos: any[] = []
  
  public productoFilter: any = { producto: '' };

  constructor( private productosService : FetchProductosPromiseService ) { }

  ngOnInit() {
	  this.productosService.getData().subscribe(res => {
		  this.productos = res;
		  //console.log(this.productos)
	  })
  }

}
