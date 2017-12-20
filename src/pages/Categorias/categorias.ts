import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
 export class CategoriasPage { 
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController, 
                public fb: FormBuilder,
                public servicio: UserServiceProvider) 
    {
     this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
     })
    } 

}
