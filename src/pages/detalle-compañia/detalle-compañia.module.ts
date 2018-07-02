import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleCompañiaPage } from './detalle-compañia';

@NgModule({
  declarations: [
    DetalleCompañiaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleCompañiaPage),
  ],
})
export class DetalleCompañiaPageModule {}
