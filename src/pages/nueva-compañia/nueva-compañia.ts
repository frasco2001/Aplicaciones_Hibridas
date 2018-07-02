import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-nueva-compañia',
  templateUrl: 'nueva-compañia.html',
})
export class NuevaCompañiaPage {

  nombre = "";

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaCompañiaPage');
  }

  postCompania() {
    this.api.postCompania(this.nombre).subscribe((result: any) => {
      console.log(result);
      this.salir();
    });
  }
  salir() {
    this.viewCtrl.dismiss();
  }

}
