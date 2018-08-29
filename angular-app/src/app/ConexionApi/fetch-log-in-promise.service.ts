import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class FetchLogInPromiseService {

  constructor(private http: HttpClient) { }

  logIn(emailVal, passVal) {
	  let email = emailVal,
	      valpass = passVal,
	      serializeinfo = `email=${email}&password=${valpass}`;
	  
	  return this.http.post('http://localhost/api/users', serializeinfo, httpOptions);
  }

}
