import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
}

interface myData {
	res: [Object]
}

@Injectable()
export class FetchProductosPromiseService {

  constructor(private http: HttpClient) { }
	
  Pagar(carrito) {
	  
	  let CarritoStr = JSON.stringify(carrito);
	  
	  //console.log(CarritoStr)
	  
	  let serializeinfo = `carrito=${CarritoStr}`
	  
	  return this.http.post('http://localhost/api/productos', serializeinfo, httpOptions);
  }
  
  getData() {
	  return this.http.get<myData[]>('http://localhost/api/productos');
  }
	
}
