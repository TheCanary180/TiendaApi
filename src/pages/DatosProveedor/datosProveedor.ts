import { Component } from '@angular/core';
import { /*AlertController,*/ NavController } from "ionic-angular";
// import { Validators, FormGroup, FormBuilder } from "@angular/forms";
//import { ModificarProveedorPage } from '../ModificarProveedor/ModificarProveedor';

@Component({
  selector: 'page-DatosProveedor',
  templateUrl: 'datosProveedor.html'
})

export class DatosProveedorPage {
  // myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, /*public alertCtrl: AlertController, public fb: FormBuilder*/) {
      // this.inicializar();
      // this.guardarDatos();
    }

    Modificar() {
     // this.navCtrl.push(ModificarProveedorPage);
    }
  
    // inicializar() {
    //   this.myForm = this.fb.group({
    //     contacto: ['', [Validators.required]],
    //     direccion: ['', [Validators.required]], 
    //     ciudad: ['', [Validators.required]], 
    //     provincia: ['', [Validators.required]], 
    //     pais : ['', [Validators.required]],  
    //     codigopostal: ['', [Validators.required]],  
    //     nombre: ['', [Validators.required]],
    //     email:  ['', [Validators.required]],
    //     telefono: ['', [Validators.required]],
    //     fax:  ['', [Validators.required]],
    //     web:  ['', [Validators.required]],
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
