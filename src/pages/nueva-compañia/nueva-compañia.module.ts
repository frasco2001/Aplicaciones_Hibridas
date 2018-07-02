import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaCompañiaPage } from './nueva-compañia';

@NgModule({
  declarations: [
    NuevaCompañiaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaCompañiaPage),
  ],
})
export class NuevaCompañiaPageModule {}
