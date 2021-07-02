(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_buy-tech_buy-tech_module_ts"],{

/***/ 5315:
/*!*****************************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyTechPageRoutingModule": function() { return /* binding */ BuyTechPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _buy_tech_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-tech.page */ 31579);




const routes = [
    {
        path: '',
        component: _buy_tech_page__WEBPACK_IMPORTED_MODULE_0__.BuyTechPage
    }
];
let BuyTechPageRoutingModule = class BuyTechPageRoutingModule {
};
BuyTechPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyTechPageRoutingModule);



/***/ }),

/***/ 89471:
/*!*********************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyTechPageModule": function() { return /* binding */ BuyTechPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _buy_tech_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-tech-routing.module */ 5315);
/* harmony import */ var _buy_tech_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-tech.page */ 31579);







let BuyTechPageModule = class BuyTechPageModule {
};
BuyTechPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buy_tech_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyTechPageRoutingModule
        ],
        declarations: [_buy_tech_page__WEBPACK_IMPORTED_MODULE_1__.BuyTechPage]
    })
], BuyTechPageModule);



/***/ }),

/***/ 31579:
/*!*******************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyTechPage": function() { return /* binding */ BuyTechPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_buy_tech_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buy-tech.page.html */ 55083);
/* harmony import */ var _buy_tech_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-tech.page.scss */ 5602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/db.service */ 73773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let BuyTechPage = class BuyTechPage {
    constructor(router, rout, db, toastController) {
        this.router = router;
        this.rout = rout;
        this.db = db;
        this.toastController = toastController;
        this.techList = [];
    }
    ngOnInit() {
        this.data = this.rout.params.subscribe(params => {
            this.cps = params['cps'];
        });
        this.db.dbState().subscribe((res) => {
            if (res) {
                this.techs = this.db.fetchTech();
                console.log(this.techs);
            }
        });
    }
    buyToast(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `You buy a ${value} technology.`,
                duration: 2000
            });
            toast.present();
        });
    }
    buyTech(e) {
        this.db.buyTech(e.Id, 1).then(data => {
            this.buyToast(e.name);
        });
    }
    navigateToSapce() {
        this.router.navigateByUrl('/games/space');
    }
};
BuyTechPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
BuyTechPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-buy-tech',
        template: _raw_loader_buy_tech_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buy_tech_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuyTechPage);



/***/ }),

/***/ 5602:
/*!*********************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.caja {\n  text-align: center;\n}\n\n.tarjeta {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS10ZWNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKIiwiZmlsZSI6ImJ1eS10ZWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTcGFjZXtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uaGVhZGVyVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jYWphe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YXJqZXRhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 55083:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/buy-tech/buy-tech.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-title style=\"text-align: center;margin-top: 1rem;\">Technologies  ,cps available {{cps}}\r\n</ion-title>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let tech of techs |async\"><!---->\r\n      <ion-card class=\"tarjeta\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Name</ion-card-subtitle>\r\n          <ion-card-title>{{tech.Name}}</ion-card-title>\r\n        </ion-card-header> \r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col>\r\n              <h2>Level</h2>\r\n              <h3 style=\"color: black; font-weight: bold;\">{{tech.Value}}</h3>\r\n            </ion-col>\r\n            <ion-col>\r\n              <h2>Cost</h2>\r\n              <h3 style=\"color: black; font-weight: bold;\">{{tech.Cost}}</h3>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button class=\"headerSpace\" color=\"success\" (click)=\"buyTech(tech)\"><ion-icon name=\"cash\"></ion-icon></ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-label style=\"white-space: break-spaces;color: black; font-weight: bold;\">\r\n              {{tech.Description}}   \r\n            </ion-label>\r\n          </ion-row>      \r\n        </ion-card-content>\r\n        </ion-card>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_buy-tech_buy-tech_module_ts-es2015.js.map