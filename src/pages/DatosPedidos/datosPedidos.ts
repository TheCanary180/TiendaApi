import { Component } from '@angular/core';
import { /*AlertController,*/ NavController } from "ionic-angular";
// import { Validators, FormGroup, FormBuilder } from "@angular/forms";
//import { ModificarPedidosPage } from '../ModificarPedidos/ModificarPedidos';
@Component({
  selector: 'page-DatosPedidos',
  templateUrl: 'DatosPedidos.html'
})
export class DatosPedidosPage {
  // myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, /*public alertCtrl: AlertController, public fb: FormBuilder*/) {
      // this.inicializar();
      // this.guardarDatos();
    }

    Modificar() {
     // this.navCtrl.push(ModificarPedidosPage);
    }
  
    // inicializar() {
    //   this.myForm = this.fb.group({
    //     apellidos: ['', [Validators.required]],
    //     direccion: ['', [Validators.required]], 
    //     ciudad: ['', [Validators.required]], 
    //     provincia: ['', [Validators.required]], 
    //     pais : ['', [Validators.required]],  
    //     codigopostal: ['', [Validators.required]],  
    //     idpedido: ['', [Validators.required]],        
    //     fechapedido: ['', [Validators.required]],  
    //     fechaenvio: ['', [Validators.required]],              
    //     fechaentrega: ['', [Validators.required]],  
    //     cantidad: ['', [Validators.required]],  
    //     total: ['', [Validators.required]],  
    //   });
    // }
  
    // grabarDatos() {
    //   this.presentAlert();
    // }
  
    // presentAlert() {
    //   const alert = this.alertCtrl.create({
    //     title: 'Low battery',
    //     subTitle: '10% of battery remaining',
    //     buttons: ['Dismiss']
    //   });
    //   alert.present();
    // }
    // guardarDatos() {
    //   alert(JSON.stringify(this.myForm.value));
    // }
  
}
