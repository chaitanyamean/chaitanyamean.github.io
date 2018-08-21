(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country-view/country-view.component */ "./src/app/country-view/country-view.component.ts");
/* harmony import */ var _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./country-details/country-details.component */ "./src/app/country-details/country-details.component.ts");
/* harmony import */ var _shared_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/country-list/country-list.component */ "./src/app/shared/country-list/country-list.component.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{ path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'country-list/:id', component: _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_8__["CountryViewComponent"] },
    { path: 'country-details/:id', component: _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_9__["CountryDetailsComponent"] }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_8__["CountryViewComponent"],
                _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_9__["CountryDetailsComponent"],
                _shared_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_10__["CountryListComponent"],
                _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appservice.service.ts":
/*!***************************************!*\
  !*** ./src/app/appservice.service.ts ***!
  \***************************************/
/*! exports provided: AppserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppserviceService", function() { return AppserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppserviceService = /** @class */ (function () {
    function AppserviceService(http) {
        this.http = http;
        this.url = 'https://restcountries.eu/rest/v2';
        this.currencyList = [];
        this.langList = [];
        this.regList = [];
    }
    AppserviceService.prototype.getAllCountries = function () {
        var response = this.http.get(this.url + '/all');
        return response;
    };
    AppserviceService.prototype.getRegion = function (region) {
        var response = this.http.get(this.url + '/region/' + region);
        return response;
    };
    AppserviceService.prototype.getCurrency = function (code) {
        var response = this.http.get(this.url + '/currency/' + code);
        return response;
    };
    AppserviceService.prototype.getCountryDetails = function (code) {
        var response = this.http.get(this.url + '/name/' + code);
        return response;
    };
    AppserviceService.prototype.getLangauge = function (code) {
        var response = this.http.get(this.url + '/lang/' + code);
        return response;
    };
    AppserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppserviceService);
    return AppserviceService;
}());



/***/ }),

/***/ "./src/app/country-details/country-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/country-details/country-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-class {\n    margin-top: 2%; \n}\n\n.curclass > li{\n    color: red;\n    cursor: pointer;\n}\n\n.curclass > li:hover{\n    color: blue;\n    text-decoration: underline;\n}"

/***/ }),

/***/ "./src/app/country-details/country-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/country-details/country-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-4\" *ngIf=\"!isLoading\">\n  <button class=\"btn-primary\" (click)=\"goBack()\">Go Back</button>\n</div>\n\n<app-loader *ngIf=\"isLoading\"></app-loader>\n\n<div *ngIf=\"response && isEnabled && !isLoading\">\n\n  <div class=\"container mt-3\" *ngFor=\"let item of response\">\n\n    <div class=\"card mb-3 flag\">\n      <img class=\"card-img-top\" src=\"{{item.flag}}\" alt=\"Card image cap\">\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Country Name: {{item.name}}</h5>\n          </div>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Alpha2Code: {{item.alpha2Code}}</li>\n            <li class=\"list-group-item\">Alpha3Code: {{item.alpha3Code}}</li>\n            <li class=\"list-group-item\">Area: {{item.area}}</li>\n            <li class=\"list-group-item\">Capital: {{item.capital}}</li>\n            <li class=\"list-group-item\">Cioc: {{item.cioc}}</li>\n            <li class=\"list-group-item\">Demonym: {{item.demonym}}</li>\n            <li class=\"list-group-item\">Gini: {{item.gini}}</li>\n            <li class=\"list-group-item\">NativeName: {{item.nativeName}}</li>\n            <li class=\"list-group-item\">NumericCode: {{item.numericCode}}</li>\n            <li class=\"list-group-item\">Population: {{item.population}}</li>\n            <li class=\"list-group-item\">Region: {{item.region}}</li>\n            <li class=\"list-group-item\">Subregion: {{item.subregion}}</li>\n          </ul>\n        </div>\n        <div class=\"card data-class\" *ngIf=\"item?.latlng\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <p>Latitude: {{item.latlng[0]}}</p>\n              <p>Longitude: {{item.latlng[1]}}</p>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card data-class\" *ngIf=\"item?.callingCodes\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <h5>\n                Calling Codes:\n              </h5>\n              <p *ngFor=\"let item of item.callingCodes\">{{item}}</p>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"card data-class\" *ngIf=\"item?.altSpellings\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <h5>\n                Alt Spellings:\n              </h5>\n              <p *ngFor=\"let item of item.altSpellings\">{{item}}</p>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"card data-class\" *ngIf=\"item?.regionalBlocs\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <h5>\n                Regional Blocks:\n              </h5>\n              <p *ngFor=\"let item of item.regionalBlocs\">{{item.name}}</p>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"card data-class\" *ngIf=\"item?.timezones\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <h5>\n                Time Zone:\n              </h5>\n              <p *ngFor=\"let item of item.timezones\">{{item}}</p>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"card data-class\" *ngIf=\"item?.topLevelDomain\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <h5>\n                Top Level Domain:\n              </h5>\n              <p *ngFor=\"let item of item.topLevelDomain\">{{item}}</p>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card data-class\" *ngIf=\"item?.languages\">\n          <h5>Langauges:</h5>\n                <ol class=\"curclass\">\n              <li *ngFor=\"let item of item.languages\" (click)=\"langauge(item)\">{{item.name}}</li>\n            </ol>\n        </div>\n\n        <div class=\"card data-class mb-4\" *ngIf=\"item?.currencies\">\n          <h5>Currencies:</h5>\n                <ol class=\"curclass\">\n              <li *ngFor=\"let item of item.currencies\" (click)=\"currency(item)\">{{item.name}}</li>\n            </ol>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!isEnabled && !isLoading\">\n<app-country-list [response]=\"langResponse\"  (viewDetails)=\"view($event)\" (currencyDetails)=\"currency($event)\" (languageDetails)=\"langauge($event)\"></app-country-list>\n</div>"

