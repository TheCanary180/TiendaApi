import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
// import { ItemDetailsPage } from '../item-details/item-details';
//import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-ListarPedidos',
  templateUrl: 'ListarPedidos.html'
})
export class ListarPedidosPage {
  Pedidos: any;
  
  
    constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
    }
    /*
    ionViewDidLoad(){
      this.servicio.getPedidos().subscribe(
        (data) => {
          this.Pedidos = data;
        },
        (error)=>{
            console.error(error);
        }
      )
    }  */
}
