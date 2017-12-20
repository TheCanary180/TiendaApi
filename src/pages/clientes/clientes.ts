import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientePage {
  myForm: FormGroup;
  
    constructor(public navCtrl: NavController,                 
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
        telefono: ['', [Validators.required]],        
      });
    }

    postCliente(){
      var cliente = {
        nombre: this.myForm.get('nombre').value,
        apellidos: this.myForm.get('apellidos').value,
        edad: this.myForm.get('edad').value,
        direccion: this.myForm.get('direccion').value,
        dni: this.myForm.get('dni').value,
        ciudad: this.myForm.get('ciudad').value,
        provincia: this.myForm.get('provincia').value,
        pais: this.myForm.get('pais').value,
        email: this.myForm.get('email').value,        
        telefono: this.myForm.get('telefono').value,
      }

      this.servicio.postCliente(cliente).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }    
  }
   