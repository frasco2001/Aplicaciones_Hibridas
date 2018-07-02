import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaArticulosPage } from './lista-articulos';

@NgModule({
  declarations: [
    ListaArticulosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaArticulosPage),
  ],
})
export class ListaArticulosPageModule {}
