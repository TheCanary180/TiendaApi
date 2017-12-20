import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// import { ItemDetailsPage } from '../item-details/item-details';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-ModificarClientes',
  templateUrl: 'ModificarClientes.html'
})
export class ModificarClientesPage {
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController, 
                public fb: FormBuilder,
                public servicio: UserServiceProvider) 
    {
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        edad: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        dni: ['', [Validators.required]],
        ciudad: ['', [Validators.required]],
        provincia: ['', [Validators.required]],
        pais: ['', [Validators.required]],
        email: ['', [Validators.required]],
        codigopostal: ['', [Validators.required]],
        telefono: ['', [Validators.required]],        
      });
    }  
}
