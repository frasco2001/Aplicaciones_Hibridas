webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuevo_articulo_nuevo_articulo__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalle_articulo_detalle_articulo__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticulosPage = /** @class */ (function () {
    function ArticulosPage(navCtrl, navParams, Api, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.modalCtrl = modalCtrl;
        this.articulos = [];
        this.descending = false;
    }
    ArticulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticulosPage');
    };
    ArticulosPage.prototype.ionViewDidEnter = function () {
        this.getArticulos();
    };
    ArticulosPage.prototype.getArticulos = function () {
        var _this = this;
        this.articulos = [];
        this.Api.getArticulos().subscribe(function (result) {
            console.log(result);
            _this.articulos = result;
        });
    };
    ArticulosPage.prototype.openModal = function () {
        var _this = this;
        var articuloModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__nuevo_articulo_nuevo_articulo__["a" /* NuevoArticuloPage */]);
        articuloModal.onDidDismiss(function (data) {
            _this.getArticulos();
        });
        articuloModal.present();
    };
    ArticulosPage.prototype.openDetalleArticulo = function (data) {
        var _this = this;
        var detalleArticuloModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__detalle_articulo_detalle_articulo__["a" /* DetalleArticuloPage */], data);
        detalleArticuloModal.onDidDismiss(function (data) {
            _this.getArticulos();
        });
        detalleArticuloModal.present();
    };
    ArticulosPage.prototype.sortName = function () {
        this.column = 'nombre';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ArticulosPage.prototype.sortCode = function () {
        this.column = 'codigo';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ArticulosPage.prototype.sortPrice = function () {
        this.column = 'precio';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ArticulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-articulos',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/articulos/articulos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Artículos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n    <button ion-button type="button" (click)="sortName()">Ordenar por Nombre</button>\n    <button ion-button type="button" (click)="sortCode()">Ordenar por Código</button>\n    <button ion-button type="button" (click)="sortPrice()">Ordenar por Precio</button>\n    <ion-item *ngFor="let articulo of articulos | search : terms | sort: {property: column, order: order}">\n      <button ion-button icon-only item-right (click)="openDetalleArticulo(articulo)">\n        <ion-icon name="eye"></ion-icon>\n      </button>\n      \n      <h2>{{ articulo.nombre }} - ({{ articulo.codigo}})</h2>\n      <p>{{ articulo.precio }} €</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/articulos/articulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ArticulosPage);
    return ArticulosPage;
}());

//# sourceMappingURL=articulos.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoArticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NuevoArticuloPage = /** @class */ (function () {
    function NuevoArticuloPage(viewCtrl, navParams, api) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    NuevoArticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoArticuloPage');
        this.getCompanias();
    };
    NuevoArticuloPage.prototype.getCompanias = function () {
        var _this = this;
        this.companias = [];
        this.api.getCompanias().subscribe(function (companias) { return _this.companias = companias; }, function (error) { return _this.errorMessage = error; });
    };
    NuevoArticuloPage.prototype.postArticulo = function () {
        var _this = this;
        this.api.postArticulo(this.nombre, this.precio, this.codigo, this.compania).subscribe(function (result) {
            console.log(result);
            _this.salir();
        });
    };
    NuevoArticuloPage.prototype.salir = function () {
        this.viewCtrl.dismiss();
    };
    NuevoArticuloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-articulo',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/nuevo-articulo/nuevo-articulo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nuevo Articulo</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Nuevo Articulo\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>\n          Nombre\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Compañia\n        </ion-label>\n        <ion-select type="text" [(ngModel)]="compania">\n          <ion-option *ngFor="let company of companias" >{{company.nombre}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Código\n        </ion-label>\n        <ion-input type="text"  [(ngModel)]="codigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Precio\n        </ion-label>\n        <ion-input type="number" min="0" inputmode="numeric" pattern="/^[0-9]+(\.[0-9]{1,2})?$" step="0.05"[(ngModel)]="precio"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <button ion-button Default icon-left color="secondary" (click)="postArticulo()">\n      <ion-icon name="cloud-upload"></ion-icon>\n      Crear\n    </button>\n    <button ion-button Default icon-left item-right (click)="salir()">\n      Salir&nbsp;\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/nuevo-articulo/nuevo-articulo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], NuevoArticuloPage);
    return NuevoArticuloPage;
}());

