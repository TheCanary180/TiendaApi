import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NorteComputerPage} from '../NorteComputer/nortecomputer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  NorteComputer() {
    this.navCtrl.push(NorteComputerPage);
  }
}


