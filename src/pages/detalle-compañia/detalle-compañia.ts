import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-detalle-compañia',
  templateUrl: 'detalle-compañia.html',
})
export class DetalleCompañiaPage {

  errorMessage: string;
  id = "";
  nombre = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleCompañiaPage');
    console.log(this.navParams.get('_id'));
  }

  ionViewWillEnter() {
    this.id = this.navParams.get('_id');
    this.nombre = this.navParams.get('nombre');
  }

  putCompania() {
    this.api.putCompania(this.id, this.nombre).subscribe(
      (result: any) => {
        console.log(result);
        this.salir();
      });
  }

  deleteCompania() {
    this.api.deleteCompania(this.id).subscribe(
      (result: any) => {
        console.log(result);
        this.salir();
      });
  }

  salir() {
    this.viewController.dismiss();
  }

}
