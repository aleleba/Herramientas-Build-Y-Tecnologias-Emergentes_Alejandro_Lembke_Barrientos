import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent }      from '../log-in/log-in.component';
import { ProductosComponent }      from '../productos/productos.component';
import { CarritoComponent }      from '../carrito/carrito.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule implements OnInit {

	constructor(){
		
	}
	
	ngOnInit() {
		
	}
}
