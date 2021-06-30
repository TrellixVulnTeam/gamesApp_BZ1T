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


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/db.service */
      73773);

      var _ShipsPage = /*#__PURE__*/function () {
        function ShipsPage(db) {
          _classCallCheck(this, ShipsPage);

          this.db = db;
          this.shipList = [];
        }

        _createClass(ShipsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.db.dbState().subscribe(function (res) {
              if (res) {
                _this.db.fetchShipsOwner().subscribe(function (item) {
                  _this.shipList = item;
                  console.log(_this.shipList);
                });
              }
            });
          }
        }]);

        return ShipsPage;
      }();

      _ShipsPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }];
      };

      _ShipsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcy5wYWdlLnNjc3MifQ== */";
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


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Owner Ships</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let ship of shipList; let i = index\">\r\n      <ion-label>\r\n        <h2>{{ship.Type}}</h2>\r\n        <h3>{{ship.Class}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_space_ships_ships_module_ts-es5.js.map