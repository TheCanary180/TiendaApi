import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
// import { ItemDetailsPage } from '../item-details/item-details';
//import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-ListarCategorias',
  templateUrl: 'ListarCategorias.html'
})
export class ListarCategoriasPage {
  Categorias: any;
  
  
    constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
    }
    
    /*ionViewDidLoad(){
      this.servicio.getCategorias().subscribe(
        (data) => {
          this.Categorias = data;
        },
        (error)=>{
            console.error(error);
        }
      )
    } */ 
}