//# sourceMappingURL=nuevo-articulo.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompañiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nueva_compa_ia_nueva_compa_ia__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalle_compa_ia_detalle_compa_ia__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_articulos_lista_articulos__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompañiasPage = /** @class */ (function () {
    function CompañiasPage(navCtrl, navParams, Api, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.modalCtrl = modalCtrl;
        this.companias = [];
        this.descending = false;
    }
    CompañiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompañiasPage');
    };
    CompañiasPage.prototype.ionViewDidEnter = function () {
        this.getCompañias();
    };
    CompañiasPage.prototype.getCompañias = function () {
        var _this = this;
        this.companias = [];
        this.Api.getCompanias().subscribe(function (result) {
            console.log(result);
            _this.companias = result;
        });
    };
    CompañiasPage.prototype.openModal = function () {
        var _this = this;
        var compañiaModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__nueva_compa_ia_nueva_compa_ia__["a" /* NuevaCompañiaPage */]);
        compañiaModal.onDidDismiss(function (data) {
            _this.getCompañias();
        });
        compañiaModal.present();
    };
    CompañiasPage.prototype.openDetalleCompania = function (data) {
        var _this = this;
        var detalleCompaniaModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__detalle_compa_ia_detalle_compa_ia__["a" /* DetalleCompañiaPage */], data);
        detalleCompaniaModal.onDidDismiss(function (data) {
            _this.getCompañias();
        });
        detalleCompaniaModal.present();
    };
    CompañiasPage.prototype.openListaArticulos = function (data) {
        var _this = this;
        var listaArticulosModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__lista_articulos_lista_articulos__["a" /* ListaArticulosPage */], data);
        listaArticulosModal.onDidDismiss(function (data) {
            _this.getCompañias();
        });
        listaArticulosModal.present();
    };
    CompañiasPage.prototype.sortName = function () {
        this.column = 'nombre';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    CompañiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compañias',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/compañias/compañias.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Compañias</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n    <button ion-button type="button" (click)="sortName()">Ordenar por Nombre</button>\n    <ion-item *ngFor="let compania of companias | search : terms | sort: {property: column, order: order}">\n      <button ion-button icon-only item-right (click)="openListaArticulos(compania)">\n        <ion-icon name="list"></ion-icon>\n      </button>\n      <button ion-button icon-only item-end (click)="openDetalleCompania(compania)">\n        <ion-icon name="eye"></ion-icon>\n      </button>\n      <h2>{{ compania.nombre }}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/compañias/compañias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], CompañiasPage);
    return CompañiasPage;
}());

//# sourceMappingURL=compañias.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaCompañiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NuevaCompañiaPage = /** @class */ (function () {
    function NuevaCompañiaPage(viewCtrl, navParams, api) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.api = api;
        this.nombre = "";
    }
    NuevaCompañiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevaCompañiaPage');
    };
    NuevaCompañiaPage.prototype.postCompania = function () {
        var _this = this;
        this.api.postCompania(this.nombre).subscribe(function (result) {
            console.log(result);
            _this.salir();
        });
    };
    NuevaCompañiaPage.prototype.salir = function () {
        this.viewCtrl.dismiss();
    };
    NuevaCompañiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nueva-compañia',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/nueva-compañia/nueva-compañia.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nueva Compañia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Nueva Compañia\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>\n          Nombre\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <button ion-button Default icon-left color="secondary" (click)="postCompania()">\n      <ion-icon name="cloud-upload"></ion-icon>\n      Crear\n    </button>\n    <button ion-button Default icon-left item-right (click)="salir()">\n      Salir&nbsp;\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/nueva-compañia/nueva-compañia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], NuevaCompañiaPage);
    return NuevaCompañiaPage;
}());

//# sourceMappingURL=nueva-compañia.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleCompañiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleCompañiaPage = /** @class */ (function () {
    function DetalleCompañiaPage(navCtrl, navParams, viewController, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.api = api;
        this.id = "";
        this.nombre = "";
    }
    DetalleCompañiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleCompañiaPage');
        console.log(this.navParams.get('_id'));
    };
    DetalleCompañiaPage.prototype.ionViewWillEnter = function () {
        this.id = this.navParams.get('_id');
        this.nombre = this.navParams.get('nombre');
    };
    DetalleCompañiaPage.prototype.putCompania = function () {
        var _this = this;
        this.api.putCompania(this.id, this.nombre).subscribe(function (result) {
            console.log(result);
            _this.salir();
        });
    };
    DetalleCompañiaPage.prototype.deleteCompania = function () {
        var _this = this;
        this.api.deleteCompania(this.id).subscribe(function (result) {
            console.log(result);
            _this.salir();
        });
    };
    DetalleCompañiaPage.prototype.salir = function () {
        this.viewController.dismiss();
    };
    DetalleCompañiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-compañia',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/detalle-compañia/detalle-compañia.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalle Compañia</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Ficha Compañia\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>\n          Nombre\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <button ion-button Default icon-left color="secondary" (click)="putCompania()">\n      <ion-icon name="cloud-upload"></ion-icon>\n      Modificar\n    </button>\n    <button ion-button Default icon-left color="danger" (click)="deleteCompania()">\n      <ion-icon name="cloud-download"></ion-icon>\n      Eliminar\n    </button>\n    <button ion-button Default icon-left item-right color="orange" (click)="salir()">\n      Salir&nbsp;\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-item>\n</ion-content>\n\n'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/detalle-compañia/detalle-compañia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], DetalleCompañiaPage);
    return DetalleCompañiaPage;
}());

