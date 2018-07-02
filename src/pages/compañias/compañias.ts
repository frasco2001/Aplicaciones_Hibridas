import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ModalController } from 'ionic-angular';
import { NuevaCompañiaPage } from './../nueva-compañia/nueva-compañia';
import { DetalleCompañiaPage } from './../detalle-compañia/detalle-compañia';
import { ListaArticulosPage } from './../lista-articulos/lista-articulos';

@IonicPage()
@Component({
  selector: 'page-compañias',
  templateUrl: 'compañias.html',
})
export class CompañiasPage {

  companias = [];
  descending: boolean = false;
  order: number;
  column: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Api: ApiProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompañiasPage');
  }

  ionViewDidEnter() {
    this.getCompañias();
  }

  getCompañias() {
    this.companias = [];
    this.Api.getCompanias().subscribe((result: any) => {
      console.log(result);
      this.companias = result;
    })
  }

  openModal() {
    let compañiaModal = this.modalCtrl.create(NuevaCompañiaPage);
    compañiaModal.onDidDismiss(data => {
      this.getCompañias();
    });
    compañiaModal.present();
  }

  openDetalleCompania(data) {
    let detalleCompaniaModal = this.modalCtrl.create(DetalleCompañiaPage, data);
    detalleCompaniaModal.onDidDismiss(data => {
      this.getCompañias();
    });
    detalleCompaniaModal.present();
  }

  openListaArticulos(data) {
    let listaArticulosModal = this.modalCtrl.create(ListaArticulosPage, data);
    listaArticulosModal.onDidDismiss(data => {
      this.getCompañias();
    });
    listaArticulosModal.present();
  }

  
  sortName() {
    this.column = 'nombre';
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