/***/ }),

/***/ "./src/app/country-details/country-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/country-details/country-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appservice.service */ "./src/app/appservice.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryDetailsComponent = /** @class */ (function () {
    function CountryDetailsComponent(service, route, loc, router) {
        this.service = service;
        this.route = route;
        this.loc = loc;
        this.router = router;
        this.response = [];
        this.langResponse = [];
        this.id = route.snapshot.params.id;
    }
    CountryDetailsComponent.prototype.ngOnInit = function () {
        this.getCountryDetails(this.id);
    };
    // Country Details
    CountryDetailsComponent.prototype.getCountryDetails = function (id) {
        var _this = this;
        this.isLoading = true;
        this.service.getCountryDetails(id).subscribe(function (data) {
            _this.isEnabled = true;
            _this.response = data;
            _this.flag = _this.response.flag;
            _this.isLoading = false;
        });
    };
    CountryDetailsComponent.prototype.goBack = function () {
        this.loc.back();
    };
    // Currency Details
    CountryDetailsComponent.prototype.currency = function (item) {
        var _this = this;
        this.isEnabled = false;
        this.isLoading = true;
        this.service.getCurrency(item.code).subscribe(function (data) {
            _this.langResponse = data;
            _this.isLoading = false;
        });
    };
    CountryDetailsComponent.prototype.view = function (data) {
        this.getCountryDetails(data);
    };
    // Langauge Detais
    CountryDetailsComponent.prototype.langauge = function (item) {
        var _this = this;
        this.isEnabled = false;
        this.isLoading = true;
        this.service.getLangauge(item.iso639_1).subscribe(function (data) {
            _this.langResponse = data;
            _this.isLoading = false;
        });
    };
    CountryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-details',
            template: __webpack_require__(/*! ./country-details.component.html */ "./src/app/country-details/country-details.component.html"),
            styles: [__webpack_require__(/*! ./country-details.component.css */ "./src/app/country-details/country-details.component.css")]
        }),
        __metadata("design:paramtypes", [_appservice_service__WEBPACK_IMPORTED_MODULE_1__["AppserviceService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountryDetailsComponent);
    return CountryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/country-view/country-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/country-view/country-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable-menu {\r\n    height: auto;\r\n    max-height: 200px;\r\n    overflow-x: hidden;\r\n    width: 250px;\r\n    cursor: pointer;\r\n}\r\n\r\n.scrollable-menu>li:hover {\r\n    background: green;\r\n    color: white;\r\n}\r\n\r\n.cclass {\r\n    margin-top: 10px;\r\n}\r\n\r\n.icls> img {\r\n    height: 200px;\r\n}\r\n\r\n.vcls {\r\n    text-align: center;\r\n}\r\n\r\n.curclass > a{\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n.primaryButton {\r\n    background-color: black;\r\n    color: white;\r\n\r\n}"

/***/ }),

/***/ "./src/app/country-view/country-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/country-view/country-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-4\" *ngIf=\"!isLoading\">\n  <button class=\"btn-primary\" (click)=\"goBack()\">Go Back</button>\n</div>\n\n\n<app-loader *ngIf=\"isLoading\"></app-loader>\n\n\n<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group mt-4\" *ngIf=\"currencyList\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle primaryButton\" data-toggle=\"dropdown\">\n          {{currencyName}} <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu scrollable-menu\" role=\"menu\">\n          <li  *ngFor=\"let item of currencyList\" (click)=\"currency(item)\"><a>{{item.name | uppercase }}</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"btn-group mt-4\" *ngIf=\"langList\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle primaryButton\" data-toggle=\"dropdown\">\n              {{langName}} <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu scrollable-menu\" role=\"menu\">\n              <li  *ngFor=\"let item of langList\" (click)=\"language(item)\"><a>{{item.name | uppercase }}</a></li>\n            </ul>\n          </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"btn-group mt-4\" *ngIf=\"regionList\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle primaryButton\" data-toggle=\"dropdown\">\n              {{regionName}} <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu scrollable-menu\" role=\"menu\">\n              <li  *ngFor=\"let item of regionList\" (click)=\"region(item)\"><a>{{item | uppercase }}</a></li>\n            </ul>\n          </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"container\" *ngIf=\"response\">\n  <div class=\"row\">\n    <div class=\"col-md-4 cclass\" *ngFor=\"let item of response\">\n      <div class=\"card icls\">\n        <img class=\"card-img-top\" src=\"{{item.flag}}\" alt=\"Card image cap\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Name: {{item.name}}</li>\n          <li class=\"list-group-item\">Capital: {{item.capital}}</li>\n          <li class=\"list-group-item\">Sub Regions: {{item.subregion}}</li>\n        </ul>\n        <div class=\"card-body curclass\">\n            Currency:\n          <a  class=\"card-link\" *ngFor=\"let i of item.currencies\" (click)=\"currency(i)\"> <u>{{i.name}}</u></a>\n        </div>\n        <div class=\"card-body curclass\">\n          Language:\n        <a  class=\"card-link\" *ngFor=\"let i of item.languages\" (click)=\"language(i)\"> <u>{{i.name}}</u></a>\n      </div>\n            <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item vcls\">\n            <button class=\"btn-primary\" (click)=\"view(item.name)\">View Details</button>\n          </li>\n          </ul>       \n      </div>\n    </div>\n  </div>\n</div> -->\n\n<app-country-list  *ngIf=\"!isLoading\" [response]=\"response\" (viewDetails)=\"view($event)\" (currencyDetails)=\"currency($event)\" (languageDetails)=\"language($event)\"></app-country-list>"

/***/ }),

