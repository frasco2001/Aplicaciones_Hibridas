import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ModalController } from 'ionic-angular';
import { NuevoArticuloPage } from './../nuevo-articulo/nuevo-articulo';
import { DetalleArticuloPage } from '../detalle-articulo/detalle-articulo';

@IonicPage()
@Component({
  selector: 'page-articulos',
  templateUrl: 'articulos.html',
})
export class ArticulosPage {

  articulos = [];
  descending: boolean = false;
  order: number;
  column: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Api: ApiProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosPage');
  }

  ionViewDidEnter() {
    this.getArticulos();
  }

  getArticulos(){
    this.articulos = [];
    this.Api.getArticulos().subscribe((result: any) => {
      console.log(result);
      this.articulos = result;
    })
  }

  openModal(){
    let articuloModal = this.modalCtrl.create(NuevoArticuloPage);
    articuloModal.onDidDismiss(data => {
      this.getArticulos();
    });
    articuloModal.present();
  }

  openDetalleArticulo(data) {
    let detalleArticuloModal = this.modalCtrl.create(DetalleArticuloPage, data);
    detalleArticuloModal.onDidDismiss(data => {
      this.getArticulos();
    });
    detalleArticuloModal.present();
  }

  sortName() {
    this.column='nombre';
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
}
