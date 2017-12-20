import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-componentes',
  templateUrl: 'componentes.html'
})
export class ComponentesPage {
 myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController, 
                public fb: FormBuilder,
                public servicio: UserServiceProvider) {
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

}
