import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ArticulosPage } from '../articulos/articulos';
import { CompañiasPage } from '../compañias/compañias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ArticulosPage;
  tab4Root = CompañiasPage;

  constructor() {

  }
}
