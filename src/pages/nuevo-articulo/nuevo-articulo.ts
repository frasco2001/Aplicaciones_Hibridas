import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-nuevo-articulo',
  templateUrl: 'nuevo-articulo.html',
})
export class NuevoArticuloPage {

  companias: any;
  nombre: string;
  compania: string;
  codigo: string;
  precio: number;
  errorMessage: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoArticuloPage');
    this.getCompanias();
  }

  getCompanias() {
    this.companias = [];
    this.api.getCompanias().subscribe(
      companias => this.companias = companias,
      error => this.errorMessage = <any>error);
  }

  postArticulo() {
    this.api.postArticulo(this.nombre, this.precio, this.codigo, this.compania).subscribe(
      (result: any) => {
        console.log(result);
        this.salir();
      });
  }
  
  salir() {
    this.viewCtrl.dismiss();
  }

}
