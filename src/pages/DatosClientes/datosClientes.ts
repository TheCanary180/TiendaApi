import { Component } from '@angular/core';
import { NavController, /*AlertController*/ } from 'ionic-angular';
// import { ItemDetailsPage } from '../item-details/item-details';
// import { Validators, FormGroup, FormBuilder } from "@angular/forms";
// import { ModificarClientesPage } from '../ModificarClientes/ModificarClientes';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-DatosClientes',
  templateUrl: 'datosClientes.html'
})
export class DatosClientesPage {
  // myForm: FormGroup;
  cliente: any;
  myJSON: string = "";
  
    constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
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
