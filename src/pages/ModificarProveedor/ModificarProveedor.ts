import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-ModificarProveedor',
  templateUrl: 'ModificarProveedor.html'
})

export class ModificarProveedorPage {
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController, 
                public fb: FormBuilder,
                public servicio: UserServiceProvider) 
    {
      this.myForm = this.fb.group({
        contacto: ['', [Validators.required]],
        direccion: ['', [Validators.required]], 
        ciudad: ['', [Validators.required]], 
        provincia: ['', [Validators.required]], 
        pais : ['', [Validators.required]],  
        codigopostal: ['', [Validators.required]],  
        nombre: ['', [Validators.required]],
        email:  ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        fax:  ['', [Validators.required]],
        web:  ['', [Validators.required]],
      });
    }  
}
