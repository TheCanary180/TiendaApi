import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
//import { ModificarCategoriasPage } from '../ModificarCategorias/ModificarCategorias';
// import { ItemDetailsPage } from '../item-details/item-details';
//import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-ListarClientes',
  templateUrl: 'ListarClientes.html'
})
export class ListarClientesPage {
  cliente: any;
  myJSON: string = "";
    
    constructor(public navCtrl: NavController, 
                public servicio: UserServiceProvider) {      
    }   
    
    ionViewDidLoad(){
      this.servicio.getClientes().subscribe(
        (data) => {
          this.cliente = data;
          this.myJSON = JSON.stringify(data);
        },
        (error)=>{
            console.error(error);
        }
      )
    }     
}


 // showCliente(cliente){
    //     this.navCtrl.push(ModificarCategoriasPage, {cliente : cliente});
    // }