//# sourceMappingURL=detalle-compañia.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaArticulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_articulo_detalle_articulo__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaArticulosPage = /** @class */ (function () {
    function ListaArticulosPage(navCtrl, navParams, viewController, Api, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.Api = Api;
        this.modalCtrl = modalCtrl;
        this.listaArticulos = [];
        this.id = "";
        this.nombre = "";
        this.descending = false;
    }
    ListaArticulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaArticulosPage');
        console.log(this.navParams.get('nombre'));
    };
    ListaArticulosPage.prototype.ionViewWillEnter = function () {
        this.id = this.navParams.get('_id');
        this.nombre = this.navParams.get('nombre');
    };
    ListaArticulosPage.prototype.ionViewDidEnter = function () {
        this.getListaArticulos(this.nombre);
    };
    ListaArticulosPage.prototype.getListaArticulos = function (nombre) {
        var _this = this;
        this.listaArticulos = [];
        this.Api.getListaArticulos(nombre).subscribe(function (result) {
            console.log(result);
            _this.listaArticulos = result;
        });
    };
    ListaArticulosPage.prototype.openDetalleArticulo = function (data) {
        var detalleArticuloModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detalle_articulo_detalle_articulo__["a" /* DetalleArticuloPage */], data);
        detalleArticuloModal.onDidDismiss(function (data) {
        });
        detalleArticuloModal.present();
    };
    ListaArticulosPage.prototype.sortName = function () {
        this.column = 'nombre';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ListaArticulosPage.prototype.sortCode = function () {
        this.column = 'codigo';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ListaArticulosPage.prototype.sortPrice = function () {
        this.column = 'precio';
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ListaArticulosPage.prototype.salir = function () {
        this.viewController.dismiss();
    };
    ListaArticulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-articulos',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/lista-articulos/lista-articulos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Lista de Articulos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n    <button ion-button type="button" (click)="sortName()">Ordenar por Nombre</button>\n    <button ion-button type="button" (click)="sortCode()">Ordenar por Código</button>\n    <button ion-button type="button" (click)="sortPrice()">Ordenar por Precio</button>\n    <button ion-button icon-left item-right color="orange" (click)="salir()">\n      Salir&nbsp;\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-item *ngFor="let articulo of listaArticulos | search : terms | sort: {property: column, order: order}">\n      <button ion-button icon-only item-right (click)="openDetalleArticulo(articulo)">\n        <ion-icon name="eye"></ion-icon>\n      </button>\n      <h2>{{ articulo.nombre }} - ({{ articulo.codigo}})</h2>\n      <p>{{ articulo.precio }} €</p>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/lista-articulos/lista-articulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ListaArticulosPage);
    return ListaArticulosPage;
}());

//# sourceMappingURL=lista-articulos.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ul>\n    <h2 align="center">Máster en Tecnologías y Aplicaciones en Ingeniería Informática</h2>\n    <h2 align="center">Desarrollo de Aplicaciones Híbridas</h2>\n    <h2 align="center">Tecnologías y Recursos Web/Móvil</h2>\n    <p>\n      <br>\n      <br>\n      <br>Esta aplicación ha sido desarrollada como trabajo para dichas asignaturas.\n      <br>\n      <br>\n    </p>\n    <h6>Tecnologías y Herramientas Utilizadas:</h6>\n    <ul>\n      <li type="circle">Desarrollo Híbrido:</li>\n      <ul>\n        <li type="point">Ionic Framework\n          <a href="https://ionicframework.com">https://ionicframework.com</a>\n        </li><br>\n      </ul>\n      <li type="circle">Tecnologías y Recursos Web/Móvil - MEAN Stack:\n      </li>\n      <ul>\n        <li type="point">MongoDB\n          <a href="https://www.mongodb.com">https://www.mongodb.com</a>\n        </li>\n        <li type="point">Express.js\n          <a href="http://expressjs.com">http://expressjs.com</a>\n        </li>\n        <li type="point">Angular.js\n          <a href="https://angularjs.org">https://angularjs.org</a>\n        </li>\n        <li type="point">Node.js\n          <a href="https://nodejs.org/es/">https://nodejs.org/es/</a>\n        </li>\n        <li type="point">Docker\n          <a href="https://www.docker.com">https://www.docker.com</a>\n        </li>\n      </ul>\n    </ul>\n    <br>\n    <h6>Trabajo realizado por:</h6>\n    <ul>\n      <li type="star">Francisco José Escámez Martín</li>\n    </ul>\n    <ul>\n      <li type="none">\n        <a href="mailto:frasco2001@hotmail.com">frasco2001@hotmail.com</a>\n      </li>\n      <li type="none">\n        <a href="tel:+34670896260">670896260</a>\n      </li>\n    </ul>\n    <br>\n    <h6>GitHub:</h6>\n    <ul>\n      <li type="circle">\n        <a href="https://github.com/frasco2001/Tec_Rec_Web_Mvl.git">https://github.com/frasco2001/Tec_Rec_Web_Mvl.git</a>\n      </li>\n      <li><a href="https://github.com/frasco2001/Aplicaciones_Hibridas.git">https://github.com/frasco2001/Aplicaciones_Hibridas.git</a>\n      </li>\n    </ul>\n  </ul>\n</ion-content>'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		286,
		0
	],
	"../pages/articulos/articulos.module": [
		287,
		8
	],
	"../pages/compañias/compañias.module": [
		288,
		7
	],
	"../pages/detalle-articulo/detalle-articulo.module": [
		289,
		6
	],
	"../pages/detalle-compañia/detalle-compañia.module": [
		290,
		5
	],
	"../pages/home/home.module": [
		292,
		4
	],
	"../pages/lista-articulos/lista-articulos.module": [
		291,
		3
	],
	"../pages/nueva-compañia/nueva-compañia.module": [
		293,
		2
	],
	"../pages/nuevo-articulo/nuevo-articulo.module": [
		294,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulos_articulos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compa_ias_compa_ias__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AboutPage } from '../about/about';



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        // tab2Root = AboutPage;
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__articulos_articulos__["a" /* ArticulosPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__compa_ias_compa_ias__["a" /* CompañiasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="Artículos" tabIcon="images"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Compañias" tabIcon="home"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_articulos_articulos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_compa_ias_compa_ias__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nuevo_articulo_nuevo_articulo__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nueva_compa_ia_nueva_compa_ia__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detalle_compa_ia_detalle_compa_ia__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detalle_articulo_detalle_articulo__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lista_articulos_lista_articulos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_search_search__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_sort_sort__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AboutPage } from '../pages/about/about';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // AboutPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_articulos_articulos__["a" /* ArticulosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_compa_ias_compa_ias__["a" /* CompañiasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nuevo_articulo_nuevo_articulo__["a" /* NuevoArticuloPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nueva_compa_ia_nueva_compa_ia__["a" /* NuevaCompañiaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalle_articulo_detalle_articulo__["a" /* DetalleArticuloPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detalle_compa_ia_detalle_compa_ia__["a" /* DetalleCompañiaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lista_articulos_lista_articulos__["a" /* ListaArticulosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_sort_sort__["a" /* SortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/articulos/articulos.module#ArticulosPageModule', name: 'ArticulosPage', segment: 'articulos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compañias/compañias.module#CompañiasPageModule', name: 'CompañiasPage', segment: 'compañias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-articulo/detalle-articulo.module#DetalleArticuloPageModule', name: 'DetalleArticuloPage', segment: 'detalle-articulo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-compañia/detalle-compañia.module#DetalleCompañiaPageModule', name: 'DetalleCompañiaPage', segment: 'detalle-compañia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-articulos/lista-articulos.module#ListaArticulosPageModule', name: 'ListaArticulosPage', segment: 'lista-articulos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nueva-compañia/nueva-compañia.module#NuevaCompañiaPageModule', name: 'NuevaCompañiaPage', segment: 'nueva-compañia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-articulo/nuevo-articulo.module#NuevoArticuloPageModule', name: 'NuevoArticuloPage', segment: 'nuevo-articulo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // AboutPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_articulos_articulos__["a" /* ArticulosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_compa_ias_compa_ias__["a" /* CompañiasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nuevo_articulo_nuevo_articulo__["a" /* NuevoArticuloPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nueva_compa_ia_nueva_compa_ia__["a" /* NuevaCompañiaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalle_articulo_detalle_articulo__["a" /* DetalleArticuloPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detalle_compa_ia_detalle_compa_ia__["a" /* DetalleCompañiaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lista_articulos_lista_articulos__["a" /* ListaArticulosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8000/';
    }
    ApiProvider.prototype.getArticulos = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/articulos";
        return this.http.get(url, { headers: header });
    };
    ApiProvider.prototype.getCompanias = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/companias";
        return this.http.get(url, { headers: header });
    };
    ApiProvider.prototype.getListaArticulos = function (compania) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/articulosByCompanias/" + compania;
        return this.http.get(url, { headers: header });
    };
    ApiProvider.prototype.postArticulo = function (nombre, precio, codigo, compania) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/articulos";
        return this.http.post(url, { nombre: nombre, compania: compania, codigo: codigo, precio: precio }, { headers: header });
    };
    ApiProvider.prototype.postCompania = function (nombre) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/companias";
        return this.http.post(url, { nombre: nombre }, { headers: header });
    };
    ApiProvider.prototype.putArticulo = function (id, nombre, precio, codigo, compania) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/articulos/" + id;
        console.log(url);
        return this.http.put(url, { nombre: nombre, compania: compania, codigo: codigo, precio: precio }, { headers: header });
    };
    ApiProvider.prototype.putCompania = function (id, nombre) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/companias/" + id;
        console.log(url);
        return this.http.put(url, { nombre: nombre }, { headers: header });
    };
    ApiProvider.prototype.deleteArticulo = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/articulos/" + id;
        console.log(url);
        return this.http.delete(url, { headers: header });
    };
    ApiProvider.prototype.deleteCompania = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Content-Type', 'application/json');
        var url = this.apiUrl + "api/companias/" + id;
        console.log(url);
        return this.http.delete(url, { headers: header });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.nombre.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleArticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleArticuloPage = /** @class */ (function () {
    function DetalleArticuloPage(navCtrl, navParams, viewController, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.api = api;
        this.id = "";
        this.nombre = "";
        this.compania = "";
        this.codigo = "";
        this.precio = "";
    }
    DetalleArticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleArticuloPage');
        console.log(this.navParams.get('_id'));
    };
    DetalleArticuloPage.prototype.ionViewWillEnter = function () {
        this.getCompanias();
        this.id = this.navParams.get('_id');
        this.nombre = this.navParams.get('nombre');
        this.compania = this.navParams.get('compania');
        this.codigo = this.navParams.get('codigo');
        this.precio = this.navParams.get('precio');
    };
    DetalleArticuloPage.prototype.getCompanias = function () {
        var _this = this;
        this.companias = [];
        this.api.getCompanias().subscribe(function (companias) { return _this.companias = companias; }, function (error) { return _this.errorMessage = error; });
    };
    DetalleArticuloPage.prototype.putArticulo = function () {
        var _this = this;
        this.api.putArticulo(this.id, this.nombre, this.precio, this.codigo, this.compania).subscribe(function (result) {
            console.log(result);
            _this.salir();
        });
    };
    DetalleArticuloPage.prototype.deleteArticulo = function () {
        var _this = this;
        this.api.deleteArticulo(this.id).subscribe(function (result) {
            console.log(result);
            _this.salir();
        });
    };
    DetalleArticuloPage.prototype.salir = function () {
        this.viewController.dismiss();
    };
    DetalleArticuloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-articulo',template:/*ion-inline-start:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/detalle-articulo/detalle-articulo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalle Artículo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Ficha Articulo\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>\n          Nombre\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Compañia\n        </ion-label>\n        <ion-select type="text" [(ngModel)]="compania">\n          <ion-option *ngFor="let company of companias">{{company.nombre}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Código\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="codigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Precio\n        </ion-label>\n        <ion-input type="number" min="0" inputmode="numeric" pattern="/^[0-9]+(\.[0-9]{1,2})?$" step="0.05" [(ngModel)]="precio"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <button ion-button Default icon-left color="secondary" (click)="putArticulo()">\n      <ion-icon name="cloud-upload"></ion-icon>\n      Modificar\n    </button>\n    <button ion-button Default icon-left color="danger" (click)="deleteArticulo()">\n      <ion-icon name="cloud-download"></ion-icon>\n      Eliminar\n    </button>\n    <button ion-button Default icon-left item-right color="orange" (click)="salir()">\n      Salir&nbsp;\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/frasco2001/Documents/workspace/Aplicaciones_Hibridas/src/pages/detalle-articulo/detalle-articulo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], DetalleArticuloPage);
    return DetalleArticuloPage;
}());

//# sourceMappingURL=detalle-articulo.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map