import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';

//importación de Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './catalogo/producto/producto.component';
import { BuscadorComponent } from './catalogo/buscador/buscador.component';
import { ModalComponent } from './catalogo/modal/modal.component';
import { CarritoComponent } from './carrito/carrito.component';

//importacion de peticion a Api
import { FetchLogInPromiseService } from './ConexionApi/fetch-log-in-promise.service';
import { FetchProductosPromiseService } from './ConexionApi/fetch-productos-promise.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ProductosComponent,
    NavBarComponent,
    CatalogoComponent,
    ProductoComponent,
    BuscadorComponent,
    ModalComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	HttpClientModule,
	FilterPipeModule,
	FontAwesomeModule
  ],
  providers: [
	  FetchLogInPromiseService,
	  FetchProductosPromiseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
