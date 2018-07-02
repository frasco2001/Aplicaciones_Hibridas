import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoArticuloPage } from './nuevo-articulo';

@NgModule({
  declarations: [
    NuevoArticuloPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoArticuloPage),
  ],
})
export class NuevoArticuloPageModule {}
