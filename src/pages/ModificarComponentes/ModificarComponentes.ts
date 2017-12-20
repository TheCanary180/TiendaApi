import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
// import { EditarPage } from "../editar/editar";
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-ModificarComponentes',
  templateUrl: 'ModificarComponentes.html'
})
export class ModificarComponentesPage {
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController, 
                public fb: FormBuilder,
                public servicio: UserServiceProvider) 
    {
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]],
        precio: ['', [Validators.required]], 
        existencias: ['', [Validators.required]], 
        pedido: ['', [Validators.required]], 
        descuentos: ['', [Validators.required]],              
      });
    }  
}
