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


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/db.service */
      73773);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_modal_modal_ship_modal_ship_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modal/modal-ship/modal-ship.page */
      69749);

      var _ShipsPage = /*#__PURE__*/function () {
        function ShipsPage(router, db, modalController, toastController) {
          _classCallCheck(this, ShipsPage);

          this.router = router;
          this.db = db;
          this.modalController = modalController;
          this.toastController = toastController;
          this.shipList = [];
        }

        _createClass(ShipsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.db.dbState().subscribe(function (res) {
              if (res) {
                _this.ships = _this.db.fetchShipsOwner();

                _this.db.getShipsOwner().then(function (data) {
                  console.log(data);
                });

                console.log(_this.ships);
              }
            });
          }
        }, {
          key: "destroyShip",
          value: function destroyShip(ship) {
            this.db.destroyShips(ship.id, 0).then(function (res) {});
          }
        }, {
          key: "presentModal",
          value: function presentModal(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_modal_modal_ship_modal_ship_page__WEBPACK_IMPORTED_MODULE_3__.ModalShipPage,
                        cssClass: 'modal',
                        componentProps: {
                          Attack_Strength: e.Attack_Strength,
                          Buy: e.Buy,
                          CP: e.CP,
                          Class: e.Class,
                          Defense_Strength: e.Defense_Strength,
                          Description: e.Description,
                          Hull_Size: e.Hull_Size,
                          TAttack: e.TAttack,
                          TDefense: e.TDefense,
                          TMove: e.TMove,
                          TOther: e.TOther,
                          TTactics: e.TTactics,
                          Type: e.Type,
                          id: e.id
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }];
      };

      _ShipsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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


      __webpack_exports__["default"] = ".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.caja {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6InNoaXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTcGFjZXtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uaGVhZGVyVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jYWphe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
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


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >  \r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let ship of ships |async\">\r\n      <!--<ion-item *ngFor=\"let ship of shipFake\">  -->\r\n          <ion-label>\r\n            <h2>{{ship.Type}}</h2>\r\n            <h3>{{ship.Class}}</h3>\r\n          </ion-label>\r\n          <ion-label>\r\n            <h2>Attack</h2>\r\n            <h3>{{ship.Attack_Strength}}</h3>\r\n          </ion-label>\r\n          <ion-label>\r\n            <h2>Defense</h2>\r\n            <h3>{{ship.Defense_Strength}}</h3>\r\n          </ion-label>\r\n            <ion-label style=\"margin: 3%;\">\r\n              <ion-button  class=\"headerSpace\" color=\"primary\" (click)=\"presentModal(ship)\"><ion-icon name=\"eye\"></ion-icon></ion-button>\r\n          </ion-label>  \r\n          <ion-label style=\"margin: 3%;\">\r\n            <ion-button class=\"headerSpace\" color=\"danger\" (click)=\"destroyShip(ship)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n        </ion-label>                       \r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_space_ships_ships_module_ts-es5.js.map