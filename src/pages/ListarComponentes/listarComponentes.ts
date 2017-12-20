import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
// import { ItemDetailsPage } from '../item-details/item-details';
//import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-ListarComponentes',
  templateUrl: 'ListarComponentes.html'
})
export class ListarComponentesPage {
  Componentes: any;
  
  
    constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
    }
    
    /*ionViewDidLoad(){
      this.servicio.getComponentes().subscribe(
        (data) => {
          this.Componentes = data;
        },
        (error)=>{
            console.error(error);
        }
      )
    }  */
}
