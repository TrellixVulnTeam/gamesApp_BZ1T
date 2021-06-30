(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_ships_ships_module_ts"], {
    /***/
    48636:
    /*!***********************************************************!*\
      !*** ./src/app/games/space/ships/ships-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShipsPageRoutingModule": function ShipsPageRoutingModule() {
          return (
            /* binding */
            _ShipsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ships_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ships.page */
      83086);

      var routes = [{
        path: '',
        component: _ships_page__WEBPACK_IMPORTED_MODULE_0__.ShipsPage
      }];

      var _ShipsPageRoutingModule = function ShipsPageRoutingModule() {
        _classCallCheck(this, ShipsPageRoutingModule);
      };

      _ShipsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ShipsPageRoutingModule);
      /***/
    },

    /***/
    1084:
    /*!***************************************************!*\
      !*** ./src/app/games/space/ships/ships.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShipsPageModule": function ShipsPageModule() {
          return (
            /* binding */
            _ShipsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ships_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ships-routing.module */
      48636);
      /* harmony import */


      var _ships_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ships.page */
      83086);

      var _ShipsPageModule = function ShipsPageModule() {
        _classCallCheck(this, ShipsPageModule);
      };

      _ShipsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ships_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShipsPageRoutingModule],
        declarations: [_ships_page__WEBPACK_IMPORTED_MODULE_1__.ShipsPage]
      })], _ShipsPageModule);
      /***/
    },

    /***/
    83086:
    /*!*************************************************!*\
      !*** ./src/app/games/space/ships/ships.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShipsPage": function ShipsPage() {
          return (
            /* binding */
            _ShipsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_ships_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ships.page.html */
      90678);
      /* harmony import */


      var _ships_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ships.page.scss */
      74493);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/db.service */
      73773);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ShipsPage = /*#__PURE__*/function () {
        function ShipsPage(router, db) {
          _classCallCheck(this, ShipsPage);

          this.router = router;
          this.db = db;
          this.shipList = [];
        }

        _createClass(ShipsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.db.dbState().subscribe(function (res) {
              console.log(res);

              if (res) {
                _this.ships = _this.db.fetchShipsOwner();
                console.log(_this.ships);
              }
            });
          }
        }, {
          key: "navigateToSapce",
          value: function navigateToSapce() {
            this.router.navigateByUrl('/games/space');
          }
        }]);

        return ShipsPage;
      }();

      _ShipsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }];
      };

      _ShipsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ships',
        template: _raw_loader_ships_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ships_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ShipsPage);
      /***/
    },

    /***/
    74493:
    /*!***************************************************!*\
      !*** ./src/app/games/space/ships/ships.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUoiLCJmaWxlIjoic2hpcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclNwYWNle1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuXHJcbi5oZWFkZXJUaXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnJlbTtcclxufVxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    90678:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/ships/ships.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >  \r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let ship of ships |async\">\r\n      <ion-label>\r\n        <h2>{{ship.Type}}</h2>\r\n        <h3>{{ship.Class}}</h3>\r\n      </ion-label>\r\n      <ion-label>\r\n        <h2>Attack</h2>\r\n        <h3>{{ship.Attack_Strength}}</h3>\r\n      </ion-label>\r\n      <ion-label>\r\n        <h2>Defense</h2>\r\n        <h3>{{ship.Defense_Strength}}</h3>\r\n      </ion-label>\r\n      <ion-label>\r\n        <h2>Hull Size</h2>\r\n        <h3>{{ship.Hull_Size}}</h3>\r\n      </ion-label>\r\n      <ion-label>\r\n        <ion-button class=\"headerSpace\" color=\"danger\"> <ion-icon name=\"trash\"></ion-icon>&nbsp;&nbsp; Destroy</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_space_ships_ships_module_ts-es5.js.map