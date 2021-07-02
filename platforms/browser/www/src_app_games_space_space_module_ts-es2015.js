(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_space_module_ts"],{

/***/ 42019:
/*!*****************************************************!*\
  !*** ./src/app/games/space/space-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpacePageRoutingModule": function() { return /* binding */ SpacePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _space_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space.page */ 73806);




const routes = [
    {
        path: '',
        component: _space_page__WEBPACK_IMPORTED_MODULE_0__.SpacePage
    },
    {
        path: 'ships',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_games_space_ships_ships_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ships/ships.module */ 1084)).then(m => m.ShipsPageModule)
    },
    {
        path: 'techs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_games_space_techs_techs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./techs/techs.module */ 31970)).then(m => m.TechsPageModule)
    },
    {
        path: 'buy-ships/:cps',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_games_space_buy-ships_buy-ships_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./buy-ships/buy-ships.module */ 14941)).then(m => m.BuyShipsPageModule)
    },
    {
        path: 'buy-tech/:cps',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_games_space_buy-tech_buy-tech_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./buy-tech/buy-tech.module */ 89471)).then(m => m.BuyTechPageModule)
    }
];
let SpacePageRoutingModule = class SpacePageRoutingModule {
};
SpacePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpacePageRoutingModule);



/***/ }),

/***/ 70316:
/*!*********************************************!*\
  !*** ./src/app/games/space/space.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpacePageModule": function() { return /* binding */ SpacePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _space_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-routing.module */ 42019);
/* harmony import */ var _space_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space.page */ 73806);







let SpacePageModule = class SpacePageModule {
};
SpacePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _space_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpacePageRoutingModule
        ],
        declarations: [_space_page__WEBPACK_IMPORTED_MODULE_1__.SpacePage]
    })
], SpacePageModule);



/***/ }),

/***/ 73806:
/*!*******************************************!*\
  !*** ./src/app/games/space/space.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpacePage": function() { return /* binding */ SpacePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_space_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./space.page.html */ 4063);
/* harmony import */ var _space_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space.page.scss */ 46583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ 73773);
/* harmony import */ var _services_turn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/turn */ 31159);








let SpacePage = class SpacePage {
    constructor(router, db) {
        this.router = router;
        this.db = db;
        this.turnList = [];
        this.shipList = [];
        this.total = 0;
        this.subTotal = 0;
        this.carryValue = 0;
        this.colonyValue = 0;
        this.mineralValue = 0;
        this.pipeValue = 0;
        this.manteninanceValue = 0;
        this.turnOrderBidValue = 0;
        this.updateValue = 0;
        this.remaining = 0;
    }
    ngOnInit() {
        this.ionicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            carry: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.carryValue),
            colony: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
            mineral: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
            pipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
            manteninance: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
            turnOrderBid: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
            update: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0)
        });
        this.db.dbState().subscribe((res) => {
            if (res) {
                this.db.fetchTurn().subscribe(item => {
                    this.turnList = item;
                    if (this.turnList.length > 0) {
                        this.carryValue = this.turnList[0].CPS;
                    }
                    else {
                        this.carryValue = 0;
                    }
                });
            }
        });
    }
    navigateToGames() {
        this.router.navigateByUrl('/games');
    }
    goToOwnerShips() {
        this.router.navigateByUrl('/games/space/ships');
    }
    goToOwnerTechs() {
        this.router.navigateByUrl('/games/space/techs');
    }
    goToBuyShips(cps) {
        this.router.navigate(['/games/space/buy-ships', cps]);
    }
    goToBuyTech(cps) {
        this.router.navigate(['/games/space/buy-tech', cps]);
    }
    updateCarry(e) {
        this.total = e + this.colonyValue + this.mineralValue + this.pipeValue;
    }
    updateColony(e) {
        this.total = this.carryValue + e + this.mineralValue + this.pipeValue;
    }
    updateMineral(e) {
        this.total = this.carryValue + this.colonyValue + e + this.pipeValue;
    }
    updatePipe(e) {
        this.total = this.carryValue + this.colonyValue + this.mineralValue + e;
    }
    updateManteninance(e) {
        this.subTotal = this.total - e - this.turnOrderBidValue;
        this.remaining = this.subTotal;
    }
    updateTurnOrderBid(e) {
        this.subTotal = this.total - this.manteninanceValue - e;
        this.remaining = this.subTotal;
    }
    updateUpdate(e) {
        this.remaining = this.subTotal - e;
    }
    cpForm() {
        let turnForm = new _services_turn__WEBPACK_IMPORTED_MODULE_3__.Turn();
        turnForm.CPS = this.remaining;
        this.total = this.remaining;
        this.db.updateTurn(0, turnForm).then((data) => {
            this.subTotal = 0;
            this.carryValue = 0;
            this.colonyValue = 0;
            this.mineralValue = 0;
            this.pipeValue = 0;
            this.manteninanceValue = 0;
            this.turnOrderBidValue = 0;
            this.updateValue = 0;
            this.remaining = 0;
        });
    }
};
SpacePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService }
];
SpacePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-space',
        template: _raw_loader_space_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_space_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpacePage);



