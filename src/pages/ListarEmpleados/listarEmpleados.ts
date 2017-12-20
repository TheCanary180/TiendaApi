import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
// import { ItemDetailsPage } from '../item-details/item-details';
//import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-ListarEmpleados',
  templateUrl: 'ListarEmpleados.html'
})
export class ListarEmpleadosPage {
  Empleados: any;
  
  
    constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
    }
    /*
    ionViewDidLoad(){
      this.servicio.getEmpleados().subscribe(
        (data) => {
          this.Empleados = data;
        },
        (error)=>{
            console.error(error);
        }
      )
    }  */
}
