import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
// import { EditarPage } from "../editar/editar";

@Component({
  selector: 'page-nortecomputer',
  templateUrl: 'nortecomputer.html'
})
export class NorteComputerPage {

  
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {

  }

}