/***/ }),

/***/ 73773:
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbService": function() { return /* binding */ DbService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 15855);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);







let DbService = class DbService {
    constructor(platform, sqlite, httpClient, sqlPorter) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.httpClient = httpClient;
        this.sqlPorter = sqlPorter;
        this.shipList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.turnList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.shipListOwner = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.techList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.techOwnerList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.isDbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'space_db.db',
                location: 'default'
            })
                .then((db) => {
                this.storage = db;
                this.getFakeData();
            });
        });
    }
    dbState() {
        return this.isDbReady.asObservable();
    }
    fetchShips() {
        return this.shipList.asObservable();
    }
    fetchShipsOwner() {
        return this.shipListOwner.asObservable();
    }
    fetchTurn() {
        return this.turnList.asObservable();
    }
    fetchTech() {
        return this.techList.asObservable();
    }
    fetchTechOwner() {
        return this.techOwnerList.asObservable();
    }
    // Render fake data
    getFakeData() {
        this.httpClient.get('assets/seed.sql', { responseType: 'text' }).subscribe(data => {
            this.sqlPorter.importSqlToDb(this.storage, data)
                .then(_ => {
                this.getShips();
                this.getTurn();
                this.getShipsOwner();
                this.getTechOwner();
                this.getTech();
                this.isDbReady.next(true);
            })
                .catch(error => console.error(error));
        });
    }
    getTechOwner() {
        return this.storage.executeSql('SELECT * FROM techs where Buy = 1', []).then(res => {
            let items = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        Id: res.rows.item(i).Id,
                        Name: res.rows.item(i).Name,
                        Value: res.rows.item(i).Value,
                        Cost: res.rows.item(i).Cost,
                        Description: res.rows.item(i).Description,
                        Buy: res.rows.item(i).Buy,
                    });
                }
            }
            this.techOwnerList.next(items);
        });
    }
    getTech() {
        return this.storage.executeSql('SELECT * FROM techs where Buy = 0', []).then(res => {
            let items = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        Id: res.rows.item(i).Id,
                        Name: res.rows.item(i).Name,
                        Value: res.rows.item(i).Value,
                        Cost: res.rows.item(i).Cost,
                        Description: res.rows.item(i).Description,
                        Buy: res.rows.item(i).Buy,
                    });
                }
            }
            this.techList.next(items);
        });
    }
    buyTech(id, buy) {
        let data = [buy];
        return this.storage.executeSql(`UPDATE techs SET Buy = ? WHERE Id = ${id}`, data)
            .then(data => {
            this.getTech();
            this.getTechOwner();
        });
    }
    // Get list
    getShips() {
        return this.storage.executeSql('SELECT * FROM ships where Buy = 0', []).then(res => {
            let items = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id: res.rows.item(i).Id,
                        Type: res.rows.item(i).Type,
                        Class: res.rows.item(i).Class,
                        CP: res.rows.item(i).CP,
                        Attack_Strength: res.rows.item(i).Attack_Strength,
                        Defense_Strength: res.rows.item(i).Defense_Strength,
                        Hull_Size: res.rows.item(i).Hull_Size,
                        Description: res.rows.item(i).Description,
                        Buy: res.rows.item(i).Buy,
                        TAttack: res.rows.item(i).TAttack,
                        TDefense: res.rows.item(i).TDefense,
                        TTactics: res.rows.item(i).TTactics,
                        TMove: res.rows.item(i).TMove,
                        TOther: res.rows.item(i).TOther,
                    });
                }
            }
            this.shipList.next(items);
        });
    }
    getShipsOwner() {
        return this.storage.executeSql('SELECT * FROM ships where Buy = 1', []).then(res => {
            let items = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id: res.rows.item(i).Id,
                        Type: res.rows.item(i).Type,
                        Class: res.rows.item(i).Class,
                        CP: res.rows.item(i).CP,
                        Attack_Strength: res.rows.item(i).Attack_Strength,
                        Defense_Strength: res.rows.item(i).Defense_Strength,
                        Hull_Size: res.rows.item(i).Hull_Size,
                        Description: res.rows.item(i).Description,
                        Buy: res.rows.item(i).Buy,
                        TAttack: res.rows.item(i).TAttack,
                        TDefense: res.rows.item(i).TDefense,
                        TTactics: res.rows.item(i).TTactics,
                        TMove: res.rows.item(i).TMove,
                        TOther: res.rows.item(i).TOther,
                    });
                }
            }
            this.shipListOwner.next(items);
        });
    }
    buyShip(id, buy) {
        let data = [buy];
        return this.storage.executeSql(`UPDATE ships SET Buy = ? WHERE id = ${id}`, data)
            .then(data => {
        });
    }
    updateShips(id, shipObject) {
        let data = [shipObject.TAttack, shipObject.TDefense, shipObject.TTactics, shipObject.TMove, shipObject.TOther];
        return this.storage.executeSql(`UPDATE ships SET TAttack = ? ,TDefense = ? ,TTactics = ? ,TMove = ? , TOther = ?  WHERE id = ${id}`, data)
            .then(data => {
            this.getShips();
            this.getShipsOwner();
        });
    }
    destroyShips(id, buy) {
        let data = [buy];
        return this.storage.executeSql(`UPDATE ships SET Buy = ? WHERE id = ${id}`, data)
            .then(data => {
            this.getShipsOwner();
            this.getShips();
        });
    }
    updateTurn(id, turnObject) {
        let data = [turnObject.CPS];
        return this.storage.executeSql(`UPDATE turn SET CPS = ? WHERE id = ${id}`, data)
            .then(data => {
            this.getTurn();
        });
    }
    getTurn() {
        return this.storage.executeSql('SELECT * FROM turn', []).then(res => {
            let items = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        Id: res.rows.item(i).Id,
                        CPS: res.rows.item(i).CPS,
                    });
                }
            }
            this.turnList.next(items);
        });
        // Add
        /* addSong(artist_name, song_name) {
          let data = [artist_name, song_name];
          return this.storage.executeSql('INSERT INTO songtable (artist_name, song_name) VALUES (?, ?)', data)
          .then(res => {
            this.getSongs();
          });
        } */
        /*  // Get single object
         getSong(id): Promise<Ship> {
           return this.storage.executeSql('SELECT * FROM songtable WHERE id = ?', [id]).then(res => {
             return {
               id: res.rows.item(0).id,
               artist_name: res.rows.item(0).artist_name,
               song_name: res.rows.item(0).song_name
             }
           });
         }
       
         // Update
         updateSong(id, song: Ship) {
           let data = [song.artist_name, song.song_name];
           return this.storage.executeSql(`UPDATE songtable SET artist_name = ?, song_name = ? WHERE id = ${id}`, data)
           .then(data => {
             this.getSongs();
           })
         }
       
         // Delete
         deleteSong(id) {
           return this.storage.executeSql('DELETE FROM songtable WHERE id = ?', [id])
           .then(_ => {
             this.getSongs();
           });
         } */
    }
};
DbService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLitePorter }
];
DbService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DbService);



