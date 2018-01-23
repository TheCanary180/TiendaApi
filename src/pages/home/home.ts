import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {NorteComputerPage} from '../NorteComputer/nortecomputer';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fb: Facebook ) {

  }
  userData: any;
  algo: string;

  loginWithFB() {
    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
      this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
    });
      this.algo = "conectado";
    });
  }
}

/*Login(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
}
logEvent(){
  this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
}

  

  NorteComputer() {
    this.navCtrl.push(NorteComputerPage);
  }*/