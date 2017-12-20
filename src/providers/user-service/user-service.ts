import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getClientes(){    
    return this.http.get("http://localhost:8080/TiendaApi-1.0-SNAPSHOT/webresources/com.tienda.tiendaapi.cliente");
  }

  showCliente(cliente){
    return this.http.get("http://localhost:8080/TiendaApi-1.0-SNAPSHOT/webresources/com.tienda.tiendaapi.cliente" + "/cliente/" + cliente.id);
  }

  postCliente(cliente){
    console.log("hola");
    console.log(cliente);  
    return this.http.post(
      "http://localhost:8080/TiendaApi-1.0-SNAPSHOT/webresources/com.tienda.tiendaapi.cliente", 
      cliente, 
      {
        headers: {"Content-Type": "application/json" }
      }
    );
  }

  deleteCliente(clienteId){
    console.log("hola");
    console.log(clienteId);  
    return this.http.delete(
      "http://localhost:8080/TiendaApi-1.0-SNAPSHOT/webresources/com.tienda.tiendaapi.cliente/" + clienteId
    );
  }
}
