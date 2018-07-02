import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArticulosPage } from '../pages/articulos/articulos';
import { CompañiasPage } from '../pages/compañias/compañias';
import { ApiProvider } from '../providers/api/api';
import { NuevoArticuloPage } from '../pages/nuevo-articulo/nuevo-articulo';
import { NuevaCompañiaPage } from '../pages/nueva-compañia/nueva-compañia';
import { DetalleCompañiaPage } from '../pages/detalle-compañia/detalle-compañia';
import { DetalleArticuloPage } from '../pages/detalle-articulo/detalle-articulo';
import { ListaArticulosPage } from '../pages/lista-articulos/lista-articulos';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    HomePage,
    TabsPage,
    ArticulosPage,
    CompañiasPage,
    NuevoArticuloPage,
    NuevaCompañiaPage,
    DetalleArticuloPage,
    DetalleCompañiaPage,
    ListaArticulosPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    HomePage,
    TabsPage,
    ArticulosPage,
    CompañiasPage,
    NuevoArticuloPage,
    NuevaCompañiaPage,
    DetalleArticuloPage,
    DetalleCompañiaPage,
    ListaArticulosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
