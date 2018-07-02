import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompañiasPage } from './compañias';

@NgModule({
  declarations: [
    CompañiasPage,
  ],
  imports: [
    IonicPageModule.forChild(CompañiasPage),
  ],
})
export class CompañiasPageModule {}
