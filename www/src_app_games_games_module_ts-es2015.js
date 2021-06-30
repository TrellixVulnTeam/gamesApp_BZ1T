(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_games_module_ts"],{

/***/ 694:
/*!***********************************************!*\
  !*** ./src/app/games/games-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPageRoutingModule": function() { return /* binding */ GamesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.page */ 18358);




const routes = [
    {
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_0__.GamesPage
    },
    {
        path: 'space',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_games_space_space_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./space/space.module */ 70316)).then(m => m.SpacePageModule)
    },
    {
        path: 'ddice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_games_ddice_ddice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ddice/ddice.module */ 83476)).then(m => m.DdicePageModule)
    }
];
let GamesPageRoutingModule = class GamesPageRoutingModule {
};
GamesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamesPageRoutingModule);



/***/ }),

/***/ 88:
/*!***************************************!*\
  !*** ./src/app/games/games.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPageModule": function() { return /* binding */ GamesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-routing.module */ 694);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page */ 18358);







let GamesPageModule = class GamesPageModule {
};
GamesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesPageRoutingModule
        ],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_1__.GamesPage]
    })
], GamesPageModule);



/***/ }),

/***/ 18358:
/*!*************************************!*\
  !*** ./src/app/games/games.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPage": function() { return /* binding */ GamesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_games_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./games.page.html */ 93492);
/* harmony import */ var _games_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page.scss */ 24893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let GamesPage = class GamesPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.logout();
    }
    navigateToSpace() {
        this.router.navigateByUrl('/games/space');
    }
    navigateToDDice() {
        console.log('soy un boton 2');
    }
};
GamesPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
GamesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-games',
        template: _raw_loader_games_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_games_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GamesPage);



/***/ }),

/***/ 24893:
/*!***************************************!*\
  !*** ./src/app/games/games.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logout {\n  float: right;\n}\n\n#titleGame {\n  position: absolute;\n  margin: 0.5em;\n}\n\n.buttonSet {\n  margin-top: 6rem;\n  text-align: center;\n  display: grid;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUdKIiwiZmlsZSI6ImdhbWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI3RpdGxlR2FtZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG4uYnV0dG9uU2V0e1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 93492:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/games.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title id=\"titleGame\">Games</ion-title>\r\n    <ion-button id=\"logout\" fill=\"clear\" (click)=\"logOut()\">LogOut</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"buttonSet\">\r\n      <ion-button color=\"primary\" (click)=\"navigateToSpace()\">Space Empire 4X</ion-button>\r\n      <br>\r\n      <ion-button color=\"primary\" (click)=\"navigateToDDice()\">D-Dice</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_games_module_ts-es2015.js.map