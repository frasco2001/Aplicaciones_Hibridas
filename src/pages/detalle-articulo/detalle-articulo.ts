import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-detalle-articulo',
  templateUrl: 'detalle-articulo.html',
})
export class DetalleArticuloPage {

  companias: any;
  errorMessage: string;
  id = "";
  nombre = "";
  compania = "";
  codigo = "";
  precio = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleArticuloPage');
    console.log(this.navParams.get('_id'));
  }
  ionViewWillEnter() {
    this.getCompanias();
    this.id = this.navParams.get('_id');
    this.nombre = this.navParams.get('nombre');
    this.compania = this.navParams.get('compania');
    this.codigo = this.navParams.get('codigo');
    this.precio = this.navParams.get('precio');
  }
  
  getCompanias() {
    this.companias = [];
    this.api.getCompanias().subscribe(
      companias => this.companias = companias,
      error => this.errorMessage = <any>error);
  }

  putArticulo() {
    this.api.putArticulo(this.id, this.nombre, this.precio, this.codigo, this.compania).subscribe(
      (result: any) => {
        console.log(result);
        this.salir();
      });
  }

  deleteArticulo() {
    this.api.deleteArticulo(this.id).subscribe(
      (result: any) => {
        console.log(result);
        this.salir();
      });
  }

  salir() {
    this.viewController.dismiss();
  }

}