/***/ }),

/***/ 31159:
/*!**********************************!*\
  !*** ./src/app/services/turn.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Turn": function() { return /* binding */ Turn; }
/* harmony export */ });
class Turn {
}


/***/ }),

/***/ 46583:
/*!*********************************************!*\
  !*** ./src/app/games/space/space.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.menuButton {\n  display: flex;\n  justify-content: center;\n}\n\n.inputCp {\n  text-align: center;\n  position: absolute;\n  left: 26%;\n}\n\n.carryOver {\n  margin-top: 1rem;\n  text-align: center;\n  padding: 0;\n}\n\n.carry {\n  margin-top: 2em;\n}\n\n.colony {\n  margin-top: 7em;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.mineral {\n  margin-top: 12em;\n}\n\n.pipe {\n  margin-top: 17em;\n}\n\n.manteninance {\n  margin-top: 25em;\n  color: red;\n}\n\n.turnOrderBid {\n  margin-top: 29em;\n  color: red;\n}\n\n.total {\n  position: absolute;\n  margin-top: 22em;\n  background: gainsboro;\n  text-align: center;\n  width: 100%;\n}\n\n.formClass {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKRTtFQUNFLFNBQUE7QUFPSiIsImZpbGUiOiJzcGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyU3BhY2V7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmhlYWRlclRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG59XHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVCdXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmlucHV0Q3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjYlO1xyXG4gIH1cclxuXHJcbiAgLmNhcnJ5T3ZlcntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcnJ5e1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9ueXtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1pbmVyYWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMmVtO1xyXG4gIH1cclxuICAucGlwZXtcclxuICAgIG1hcmdpbi10b3A6IDE3ZW07XHJcbiAgfVxyXG4gIC5tYW50ZW5pbmFuY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAyNWVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLnR1cm5PcmRlckJpZHtcclxuICAgIG1hcmdpbi10b3A6IDI5ZW07XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAudG90YWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMmVtO1xyXG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb3JtQ2xhc3N7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 4063:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/space.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar >  \r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToGames()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-title class=\"headerTitle\">Space Empire 4X</ion-title>\r\n  <section class=\"menuButton\">\r\n    <ion-button style=\"width: 4rem;\" size=\"small\">CP'S</ion-button>\r\n    <ion-button style=\"width: 4rem;\" size=\"small\" color=\"secondary\" (click)=\"goToOwnerShips()\">SHIPS</ion-button>\r\n    <ion-button style=\"width: 4rem;\" size=\"small\" color=\"success\" (click)=\"goToOwnerTechs()\">TECHS</ion-button>\r\n    <ion-button style=\"width: 4rem;\" size=\"small\" color=\"warning\">RESET</ion-button>\r\n  </section>\r\n\r\n  <form  [formGroup]=\"ionicForm\" (ngSubmit)=\"cpForm()\" novalidate>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"carryOver\">\r\n        <strong>Carry Over (max 30)</strong>\r\n        <ion-input (ionFocus)=\"this.carryValue = ''\" type=\"number\" max={30} min={0} formControlName=\"carry\" [(ngModel)]=\"carryValue\" (ionChange)=\"updateCarry(carryValue)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"carryOver\">\r\n        <ion-col>\r\n          <strong>+ Colony CPs</strong>\r\n          <ion-input (ionFocus)=\"this.colonyValue = ''\" style=\"text-align: center;\" type=\"number\" min={0} formControlName=\"colony\" [(ngModel)]=\"colonyValue\" (ionChange)=\"updateColony(colonyValue)\"></ion-input>\r\n          \r\n        </ion-col>\r\n        <ion-col>\r\n          <strong>+ Mineral CPs</strong>\r\n      <ion-input (ionFocus)=\"this.mineralValue = ''\" style=\"text-align: center;\" type=\"number\" min={0} formControlName=\"mineral\" [(ngModel)]=\"mineralValue\" (ionChange)=\"updateMineral(mineralValue)\"></ion-input>\r\n      \r\n        </ion-col>\r\n        <ion-col>\r\n          <strong>+ MS Pipe CPs</strong>\r\n      <ion-input (ionFocus)=\"this.pipeValue = ''\" style=\"text-align: center;\" type=\"number\" min={0} formControlName=\"pipe\" [(ngModel)]=\"pipeValue\" (ionChange)=\"updatePipe(pipeValue)\"></ion-input>\r\n   \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div style=\"text-align: center;background-color: lightgrey;\"><strong style=\"text-align: center;\">Total {{total}}</strong></div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"carryOver\">\r\n        <ion-col>\r\n          <strong style=\"color: red;\">- Manteninance</strong>\r\n          <ion-input (ionFocus)=\"this.manteninanceValue = ''\"  style=\"text-align: center;color: red;\" type=\"number\" min={0} formControlName=\"manteninance\" [(ngModel)]=\"manteninanceValue\" (ionChange)=\"updateManteninance(manteninanceValue)\"></ion-input>       \r\n        </ion-col>\r\n        <ion-col>\r\n          <strong style=\"color: red;\">- Turn order bid</strong>\r\n          <ion-input (ionFocus)=\"this.turnOrderBidValue = ''\" style=\"text-align: center;color: red;\" type=\"number\" min={0} formControlName=\"turnOrderBid\" [(ngModel)]=\"turnOrderBidValue\" (ionChange)=\"updateTurnOrderBid(turnOrderBidValue)\"></ion-input>     \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div style=\"text-align: center;background-color: lightgrey;\"><strong style=\"text-align: center;\">SubTotal {{subTotal}}</strong></div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"carryOver\">\r\n        <ion-col>\r\n          <ion-button size=\"small\" (click)=\"goToBuyShips(subTotal)\"><ion-icon name=\"airplane\"></ion-icon>&nbsp;&nbsp;Buy Ships</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button size=\"small\" (click)=\"goToBuyTech(subTotal)\"><ion-icon name=\"construct\"></ion-icon>&nbsp;&nbsp;Buy Techs</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"carryOver\" style=\"color: red;\">\r\n        <strong>- CP spent on upgrades</strong>\r\n        <ion-input  (ionFocus)=\"this.updateValue = ''\" type=\"number\" min={0} formControlName=\"update\" [(ngModel)]=\"updateValue\" (ionChange)=\"updateUpdate(updateValue)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"text-align: center;background-color: lightgrey;\"> \r\n        <ion-col>\r\n          <div ><strong style=\"text-align: center;\">Remaining CP {{remaining}}</strong></div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button size=\"small\" type=\"submit\" color=\"secondary\"><ion-icon name=\"save\"></ion-icon>&nbsp;&nbsp;SAVE</ion-button>\r\n         </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_space_module_ts-es2015.js.map