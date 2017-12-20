import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
// import { ItemDetailsPage } from '../item-details/item-details';
//import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-ListarProveedores',
  templateUrl: 'ListarProveedores.html'
})
export class ListarProveedoresPage {
  Proveedores: any;
  
  
    constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
    }
    /*
    ionViewDidLoad(){
      this.servicio.getProveedores().subscribe(
        (data) => {
          this.Proveedores = data;
        },
        (error)=>{
            console.error(error);
        }
      )
    }  */
}