/***/ "./src/app/country-view/country-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-view/country-view.component.ts ***!
  \********************************************************/
/*! exports provided: CountryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryViewComponent", function() { return CountryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appservice.service */ "./src/app/appservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryViewComponent = /** @class */ (function () {
    function CountryViewComponent(service, router, route, loc) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.loc = loc;
        this.currencyList = [];
        this.langList = [];
        this.response = [];
        this.regionList = [];
        this.id = router.snapshot.params.id;
    }
    CountryViewComponent.prototype.ngOnInit = function () {
        this.currencyName = 'Select Currency';
        this.langName = 'Select Langauge';
        this.currencyList = this.service.currencyList;
        this.langList = this.service.langList;
        this.regionList = this.service.regList;
        if (this.service.currencyList.length > 0 || this.service.langList.length > 0 || this.service.regList.length > 0) {
            this.getRegion(this.id);
        }
        else {
            this.route.navigate(['/']);
        }
    };
    // Region Details
    CountryViewComponent.prototype.getRegion = function (item) {
        var _this = this;
        this.isLoading = true;
        this.regionName = item;
        this.service.getRegion(item).subscribe(function (res) {
            _this.response = res;
            _this.isLoading = false;
        });
    };
    // Currency Details
    CountryViewComponent.prototype.currency = function (item) {
        var _this = this;
        this.isLoading = true;
        this.currencyName = item.name;
        this.langName = 'Select Langauge';
        this.regionName = 'Select Region';
        this.service.getCurrency(item.code).subscribe(function (data) {
            _this.response = data;
            _this.isLoading = false;
        });
    };
    CountryViewComponent.prototype.view = function (data) {
        this.route.navigate(['country-details', data]);
    };
    // Langauge Details
    CountryViewComponent.prototype.language = function (item) {
        var _this = this;
        this.isLoading = true;
        this.currencyName = 'Select Currency';
        this.regionName = 'Select Region';
        this.langName = item.name;
        this.service.getLangauge(item.iso639_1).subscribe(function (data) {
            _this.response = data;
            _this.isLoading = false;
        });
    };
    // Region Details
    CountryViewComponent.prototype.region = function (item) {
        this.isLoading = true;
        this.currencyName = 'Select Currency';
        this.langName = 'Select Langauge';
        this.getRegion(item);
        this.isLoading = false;
    };
    CountryViewComponent.prototype.goBack = function () {
        this.loc.back();
    };
    CountryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-view',
            template: __webpack_require__(/*! ./country-view.component.html */ "./src/app/country-view/country-view.component.html"),
            styles: [__webpack_require__(/*! ./country-view.component.css */ "./src/app/country-view/country-view.component.css")]
        }),
        __metadata("design:paramtypes", [_appservice_service__WEBPACK_IMPORTED_MODULE_1__["AppserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CountryViewComponent);
    return CountryViewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable{\r\n   overflow: auto;\r\n   width: 70px; /* adjust this width depending to amount of text to display */\r\n   height: 80px; /* adjust height depending on number of options to display */\r\n   border: 1px silver solid;\r\n }\r\n .scrollable select{\r\n   border: none;\r\n }\r\n .cclass {\r\n     margin: 5%;\r\n }\r\n .card-body {\r\n     text-align: center;\r\n }\r\n .cclass> img {\r\n     height: 200px;\r\n }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-light bg-dark\">\n    <a class=\"navbar-brand\">Navbar</a>\n  </nav> -->\n  \n  <app-loader *ngIf=\"isLoading\"></app-loader>\n\n\n<div class=\"card-group container\" *ngIf=\"finalList && !isLoading\">\n  <div class=\"row\">\n      <div class=\"col-md-6\" *ngFor='let item of finalList'>\n     <div class=\"card cclass\">\n      <img class=\"card-img-top\" src=\"{{item.image}}\" alt=\"Card image cap\">\n    \n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{item.region}}</h5>\n        <button class=\"btn-primary\" (click)=\"region(item.region)\">View Countries</button>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appservice.service */ "./src/app/appservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, router) {
        this.service = service;
        this.router = router;
        this.regList = [];
        this.countryList = [];
        this.currencyList = [];
        this.curFilteredList = [];
        this.mapsArray = ['../assets/aa.jpg', '../assets/ee.png', '../assets/afr.png', '../assets/oce.jpg', '../assets/americans.jpeg', '../assets/polars.png'];
        this.finalList = [];
        this.langList = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getAllCountries().subscribe(function (data) {
            _this.countryList = data;
            for (var _i = 0, _a = _this.countryList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.region === "") {
                }
                else {
                    _this.regList.push(item.region);
                }
                for (var _b = 0, _c = item.currencies; _b < _c.length; _b++) {
                    var currency = _c[_b];
                    _this.currencyList.push(currency);
                }
                for (var _d = 0, _e = item.languages; _d < _e.length; _d++) {
                    var language = _e[_d];
                    _this.langList.push(language);
                }
            }
            _this.regList = _this.filterData(_this.regList);
            for (var _f = 0, _g = _this.regList; _f < _g.length; _f++) {
                var item = _g[_f];
                _this.finalList.push({ 'region': item, 'image': '' });
            }
            var i = 0;
            for (var _h = 0, _j = _this.mapsArray; _h < _j.length; _h++) {
                var item = _j[_h];
                _this.finalList[i].image = item;
                i++;
            }
            _this.currencyList = _this.filterData(_this.currencyList);
            localStorage.setItem('currency', _this.currencyList);
            _this.isLoading = false;
        });
    };
    DashboardComponent.prototype.filterData = function (data) {
        var filteredData = data.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        return filteredData;
    };
    DashboardComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
        }
    };
    // Region Details
    DashboardComponent.prototype.region = function (data) {
        this.service.currencyList = this.currencyList;
        this.service.langList = this.langList;
        this.service.regList = this.regList;
        this.router.navigate(['country-list', data]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_appservice_service__WEBPACK_IMPORTED_MODULE_1__["AppserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/shared/country-list/country-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/country-list/country-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cclass {\r\n    margin-top: 10px;\r\n}\r\n\r\n.icls> img {\r\n    height: 200px;\r\n}\r\n\r\n.vcls {\r\n    text-align: center;\r\n}\r\n\r\n.curclass > a{\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n.primaryButton {\r\n    background-color: black;\r\n    color: white;\r\n\r\n}"

/***/ }),

/***/ "./src/app/shared/country-list/country-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/country-list/country-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"response\">\n    <div class=\"row\">\n      <div class=\"col-md-4 cclass\" *ngFor=\"let item of response\">\n        <div class=\"card icls\">\n          <img class=\"card-img-top\" src=\"{{item.flag}}\" alt=\"Card image cap\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Name: {{item.name}}</li>\n            <li class=\"list-group-item\">Capital: {{item.capital}}</li>\n            <li class=\"list-group-item\">Sub Regions: {{item.subregion}}</li>\n          </ul>\n          <div class=\"card-body curclass\">\n              Currency:\n            <a  class=\"card-link\" *ngFor=\"let i of item.currencies\" (click)=\"currency(i)\"> <u>{{i.name}}</u></a>\n          </div>\n          <div class=\"card-body curclass\">\n            Language:\n          <a  class=\"card-link\" *ngFor=\"let i of item.languages\" (click)=\"language(i)\"> <u>{{i.name}}</u></a>\n        </div>\n              <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item vcls\">\n              <button class=\"btn-primary\" (click)=\"view(item.name)\">View Details</button>\n            </li>\n            </ul>       \n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/shared/country-list/country-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/country-list/country-list.component.ts ***!
  \***************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryListComponent = /** @class */ (function () {
    function CountryListComponent() {
        this.viewDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currencyDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.languageDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CountryListComponent.prototype.ngOnInit = function () {
    };
    CountryListComponent.prototype.view = function (item) {
        this.viewDetails.emit(item);
    };
    // Currency Details
    CountryListComponent.prototype.currency = function (item) {
        this.currencyDetails.emit(item);
    };
    // Language Details
    CountryListComponent.prototype.language = function (item) {
        this.languageDetails.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CountryListComponent.prototype, "response", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CountryListComponent.prototype, "viewDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CountryListComponent.prototype, "currencyDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CountryListComponent.prototype, "languageDetails", void 0);
    CountryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-list',
            template: __webpack_require__(/*! ./country-list.component.html */ "./src/app/shared/country-list/country-list.component.html"),
            styles: [__webpack_require__(/*! ./country-list.component.css */ "./src/app/shared/country-list/country-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryListComponent);
    return CountryListComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n#loader {\r\n    bottom: 0;\r\n    height: 175px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 175px;\r\n}\r\n#loader {\r\n    bottom: 0;\r\n    height: 175px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 175px;\r\n}\r\n#loader .dot {\r\n    bottom: 0;\r\n    height: 100%;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 87.5px;\r\n}\r\n#loader .dot::before {\r\n    border-radius: 100%;\r\n    content: \"\";\r\n    height: 87.5px;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    width: 87.5px;\r\n}\r\n#loader .dot:nth-child(7n+1) {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n#loader .dot:nth-child(7n+1)::before {\r\n    -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\r\n            animation: 0.8s linear 0.1s normal none infinite running load;\r\n    background: #00ff80 none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+2) {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n#loader .dot:nth-child(7n+2)::before {\r\n    -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\r\n            animation: 0.8s linear 0.2s normal none infinite running load;\r\n    background: #00ffea none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+3) {\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n}\r\n#loader .dot:nth-child(7n+3)::before {\r\n    -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\r\n            animation: 0.8s linear 0.3s normal none infinite running load;\r\n    background: #00aaff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+4) {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n#loader .dot:nth-child(7n+4)::before {\r\n    -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\r\n            animation: 0.8s linear 0.4s normal none infinite running load;\r\n    background: #0040ff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+5) {\r\n    -webkit-transform: rotate(225deg);\r\n            transform: rotate(225deg);\r\n}\r\n#loader .dot:nth-child(7n+5)::before {\r\n    -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\r\n            animation: 0.8s linear 0.5s normal none infinite running load;\r\n    background: #2a00ff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+6) {\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n#loader .dot:nth-child(7n+6)::before {\r\n    -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\r\n            animation: 0.8s linear 0.6s normal none infinite running load;\r\n    background: #9500ff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+7) {\r\n    -webkit-transform: rotate(315deg);\r\n            transform: rotate(315deg);\r\n}\r\n#loader .dot:nth-child(7n+7)::before {\r\n    -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\r\n            animation: 0.8s linear 0.7s normal none infinite running load;\r\n    background: magenta none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+8) {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n#loader .dot:nth-child(7n+8)::before {\r\n    -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\r\n            animation: 0.8s linear 0.8s normal none infinite running load;\r\n    background: #ff0095 none repeat scroll 0 0;\r\n}\r\n#loader .lading {\r\n    /* background-image: url(\"../images/loading.gif\"); */\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    bottom: -40px;\r\n    height: 20px;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    width: 180px;\r\n}\r\n@-webkit-keyframes load {\r\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n}\r\n@keyframes load {\r\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n}\r\n@keyframes load {\r\n100% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"loader\">\n        <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"lading\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Downloads/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map