import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-ModificarPedidos',
  templateUrl: 'ModificarPedidos.html'
})
export class ModificarPedidosPage {
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController, 
                public fb: FormBuilder,
                public servicio: UserServiceProvider) 
    {
      this.myForm = this.fb.group({
        apellidos: ['', [Validators.required]],
        direccion: ['', [Validators.required]], 
        ciudad: ['', [Validators.required]], 
        provincia: ['', [Validators.required]], 
        pais : ['', [Validators.required]],  
        codigopostal: ['', [Validators.required]],  
        idpedido: ['', [Validators.required]],        
        fechapedido: ['', [Validators.required]],  
        fechaenvio: ['', [Validators.required]],              
        fechaentrega: ['', [Validators.required]],  
        cantidad: ['', [Validators.required]],  
        total: ['', [Validators.required]],  
      });
    }
}
