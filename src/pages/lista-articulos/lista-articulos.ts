import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetalleArticuloPage } from '../detalle-articulo/detalle-articulo';

@IonicPage()
@Component({
  selector: 'page-lista-articulos',
  templateUrl: 'lista-articulos.html',
})
export class ListaArticulosPage {

  listaArticulos = [];
  id = "";
  nombre = "";
  descending: boolean = false;
  order: number;
  column: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController,
    public Api: ApiProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaArticulosPage');
    console.log(this.navParams.get('nombre'));
  }

  ionViewWillEnter() {
    this.id = this.navParams.get('_id');
    this.nombre = this.navParams.get('nombre');
  }

  ionViewDidEnter() {
    this.getListaArticulos(this.nombre);
  }

  getListaArticulos(nombre) {
    this.listaArticulos = [];
    this.Api.getListaArticulos(nombre).subscribe((result: any) => {
      console.log(result);
      this.listaArticulos = result;
    })
  }

  openDetalleArticulo(data) {
    let detalleArticuloModal = this.modalCtrl.create(DetalleArticuloPage, data);
    detalleArticuloModal.onDidDismiss(data => {
    });
    detalleArticuloModal.present();
  }

  sortName() {
    this.column = 'nombre';
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  sortCode() {
    this.column = 'codigo';
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  sortPrice() {
    this.column = 'precio';
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  salir() {
    this.viewController.dismiss();
  }

}
