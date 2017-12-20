import { Component } from '@angular/core';
import { /*AlertController,*/ NavController } from "ionic-angular";
// import { Validators, FormGroup, FormBuilder } from "@angular/forms";
// import { EditarPage } from "../editar/editar";
//import { ModificarCategoriasPage } from '../ModificarCategorias/ModificarCategorias';

@Component({
  selector: 'page-DatosCategorias',
  templateUrl: 'DatosCategorias.html'
})
 export class DatosCategoriasPage { 
  // myForm: FormGroup;
  
  
 constructor(public navCtrl: NavController, /*public alertCtrl: AlertController, public fb: FormBuilder*/) {
      // this.inicializar();
      // this.guardarDatos();
    }

    Modificar() {
      //this.navCtrl.push(ModificarCategoriasPage);
    }
  
    // inicializar() {
    //   this.myForm = this.fb.group({
    //     nombre: ['', [Validators.required]],
    //     descripcion: ['', [Validators.required]],              
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
