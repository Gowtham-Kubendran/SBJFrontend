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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gold-schemes/gold-schemes.component */ "./src/app/components/gold-schemes/gold-schemes.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collections/collections.component */ "./src/app/components/collections/collections.component.ts");
/* harmony import */ var _components_set_prices_set_prices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/set-prices/set-prices.component */ "./src/app/components/set-prices/set-prices.component.ts");











var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products/:metal',
        component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
    },
    {
        path: 'goldschemes',
        component: _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_6__["GoldSchemesComponent"]
    },
    {
        path: 'contactus',
        component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"]
    },
    {
        path: 'aboutus',
        component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__["AboutusComponent"]
    },
    {
        path: 'collections',
        component: _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_9__["CollectionsComponent"]
    },
    {
        path: 'setprices',
        component: _components_set_prices_set_prices_component__WEBPACK_IMPORTED_MODULE_10__["SetPricesComponent"]
    },
    {
        path: "**",
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".openchrome {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  line-height: 1.5em;\n  background-color: #444;\n  color: white;\n  text-align: center;\n  font-family: 'opB';\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqZ2l0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFjO0VBQ2QsU0FBUTtFQUNSLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVuY2hyb21lXHJcbntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6J29wQic7XHJcbiAgICBmb250LXNpemU6MThweDtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sh) {
        this.sh = sh;
        this.title = 'SriBalagopalanJewelleryMart';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Blink engine detection
        window.sessionStorage.setItem('lang', "EN");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topselling/topselling.component */ "./src/app/components/topselling/topselling.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gold-schemes/gold-schemes.component */ "./src/app/components/gold-schemes/gold-schemes.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/collections/collections.component */ "./src/app/components/collections/collections.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_talktous_talktous_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/talktous/talktous.component */ "./src/app/components/talktous/talktous.component.ts");
/* harmony import */ var _components_todaysrate_todaysrate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/todaysrate/todaysrate.component */ "./src/app/components/todaysrate/todaysrate.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_set_prices_set_prices_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/set-prices/set-prices.component */ "./src/app/components/set-prices/set-prices.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__["TopsellingComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"],
                _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__["TopSellingDialog"],
                _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__["DialogDataExample"],
                _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_13__["GoldSchemesComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutusComponent"],
                _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__["CollectionsComponent"],
                _components_talktous_talktous_component__WEBPACK_IMPORTED_MODULE_19__["TalktousComponent"],
                _components_todaysrate_todaysrate_component__WEBPACK_IMPORTED_MODULE_20__["TodaysrateComponent"],
                _components_set_prices_set_prices_component__WEBPACK_IMPORTED_MODULE_22__["SetPricesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModuleModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"], _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__["DialogDataExample"], _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__["TopSellingDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutuswrapper\">\r\n    <app-header class=\"headerfixed\"></app-header>\r\n    \r\n\r\n      <div class=\"schemebody\">\r\n          <app-todaysrate></app-todaysrate>\r\n          <div class=\"productheroimgdiv\">\r\n            <img class=\"productheroimg\" src=\"../../../assets/images/banners/shop1.jpg\" />\r\n          </div>\r\n          <div class=\"schemetext\">\r\n            <div class=\"bodyHeading\">\r\n              {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('story') |  uppercase}}</span>\r\n          </div>\r\n          <p>\r\n            {{ts.translate('aboutusdata1')}}\r\n          </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"linkstab\">\r\n        <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\r\n        <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToPage('aboutus')\"  >{{ts.translate('aboutus')}} </a></span> </span> \r\n      \r\n    \r\n      </div>\r\n      <app-footer></app-footer>\r\n      </div>\r\n    "

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schemebody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: right;\n     object-position: right; }\n\n.schemetext {\n  padding: 2em 6em; }\n\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n\n.bold {\n  font-family: 'opEB','tamilf'; }\n\np {\n  font-size: 18px;\n  line-height: 2em;\n  text-align: justify; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR','tamilf';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .schemetext {\n    padding: 2em; }\n  p {\n    font-size: 14px; }\n  .linkstab {\n    padding: 11px 40px; }\n  .productheroimg {\n    -o-object-position: 95% 90%;\n       object-position: 95% 90%; } }\n\n.headerfixed {\n  position: fixed;\n  z-index: 99;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiamdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXR1c1xcYWJvdXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIseUJBQXNCO0tBQXRCLHNCQUFzQixFQUFBOztBQUUxQjtFQUVJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVFLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQVk7RUFDWiw4QkFBNkIsRUFBQTs7QUFFL0I7RUFFSSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUVFLG9CQUFvQjtFQUNwQixXQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsV0FBVTtFQUNWLGtCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUlmO0VBRUksZUFBYyxFQUFBOztBQUdoQjtFQUNFO0lBRUUsWUFBVyxFQUFBO0VBR2I7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFFSSxrQkFBa0IsRUFBQTtFQUV0QjtJQUVFLDJCQUF3QjtPQUF4Qix3QkFBd0IsRUFBQSxFQUN6Qjs7QUFJSDtFQUVFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NoZW1lYm9keVxyXG57XHJcbiAgICBwYWRkaW5nOiA3ZW0gMCAwZW0gMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0aGVyb2ltZ2RpdlxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2R1Y3RoZXJvaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiByaWdodDtcclxufVxyXG4uc2NoZW1ldGV4dFxyXG57XHJcbiAgICBwYWRkaW5nOiAyZW0gNmVtO1xyXG59XHJcblxyXG4uYm9keUhlYWRpbmdcclxue1xyXG4gIHBhZGRpbmc6MCAwLjVlbTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luOjJlbSAwO1xyXG4gIGJvcmRlci1sZWZ0OjhweCBzb2xpZCAjQ0M5RjA4O1xyXG59XHJcbi5ib2xkXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJywndGFtaWxmJztcclxuICB9XHJcblxyXG4gIHBcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxpbmtzdGFiXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUicsJ3RhbWlsZic7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoxMXB4IDY1cHg7XHJcbn1cclxuLmRvd25hcnJvd1xyXG57XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuLnBhZGwxNVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmhvbWVpbWdcclxue1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBcclxufVxyXG5cclxuLnBvaW50ZXJcclxue1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zY2hlbWV0ZXh0XHJcbiAgICB7XHJcbiAgICAgIHBhZGRpbmc6MmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfTtcclxuICAgIC5saW5rc3RhYlxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHggNDBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0aGVyb2ltZ1xyXG4gICAge1xyXG4gICAgICBvYmplY3QtcG9zaXRpb246IDk1JSA5MCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmhlYWRlcmZpeGVkXHJcbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(ts, router) {
        this.ts = ts;
        this.router = router;
    }
    AboutusComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AboutusComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.scss */ "./src/app/components/aboutus/aboutus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/collections/collections.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/collections/collections.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showspinner\" ><div class=\"loading\">  <mat-spinner class=\"spinnerc\"></mat-spinner></div></div>\r\n<div class=\"productwrapper\" id=\"wrapper\">\r\n    <app-header class=\"headerfixed\"></app-header>\r\n    <div class=\"productbody\">\r\n        <app-todaysrate></app-todaysrate>\r\n      <div class=\"productheroimgdiv\">\r\n        <img class=\"productheroimg\" src=\"../../../assets/images/banners/collectionbanner.jpg\" />\r\n        <div class=\"cartextdiv\">\r\n          {{cartext}}\r\n        </div>\r\n      </div>\r\n      <div class=\"mainbody \">\r\n        <div class=\"row center\">\r\n        <div class=\"col-lg-3 cent\">\r\n          \r\n          <div class=\"findjewels\">\r\n            {{ ts.translate(\"findyourjewels\") | uppercase }}\r\n          </div>\r\n\r\n          <div id=\"selectedJewell\" class=\"selectedJewell\">{{ ts.translate(selectedValue) | uppercase }}</div>\r\n          <div class=\"btnGroup\">\r\n           <label>\r\n              <input id=\"allcollections\" (change)=\"handleChange($event.target.value)\" type=\"radio\" value=\"allcollections\" name=\"productradio\" />\r\n              <span>{{ ts.translate(\"allcollections\") | titlecase }}</span>\r\n            </label>\r\n  \r\n            <label>\r\n                <input id=\"marriage\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"marriage\" name=\"productradio\" />\r\n                <span>{{ ts.translate(\"wedding\") | titlecase }}</span>\r\n              </label>\r\n\r\n            <label>\r\n              <input id=\"men\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"men\" name=\"productradio\" />\r\n              <span>{{ ts.translate(\"men\") | titlecase }}</span>\r\n            </label>\r\n            <label>\r\n              <input id=\"women\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"women\" name=\"productradio\" />\r\n              <span>{{ ts.translate(\"women\") | titlecase }}</span>\r\n            </label>\r\n  \r\n            <label>\r\n              <input id=\"gifts\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"gifts\" name=\"productradio\" />\r\n              <span>{{ ts.translate(\"gifts\") | titlecase }}</span>\r\n            </label>\r\n            <label>\r\n              <input id=\"kids\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"kids\"  name=\"productradio\" />\r\n              <span>{{ ts.translate(\"kids\") | titlecase }}</span>\r\n            </label>\r\n  \r\n            \r\n          </div>\r\n        \r\n        </div>\r\n\r\n      \r\n        <div id=\"dropdown\" class=\"dropdown\">\r\n           \r\n          <div class=\"staticfield\">\r\n              <label id=\"findtext\"> {{ ts.translate(\"findyourjewels\") | uppercase }}</label>\r\n          <mat-form-field appearance=\"outline\">\r\n        \r\n          \r\n            <mat-select class=\"dropdownselect\" [(ngModel)]=\"selectedoption\" (selectionChange)=\"handleChange($event.value)\" name=\"jwelltype\">\r\n              <mat-option class=\"droptext\" *ngFor=\"let item of types\" [value]=\"item.key\">\r\n                {{ts.translate(item.value) | titlecase }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n          </div>\r\n          \r\n        <div id=\"productsLists\" class=\"col-lg-9 productsLists\">\r\n            <div *ngIf=\"tempdata.length==0\" class=\"noproducts\">{{ts.translate('noproductsfound')}}</div>\r\n          <div class=\"ImgList col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12\" *ngFor=\"let item of tempdata\">\r\n            <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <!-- <a class=\"zoombut\" (click)=\"openDialog(item)\">Click to zoom</a> -->\r\n              <!-- <button mat-button (click)=\"openDialog(item)\">Click to Zoom</button> -->\r\n              <div class=\"procode\">{{item.code}}</div>\r\n              <div  class=\"proname\"> {{ts.translate(item.category)}} {{item.name}}</div>\r\n             <div class=\"imgwrapper\">\r\n              <img\r\n                class=\"productimg\"\r\n                src=\"{{ item.imgsrc }}\"\r\n                (click)=\"openDialog(item)\"\r\n              />\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n  \r\n  \r\n      </div>\r\n      <app-talktous [talktouscontent]=\"ts.translate('talktouscollection')\"></app-talktous>\r\n    </div>\r\n    <div class=\"linkstab\">\r\n      <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\r\n      <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToCollections('allcollections')\"  >{{ts.translate('collections')}} </a></span> </span> \r\n     \r\n  \r\n    </div>\r\n    <app-footer></app-footer>\r\n    </div>\r\n   \r\n  </div>\r\n  \r\n    \r\n   \r\n  "

/***/ }),

/***/ "./src/app/components/collections/collections.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/collections/collections.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productwrapper {\n  position: relative; }\n\n.loading {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fff; }\n\n.noproducts {\n  text-align: center;\n  font-size: 28px;\n  color: #808080;\n  font-family: 'opR','tamilf'; }\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 8px 0 1em 0; }\n\n.spinnerc {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto; }\n\n.productbody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.cartextdiv {\n  font-family: 'dance','tamilf';\n  position: relative;\n  width: 100%;\n  margin-top: -10rem;\n  font-size: 5rem;\n  color: #ffffff;\n  text-align: center;\n  height: 5rem; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: right;\n     object-position: right; }\n\n.filterList {\n  padding: 1em;\n  font-family: 'opEB','tamilf';\n  color: black; }\n\n.productfooter {\n  position: absolute;\n  bottom: 0; }\n\n.cent {\n  text-align: center;\n  display: block; }\n\n.btnGroup {\n  display: inline-flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n  background-color: #fff;\n  text-align: left;\n  padding: 0 0 0 3em; }\n\n.findjewels {\n  color: #333333;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  padding-left: 2.6em;\n  font-family: 'opEB','tamilf';\n  margin-top: 2em;\n  padding-bottom: 1em; }\n\n.selectedJewell {\n  color: #CC9F08;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  padding-left: 2.6em;\n  padding-top: 2em;\n  font-family: 'opEB','tamilf'; }\n\n.static {\n  position: fixed;\n  z-index: 99;\n  top: 55px;\n  padding-right: 2em !important; }\n\n.static + .staticfield {\n  padding-top: 4em; }\n\n.ImgList {\n  display: inline-flex;\n  text-align: center; }\n\n.indiImg {\n  margin: 0em 73px 80px 0;\n  display: flex;\n  flex-flow: column-reverse; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%; }\n\n:checked + span {\n  color: #CC9F08;\n  transition: 0.3s ease-in-out; }\n\ninput[type=\"radio\"] {\n  display: none; }\n\n/* Optional other stuff just to make it look better */\n\nlabel {\n  display: inline-block;\n  width: 200px;\n  padding: 5px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out; }\n\nspan {\n  transition: 0.3s ease-in-out; }\n\nlabel > span:hover {\n  color: #CC9F08; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-family: 'opR','tamilf';\n  padding-top: 20px; }\n\n.procode {\n  color: #888888;\n  font-family: 'opR','tamilf';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  padding-top: 16px;\n  font-family: 'opB','tamilf'; }\n\n.imgwrapper {\n  height: 250px;\n  width: 250px; }\n\n.dropdown {\n  display: none; }\n\n.fixeddiv {\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  margin-top: -518px; }\n\n.fixeddiv + .btnGroup {\n  padding-top: 3em; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR','tamilf';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n.center {\n  display: flex;\n  justify-content: center; }\n\n.mat-spinner {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999; }\n\n.layout {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 998;\n  background-color: #2e2e2e; }\n\n::ng-deep .mat-progress-spinner circle, ::ng-deep .mat-spinner circle {\n  stroke: #CC9F08; }\n\n@media screen and (max-width: 800px) {\n  .cent {\n    display: none; }\n  .dropdown {\n    display: block;\n    width: 100%;\n    transition: 0.5s all ease-in-out; }\n  label {\n    display: inline-block;\n    width: auto;\n    padding: 1em;\n    white-space: nowrap;\n    font-size: 12px;\n    cursor: pointer;\n    transition: 0.2s ease-in-out; }\n  .btnGroup {\n    display: inline-flex;\n    font-size: 20px;\n    background-color: #fff;\n    text-align: left;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    transition: 0.5s all ease-in-out;\n    padding: 1em 0 0 0; }\n  .findjewels, .selectedJewell {\n    display: none; }\n  .productsLists {\n    padding: 8em 4em 8em 2em;\n    text-align: center; }\n  .indiImg {\n    margin: 5em 1em;\n    display: flex;\n    width: 100%;\n    height: 200px;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .zoombut {\n    font-size: 10px;\n    padding-top: 4px; }\n  .procode {\n    font-size: 10px; }\n  .proname {\n    font-size: 14px;\n    padding-top: 10px; }\n  .fixeddiv {\n    padding-top: 0;\n    position: -webkit-sticky;\n    position: sticky; }\n  .center {\n    text-align: center; }\n  .imgwrapper {\n    /* height: 250px; */\n    /* width: 250px; */\n    width: 100%;\n    height: 100%; }\n  .dropdown {\n    display: block;\n    width: 100%;\n    background-color: #fff;\n    z-index: 1;\n    text-align: center;\n    padding: 3em 5em 0 5em; }\n  mat-form-field {\n    width: 100%;\n    font-size: 18px; }\n  ::ng-deep .mat-form-field-appearance-outline ::ng-deep .mat-form-field-outline {\n    border-radius: 5px;\n    outline: 0; }\n  ::ng-deep .mat-form-field-appearance-outline:focus ::ng-deep .mat-form-field-appearance-outline:active ::ng-deep .mat-form-field-appearance-outline:visited .mat-form-field-appearance-outline:hover\n::ng-deep .mat-form-field-outline:focus ::ng-deep .mat-form-field-outline:active ::ng-deep .mat-form-field-outline:visited .mat-form-field-outline:hover {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .dropdownselect .dropdownselect:focus {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .droptext {\n    color: #A57F00; }\n  .extrapadtop {\n    padding-top: 24px; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n.headerfixed {\n  position: fixed;\n  z-index: 99;\n  width: 100%; }\n\n@media screen and (max-width: 1200px) {\n  .cent {\n    text-align: left; }\n  .findjewels {\n    font-size: 20px;\n    padding-left: 44px;\n    text-align: left; }\n  .selectedJewell {\n    font-size: 20px;\n    width: 100%;\n    padding: 0 0 40px 40px; }\n  .btnGroup {\n    padding: 0 0 0 40px; }\n  .static + .staticfield {\n    padding-top: 4em; } }\n\n@media screen and (max-width: 600px) {\n  .productheroimg {\n    -o-object-position: 65% 90%;\n       object-position: 65% 90%; }\n  .cartextdiv {\n    margin-top: -5rem;\n    text-align: center;\n    bottom: 2rem;\n    font-size: 3rem;\n    color: #ffffff;\n    height: 5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmpnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbGxlY3Rpb25zXFxjb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQVk7RUFDWixZQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXRCO0VBRUEsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRXBCO0VBRUEsa0JBQWtCO0VBQ3JCLE1BQUs7RUFDTCxTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFFUixZQUFZLEVBQUE7O0FBRWI7RUFFSSxvQkFBb0I7RUFDcEIsa0JBQWlCLEVBQUE7O0FBRXJCO0VBRUksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIseUJBQXNCO0tBQXRCLHNCQUFzQixFQUFBOztBQUUxQjtFQUVJLFlBQVc7RUFDWCw0QkFBNEI7RUFDNUIsWUFBVyxFQUFBOztBQUVmO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVEsRUFBQTs7QUFHWjtFQUVJLGtCQUFrQjtFQUNsQixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBSXJCO0VBRUcsY0FBYztFQUNkLHNCQUFz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QUFpQixFQUFBO0VBRXJCO0lBRUksY0FBYTtJQUNiLHdCQUFnQjtJQUFoQixnQkFBZ0IsRUFBQTtFQUVwQjtJQUVJLGtCQUFrQixFQUFBO0VBRXZCO0lBQ0MsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFFaEI7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixVQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBO0VBR3ZCO0lBQ0MsV0FBVztJQUNYLGVBQWUsRUFBQTtFQUdoQjtJQUVDLGtCQUFrQjtJQUNsQixVQUFTLEVBQUE7RUFHVDs7SUFFSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBO0VBRXRCO0lBRUksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQUV0QjtJQUVJLGNBQWEsRUFBQTtFQUVqQjtJQUVJLGlCQUFnQixFQUFBO0VBRXBCO0lBRUksa0JBQWtCLEVBQUEsRUFDckI7O0FBSUw7RUFFSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUVJO0lBQ0ksZ0JBQWdCLEVBQUE7RUFFcEI7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBRXBCO0lBRUksZUFBZTtJQUNuQixXQUFXO0lBQ1gsc0JBQXNCLEVBQUE7RUFFdEI7SUFFSSxtQkFBa0IsRUFBQTtFQUV0QjtJQUVHLGdCQUFnQixFQUFBLEVBQ3JCOztBQUdGO0VBQ0k7SUFFRSwyQkFBd0I7T0FBeEIsd0JBQXdCLEVBQUE7RUFFMUI7SUFJQSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVksRUFBQSxFQUVYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnByb2R1Y3R3cmFwcGVyXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAubm9wcm9kdWN0c1xyXG4gIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInLCd0YW1pbGYnO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogOHB4IDAgMWVtIDA7XHJcbn1cclxuICAgIC5zcGlubmVyY1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuICBcdFxyXG5cdG1hcmdpbjogYXV0bztcclxuICB9XHJcbi5wcm9kdWN0Ym9keVxyXG57XHJcbiAgICBwYWRkaW5nOiA3ZW0gMCAwZW0gMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5jYXJ0ZXh0ZGl2XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnZGFuY2UnLCd0YW1pbGYnO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTByZW07XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3RoZXJvaW1nZGl2XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZHVjdGhlcm9pbWdcclxue1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcbi5maWx0ZXJMaXN0XHJcbntcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJywndGFtaWxmJztcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5wcm9kdWN0Zm9vdGVyXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTowO1xyXG59XHJcbi8vYnV0dG9uIGdyb3VwXHJcbi5jZW50XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLmJ0bkdyb3Vwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDNlbTtcclxuICAgXHJcbiB9XHJcblxyXG4gLmZpbmRqZXdlbHNcclxuIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJywndGFtaWxmJztcclxuICAgIG1hcmdpbi10b3A6MmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuIH1cclxuXHJcbiAuc2VsZWN0ZWRKZXdlbGxcclxuIHtcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNmVtO1xyXG4gICAgcGFkZGluZy10b3A6MmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJywndGFtaWxmJztcclxuICAgIFxyXG4gICBcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuIH1cclxuXHJcbiAuc3RhdGljXHJcbiB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgei1pbmRleDogOTk7XHJcbiAgIHRvcDogNTVweDtcclxuICAgcGFkZGluZy1yaWdodDogMmVtICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLnN0YXRpYyArIC5zdGF0aWNmaWVsZFxyXG4ge1xyXG4gICAgICAgcGFkZGluZy10b3A6IDRlbTtcclxuIH1cclxuXHJcbiAuSW1nTGlzdFxyXG4ge1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbiAuaW5kaUltZ1xyXG4ge1xyXG4gICAgbWFyZ2luOiAwZW0gNzNweCA4MHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuIH1cclxuXHJcbiAucHJvZHVjdGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiB9XHJcblxyXG4gOmNoZWNrZWQgKyBzcGFuIHtcclxuICAgXHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVxyXG57XHJcbiBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLyogT3B0aW9uYWwgb3RoZXIgc3R1ZmYganVzdCB0byBtYWtlIGl0IGxvb2sgYmV0dGVyICovXHJcbmxhYmVsIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMjAwcHg7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuc3BhbntcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxubGFiZWwgPiBzcGFuOmhvdmVye1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbn1cclxuLnByb2R1Y3RzTGlzdHNcclxue1xyXG4gICAgcGFkZGluZy10b3A6MjBlbTtcclxufVxyXG4ucHJvbmFtZVxyXG57XHJcbiAgICBjb2xvcjojNDQ0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInLCd0YW1pbGYnO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLnByb2NvZGVcclxue1xyXG4gICAgY29sb3I6Izg4ODg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJywndGFtaWxmJztcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi56b29tYnV0XHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BCJywndGFtaWxmJztcclxufVxyXG5cclxuLmltZ3dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duXHJcbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZml4ZWRkaXZcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC01MThweDtcclxufVxyXG4uZml4ZWRkaXYgKyAuYnRuR3JvdXAge1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxuICB9XHJcbiAgLmxpbmtzdGFiXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUicsJ3RhbWlsZic7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoxMXB4IDY1cHg7XHJcbn1cclxuLmRvd25hcnJvd1xyXG57XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuLnBhZGwxNVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmhvbWVpbWdcclxue1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBcclxufVxyXG5cclxuLnBvaW50ZXJcclxue1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5tYXQtc3Bpbm5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgei1pbmRleDo5OTk7XHJcbn1cclxuLmxheW91dFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHotaW5kZXg6OTk4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgOjpuZy1kZWVwIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjQ0M5RjA4O1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jZW50e1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIC5kcm9wZG93blxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgbGFiZWxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBcclxuXHJcbiAgICB9XHJcbiAgICAuYnRuR3JvdXBcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMWVtIDAgMCAwO1xyXG4gICAgfVxyXG4gICAgLmZpbmRqZXdlbHMgLCAuc2VsZWN0ZWRKZXdlbGxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdHNMaXN0c1xyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDhlbSA0ZW0gOGVtIDJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGlJbWdcclxuICAgIHtcclxuICAgICAgICBtYXJnaW46IDVlbSAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuem9vbWJ1dFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDo0cHg7XHJcbiAgICB9XHJcbiAgICAucHJvY29kZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5wcm9uYW1lXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpeGVkZGl2XHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MDtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgfVxyXG4gICAgLmNlbnRlclxyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgLmltZ3dyYXBwZXIge1xyXG4gICAgLyogaGVpZ2h0OiAyNTBweDsgKi9cclxuICAgIC8qIHdpZHRoOiAyNTBweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5kcm9wZG93blxyXG4gICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNlbSA1ZW0gMCA1ZW07XHJcbiAgIH1cclxuXHJcbiAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgIH1cclxuICBcclxuICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjQTU3RjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTowO1xyXG5cclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmZvY3VzIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTp2aXNpdGVkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU6aG92ZXJcclxuICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6Zm9jdXMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lOmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6dmlzaXRlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZTpob3ZlcntcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNBNTdGMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duc2VsZWN0IC5kcm9wZG93bnNlbGVjdDpmb2N1c1xyXG4gICAge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0E1N0YwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcHRleHRcclxuICAgIHtcclxuICAgICAgICBjb2xvcjojQTU3RjAwO1xyXG4gICAgfVxyXG4gICAgLmV4dHJhcGFkdG9wXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MjRweDtcclxuICAgIH1cclxuICAgIC5saW5rc3RhYlxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHggNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5oZWFkZXJmaXhlZFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAgIC5jZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuZmluZGpld2Vsc1xyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RlZEpld2VsbFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAwIDQwcHggNDBweDtcclxuICAgIH1cclxuICAgIC5idG5Hcm91cFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6MCAwIDAgNDBweDtcclxuICAgIH1cclxuICAgIC5zdGF0aWMgKyAuc3RhdGljZmllbGRcclxuIHtcclxuICAgICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbiB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAucHJvZHVjdGhlcm9pbWdcclxuICAgIHtcclxuICAgICAgb2JqZWN0LXBvc2l0aW9uOiA2NSUgOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcnRleHRkaXZcclxuICAgIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAtNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/collections/collections.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/collections/collections.component.ts ***!
  \*****************************************************************/
/*! exports provided: CollectionsComponent, DialogDataExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExample", function() { return DialogDataExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_8__);









var CollectionsComponent = /** @class */ (function () {
    function CollectionsComponent(ts, sh, route, router, http, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.showspinner = true;
        this.cartext = "";
        this.metals = ["marriage", "women", "men", "kids", "gifts"];
        this.types = [
            {
                key: "allcollections",
                value: "allcollections"
            },
            {
                key: "marriage",
                value: "marriage"
            },
            {
                key: "women",
                value: "women"
            },
            {
                key: "men",
                value: "men"
            },
            {
                key: "kids",
                value: "kids"
            },
            {
                key: "gifts",
                value: "gifts"
            },
        ];
        this.options = {
            headers: this.httpHeaders
        };
        this.jsondata = [];
        this.value = 'allcollections';
        this.tempdata = [];
    }
    CollectionsComponent.prototype.openDialog = function (item) {
        // console.log(item.imgsrc);
        this.dialog.open(DialogDataExample, {
            data: {
                url: item.imgsrc,
                name: item.name,
                code: item.code
            },
            height: 'auto',
            width: '95vh'
        });
    };
    CollectionsComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_8__["init"]({
            duration: 1200
        });
    };
    CollectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showspinner = true;
        document.getElementById('wrapper').style.opacity = "0";
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.cartext = this.ts.translate('allcollections');
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_7__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_7__("#selectedJewell");
            if (y >= 450) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "2", "padding": "14px 2.6em 8px 2.6em  " });
                if (window.innerWidth < 1200) {
                    header.css({ "top": "4em", "padding": "14px 2em 8px 2em " });
                }
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding": "0px 0em 40px 2.6em  " });
                if (window.innerWidth < 1200) {
                    header.css({ "padding": "0px 0em 40px 2em  " });
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_7__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_7__("#dropdown");
            if (y >= 420) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "1", "padding": "6em 5em 0em 5em" });
                jquery__WEBPACK_IMPORTED_MODULE_7__('#findtext').css({ 'display': 'none' });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#productsLists").css({ "padding-top": "22em" });
                }
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "100%", "padding": "3em 5em 0 5em" });
                jquery__WEBPACK_IMPORTED_MODULE_7__('#findtext').css({ 'display': 'block' });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#productsLists").css({ "padding-top": "8em" });
                }
            }
        });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.aosInit();
        if (this.sh.getValue())
            this.value = this.sh.getValue();
        this.cartext = this.ts.translate(this.value);
        this.selectedoption = this.value;
        this.selectedValue = this.value;
        // console.log(this.value);
        this.getAllProducts().subscribe(function (data) {
            _this.showspinner = false;
            document.getElementById('wrapper').style.opacity = "1";
            _this.jsondata = data;
            _this.tempdata = _this.jsondata;
            if (!_this.metals.includes(_this.value)) {
                document.getElementById(_this.value).checked = true;
                document.getElementById('allcollections').checked = true;
                _this.value = 'allcollections';
            }
            else {
                _this.tempdata = _this.tempdata.filter(function (data) { return data.collection.includes(_this.value); });
                // console.log(this.value);
                document.getElementById(_this.value).checked = true;
            }
            // console.log(this.tempdata);
        });
    };
    CollectionsComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__('#exampleModal').on('show.bs.modal', function (event) {
            var button = jquery__WEBPACK_IMPORTED_MODULE_7__(event); // Button that triggered the modal
            var recipient = button.data('whatever'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            // console.log(recipient);
            var modal = jquery__WEBPACK_IMPORTED_MODULE_7__(this);
            modal.find('.modal-title').text('New message to ' + recipient);
            modal.find('.modal-body input').val(recipient);
        });
    };
    CollectionsComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    CollectionsComponent.prototype.getAllProducts = function () {
        return this.http.get('./assets/products.json', this.options);
    };
    CollectionsComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    CollectionsComponent.prototype.handleChange = function (event) {
        var _this = this;
        this.aosInit();
        this.selectedValue = event;
        this.selectedoption = this.value;
        this.cartext = this.ts.translate(event);
        if (this.selectedValue == 'allcollections') {
            this.tempdata = this.jsondata;
        }
        else {
            this.tempdata = this.jsondata.filter(function (data) {
                return data.collection.includes(_this.selectedValue);
            });
            // console.log(this.tempdata);
        }
    };
    CollectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collections',
            template: __webpack_require__(/*! ./collections.component.html */ "./src/app/components/collections/collections.component.html"),
            styles: [__webpack_require__(/*! ./collections.component.scss */ "./src/app/components/collections/collections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], CollectionsComponent);
    return CollectionsComponent;
}());

var DialogDataExample = /** @class */ (function () {
    function DialogDataExample(data) {
        this.data = data;
    }
    DialogDataExample.prototype.closebut = function () {
    };
    DialogDataExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example.html */ "./src/app/components/collections/dialog-data-example.html"),
            styles: [__webpack_require__(/*! ./stylecss.scss */ "./src/app/components/collections/stylecss.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataExample);
    return DialogDataExample;
}());



/***/ }),

/***/ "./src/app/components/collections/dialog-data-example.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/collections/dialog-data-example.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative\" >\r\n<button  class=\"close-button\"   [mat-dialog-close]=\"true\" >\r\n  <img src=\"../../../assets/images/closebutton.png\"/>\r\n</button>\r\n<div mat-dialog-content style=\" max-height: 100%;overflow: hidden;\">\r\n\r\n        <img style=\"width:100%;height:100%\"\r\n        class=\"productimg\"\r\n        src=\"{{data.url }}\"\r\n      \r\n      />\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/collections/stylecss.scss":
/*!******************************************************!*\
  !*** ./src/app/components/collections/stylecss.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close-button {\n  position: absolute;\n  right: 0;\n  right: -16px;\n  top: -16px;\n  background-color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: 'opEB';\n  color: grey;\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmpnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbGxlY3Rpb25zXFxzdHlsZWNzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1YsVUFBVTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9zdHlsZWNzcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcmlnaHQ6IC0xNnB4O1xyXG4gICAgdG9wOiAtMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ29wRUInO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIG91dGxpbmU6MDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactwrapper\">\r\n  <app-header class=\"headerfixed\"></app-header>\r\n  <div class=\"schemebody\">\r\n      <app-todaysrate></app-todaysrate>\r\n      <div class=\"productheroimgdiv\">\r\n      <img class=\"productheroimg\" src=\"../../../assets/images/banners/contactbanner.jpg\" />\r\n    </div>\r\n  <div class=\"contactbody\">\r\n    \r\n    <div class=\"bodyHeading\">\r\n      {{ ts.translate(\"our\") | uppercase }}\r\n      <span class=\"bold\">{{ ts.translate(\"locations\") | uppercase }}</span>\r\n    </div>\r\n  \r\n    <div class=\"row store\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6 padR\">\r\n        <img\r\n          class=\"storeview\"\r\n          src=\"../../../assets/images/banners/shopint1.jpg\"\r\n        />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6 padL\">\r\n        <iframe class=\"map\"\r\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.200405003273!2d78.11522951461477!3d9.91726089290794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c583ef5928cb%3A0x145934dc50a65518!2sSri%20Balagopalan%20Jewellery%20Mart!5e0!3m2!1sen!2sin!4v1612636344337!5m2!1sen!2sin;output=embed\"\r\n          width=\"100%\"\r\n          height=\"350\"\r\n          frameborder=\"0\"\r\n          style=\"border:0;\"\r\n          allowfullscreen=\"\"\r\n          aria-hidden=\"false\"\r\n          tabindex=\"0\"\r\n        ></iframe>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12\">\r\n        <div class=\"center\">\r\n        <div class=\"storeHead1 bold\">\r\n          {{ ts.translate(\"storename1\") }}\r\n        </div>\r\n        <div class=\"storetype bold\">\r\n          {{ ts.translate(\"goldstore\") }}\r\n        </div>\r\n        <div class=\"addHead\">\r\n          {{ ts.translate(\"address\") }}\r\n        </div>\r\n        <div class=\"addbody\">\r\n          {{ ts.translate(\"addressbody1\") }}\r\n        </div>\r\n        <div class=\"addHead\">\r\n          {{ ts.translate(\"buisnesshours\") }}\r\n        </div>\r\n        <div class=\"addbody\">\r\n          {{ ts.translate(\"buisnesshoursbody1\") }}\r\n        </div>\r\n        <div class=\"addHead\">\r\n          {{ ts.translate(\"phonenumber\") }}\r\n        </div>\r\n        <div class=\"addbody\">\r\n         <div> <a href=\"tel:+91 9994926518\"> {{ ts.translate(\"phonenumberbody1\") }}</a></div>\r\n         <div> <a href=\"tel:+0452 2346518\"> {{ ts.translate(\"phonenumberbody2\") }}</a></div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row store\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6 padR\">\r\n        \r\n        <img\r\n          class=\"storeview\"\r\n          src=\"../../../assets/images/banners/shopint2.jpg\"\r\n        />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6 padL\">\r\n          <iframe class=\"map\"\r\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.200405003273!2d78.11522951461477!3d9.91726089290794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c583ef5928cb%3A0x145934dc50a65518!2sSri%20Balagopalan%20Jewellery%20Mart!5e0!3m2!1sen!2sin!4v1612636344337!5m2!1sen!2sin;output=embed\"\r\n          width=\"100%\"\r\n          height=\"350\"\r\n          frameborder=\"0\"\r\n          style=\"border:0;\"\r\n          allowfullscreen=\"\"\r\n          aria-hidden=\"false\"\r\n          tabindex=\"0\"\r\n        ></iframe>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12\">\r\n          <div class=\"center\">\r\n        <div class=\"storeHead1 bold\">\r\n          {{ ts.translate(\"storename1\") }}\r\n        </div>\r\n        <div class=\"storetype bold\">\r\n          {{ ts.translate(\"silverstore\") }}\r\n        </div>\r\n        <div class=\"addHead\">\r\n          {{ ts.translate(\"address\") }}\r\n        </div>\r\n        <div class=\"addbody\">\r\n          {{ ts.translate(\"addressbody2\") }}\r\n        </div>\r\n        <div class=\"addHead\">\r\n          {{ ts.translate(\"buisnesshours\") }}\r\n        </div>\r\n        <div class=\"addbody\">\r\n          {{ ts.translate(\"buisnesshoursbody1\") }}\r\n        </div>\r\n        <div class=\"addHead\">\r\n          {{ ts.translate(\"phonenumber\") }}\r\n        </div>\r\n        <div class=\"addbody\">\r\n         <div> <a href=\"tel:+9994926518\"> {{ ts.translate(\"phonenumberbody3\") }}</a></div>\r\n         <div> <a href=\"tel:+04522346518\"> {{ ts.translate(\"phonenumberbody4\") }}</a></div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"bodyHeading\">\r\n      {{ ts.translate(\"get\") | uppercase }}\r\n      <span class=\"bold\">{{ ts.translate(\"intouch\") | uppercase }}</span>\r\n    </div>\r\n    <div class=\"row emailblock\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 padb1\">\r\n        <label>{{ts.translate('fullname')}}<span class=\"redast\">*</span></label><br>\r\n       <input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('fullname')}}\" />\r\n       <!-- <mat-form-field appearance=\"outline\">\r\n        <mat-label>{{ts.translate('fullname')}}</mat-label>\r\n        <input matInput  [(ngModel)]=\"firstname\" required placeholder=\"{{ts.translate('enter')}}{{ts.translate('fullname')}}\">\r\n       </mat-form-field> -->\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 padb1\">\r\n        <label>{{ts.translate('phonenumber')}}<span class=\"redast\">*</span></label><br>\r\n        <input type=\"number\" [(ngModel)]=\"phonenumber\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('phonenumber')}}\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row emailblock\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 padb1\">\r\n        <label>{{ts.translate('email')}}<span class=\"redast\">*</span></label><br>\r\n       <input type=\"email\" [(ngModel)]=\"useremail\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('email')}}\" />\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 padb1\">\r\n        <label>{{ts.translate('subject')}}<span class=\"redast\">*</span></label><br>\r\n        <input type=\"text\" [(ngModel)]=\"subject\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('subject')}}\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row emailblock\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12 padb1\">\r\n        <label>{{ts.translate('message')}}<span class=\"redast\">*</span></label><br>\r\n       \r\n       <textarea [(ngModel)]=\"message\"  rows=\"8\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('message')}}\">\r\n       \r\n        </textarea>\r\n      </div>\r\n    \r\n    </div>\r\n   \r\n    <button mat-button class=\"submitbutton\" (click)=\"sendmessage()\" >\r\n      {{ts.translate('send')}}{{ts.translate('message')}}\r\n    </button>\r\n    <div class=\"errormessage\" *ngIf=\"showerrormessage\">** {{ts.translate('fillallfields')}} **</div>\r\n\r\n    <div class=\"bodyHeading\">\r\n      {{ ts.translate(\"connect\") | uppercase }}\r\n      <span class=\"bold\">{{ ts.translate(\"withus\") | uppercase }}</span>\r\n    </div>\r\n    <div class=\"socialmedia\">\r\n        <a href=\"https://www.facebook.com/sribalagopalanjewellerymart\" target=\"_blank\">\r\n      <div class=\"scircle padtopf\">\r\n        <img class=\"scircleImg fbicon\" src=\"../../../assets/images/facebook.svg\">\r\n      </div>\r\n    </a>\r\n      <a href=\"https://www.instagram.com/sribalagopalanjewellerymart\" target=\"_blank\">\r\n      <div class=\"scircle\">\r\n        <img class=\"scircleImg\" src=\"../../../assets/images/Insta.svg\">\r\n      </div>\r\n    </a>\r\n      <a href=\"//api.whatsapp.com/send?phone=919994926518&text=Hi Team !!!\" target=\"_blank\">\r\n      <div class=\"scircle padrw\">\r\n        <img class=\"scircleImg\" src=\"../../../assets/images/whatsapp.svg\">\r\n      </div>\r\n    </a>\r\n      <a [href]=\"emailstring\" target=\"_top\">\r\n      <div class=\"scircle\">\r\n        <img class=\"scircleImg\" src=\"../../../assets/images/Mail.svg\">\r\n      </div>\r\n    </a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"linkstab\">\r\n    <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\r\n    <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToPage('contactus')\" >{{ts.translate('contactus')}} </a></span> </span> \r\n   \r\n\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactbody {\n  padding: 7em 60px;\n  position: relative; }\n\n.schemebody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n\n.bold {\n  font-family: 'opEB','tamilf'; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.store {\n  padding-bottom: 5em; }\n\n.padR {\n  padding-right: 0px; }\n\n.padL {\n  padding-left: 0px; }\n\n.storeHead1 {\n  font-size: 24px;\n  color: #CC9F08; }\n\n.storetype {\n  color: #3C3A33;\n  font-size: 18px; }\n\n.addHead {\n  font-weight: 600;\n  color: #474747;\n  font-size: 16px;\n  padding: 1em 0 0 0; }\n\n.addbody {\n  font-size: 16px;\n  color: #777777; }\n\n.emailblock {\n  font-size: 18px;\n  padding-bottom: 2em; }\n\ninput, textarea {\n  padding: 1em 1em;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid grey; }\n\ninput:focus, textarea:focus {\n  border-radius: 5px;\n  outline: 0;\n  border: 1px solid grey; }\n\n.redast {\n  color: red;\n  padding-left: 8px; }\n\ntextarea {\n  padding: 18px;\n  border: 1px solid grey; }\n\n.submitbutton {\n  color: white;\n  border: 0;\n  outline: 0;\n  padding: 0.5em 1em;\n  font-size: 18px;\n  border-radius: 5px;\n  background-color: #CC9F08;\n  font-family: 'opR','tamilf'; }\n\n.fbicon {\n  margin-left: -2px;\n  margin-top: -2px; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none; }\n\n/* Firefox */\n\ninput[type=number] {\n  -moz-appearance: textfield; }\n\n.errormessage {\n  font-size: 20px;\n  color: red;\n  padding: 1em 0; }\n\n.socialmedia {\n  display: flex;\n  text-align: center;\n  justify-content: center; }\n\n.scircle {\n  border-radius: 50%;\n  height: 10em;\n  width: 10em;\n  padding: 2em;\n  margin: 0 2em;\n  cursor: pointer;\n  box-shadow: 0 3px 10px 1px #ccc;\n  transition: 0.3s all ease-in-out; }\n\n.center {\n  padding: 20px; }\n\n.scircle:hover {\n  transform: rotateY(10); }\n\n.storeview {\n  height: 350px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR','tamilf';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 1500px) {\n  .center {\n    padding: 0 20px; } }\n\n@media screen and (max-width: 1200px) {\n  .linkstab {\n    padding: 11px 40px; }\n  iframe {\n    height: 300px; }\n  .storeview {\n    height: 300px; }\n  .padtopf {\n    padding-top: 1.7em; }\n  .padrw {\n    padding-left: 2.1em; }\n  .center {\n    padding: 0; }\n  .storeHead1 {\n    font-size: 20px; }\n  .storetype {\n    font-size: 16px; }\n  .addHead {\n    font-weight: 600;\n    color: #474747;\n    font-size: 14px; }\n  .addbody {\n    font-size: 15px; } }\n\n@media screen and (max-width: 768px) {\n  .productheroimg {\n    -o-object-position: right;\n       object-position: right; }\n  .menulinks {\n    display: inline-flex;\n    flex-direction: column; }\n  .menulinks a {\n    padding: 20px 0 0; } }\n\n@media screen and (max-width: 600px) {\n  .contactbody {\n    padding: 1em 2em 7em 0em; }\n  iframe {\n    height: 180px; }\n  .storeview {\n    height: 180px; }\n  .emailblock {\n    padding-bottom: 0;\n    padding: 0 0rem 0 2rem; }\n  .scircle {\n    height: 4.9em;\n    width: 4.9em;\n    padding: 0.9em;\n    margin: 0 2em; }\n  .productheroimg {\n    -o-object-position: 95% 90%;\n       object-position: 95% 90%; }\n  .padb1 {\n    padding-bottom: 3rem; }\n  .fbicon {\n    margin-left: 0;\n    margin-top: 0; }\n  .scircleImg {\n    height: 100%;\n    width: 100%; }\n  .linkstab {\n    padding: 11px 40px; }\n  .bodyHeading {\n    margin: 2em 2rem; }\n  .store {\n    padding: 0 0rem 5rem 2rem; }\n  .submitbutton {\n    margin: 0 2rem; } }\n\n.headerfixed {\n  position: fixed;\n  z-index: 99;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0dXNcXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNmLGtCQUFpQixFQUFBOztBQUVyQjtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQVk7RUFDWiw4QkFBNkIsRUFBQTs7QUFFL0I7RUFFSSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFFRSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFJckI7RUFFSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFFRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFFRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFFRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUlmO0VBRUUsY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFFakI7RUFFRSxnQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxlQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUVmO0VBRUUsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLHNCQUFxQixFQUFBOztBQUd2QjtFQUVFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1Qsc0JBQXFCLEVBQUE7O0FBRXZCO0VBRUUsVUFBUztFQUNULGlCQUFnQixFQUFBOztBQUdsQjtFQUdFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFFRSxZQUFXO0VBQ1gsU0FBUTtFQUNSLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMkJBQTBCLEVBQUE7O0FBRTVCO0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjs7RUFFRSx3QkFBd0IsRUFBQTs7QUFJMUIsWUFBQTs7QUFDQTtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUVFLGVBQWM7RUFDZCxVQUFTO0VBQ1QsY0FBYSxFQUFBOztBQUVmO0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFJekI7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBWTtFQUNaLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBRUUsYUFBYSxFQUFBOztBQUVmO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBRUUsYUFBYTtFQUNYLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksb0JBQW9CO0VBQ3BCLFdBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixXQUFVO0VBQ1Ysa0JBQWlCLEVBQUE7O0FBRXJCO0VBRUksWUFBVztFQUNYLHlCQUF5QixFQUFBOztBQUU3QjtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSWY7RUFFSSxlQUFjLEVBQUE7O0FBRWxCO0VBQ0U7SUFFRSxlQUFjLEVBQUEsRUFDZjs7QUFFSDtFQUVFO0lBRUksa0JBQWtCLEVBQUE7RUFFdEI7SUFFRSxhQUFZLEVBQUE7RUFFZDtJQUVFLGFBQVksRUFBQTtFQUdkO0lBRUUsa0JBQWtCLEVBQUE7RUFFcEI7SUFFRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUVFLFVBQVMsRUFBQTtFQUVYO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBRUUsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUFFakI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7O0FBRUg7RUFDRTtJQUVBLHlCQUFzQjtPQUF0QixzQkFBc0IsRUFBQTtFQUV0QjtJQUVFLG9CQUFvQjtJQUNwQixzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCOztBQUlIO0VBRUU7SUFFRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUVFLGFBQVksRUFBQTtFQUVkO0lBRUUsYUFBWSxFQUFBO0VBRWQ7SUFFRSxpQkFBaUI7SUFDakIsc0JBQXNCLEVBQUE7RUFFeEI7SUFFRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhLEVBQUE7RUFHZjtJQUVFLDJCQUF3QjtPQUF4Qix3QkFBd0IsRUFBQTtFQUU1QjtJQUVFLG9CQUFtQixFQUFBO0VBRXJCO0lBRUUsY0FBYztJQUNkLGFBQWEsRUFBQTtFQUViO0lBRUUsWUFBVztJQUNYLFdBQVUsRUFBQTtFQUtaO0lBRUksa0JBQWtCLEVBQUE7RUFFdEI7SUFFRSxnQkFBZ0IsRUFBQTtFQUVsQjtJQUVFLHlCQUF5QixFQUFBO0VBRTdCO0lBRUUsY0FBYyxFQUFBLEVBQ2Y7O0FBSUQ7RUFFSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0Ym9keXtcclxuICBwYWRkaW5nOiA3ZW0gNjBweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5zY2hlbWVib2R5XHJcbntcclxuICAgIHBhZGRpbmc6IDdlbSAwIDBlbSAwO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RoZXJvaW1nZGl2XHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5ib2R5SGVhZGluZ1xyXG57XHJcbiAgcGFkZGluZzowIDAuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW46MmVtIDA7XHJcbiAgYm9yZGVyLWxlZnQ6OHB4IHNvbGlkICNDQzlGMDg7XHJcbn1cclxuLmJvbGRcclxuICB7XHJcbiAgICBmb250LWZhbWlseTogJ29wRUInLCd0YW1pbGYnO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3RoZXJvaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuLnN0b3JlXHJcbntcclxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbn1cclxuLnBhZFJcclxue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4ucGFkTFxyXG57XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuLnN0b3JlSGVhZDFcclxue1xyXG4gIGZvbnQtc2l6ZToyNHB4O1xyXG4gIGNvbG9yOiNDQzlGMDg7XHJcblxyXG59XHJcblxyXG4uc3RvcmV0eXBlXHJcbntcclxuICBjb2xvcjojM0MzQTMzO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYWRkSGVhZFxyXG57XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjojNDc0NzQ3O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxZW0gMCAwIDA7XHJcbn1cclxuXHJcbi5hZGRib2R5XHJcbntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6Izc3Nzc3NztcclxufVxyXG4uZW1haWxibG9ja1xyXG57XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuaW5wdXQsdGV4dGFyZWF7XHJcbiAgcGFkZGluZzogMWVtIDFlbTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgLCB0ZXh0YXJlYTpmb2N1c1xyXG57XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgb3V0bGluZTowO1xyXG4gIGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxufVxyXG4ucmVkYXN0XHJcbntcclxuICBjb2xvcjpyZWQ7XHJcbiAgcGFkZGluZy1sZWZ0OjhweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgXHJcblxyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLnN1Ym1pdGJ1dHRvblxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyOjA7XHJcbiAgb3V0bGluZTowO1xyXG4gIHBhZGRpbmc6MC41ZW0gMWVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDOUYwODtcclxuICBmb250LWZhbWlseTonb3BSJywndGFtaWxmJztcclxufVxyXG4uZmJpY29uXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTJweDtcclxuICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC8vIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5lcnJvcm1lc3NhZ2Vcclxue1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIGNvbG9yOnJlZDtcclxuICBwYWRkaW5nOjFlbSAwO1xyXG59XHJcbi5zb2NpYWxtZWRpYVxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc2NpcmNsZVxyXG57XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMTBlbTtcclxuICB3aWR0aDogMTBlbTtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgbWFyZ2luOjAgMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDFweCAjY2NjO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5jZW50ZXJcclxue1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnNjaXJjbGU6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDEwKTtcclxufVxyXG4uc3RvcmV2aWV3XHJcbntcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubGlua3N0YWJcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJywndGFtaWxmJztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjExcHggNjVweDtcclxufVxyXG4uZG93bmFycm93XHJcbntcclxuICAgIGhlaWdodDoxMnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG4ucGFkbDE1XHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uaG9tZWltZ1xyXG57XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIFxyXG59XHJcblxyXG4ucG9pbnRlclxyXG57XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpe1xyXG4gIC5jZW50ZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOjAgMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5saW5rc3RhYntcclxuIFxyXG4gICAgICBwYWRkaW5nOiAxMXB4IDQwcHg7XHJcbiAgfVxyXG4gIGlmcmFtZVxyXG4gIHtcclxuICAgIGhlaWdodDozMDBweDtcclxuICB9XHJcbiAgLnN0b3Jldmlld1xyXG4gIHtcclxuICAgIGhlaWdodDozMDBweDtcclxuICB9XHJcblxyXG4gIC5wYWR0b3BmXHJcbiAge1xyXG4gICAgcGFkZGluZy10b3A6IDEuN2VtO1xyXG4gIH1cclxuICAucGFkcndcclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMWVtO1xyXG4gIH1cclxuICAuY2VudGVyXHJcbiAge1xyXG4gICAgcGFkZGluZzowO1xyXG4gIH1cclxuICAuc3RvcmVIZWFkMSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5zdG9yZXR5cGUge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5hZGRIZWFkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmFkZGJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9kdWN0aGVyb2ltZ1xyXG4gIHtcclxuICBvYmplY3QtcG9zaXRpb246IHJpZ2h0O1xyXG4gIH1cclxuICAubWVudWxpbmtzXHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubWVudWxpbmtzIGEge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuY29udGFjdGJvZHlcclxuICB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDdlbSAwZW07XHJcbiAgfVxyXG4gIGlmcmFtZVxyXG4gIHtcclxuICAgIGhlaWdodDoxODBweDtcclxuICB9XHJcbiAgLnN0b3Jldmlld1xyXG4gIHtcclxuICAgIGhlaWdodDoxODBweDtcclxuICB9XHJcbiAgLmVtYWlsYmxvY2tcclxuICB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDAgMHJlbSAwIDJyZW07XHJcbiAgfVxyXG4gIC5zY2lyY2xlXHJcbiAge1xyXG4gICAgaGVpZ2h0OiA0LjllbTtcclxuICAgIHdpZHRoOiA0LjllbTtcclxuICAgIHBhZGRpbmc6IDAuOWVtO1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuXHJcbiAgfVxyXG4gIC5wcm9kdWN0aGVyb2ltZ1xyXG4gIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogOTUlIDkwJTtcclxuICB9XHJcbi5wYWRiMVxyXG57XHJcbiAgcGFkZGluZy1ib3R0b206M3JlbTtcclxufVxyXG4uZmJpY29uXHJcbntcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbiAgLnNjaXJjbGVJbWdcclxuICB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICAubGlua3N0YWJcclxuICB7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggNDBweDtcclxuICB9XHJcbiAgLmJvZHlIZWFkaW5nXHJcbiAge1xyXG4gICAgbWFyZ2luOiAyZW0gMnJlbTtcclxuICB9XHJcbiAgLnN0b3JlXHJcbiAge1xyXG4gICAgcGFkZGluZzogMCAwcmVtIDVyZW0gMnJlbTtcclxuICB9XHJcbi5zdWJtaXRidXR0b25cclxue1xyXG4gIG1hcmdpbjogMCAycmVtO1xyXG59XHJcblxyXG59XHJcblxyXG4uaGVhZGVyZml4ZWRcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(ts, router, snackBar) {
        this.ts = ts;
        this.router = router;
        this.snackBar = snackBar;
        this.emailstring = "";
        this.firstname = "";
        this.useremail = "";
        this.message = "";
        this.sbjmailID = "1994gowtham@gmail.com";
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.emailstring = "mailto:1994gowtham@gmail.com?Subject=Enquiry&body=Hi Team ,\n Myself ... ";
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ContactusComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    ContactusComponent.prototype.sendmessage = function () {
        var _this = this;
        if (this.firstname == "" || this.phonenumber == "" || this.useremail == "" || this.subject == "" || this.message == "") {
            this.showerrormessage = true;
        }
        else {
            this.showerrormessage = false;
            emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send("service_8kkn9d8", "template_9xzsunc", {
                subject: this.subject,
                name: this.firstname + " (" + this.phonenumber + ")",
                message: this.message,
                reply_to: this.useremail,
            }, "user_7DouggsmqErev7C2MVHFp").then(function (result) {
                console.log(result.text);
                _this.snackBar.open("sent successfully", "close", {
                    duration: 3000,
                });
                _this.firstname = "";
                _this.phonenumber = "";
                _this.useremail = "";
                _this.subject = "";
                _this.message = "";
            }, function (error) {
                console.log(error.text);
                _this.snackBar.open("Error sending message. Please try agiain after sometime ..", "close", {
                    duration: 3000,
                });
            });
            ;
        }
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/app/components/contactus/contactus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n <div class=\"row footerrow\" >\r\n    <div class=\"columl col-lg-8 col-md-8 col-sm-12 col-12 pad0\">\r\n      <div class=\"menulinks\">\r\n        <a class=\"\" (click)=\"goToProducts('allproducts','Gold')\" >{{ts.translate('products')}}</a>\r\n        <a (click)=\"goToCollections('allcollections')\">{{ts.translate('collections')}}</a>\r\n        <a (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a>\r\n        <a (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n        <a (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n    </div>\r\n      \r\n    </div>\r\n    <div class=\" col-lg-4 col-md-4 col-sm-12 col-12 flex \">\r\n      <a href=\"https://www.instagram.com/sribalagopalanjewellerymart\" target=\"_blank\"><div class=\"scircle\" >\r\n          <img class=\"scircleImg\" src=\"../../../assets/images/Instasmall.svg\">\r\n        </div>\r\n      </a>\r\n      <a href=\"//api.whatsapp.com/send?phone=919994926518&text=Hi Team !!!\" target=\"_blank\">\r\n        <div class=\"scircle\">\r\n            <img class=\"scircleImg\" src=\"../../../assets/images/whatsappsmall.svg\">\r\n          </div>\r\n        </a>\r\n        <a href=\"https://www.facebook.com/sribalagopalanjewellerymart\" target=\"_blank\">\r\n          <div class=\"scircle\">\r\n              <img class=\"scircleImg\" style=\"margin-top: -2px;\" src=\"../../../assets/images/facebooksmall.svg\">\r\n            </div>\r\n          </a>\r\n          </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"copyrights\">\r\n      Copyrights @ SBJ 2021 | Powered By NEW ERA\r\n   </div>\r\n  </div>\r\n  <div class=\"socialmodeia martop\">\r\n    \r\n       \r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin: auto;\n  width: 100%;\n  bottom: -30em;\n  font-family: 'opR','tamilf';\n  background-color: #101010;\n  color: #fff; }\n\n.footerrow {\n  padding: 65px 0 0;\n  margin: 0 60px;\n  border-bottom: 1px solid #80808045; }\n\n.socialmodeia {\n  display: inline-flex;\n  float: right; }\n\n.scircle {\n  padding: 0 12px;\n  cursor: pointer; }\n\n.columr {\n  text-align: right; }\n\n.logo {\n  font-size: 36px;\n  padding-bottom: 63px; }\n\n.pad0 {\n  padding: 0; }\n\n.copyrights {\n  letter-spacing: 2px;\n  font-size: 10px;\n  padding: 50px 77px;\n  width: 100%; }\n\na:hover {\n  cursor: pointer; }\n\n.menulinks {\n  padding-bottom: 63px; }\n\n.menulinks a {\n  text-decoration: none;\n  color: #fff;\n  padding-right: 40px;\n  font-size: 14px; }\n\n.flex {\n  display: inline-flex;\n  flex-direction: row-reverse; }\n\n.martop {\n  padding-right: 60px;\n  margin-top: -3em; }\n\n@media screen and (max-width: 1024px) {\n  .footerrow {\n    padding: 65px 0 0; }\n  .menulinks a {\n    padding-right: 20px; } }\n\n@media screen and (max-width: 800px) {\n  .footer {\n    height: auto;\n    /* margin: auto; */\n    /* width: 100%; */\n    /* position: relative; */\n    /* bottom: -30em; */\n    background-color: #101010;\n    color: #fff; }\n  .footerrow {\n    padding: 30px 0px 30px 20px; }\n  .columl {\n    padding-left: 0px; }\n  .columr {\n    text-align: left; }\n  .menulinks {\n    padding: 20px 0;\n    text-align: left;\n    display: inline-flex;\n    flex-direction: column; }\n  .logo {\n    font-size: 24px;\n    padding-bottom: 0px; }\n  .copyrights {\n    font-size: 7px; }\n  .menulinks a {\n    text-decoration: none;\n    color: #fff;\n    padding: 0 40px 10px 0;\n    font-size: 14px; }\n  .footerrow {\n    padding: 65px 0px 0px; }\n  .martop {\n    padding: 3em  0 3em 0;\n    width: 100%;\n    background-color: #101010; }\n  .flex {\n    display: inline-flex;\n    flex-direction: row-reverse;\n    justify-content: right;\n    width: 100%;\n    margin-top: 3em;\n    padding-left: 0; } }\n\n@media screen and (max-width: 600px) {\n  .flex {\n    display: inline-flex;\n    flex-direction: row;\n    justify-content: left;\n    width: 100%;\n    margin-top: 3em;\n    padding-left: 0; }\n  .footerrow {\n    border-bottom: 0px;\n    margin: 0 30px; }\n  .scircle {\n    padding: 0 20px 0 0; }\n  .copyrights {\n    padding: 50px 48px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBRUksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFFSSxvQkFBb0I7RUFDcEIsWUFBWSxFQUFBOztBQUVoQjtFQUVJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRW5CO0VBRUksaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUV4QjtFQUVJLFVBQVMsRUFBQTs7QUFFYjtFQUVJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBRW5CO0VBRUksb0JBQW9CO0VBQ3BCLDJCQUEyQixFQUFBOztBQUUvQjtFQUVJLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFJSTtJQUNJLGlCQUFpQixFQUFBO0VBRXJCO0lBRUksbUJBQW1CLEVBQUEsRUFDdEI7O0FBRUw7RUFHSTtJQUVJLFlBQVk7SUFDWixrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esd0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUF5QjtJQUN6QixXQUFXLEVBQUE7RUFHZjtJQUVHLDJCQUEyQixFQUFBO0VBRTlCO0lBRUksaUJBQWlCLEVBQUE7RUFFckI7SUFFSSxnQkFBZ0IsRUFBQTtFQUVwQjtJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNCQUFzQixFQUFBO0VBRTFCO0lBRUksZUFBZTtJQUNuQixtQkFBbUIsRUFBQTtFQUVuQjtJQUdBLGNBQWMsRUFBQTtFQUVkO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZSxFQUFBO0VBRXZCO0lBRUkscUJBQXFCLEVBQUE7RUFFekI7SUFFSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QixFQUFBO0VBRTdCO0lBQ0ksb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlLEVBQUEsRUFDbEI7O0FBRUQ7RUFFSTtJQUNKLG9CQUFvQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZSxFQUFBO0VBRWY7SUFFSSxrQkFBaUI7SUFDakIsY0FBYyxFQUFBO0VBRWxCO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJcclxue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IC0zMGVtO1xyXG4gICAgZm9udC1mYW1pbHk6J29wUicsJ3RhbWlsZic7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvb3RlcnJvd1xyXG57XHJcbiAgICBwYWRkaW5nOiA2NXB4IDAgMDtcclxuICAgIG1hcmdpbjogMCA2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA0NTtcclxufVxyXG4uc29jaWFsbW9kZWlhXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zY2lyY2xlXHJcbntcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29sdW1yXHJcbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5sb2dvXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2M3B4O1xyXG59XHJcbi5wYWQwXHJcbntcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG4uY29weXJpZ2h0c1xyXG57XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNTBweCA3N3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWVudWxpbmtzXHJcbntcclxuICAgIHBhZGRpbmctYm90dG9tOiA2M3B4O1xyXG59XHJcblxyXG4ubWVudWxpbmtzIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZsZXhcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLm1hcnRvcFxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTNlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICAuZm9vdGVycm93IHtcclxuICAgICAgICBwYWRkaW5nOiA2NXB4IDAgMDtcclxuICAgIH1cclxuICAgIC5tZW51bGlua3MgYSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cclxuXHJcbiAgICAuZm9vdGVyXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgLyogYm90dG9tOiAtMzBlbTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXJyb3d7XHJcblxyXG4gICAgICAgcGFkZGluZzogMzBweCAwcHggMzBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbHVtbFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbHVtclxyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubWVudWxpbmtzXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5sb2dvXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5jb3B5cmlnaHRzXHJcbiAgICB7XHJcbiAgICAgXHJcbiAgICBmb250LXNpemU6IDdweDtcclxuICAgIH1cclxuICAgIC5tZW51bGlua3MgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4uZm9vdGVycm93XHJcbntcclxuICAgIHBhZGRpbmc6IDY1cHggMHB4IDBweDtcclxufVxyXG4ubWFydG9wXHJcbntcclxuICAgIHBhZGRpbmc6IDNlbSAgMCAzZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcclxufVxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuZmxleHtcclxuZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVycm93XHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTowcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICB9XHJcbiAgICAuc2NpcmNsZXtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodHN7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCA0OHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    };
    FooterComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    FooterComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    FooterComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gold-schemes/gold-schemes.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/gold-schemes/gold-schemes.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"schemewrapper\">\r\n  <app-header class=\"headerfixed\"></app-header>\r\n  <div class=\"schemebody\">\r\n      <app-todaysrate></app-todaysrate>\r\n    <div class=\"productheroimgdiv\">\r\n      <img class=\"productheroimg\" src=\"../../../assets/images/banners/savings.jpg\" />\r\n    </div>\r\n    <div class=\"schemetext\">\r\n      <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('goldsavingscheme') |  uppercase}}</span>\r\n    </div>\r\n    <p>\r\n      {{ts.translate('goldschemedata')}}\r\n    </p>\r\n    <h2 class=\"gold\"> {{ts.translate('flexischemeHead') |  titlecase }}</h2>\r\n    <p>\r\n      {{ts.translate('flexip1')}}\r\n\r\n    </p>\r\n    <p>\r\n      {{ts.translate('flexip2')}}\r\n    </p>\r\n    <p>\r\n      {{ts.translate('flexip3')}} <a target=\"_blank\" href=\"../../../assets/images/chitscheme.pdf\" download>{{ts.translate('downloadhere')}}<span><img class=\"downicon\" src=\"../../../assets/images/download.png\"/></span></a>\r\n    </p>\r\n    <h2  class=\"gold\"> {{ts.translate('happyGoldHead') |  titlecase }}</h2>\r\n    <p>\r\n      {{ts.translate('happyGold1')}}\r\n\r\n    </p>\r\n    <p>\r\n      {{ts.translate('happyGold2')}}<a target=\"_blank\" href=\"../../../assets/images/chitscheme.pdf\" >{{ts.translate('downloadhere')}}<span><img class=\"downicon\" src=\"../../../assets/images/download.png\"/></span></a>\r\n    </p>\r\n    <!-- <p>\r\n      {{ts.translate('happyGold3')}} \r\n    </p> -->\r\n  \r\n    \r\n      \r\n\r\n    </div>\r\n    <app-talktous [talktouscontent]=\"ts.translate('talktousgoldscheme')\"></app-talktous>\r\n  </div>\r\n  <div class=\"linkstab\">\r\n    <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\r\n    <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a></span> </span> \r\n    \r\n  </div>\r\n <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gold-schemes/gold-schemes.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/gold-schemes/gold-schemes.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schemebody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.schemetext {\n  padding: 2em 6em; }\n\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n\n.bold {\n  font-family: 'opEB','tamilf'; }\n\n.gold {\n  color: #CC9F08; }\n\na {\n  color: #CC9F08; }\n\n.downicon {\n  width: 12px;\n  margin-left: 4px; }\n\np {\n  font-size: 18px;\n  line-height: 2em;\n  color: #555;\n  text-align: justify;\n  font-family: 'opR','tamilf'; }\n\nh2 {\n  font-weight: bold;\n  padding-bottom: 1em;\n  padding-top: 2em; }\n\nol {\n  font-size: 12px;\n  padding: 1em 0 3em 1em; }\n\nh4 {\n  padding-top: 20em; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR','tamilf';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .schemetext {\n    padding: 2em; }\n  p {\n    font-size: 14px; }\n  .linkstab {\n    padding: 11px 40px; }\n  .productheroimg {\n    -o-object-position: 95% 90%;\n       object-position: 95% 90%; } }\n\n.headerfixed {\n  position: fixed;\n  z-index: 99;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2xkLXNjaGVtZXMvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxnb2xkLXNjaGVtZXNcXGdvbGQtc2NoZW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFRSxnQkFBZTtFQUNmLGVBQWU7RUFDZixhQUFZO0VBQ1osOEJBQTZCLEVBQUE7O0FBRS9CO0VBRUksNEJBQTRCLEVBQUE7O0FBRTlCO0VBRUUsY0FBYSxFQUFBOztBQUVqQjtFQUNFLGNBQWEsRUFBQTs7QUFFZjtFQUVFLFdBQVc7RUFDVCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUksb0JBQW9CO0VBQ3BCLFdBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixXQUFVO0VBQ1Ysa0JBQWlCLEVBQUE7O0FBRXJCO0VBRUksWUFBVztFQUNYLHlCQUF5QixFQUFBOztBQUU3QjtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSWY7RUFFSSxlQUFjLEVBQUE7O0FBRWxCO0VBQ0E7SUFFRSxZQUFXLEVBQUE7RUFHYjtJQUNFLGVBQWMsRUFBQTtFQUVoQjtJQUVJLGtCQUFrQixFQUFBO0VBRXJCO0lBRUMsMkJBQXdCO09BQXhCLHdCQUF3QixFQUFBLEVBQ3pCOztBQUlIO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvbGQtc2NoZW1lcy9nb2xkLXNjaGVtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NoZW1lYm9keVxyXG57XHJcbiAgICBwYWRkaW5nOiA3ZW0gMCAwZW0gMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0aGVyb2ltZ2RpdlxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2R1Y3RoZXJvaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5zY2hlbWV0ZXh0XHJcbntcclxuICAgIHBhZGRpbmc6IDJlbSA2ZW07XHJcbn1cclxuXHJcbi5ib2R5SGVhZGluZ1xyXG57XHJcbiAgcGFkZGluZzowIDAuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW46MmVtIDA7XHJcbiAgYm9yZGVyLWxlZnQ6OHB4IHNvbGlkICNDQzlGMDg7XHJcbn1cclxuLmJvbGRcclxuICB7XHJcbiAgICBmb250LWZhbWlseTogJ29wRUInLCd0YW1pbGYnO1xyXG4gIH1cclxuICAuZ29sZFxyXG4gIHtcclxuICAgIGNvbG9yOiNDQzlGMDg7XHJcbiAgfVxyXG5he1xyXG4gIGNvbG9yOiNDQzlGMDg7XHJcbn1cclxuLmRvd25pY29uXHJcbntcclxuICB3aWR0aDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuICBwXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJywndGFtaWxmJztcclxuICB9XHJcblxyXG4gIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICB9XHJcblxyXG4gIG9se1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBwYWRkaW5nOiAxZW0gMCAzZW0gMWVtO1xyXG4gIH1cclxuXHJcbiAgaDR7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBlbTtcclxuICB9XHJcblxyXG4gIC5saW5rc3RhYlxyXG4gIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdvcFInLCd0YW1pbGYnO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBwYWRkaW5nOjExcHggNjVweDtcclxuICB9XHJcbiAgLmRvd25hcnJvd1xyXG4gIHtcclxuICAgICAgaGVpZ2h0OjEycHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG4gIC5wYWRsMTVcclxuICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmhvbWVpbWdcclxuICB7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAucG9pbnRlclxyXG4gIHtcclxuICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNjaGVtZXRleHRcclxuICB7XHJcbiAgICBwYWRkaW5nOjJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgfTtcclxuICAubGlua3N0YWJcclxuICB7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggNDBweDtcclxuICB9XHJcbiAgIC5wcm9kdWN0aGVyb2ltZ1xyXG4gIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogOTUlIDkwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uaGVhZGVyZml4ZWRcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/gold-schemes/gold-schemes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/gold-schemes/gold-schemes.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoldSchemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldSchemesComponent", function() { return GoldSchemesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GoldSchemesComponent = /** @class */ (function () {
    function GoldSchemesComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    GoldSchemesComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    GoldSchemesComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    GoldSchemesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gold-schemes',
            template: __webpack_require__(/*! ./gold-schemes.component.html */ "./src/app/components/gold-schemes/gold-schemes.component.html"),
            styles: [__webpack_require__(/*! ./gold-schemes.component.scss */ "./src/app/components/gold-schemes/gold-schemes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GoldSchemesComponent);
    return GoldSchemesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar  navbar-light  navbar-expand-sm\">\r\n  <a   class=\"navbar-brand\" ><div class=\"logo\" id=\"logo\" (click)=\"goToPage('home')\">\r\n    <img *ngIf=\"languageselect=='LA-EN'\" class=\"logoimg\" src=\"../../../assets/images/sbjlogo.png\">\r\n    <img *ngIf=\"languageselect=='LA-TA'\" class=\"logoimg\" src=\"../../../assets/images/sbjlogo-ta.png\">\r\n   </div></a>\r\n  <button id=\"collapsebut\" class=\"navbar-toggler collapser\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n    <ul class=\"navbar-nav\" id=\"navbarnavid\">\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link producthover dropdown-toggle\" href=\"#\" id=\"navlink1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              {{ts.translate('products') }}\r\n            </a>\r\n        <div class=\"dropdown-menu\" id=\"navdropdown1\" aria-labelledby=\"navlink1\">\r\n            <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','allmetals')\"> {{ts.translate('allproducts') | titlecase}} </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','Gold')\" >{{ts.translate('gold') | titlecase}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','Silver')\" >{{ts.translate('silver') | titlecase}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','Diamond')\" >{{ts.translate('diamond') | titlecase}}</a>\r\n          \r\n            \r\n          </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link producthover dropdown-toggle\" href=\"#\"  id=\"navlink2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              {{ts.translate('collections')}}\r\n            </a>\r\n        <div class=\"dropdown-menu\" id=\"navdropdown2\" aria-labelledby=\"navlink2\">\r\n            <a class=\"dropdown-item\" (click)=\"goToCollections('allcollections')\"> {{ts.translate('allcollections') | titlecase}} </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" (click)=\"goToCollections('marriage')\" >{{ts.translate('wedding') | titlecase}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"goToCollections('women')\" >{{ts.translate('women') | titlecase}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"goToCollections('men')\" >{{ts.translate('men') | titlecase}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"goToCollections('kids')\" >{{ts.translate('kids') | titlecase}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"goToCollections('gifts')\" >{{ts.translate('gifts') | titlecase}}</a>\r\n          \r\n            \r\n          </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"   id=\"navlink3\"  (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"   id=\"navlink4\"  (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"   id=\"navlink5\"  (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n      </li>\r\n  </ul>\r\n </div>\r\n <div class=\"lang \">\r\n  <span class=\"phonelink\"><img class=\"phoneiconheader\" style=\"padding-right: 1rem;\" src=\"../../../assets/images/phoneicon.svg\" />\r\n    {{ ts.translate(\"phonebody1\") }} &nbsp;&nbsp;&nbsp;|</span>\r\n  <mat-form-field class=\"langclass\">\r\n      \r\n      <mat-select id=\"language\"  [(ngModel)]=\"languageselect\" (selectionChange)=\"getLang(languageselect)\" name=\"language\">\r\n        <mat-option class=\"droptext\"  *ngFor=\"let lang of langlist\" [value]=\"lang.key\">\r\n          {{lang.key}}\r\n        </mat-option>\r\n      \r\n      </mat-select>\r\n    </mat-form-field>\r\n    <span> <img  id=\"changedropicon\" src=\"../../../assets/images/downarrowb.png\" /></span>\r\n  </div>\r\n\r\n\r\n\r\n</nav>\r\n<!-- \r\n<nav class=\"navbar  navbar-light  navbar-expand-sm\">\r\n  <a class=\"navbar-brand\" ><div class=\"logo\" id=\"logo\" (click)=\"goToPage('home')\">\r\n    <img *ngIf=\"languageselect=='LA-EN'\" class=\"logoimg\" src=\"../../../assets/images/sbjlogo.png\">\r\n    <img *ngIf=\"languageselect=='LA-TA'\" class=\"logoimg\" src=\"../../../assets/images/sbjlogo-ta.png\">\r\n   </div></a>\r\n  <button id=\"collapsebut\" class=\"navbar-toggler collapser\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n    <ul class=\"navbar-nav\" id=\"navbarnavid\">\r\n      <li class=\"nav-item\">\r\n     <a class=\"nav-link producthover\"  id=\"navlink1\" (click)=\"goToProducts('allproducts','allmetals')\" >{{ts.translate('products') }}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collectionhover\" id=\"navlink2\" (click)=\"goToCollections('allcollections')\">{{ts.translate('collections')}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"navlink3\" (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  id=\"navlink4\" (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"navlink5\" (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n      </li>\r\n  </ul>\r\n  <div id=\"productdropdown\">\r\n\r\n  </div>\r\n  <div id=\"collectiondropdown\">\r\n    \r\n  </div>\r\n </div>\r\n <div class=\"lang \">\r\n  <span class=\"phonelink\"><img class=\"phoneicon\" style=\"padding-right: 1rem;\" src=\"../../../assets/images/phoneicon.svg\" />\r\n    9042222681 &nbsp;&nbsp;&nbsp;|</span>\r\n  <mat-form-field class=\"langclass\">\r\n      \r\n      <mat-select id=\"language\"  [(ngModel)]=\"languageselect\" (selectionChange)=\"getLang(languageselect)\" name=\"language\">\r\n        <mat-option class=\"droptext\"  *ngFor=\"let lang of langlist\" [value]=\"lang\">\r\n          {{lang}}\r\n        </mat-option>\r\n      \r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\r\n\r\n</nav> -->\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#language {\n  background: transparent;\n  border: 0;\n  color: black; }\n\n.langclass {\n  width: 5em;\n  color: #272727;\n  border: 0; }\n\n#language:focus {\n  outline: 0; }\n\n#changedropicon {\n  width: 12px;\n  padding-top: 15px;\n  margin-left: -17px; }\n\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n\n#navdropdown1 {\n  position: absolute;\n  margin-left: 19%;\n  margin-top: 15px;\n  border: 0px;\n  font-size: 16px;\n  line-height: 2.4;\n  width: 300px; }\n\n#navdropdown2 {\n  position: absolute;\n  margin-left: 31.5%;\n  margin-top: 15px;\n  border: 0px;\n  font-size: 16px;\n  line-height: 2.4;\n  width: 300px; }\n\n.dropdown-item:hover {\n  color: #CC9F08;\n  cursor: pointer; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0 0 10px 0 #e2e2e2;\n  overflow-y: unset;\n  margin: 0;\n  background-color: #fff;\n  align-items: center;\n  justify-content: left;\n  padding: 0.5rem 1rem 0px 1rem;\n  border: 0;\n  transition: 0.5s all ease-in-out; }\n\n#navbarContent {\n  position: relative; }\n\n.navbar-brand {\n  margin: 0 !important;\n  padding: 0 0px 0 50px;\n  height: auto;\n  font-size: 18px; }\n\n.collapser {\n  position: absolute;\n  right: 1em;\n  top: 2.2em; }\n\n.navbar-light .navbar-toggler {\n  border-width: 0px;\n  outline-width: 0px; }\n\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: #CC9F08;\n  /* margin-top: 2px; */\n  margin: 0;\n  width: 100%; }\n\n.navbar-light .navbar-nav .nav-link {\n  color: #000;\n  font-size: 18px;\n  font-family: 'opB','tamilf';\n  padding: 2rem 1rem;\n  text-align: right; }\n\n.nav-link:hover {\n  cursor: pointer; }\n\n.logoimg {\n  height: 75px; }\n\n.logoimg:hover {\n  cursor: pointer; }\n\nul {\n  width: 70%;\n  margin: auto; }\n\n.navbar-nav > li {\n  padding: 0 30px; }\n\n.phoneiconheader {\n  padding-right: 1rem;\n  filter: brightness(0%) contrast(50%); }\n\n.navbar-nav {\n  margin: 0 0% 0 13%;\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  overflow-x: auto; }\n\n.lang {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px; }\n\n.langclass {\n  width: 6rem;\n  margin: 0 0 0 2rem; }\n\n.phonelink {\n  padding-top: 1.3rem; }\n\n::ng-deep .mat-option-text {\n  color: #444; }\n\n::ng-deep .mat-form-field-underline {\n  display: none; }\n\n::ng-deep .mat-select-arrow {\n  color: #444 !important;\n  border-left: 15px solid transparent !important;\n  border-right: none !important;\n  border-top: 15px solid transparent !important;\n  border-image-source: none !important;\n  border-image-repeat: stretch !important;\n  margin-top: -2px !important;\n  transform: scale(0.7); }\n\n@media screen and (max-width: 2700px) {\n  .navbar-nav {\n    margin: 0 0% 0 35%; }\n  #navdropdown1 {\n    margin-left: 37%; }\n  #navdropdown2 {\n    margin-left: 43.5%; } }\n\n@media screen and (max-width: 1600px) {\n  .navbar-nav {\n    margin: 0 0% 0 15%;\n    height: 100%;\n    margin-left: 15%; }\n  #navdropdown1 {\n    margin-left: 24%; }\n  #navdropdown2 {\n    margin-left: 36%; } }\n\n@media screen and (max-width: 1500px) {\n  .navbar-nav {\n    margin: -5px 0% 0 9%;\n    height: 100%;\n    margin-left: 15%; } }\n\n@media screen and (max-width: 1300px) {\n  .navbar-nav {\n    padding: 0 6px; }\n  .navbar-nav > li {\n    padding: 0px 10px; }\n  .navbar-light .navbar-nav .nav-link {\n    font-size: 16px; }\n  #navdropdown1 {\n    margin-left: 15%; }\n  #navdropdown2 {\n    margin-left: 28%; } }\n\n@media screen and (max-width: 1030px) {\n  .navbar-nav {\n    margin: 0 0% 0 13%; }\n  .navbar-nav > li {\n    padding: 0 13px; }\n  .navbar-light .navbar-nav .nav-link {\n    padding: 2rem 1rem;\n    font-size: 14px; }\n  #navdropdown1 {\n    margin-left: 15%; }\n  #navdropdown2 {\n    margin-left: 28%; }\n  .lang {\n    padding-top: 4px; } }\n\n::ng-deep .mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n@media screen and (max-width: 768px) {\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 2.5em;\n    z-index: 17;\n    right: 5em; }\n  .logoimg {\n    height: 60px; }\n  .navbar-nav > li {\n    padding: 0 0rem; }\n  .navbar-nav {\n    margin-left: 6rem; }\n  .navbar {\n    padding: 0.5rem 1rem 1rem 1rem; }\n  .navbar-brand {\n    padding-left: 20px; }\n  .phonelink {\n    display: none; }\n  .lang {\n    position: absolute;\n    right: 1rem;\n    top: 1rem; }\n  .navbar-light .navbar-nav .nav-link {\n    padding: 2rem 1rem;\n    font-size: 14px; } }\n\n@media screen and (max-width: 500px) {\n  .lang {\n    right: 5rem;\n    top: 1.5rem; }\n  .navbar-nav {\n    margin-left: 1rem; }\n  #navdropdown1 {\n    margin-bottom: 1rem;\n    box-shadow: none;\n    margin-left: 0;\n    width: 100%;\n    position: unset;\n    background-color: #fbfbfb;\n    border: 0px;\n    font-size: 16px;\n    line-height: 2.4;\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none; }\n  #navdropdown2 {\n    margin-bottom: 1rem;\n    box-shadow: none;\n    margin-left: 0;\n    width: 100%;\n    position: unset;\n    background-color: #fbfbfb;\n    border: 0px;\n    font-size: 16px;\n    line-height: 2.4;\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none; }\n  .navbar > div > ul > li > a {\n    font-size: 18px;\n    text-align: left; } }\n\n.dropdown-submenu {\n  position: relative; }\n\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -1px;\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  color: #fff;\n  background-color: #efefef;\n  font-size: 14px;\n  border: 0; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLHVCQUF1QjtFQUN4QixTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUVaO0VBRUUsVUFBVTtFQUVSLGNBQWM7RUFDZCxTQUFTLEVBQUE7O0FBRWI7RUFDRSxVQUFTLEVBQUE7O0FBRVg7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUVFLDZCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQTs7QUFHWjtFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWE7RUFDYixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDWixlQUFlO0VBQ2hCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsU0FBUztFQUNULHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixTQUFRO0VBQ1AsZ0NBQWdDLEVBQUE7O0FBR25DO0VBRUUsa0JBQWtCLEVBQUE7O0FBRXBCO0VBRUMsb0JBQW1CO0VBQ25CLHFCQUFzQjtFQUN0QixZQUFZO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUVFLGtCQUFrQjtFQUNsQixVQUFVO0VBRVYsVUFBVSxFQUFBOztBQUlaO0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFr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QUFlO0lBQ2YsZ0JBQWdCLEVBQUEsRUFDakI7O0FBR0Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxNQUFNO0VBQ04sVUFBVTtFQUNWLGdCQUFnQjtFQUVoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBR1g7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2xhbmd1YWdlXHJcbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwO1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuLmxhbmdjbGFzc1xyXG57XHJcbiAgd2lkdGg6IDVlbTtcclxuICAgXHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG4jbGFuZ3VhZ2U6Zm9jdXN7XHJcbiAgb3V0bGluZTowO1xyXG59XHJcbiNjaGFuZ2Vkcm9waWNvblxyXG57XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbiNsYW5ndWFnZSBvcHRpb25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjo1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOjVlbTtcclxuICBjb2xvcjpncmV5O1xyXG5cclxufVxyXG4jbmF2ZHJvcGRvd24xXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMi40O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuXHJcbn1cclxuI25hdmRyb3Bkb3duMlxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMS41JTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMi40O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgY29sb3I6I0NDOUYwODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hdmJhcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI2UyZTJlMjtcclxuICBvdmVyZmxvdy15OiB1bnNldDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwcHggMXJlbTtcclxuICBib3JkZXI6MDtcclxuICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgXHJcbn1cclxuI25hdmJhckNvbnRlbnRcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuIFxyXG4gbWFyZ2luOjAgIWltcG9ydGFudDtcclxuIHBhZGRpbmc6IDAgMHB4IDAgNTBweCA7XHJcbiBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2VyXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFlbTtcclxuIFxyXG4gIHRvcDogMi4yZW07XHJcblxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlclxyXG57XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgb3V0bGluZS13aWR0aDogMHB4O1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cyB7XHJcbiBjb2xvcjojQ0M5RjA4O1xyXG4vLyAgcGFkZGluZzogMTBweCAxcmVtIDByZW07XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAycHg7ICovXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNjYzlmMDg7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjojMDAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ29wQicsJ3RhbWlsZic7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIFxyXG59XHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvaW1ne1xyXG4gIGhlaWdodDo3NXB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ29pbWc6aG92ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxudWx7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm5hdmJhci1uYXY+bGkge1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuXHJcbn1cclxuLnBob25laWNvbmhlYWRlcntcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwJSkgY29udHJhc3QoNTAlKTtcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgbWFyZ2luOiAwIDAlIDAgMTMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmxhbmd7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxufVxyXG5cclxuLmxhbmdjbGFzc1xyXG57XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgbWFyZ2luOiAwIDAgMCAycmVtO1xyXG59XHJcbi5waG9uZWxpbmtcclxue1xyXG4gIHBhZGRpbmctdG9wOiAxLjNyZW07XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dFxyXG57XHJcbiAgY29sb3I6IzQ0NDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICBjb2xvcjojNDQ0ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWltYWdlLXNvdXJjZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1pbWFnZS1yZXBlYXQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG59XHJcblxyXG4gXHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNzAwcHgpe1xyXG4gIC5uYXZiYXItbmF2e1xyXG4gICAgbWFyZ2luOiAwIDAlIDAgMzUlO1xyXG4gICAgXHJcbn1cclxuXHJcbiAgI25hdmRyb3Bkb3duMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbiAgfVxyXG4gICNuYXZkcm9wZG93bjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDMuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4gIEBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpe1xyXG4gICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgIG1hcmdpbjogMCAwJSAwIDE1JTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcbiAgI25hdmRyb3Bkb3duMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbiAgfVxyXG4gICNuYXZkcm9wZG93bjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzYlO1xyXG4gIH1cclxuICB9XHJcbiAgQG1lZGlhICBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCl7XHJcbiAgICAubmF2YmFyLW5hdntcclxuICAgICAgbWFyZ2luOiAtNXB4IDAlIDAgOSU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMzAwcHgpXHJcbiAge1xyXG4gICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGlua1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgI25hdmRyb3Bkb3duMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG4gICNuYXZkcm9wZG93bjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gIH1cclxuICB9XHJcbiBcclxuICBAbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzMHB4KXtcclxuICAgIC5uYXZiYXItbmF2XHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbjogMCAwJSAwIDEzJTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2ID4gbGkge1xyXG4gICAgICBwYWRkaW5nOiAwIDEzcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICAgICAgIFxyXG4gICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBcclxuICB9XHJcbiAgI25hdmRyb3Bkb3duMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG4gICNuYXZkcm9wZG93bjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gIH1cclxuICAubGFuZ3tcclxuICAgIHBhZGRpbmctdG9wOjRweDtcclxuICB9XHJcbiAgfVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAudG9wbmF2ID4gLmxhbmcgPiAjbGFuZ3VhZ2VcclxuICAgICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIuNWVtO1xyXG4gICAgICAgIHotaW5kZXg6IDE3O1xyXG4gICAgICAgIHJpZ2h0OiA1ZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ29pbWd7XHJcbiAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFyLW5hdiA+IGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnJlbSA7XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFye1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyLWJyYW5kXHJcbiAgICAgIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBob25lbGlua3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5sYW5ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICB0b3A6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICAgXHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAubGFuZ3tcclxuICAgICAgICByaWdodDogNXJlbTtcclxuICAgICAgICB0b3A6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW0gO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI25hdmRyb3Bkb3duMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICBib3JkZXI6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMi40O1xyXG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG5zY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbmF2ZHJvcGRvd24yIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjQ7XHJcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbnNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgPiBkaXYgPiB1bCA+IGxpID4gYSB7XHJcbiAgICAgICBcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kcm9wZG93bi1zdWJtZW51IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIFxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
        this.langlist = [{ key: 'LA-EN', value: 'English' }, { key: 'LA-TA', value: 'தமிழ்' }];
    }
    HeaderComponent.prototype.setLang = function () {
        if (window.sessionStorage.getItem('lang') == 'LA-TA') {
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
                document.getElementById("navdropdown1").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "15%";
                document.getElementById("navdropdown1").style.marginLeft = "18%";
                document.getElementById("navdropdown2").style.marginLeft = "30%";
            }
            if (window.innerWidth < 1500) {
                document.getElementById("navbarnavid").style.marginLeft = "9%";
                document.getElementById("navdropdown1").style.marginLeft = "13%";
                document.getElementById("navdropdown2").style.marginLeft = "25%";
            }
            if (window.innerWidth < 1300) {
                document.getElementById("navlink1").style.padding = "0rem 0";
                document.getElementById("navlink2").style.padding = "0rem 0";
                document.getElementById("navlink3").style.padding = "0rem 0";
                document.getElementById("navlink4").style.padding = "0rem 0";
                document.getElementById("navlink5").style.padding = "0rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "6%";
                document.getElementById("navdropdown1").style.marginLeft = "11%";
                document.getElementById("navdropdown2").style.marginLeft = "23%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navlink1").style.padding = "0rem 1rem";
                document.getElementById("navlink2").style.padding = "0rem 1rem";
                document.getElementById("navlink3").style.padding = "0rem 1rem";
                document.getElementById("navlink4").style.padding = "0rem 1rem";
                document.getElementById("navlink5").style.padding = "0rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "5%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "1%";
                document.getElementById("navdropdown1").style.marginLeft = "0";
                document.getElementById("navdropdown2").style.marginLeft = "0";
            }
            document.getElementById("wrapper").style.fontFamily = "tamilf !important";
        }
        else {
            document.getElementById("navlink1").style.padding = "10px 0px";
            document.getElementById("navlink2").style.padding = "10px 0px";
            document.getElementById("navlink3").style.padding = "10px 0px";
            document.getElementById("navlink4").style.padding = "10px 0px";
            document.getElementById("navlink5").style.padding = "10px 0px";
            document.getElementById("navbarnavid").style.marginLeft = "11%";
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "21%";
            }
            if (window.innerWidth < 1300) {
                document.getElementById("navlink1").style.padding = "10px 0px";
                document.getElementById("navlink2").style.padding = "10px 0px";
                document.getElementById("navlink3").style.padding = "10px 0px";
                document.getElementById("navlink4").style.padding = "10px 0px";
                document.getElementById("navlink5").style.padding = "10px 0px";
                document.getElementById("navbarnavid").style.marginLeft = "13%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navlink1").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink2").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink3").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink4").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink5").style.padding = "10px 1rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "10%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "1%";
                document.getElementById("navdropdown1").style.marginLeft = "0";
                document.getElementById("navdropdown2").style.marginLeft = "0";
            }
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.dropdown-submenu a.test').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        });
        if (window.sessionStorage.getItem('lang') == "EN") {
            window.sessionStorage.setItem('lang', 'LA-EN');
        }
        console.log(window.sessionStorage.getItem('lang'));
        if (window.sessionStorage.getItem('lang')) {
            this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
            console.log(window.sessionStorage.getItem('lang'));
            this.languageselect = window.sessionStorage.getItem('lang');
            console.log(this.languageselect + " selected");
            this.setLang();
        }
        else {
            window.sessionStorage.setItem('lang', 'LA-EN');
            this.languageselect = 'LA-EN';
        }
        document.getElementById("language").style.color = "#000";
    };
    HeaderComponent.prototype.getLang = function (data) {
        console.log(data);
        if (data == 'LA-TA') {
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "15%";
                document.getElementById("navdropdown1").style.marginLeft = "18%";
                document.getElementById("navdropdown2").style.marginLeft = "30%";
            }
            if (window.innerWidth < 1500) {
                document.getElementById("navbarnavid").style.marginLeft = "9%";
                document.getElementById("navdropdown1").style.marginLeft = "13%";
                document.getElementById("navdropdown2").style.marginLeft = "25%";
            }
            if (window.innerWidth < 1200) {
                document.getElementById("navlink1").style.padding = "0rem 0";
                document.getElementById("navlink2").style.padding = "0rem 0";
                document.getElementById("navlink3").style.padding = "0rem 0";
                document.getElementById("navlink4").style.padding = "0rem 0";
                document.getElementById("navlink5").style.padding = "0rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "6%";
                document.getElementById("navdropdown1").style.marginLeft = "11%";
                document.getElementById("navdropdown2").style.marginLeft = "23%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navlink1").style.padding = "0rem 1rem";
                document.getElementById("navlink2").style.padding = "0rem 1rem";
                document.getElementById("navlink3").style.padding = "0rem 1rem";
                document.getElementById("navlink4").style.padding = "0rem 1rem";
                document.getElementById("navlink5").style.padding = "0rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "5%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "2rem 0";
                document.getElementById("navlink2").style.padding = "2rem 0";
                document.getElementById("navlink3").style.padding = "2rem 0";
                document.getElementById("navlink4").style.padding = "2rem 0";
                document.getElementById("navlink5").style.padding = "2rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "1%";
                document.getElementById("navdropdown1").style.marginLeft = "0";
                document.getElementById("navdropdown2").style.marginLeft = "0";
            }
        }
        else {
            document.getElementById("navlink1").style.padding = "10px 0px";
            document.getElementById("navlink2").style.padding = "10px 0px";
            document.getElementById("navlink3").style.padding = "10px 0px";
            document.getElementById("navlink4").style.padding = "10px 0px";
            document.getElementById("navlink5").style.padding = "10px 0px";
            document.getElementById("navbarnavid").style.marginLeft = "11%";
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "21%";
            }
            if (window.innerWidth < 1200) {
                document.getElementById("navlink1").style.padding = "10px 0rem";
                document.getElementById("navlink2").style.padding = "10px 0rem";
                document.getElementById("navlink3").style.padding = "10px 0rem";
                document.getElementById("navlink4").style.padding = "10px 0rem";
                document.getElementById("navlink5").style.padding = "10px 0rem";
                document.getElementById("navbarnavid").style.marginLeft = "13%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navlink1").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink2").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink3").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink4").style.padding = "10px 1rem 1rem";
                document.getElementById("navlink5").style.padding = "10px 1rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "10%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "1%";
                document.getElementById("navdropdown1").style.marginLeft = "0";
                document.getElementById("navdropdown2").style.marginLeft = "0";
            }
        }
        this.ts.updateComp1Val(data);
        window.sessionStorage.setItem('lang', data);
        console.log(data);
        this.ts.updateComp1Val(data);
        window.sessionStorage.setItem('lang', data);
    };
    HeaderComponent.prototype.goToProducts = function (types, metals) {
        document.getElementById("collapsebut").click();
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    HeaderComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    HeaderComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    HeaderComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        var logo = document.getElementById("logo");
        console.log(x.className);
        if (x.className === "topnav" || x.className === "topnav scrolled") {
            if (x.className === "topnav") {
                x.className += " scrolled";
            }
            x.className += " responsive";
            x.style.height = "auto";
            logo.style.display = "none";
        }
        else {
            x.className = "topnav";
            x.className += " scrolled";
            logo.style.display = "block";
            x.style.height = "7em";
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"wrapper\" class=\"wrapper\">\r\n \r\n\r\n  <app-todaysrate></app-todaysrate>\r\n  \r\n\r\n   <!-- <div class=\"todaysrate\">\r\n     <div class=\"goldratediv\">\r\n       <img class=\"goldrateimg\"  src=\"../../../assets/images/goldrate.png\" />\r\n\r\n       <div class=\"goldrate\"  id=\"rate\">\r\n          <div class=\"goldratehead\">\r\n              {{ts.translate('todaysrate')}}\r\n          </div>\r\n          <div class=\"goldbody\">\r\n           <div> <span class=\"bold\"><img style=\"width:1.5em;    margin-right: 8px;\" src=\"../../../assets/images/promise1.svg\" /> {{ts.translate('Gold')}} 1gm</span> - RS {{goldprice}}</div>\r\n          \r\n          </div>\r\n        </div>\r\n\r\n\r\n     </div>\r\n\r\n     <div class=\"silverratediv\">\r\n        <img class=\"silverrateimg\"  src=\"../../../assets/images/silverrate.png\" />\r\n \r\n        <div class=\"silverrate\"  id=\"rate\">\r\n           <div class=\"silverratehead\">\r\n               {{ts.translate('todaysrate')}}\r\n           </div>\r\n           <div class=\"silverbody\">\r\n           \r\n            <div> <span class=\"bold\"><img  style=\"width:1.5em;    margin-right: 8px;\" src=\"../../../assets/images/promise1.svg\" /> {{ts.translate('Silver')}}  1gm</span> - RS {{silverprice}}</div>\r\n           </div>\r\n         </div>\r\n \r\n \r\n      </div>\r\n   </div> -->\r\n\r\n\r\n  <nav class=\"navbar  navbar-light  navbar-expand-sm\">\r\n    <a class=\"navbar-brand\" ><div class=\"logo\" id=\"logo\" (click)=\"goToPage('home')\">\r\n      <img *ngIf=\"languageselect=='LA-EN'\" class=\"logoimg\" src=\"../../../assets/images/sbjlogo.png\">\r\n      <img *ngIf=\"languageselect=='LA-TA'\" class=\"logoimg\" src=\"../../../assets/images/sbjlogo-ta.png\">\r\n     </div></a>\r\n    <button id=\"collapsebut\" class=\"navbar-toggler collapser\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n      <ul class=\"navbar-nav\" id=\"navbarnavid\">\r\n        <li class=\"nav-item dropdown1\">\r\n      \r\n       <a class=\"nav-link producthover dropdown-toggle\" href=\"#\" id=\"navlink1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{ts.translate('products') }}\r\n        </a>\r\n       <div class=\"dropdown-menu\" id=\"navdropdown1\" aria-labelledby=\"navlink1\">\r\n          <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','allmetals')\"> {{ts.translate('allproducts') | titlecase}} </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','Gold')\" >{{ts.translate('gold') | titlecase}}</a>\r\n          <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','Silver')\" >{{ts.translate('silver') | titlecase}}</a>\r\n          <a class=\"dropdown-item\" (click)=\"goToProducts('allproducts','Diamond')\" >{{ts.translate('diamond') | titlecase}}</a>\r\n          <!-- <li class=\"dropdown-submenu\">\r\n              <a class=\"test\" tabindex=\"-1\" (click)=\"open(1)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ts.translate('gold') | titlecase}} </a>\r\n              <ul class=\"dropdown-menu\" id=\"drop1\">\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('maalai') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('bangles') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('necklace') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('chains') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('earrings') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('rings') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('bracelet') | titlecase}}</a></li>\r\n                <li><a tabindex=\"-1\" href=\"#\">{{ts.translate('dollar') | titlecase}}</a></li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"dropdown-submenu\" >\r\n                <a class=\"test\" tabindex=\"-2\"  (click)=\"open(2)\"  aria-expanded=\"false\">{{ts.translate('silver') | titlecase}} </a>\r\n                <ul class=\"dropdown-menu\" id=\"drop2\">\r\n                  <li><a tabindex=\"-2\" href=\"#\">{{ts.translate('anklet') | titlecase}}</a></li>\r\n                  <li><a tabindex=\"-2\" href=\"#\">{{ts.translate('gifts') | titlecase}}</a></li>\r\n                 \r\n              \r\n                  \r\n                </ul>\r\n              </li>\r\n              <li class=\"dropdown-submenu\" >\r\n                  <a class=\"test\" tabindex=\"-2\"  (click)=\"open(3)\" href=\"#\" aria-expanded=\"false\">{{ts.translate('diamond') | titlecase}} </a>\r\n                  <ul class=\"dropdown-menu\" id=\"drop3\">\r\n                    <li><a tabindex=\"-2\" href=\"#\">{{ts.translate('studs') | titlecase}}</a></li>\r\n                    <li><a tabindex=\"-2\" href=\"#\">{{ts.translate('necklace') | titlecase}}</a></li>\r\n                  </ul>\r\n                </li> -->\r\n          \r\n        </div>\r\n        </li>\r\n      \r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link producthover dropdown-toggle\" href=\"#\"  id=\"navlink2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            {{ts.translate('collections')}}\r\n          </a>\r\n          <div class=\"dropdown-menu\" id=\"navdropdown2\" aria-labelledby=\"navlink2\">\r\n              <a class=\"dropdown-item\" (click)=\"goToCollections('allcollections')\"> {{ts.translate('allcollections') | titlecase}} </a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" (click)=\"goToCollections('marriage')\" >{{ts.translate('wedding') | titlecase}}</a>\r\n              <a class=\"dropdown-item\" (click)=\"goToCollections('women')\" >{{ts.translate('women') | titlecase}}</a>\r\n              <a class=\"dropdown-item\" (click)=\"goToCollections('men')\" >{{ts.translate('men') | titlecase}}</a>\r\n              <a class=\"dropdown-item\" (click)=\"goToCollections('kids')\" >{{ts.translate('kids') | titlecase}}</a>\r\n              <a class=\"dropdown-item\" (click)=\"goToCollections('gifts')\" >{{ts.translate('gifts') | titlecase}}</a>\r\n            \r\n              \r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"navlink3\" (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"  id=\"navlink4\" (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"navlink5\" (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n        </li>\r\n    </ul>\r\n   \r\n   </div>\r\n   <div class=\"lang \">\r\n    <span class=\"phonelink\"><img class=\"phoneicon\" style=\"width:18px;margin-top: -2px;\" src=\"../../../assets/images/wiconw.png\" />\r\n      {{ ts.translate(\"phonebody1\") }} &nbsp;&nbsp;&nbsp;|</span>\r\n    <mat-form-field class=\"langclass\">\r\n        \r\n        <mat-select id=\"language\"  [(ngModel)]=\"languageselect\" (selectionChange)=\"getLang(languageselect)\" name=\"language\">\r\n          <mat-option class=\"droptext\"  *ngFor=\"let lang of langlist\" [value]=\"lang\">\r\n            {{lang}} \r\n          </mat-option>\r\n        \r\n        </mat-select>\r\n      </mat-form-field>\r\n      <span> <img id=\"changedrop\" src=\"../../../assets/images/downarrow.png\" /></span>\r\n\r\n   \r\n      \r\n    </div>\r\n  \r\n  \r\n  \r\n  </nav>\r\n  <div id=\"productdropdown\" >\r\n    products\r\n      </div>\r\n  <div id=\"collectiondropdown\">\r\n    \r\n  </div>\r\n\r\n<div class=\"homebody\">\r\n\r\n  <div id=\"carouselExampleSlidesOnly herocarosol\" class=\"carousel slide heroc\" data-ride=\"carousel\" data-interval=\"3000\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item .item active\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/banners/hero1.jpg\" alt=\"First slide\">\r\n        <div class=\"carousel-caption d-none d-md-block cartext\">\r\n          <p>Celebrate Golden memories ..</p>\r\n         \r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/banners/hero2.jpg\" alt=\"Second slide\">\r\n        <div class=\"carousel-caption d-none d-md-block cartext\">\r\n          <p>Brilliance for your shine</p>\r\n         \r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/banners/hero3.jpg\" alt=\"Third slide\">\r\n        <div class=\"carousel-caption d-none d-md-block cartext\">\r\n            <p>Fashion in every Gold</p>\r\n          \r\n         \r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/banners/hero4.jpg\" alt=\"Fouth slide\">\r\n        <div class=\"carousel-caption d-none d-md-block cartext\">\r\n            <p>Our jewelry, your style</p>\r\n         \r\n        </div>\r\n      </div>\r\n     \r\n      \r\n    </div>\r\n  \r\n    <div class=\"downarrowdiv\">\r\n    <a (click)=\"scrollToproducts()\"> <span class=\"material-icons downarrow\" >\r\n      <button style=\"border: 0px;\r\n      outline: 0px;\r\n      background-color: transparent;\">expand_more</button>\r\n            </span>\r\n          \r\n          </a>\r\n       \r\n    </div>\r\n  </div>\r\n  <div id=\"productsec\" class=\"bodyView\" #products data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('products') |  uppercase}}</span>\r\n    </div>\r\n   <div class=\"flexhori\">\r\n        <div class=\"indi\">\r\n            <div class=\"imageContainer\">\r\n              <a (click)=\"goToProducts('allproducts','Gold')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/banners/gold.jpg\">\r\n                <div class=\"bottom-left \"> {{ts.translate('gold') | titlecase }} <img class=\"rarrow\" src=\"../../../assets/images/downarrow2.png\"/></div></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"\">\r\n            <div class=\"imageContainer\">\r\n                <a (click)=\"goToProducts('allproducts','Diamond')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/banners/diamond.jpg\">\r\n                <div class=\"bottom-left \"> {{ts.translate('diamond') | titlecase }}<img class=\"rarrow\" src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"\">\r\n            <div class=\"imageContainer silver\">\r\n                <a (click)=\"goToProducts('allproducts','Silver')\"> <img class=\"collectionGoldImage silver\" src=\"../../../assets/images/banners/silver.jpg\">\r\n                <div class=\"bottom-left \"> {{ts.translate('silver') | titlecase }}<img class=\"rarrow\" src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n            </div>\r\n        </div>\r\n    </div> \r\n\r\n\r\n   <div class=\"flexhorimobile\">\r\n      <div id=\"demo3\" class=\"carousel slide\" data-interval=\"10000\" pause=\"true\" >\r\n\r\n \r\n  \r\n  \r\n          <div class=\"carousel-inner no-padding\">\r\n\r\n            <div class=\"carousel-item padl4 active\">\r\n              <div class=\"col-sm-12 col-12\">\r\n                <a (click)=\"goToProducts('allproducts','Gold')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/banners/gold.jpg\">\r\n                <div class=\"bottom-left padr3\"> {{ts.translate('gold') | titlecase }}<img class=\"rarrow\" src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n              </div>  \r\n            </div>  \r\n\r\n            <div class=\"carousel-item padl4\">\r\n              <div class=\"col-sm-12 col-12\">\r\n                  <a (click)=\"goToProducts('allproducts','Diamond')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/banners/diamond.jpg\">\r\n                    <div class=\"bottom-left padr3\"> {{ts.translate('diamond') | titlecase }}<img class=\"rarrow\" src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n              </div>  \r\n            </div>\r\n        \r\n            <div class=\"carousel-item padl4\">\r\n              <div class=\"col-sm-12 col-12\">\r\n                  <a (click)=\"goToProducts('allproducts','Silver')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/banners/silver.jpg\">\r\n                    <div class=\"bottom-left padr3\"> {{ts.translate('silver') | titlecase }}<img class=\"rarrow\" src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n              </div>  \r\n            </div>  \r\n        \r\n            \r\n         </div>\r\n         <a id=\"prevbut\" class=\"carousel-control-prev\" href=\"#demo3\" data-slide=\"prev\">\r\n                <div class=\"nextCaro\">\t<img class=\"left\" src=\"../../../assets/images/arrow.png\" /></div>\r\n           </a>\r\n         \r\n         <a class=\"carousel-control-next\" (click)=\"showprev()\"  href=\"#demo3\" data-slide=\"next\">\r\n             <div class=\"nextCaro\">\t<img class=\"right\" src=\"../../../assets/images/arrow.png\" /></div>\r\n          </a>\r\n       </div>\r\n       \r\n     \r\n  </div>\r\n  \r\n       \r\n     \r\n\r\n     \r\n  \r\n  </div>\r\n  <div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"bodyHeading\" >\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('collections') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row padl5\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12 padding0\" >\r\n          <div class=\"imageContainer marb20\">\r\n              <a (click)=\"goToCollections('marriage')\"> <img class=\"collectionwedding smallheight\" id=\"marriagecoll\" src=\"../../../assets/images/banners/collectionpotrait.jpg\">\r\n              <div class=\"bottom-left left2 top2\"> {{ts.translate('wedding') | titlecase }}<img class=\"rarrow\" id=\"marriageimg\" src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer colimg mar-3 mar-r-1\">\r\n                  <a (click)=\"goToCollections('men')\">  <img  class=\"collectionImage h240 \" src=\"../../../assets/images/banners/collectionmen.jpg\">\r\n                  <div class=\"bottom-left lefter bot1\">{{ts.translate('men') | titlecase}}<img class=\"rarrow\"  id=\"menimg\"  src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"row padt20\">\r\n                <div class=\"imageContainer marb20 colimg mar-r-1\">\r\n                    <a (click)=\"goToCollections('women')\"> <img class=\"collectionImage\" src=\"../../../assets/images/banners/collectionwomen.jpg\"/>\r\n                    <div class=\"bottom-left lefter bot1\">{{ts.translate('women') | titlecase}}<img class=\"rarrow\"  id=\"womenimg\"  src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n                </div>\r\n             </div>\r\n         \r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer colimg mar-3 padingt20\">\r\n                  <a (click)=\"goToCollections('kids')\"> <img class=\"collectionImage h240 \" src=\"../../../assets/images/banners/collectionkids.jpg\">\r\n                  <div class=\"bottom-left lefter bot1\">{{ts.translate('kids')| titlecase }}<img class=\"rarrow\"  id=\"kidsimg\"  src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n              </div>\r\n            </div>\r\n          <div class=\"row padt20\">\r\n             <div class=\"imageContainer colimg\">\r\n                <a (click)=\"goToCollections('gifts')\"> <img class=\"collectionImage\" src=\"../../../assets/images/banners/collectiongift.jpg\">\r\n                 <div class=\"bottom-left lefter bot1\">{{ts.translate('gifts') | titlecase}} <img class=\"rarrow\"  id=\"giftsimg\"  src=\"../../../assets/images/downarrow2.png\"/> </div></a>\r\n             </div>\r\n           </div>\r\n       </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('promises') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row marginTop\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer pcolor1\">\r\n            <div class=\"promiseBody\">\r\n              <div>\r\n                <img class=\"width50\" src=\"../../../assets/images/promise1.svg\" />\r\n              </div>\r\n              {{ts.translate('promise1')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">1</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer pcolor2\">\r\n            <div class=\"promiseBody\">\r\n                <div>\r\n                    <img class=\"width50\" src=\"../../../assets/images/promise2.svg\" />\r\n                  </div>\r\n                  {{ts.translate('promise2')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">2</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer pcolor1\">\r\n            <div class=\"promiseBody\">\r\n                <div>\r\n                    <img class=\"width50\" src=\"../../../assets/images/promise3.svg\" />\r\n                  </div>\r\n                  {{ts.translate('promise3')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">3</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer pcolor2\">\r\n            <div class=\"promiseBody\">\r\n                <div>\r\n                    <img class=\"width50\" src=\"../../../assets/images/promise4.svg\" />\r\n                  </div>\r\n                  {{ts.translate('promise4')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">4</div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('top') |  uppercase}} <span class=\"bold\">{{ts.translate('sellingjewels') |  uppercase}}</span>\r\n  </div>\r\n<app-topselling></app-topselling>\r\n</div>\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n      {{ts.translate('whatpeople') |  uppercase}} <span class=\"bold\">{{ts.translate('talkaboutus') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"userpic\">\r\n        <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n        <div class=\"username\">\r\n          <div class=\"name\">User1</div>\r\n          <div class=\"designation\">Buisness Women</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usercomment\">\r\n        <div>\r\n          <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n        </div>\r\n        <div class=\"comments\">\r\n            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n            a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n            though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"userpic\">\r\n          <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n          <div class=\"username\">\r\n            <div class=\"name\">User2</div>\r\n            <div class=\"designation\">Buisness Women</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"usercomment\">\r\n          <div>\r\n            <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n          </div>\r\n          <div class=\"comments\">\r\n              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n              a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n              though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n<app-talktous [talktouscontent]=\"ts.translate('talktoushome')\"></app-talktous>\r\n<app-footer></app-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css\");\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\nmat-sidenav {\n  width: 250px; }\n.cartext {\n  position: absolute;\n  top: 40vh;\n  left: -70rem;\n  font-family: dance;\n  text-align: center;\n  font-size: 4rem;\n  height: 5rem; }\nmain {\n  padding: 10px; }\n.wrapper {\n  overflow-x: hidden;\n  position: relative; }\n.herocarosol {\n  position: relative;\n  height: 100vh; }\n.heroc {\n  height: 100vh; }\n.carousel-inner {\n  height: 100%; }\n.carousel-item, .item, .carousel-item.active {\n  height: 100%;\n  text-align: center;\n  position: relative; }\n.textonimg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n#changedrop {\n  width: 12px;\n  padding-top: 17px;\n  margin-left: -17px; }\n.downarrow {\n  color: white;\n  position: absolute;\n  /* top: 5em; */\n  font-size: 5em;\n  bottom: 0;\n  left: 47%;\n  -webkit-animation: mymove 1s infinite;\n          animation: mymove 1s infinite;\n  cursor: pointer; }\n@-webkit-keyframes mymove {\n  from {\n    opacity: 0;\n    bottom: 0.5em; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n@keyframes mymove {\n  from {\n    opacity: 0;\n    bottom: 0.5em; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n.todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 70%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  cursor: pointer; }\n#products {\n  margin-left: 10em; }\n.dropdown {\n  float: left;\n  overflow: hidden; }\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n.lang {\n  float: right; }\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n.rarrow {\n  transform: rotate(-90deg);\n  width: 14px;\n  margin-left: -8px;\n  margin-top: -2px;\n  opacity: 0;\n  transition: 0.5s all ease-in-out; }\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n.dropdown:hover .dropdown-content {\n  display: block; }\n#language {\n  background: transparent;\n  border: 0;\n  color: white; }\n#language:focus {\n  outline: 0; }\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n.carosolimg {\n  transition: 0.3s all ease-in-out;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.bodyView {\n  padding: 0em 6em;\n  width: 100%; }\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 80px 0 32px 0;\n  border-left: 8px solid #CC9F08; }\n.bold {\n  font-family: 'opEB','tamilf'; }\n.imageContainer {\n  position: relative;\n  color: #fff;\n  padding: 0em 2em 0em 0em; }\n.phonelink {\n  font-size: 12px;\n  padding-top: 1em; }\n.marbar2 {\n  margin-bottom: 2em; }\n.collectionGoldImage {\n  width: 97%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 530px;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.silver {\n  width: 102%; }\n.collectionwedding {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 530px;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.smallheight {\n  height: 522px; }\n.collectionImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 250px;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.weddingcoll {\n  padding: 0; }\n.bottom-left {\n  position: absolute;\n  bottom: 1em;\n  color: #fff;\n  left: 2em;\n  font-family: 'opB','tamilf';\n  font-size: 2em; }\n.collectionImage:hover, .collectionGoldImage:hover, .collectionwedding:hover {\n  transform: translate(0, -8px);\n  cursor: pointer; }\n.collectionImage:hover + .bottom-left > .rarrow, .collectionGoldImage:hover + .bottom-left > .rarrow, .collectionwedding:hover + .bottom-left > .rarrow {\n  opacity: 1;\n  margin-left: 8px;\n  transition: 0.5s all ease-in-out; }\n.PromiseContainer {\n  height: 144px;\n  text-align: center;\n  width: 100%;\n  padding: 3em 4em;\n  border-radius: 5px;\n  position: relative; }\n.pcolor1 {\n  background-color: #FFFBEF; }\n.pcolor2 {\n  background-color: #FFF7E3; }\n.promiseBody {\n  font-family: 'opB','tamilf';\n  font-size: 18px; }\n.numbering {\n  position: absolute;\n  top: -1em;\n  left: 2em;\n  width: 24px;\n  height: 24px;\n  background-color: #333333;\n  color: #fff;\n  font-size: 16px;\n  font-family: 'opEB','tamilf';\n  border-radius: 5px; }\n::ng-deep .mat-option-text {\n  color: #444; }\n::ng-deep .mat-option-text:hover {\n  color: #CC9F08;\n  font-weight: 600; }\n::ng-deep .mat-select-arrow {\n  color: #fff;\n  border-left: 15px solid transparent !important;\n  border-right: none !important;\n  border-top: 15px solid transparent !important;\n  border-image-source: none !important;\n  border-image-repeat: stretch !important;\n  margin-top: -2px !important; }\n.marginTop {\n  margin-top: 8em; }\n.userpic {\n  display: inline-flex;\n  height: 100px;\n  position: relative; }\n.userimg {\n  width: 100px;\n  border-radius: 6px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.doublequotes {\n  width: 30px;\n  height: 30px;\n  margin: 1em 0; }\n.username {\n  margin: auto;\n  padding: 0 2em; }\n.name {\n  color: #444444;\n  font-size: 18px; }\n.designation {\n  color: #999999;\n  font-size: 14px; }\n.comments {\n  font-size: 16px;\n  color: #777777; }\n.usercomment {\n  margin: 3em 0; }\n.dropdown-toggle::after {\n  display: none; }\n.talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 146px;\n  margin: auto;\n  padding: 2em 1em;\n  font-size: 20px; }\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n.mar-3 {\n  margin-bottom: 3em; }\n.mar-r-1 {\n  margin-right: 1em; }\n.h240 {\n  height: 240px; }\n.logoimg {\n  height: 75px; }\n.logoimg:hover {\n  cursor: pointer; }\n::ng-deep .mat-form-field-infix {\n  padding: 1.5em 0; }\n.flexhori {\n  display: flex;\n  overflow-x: auto; }\n#navdropdown1 {\n  position: absolute;\n  margin-left: 19%;\n  margin-top: 15px;\n  border: 0px;\n  font-size: 16px;\n  line-height: 2.4;\n  width: 300px; }\n#navdropdown2 {\n  position: absolute;\n  margin-left: 31.5%;\n  margin-top: 15px;\n  border: 0px;\n  font-size: 16px;\n  line-height: 2.4;\n  width: 300px; }\n.dropdown-item:hover {\n  color: #CC9F08;\n  cursor: pointer; }\n.flexhori::-webkit-scrollbar {\n  display: none; }\n.flexhorimobile {\n  display: none; }\n.carousel-control-prev {\n  opacity: 0;\n  left: -5%; }\n#prevbut {\n  opacity: 0; }\n.nextCaro {\n  padding: 1em;\n  border-radius: 50%;\n  box-shadow: 0 0 10px 1px #b6b6b6; }\n.left {\n  transform: rotate(90deg); }\n.padl4 {\n  padding-left: 3rem; }\n.right {\n  transform: rotate(-90deg); }\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: #CC9F08; }\n.nav-link:hover {\n  cursor: pointer; }\n#navbarContent {\n  position: relative; }\n#productdropdown {\n  position: absolute;\n  width: 60vw;\n  left: 20vw;\n  border-radius: 5px;\n  top: 9rem;\n  /* margin: auto 0; */\n  background-color: #fff;\n  z-index: 20;\n  display: none;\n  transition: 0.5s all ease-in-out; }\n.width50 {\n  width: 50px; }\n.right {\n  float: right; }\n.mat-select:focus:not(.mat-select-disabled).mat-primary\n.mat-select-arrow, .mat-select-underline, .mat-select-trigger {\n  color: #fff; }\n.carousel-showmanymoveone .carousel-control {\n  width: 4%;\n  background-image: none; }\n.carousel-showmanymoveone .carousel-control.left {\n  margin-left: 0; }\n.carousel-showmanymoveone .carousel-control.right {\n  margin-right: 0; }\n.carousel-showmanymoveone .cloneditem-1,\n.carousel-showmanymoveone .cloneditem-2,\n.carousel-showmanymoveone .cloneditem-3 {\n  display: none; }\n.carousel .item .col-xs-12 {\n  padding: 0; }\n.pad0 {\n  padding: 0; }\n/* Medium Devices, Desktops */\n.img-responsive {\n  height: 540px; }\n.carousel-control {\n  height: 540px; }\n#language {\n  background: transparent;\n  border: 0;\n  color: black; }\n.langclass {\n  width: 6rem;\n  margin: 0 0 0 1rem;\n  background: transparent;\n  color: #fff;\n  margin-top: 1rem;\n  border: 0;\n  outline: 0; }\n.langoption {\n  color: black;\n  background-color: #fff; }\n.langoption:hover {\n  background-color: #fff;\n  color: #CC9F08; }\n#language:focus {\n  outline: 0; }\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n.navbar {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: unset;\n  margin: 0;\n  color: #fff;\n  align-items: center;\n  border: 0px;\n  justify-content: left;\n  padding: 0.5rem 1rem 0rem 1rem;\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  transition: 0.5s all ease-in-out; }\n.navbar ::ng-deep .mat-select-value {\n    color: #fff; }\n.navbar.scrolled {\n  box-shadow: 0 0 10px 1px #80808029;\n  background: #fff;\n  background-color: #fff;\n  transition: 0.5s all ease-in-out; }\n.navbar.scrolled .phoneicon {\n    filter: brightness(0%) contrast(50%); }\n.navbar.scrolled {\n  color: black;\n  transition: 0.5s all ease-in-out; }\n.navbar.scrolled ::ng-deep .mat-select-value {\n    color: #444; }\n.navbar.scrolled ::ng-deep .mat-select-arrow {\n    color: #444;\n    border-left: 15px solid transparent !important;\n    border-right: none !important;\n    border-top: 15px solid transparent !important;\n    border-image-source: none !important;\n    border-image-repeat: stretch !important;\n    margin-top: -2px !important;\n    transform: scale(0.7); }\n.navbar.scrolled .navbar-light .navbar-nav .nav-link {\n    color: #000;\n    /* color: black; */\n    font: 18px opB, tamilf;\n    padding: 2rem 1rem;\n    text-align: right;\n    transition: 0.5s all ease-in-out; }\n.navbar.scrolled .nav-link:hover, .navbar.scrolled .nav-link:focus {\n    color: #CC9F08; }\n.navbar.scrolled > div > ul > li > a {\n  color: black; }\n.navbar.scrolled > div > ul > li > a:hover {\n  color: #CC9F08;\n  transition: 0.5s all ease-in-out; }\n.navbar-light .navbar-nav .nav-link {\n  color: #fff;\n  font: 18px opB , tamilf;\n  padding: 2rem 0rem 2rem 1rem;\n  text-align: right;\n  transition: 0.5s all ease-in-out; }\n.navbar-brand {\n  margin: 0 !important;\n  padding: 0 0px 0 50px;\n  height: auto;\n  font-size: 18px; }\n.collapser {\n  position: absolute;\n  right: 1em;\n  top: 2.2em; }\n.navbar-light .navbar-toggler {\n  border-width: 0px;\n  outline-width: 0px; }\n.logoimg {\n  height: 75px; }\nul {\n  width: 70%;\n  margin: auto; }\n.navbar-nav > li {\n  padding: 0 30px; }\n.navbar-nav {\n  margin: 0 0% 0 15%;\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  overflow-x: auto; }\n.lang {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  margin-top: 1rem; }\n.langclass {\n  width: 6rem;\n  margin: 2px 0 0 1rem; }\n.phonelink {\n  padding-top: 1.4rem; }\n::ng-deep .mat-form-field-underline {\n  display: none; }\n@media only screen and (max-width: 2600px) {\n  #navdropdown1 {\n    margin-left: 37%; }\n  #navdropdown2 {\n    margin-left: 43.5%; } }\n@media only screen and (max-width: 1600px) {\n  .nav-link {\n    padding: 6px 0rem 1rem; }\n  .navbar-nav {\n    margin: 0 0% 0 9%; }\n  .navbar-nav {\n    margin-left: 15%; }\n  #navdropdown1 {\n    margin-left: 18%; }\n  #navdropdown2 {\n    margin-left: 30%; }\n  .lang {\n    margin-top: 4px; } }\n@media only screen and (max-width: 1300px) {\n  #navdropdown1 {\n    margin-left: 15%; }\n  #navdropdown2 {\n    margin-left: 28%; }\n  .cartext {\n    position: absolute;\n    top: 44vh;\n    left: -40rem;\n    font-family: dance;\n    text-align: center;\n    font-size: 3rem; }\n  .navbar-nav {\n    margin: -5px 0% 0 9%; }\n  .navbar-nav > li {\n    padding: 0px 7px; }\n  .navbar-light .navbar-nav .nav-link {\n    color: #fff;\n    font: 14px opB , tamilf;\n    padding: 2rem 5px; }\n  .lang {\n    float: right;\n    padding: 0 0 0 0;\n    margin-top: -4px; }\n  .carousel .item .col-xs-12:nth-last-child(-n+2) {\n    display: none; }\n  .promiseBody {\n    font-size: 14px; }\n  .PromiseContainer {\n    padding: 3em; } }\n@media screen and (max-width: 1030px) {\n  .navbar-nav {\n    margin: 0 0% 0 13%; }\n  .navbar-nav > li {\n    padding: 0 1%; }\n  .navbar-light .navbar-nav .nav-link {\n    padding: 2rem 1rem;\n    font-size: 14px; }\n  .lang {\n    float: right;\n    padding: 6px 0 0 0; }\n  #navdropdown1 {\n    margin-left: 15%; }\n  #navdropdown2 {\n    margin-left: 28%; } }\n@media screen and (max-width: 912px) {\n  .logoimg {\n    height: 60px; }\n  .navbar-nav > li {\n    padding: 0 0rem; }\n  .navbar-nav {\n    margin: 4px 0% 0 11%; }\n  .navbar {\n    padding: 0.5rem 1rem 1rem 1rem;\n    background: #fff;\n    color: #000; }\n    .navbar ::ng-deep .mat-select-value {\n      color: #444; }\n    .navbar ::ng-deep .mat-select-arrow {\n      color: #444;\n      border-left: 15px solid transparent !important;\n      border-right: none !important;\n      border-top: 15px solid transparent !important;\n      border-image-source: none !important;\n      border-image-repeat: stretch !important;\n      margin-top: -2px !important;\n      transform: scale(0.7); }\n  .navbar.scrolled ::ng-deep .mat-select-value {\n    color: #444; }\n  .navbar > div > ul > li > a {\n    padding: 2rem 1rem 1rem 1rem;\n    background: #fff;\n    color: #000;\n    font-size: 14px; }\n  .navbar-brand {\n    padding-left: 20px; }\n  .phonelink {\n    display: none; }\n  .lang {\n    position: absolute;\n    right: 1rem;\n    top: 1.3rem; }\n  .navbar-light .navbar-nav .nav-link {\n    padding: 2rem 0rem; }\n  .bottom-left {\n    left: 1em; }\n  .collectionwedding {\n    height: 100%; }\n  .left2 {\n    left: 2em; }\n  .padingt20 {\n    padding-top: 20; }\n  #prevbut {\n    opacity: 0; }\n  .imageContainer {\n    padding: 0 15px 0 0; }\n  .carousel-control-next {\n    right: -3% !important; }\n  .homebody > .talktous {\n    font-size: 12px; }\n  .carosolimg {\n    -o-object-position: 75% 90%;\n       object-position: 75% 90%; }\n  .collectionGoldImage {\n    height: 300px;\n    width: auto; }\n  .collectionImage {\n    border-radius: 5px;\n    height: 140px; }\n  .lefter {\n    bottom: 2em;\n    left: 2em; }\n  .padtop10 {\n    padding-top: 10px; }\n  .padl5 {\n    padding-left: 5px; }\n  .padr5 {\n    padding-right: 5px; }\n  .bot1 {\n    bottom: 1em; }\n  .cartext {\n    left: -29rem; }\n  .padding0 {\n    padding: 0; }\n  .marb20 {\n    height: 100%; }\n  #products {\n    margin-left: 0px;\n    margin-top: 5em; }\n  .PromiseContainer {\n    margin-bottom: 4em; }\n  .downarrow {\n    left: 45%; }\n  .bodyView {\n    padding: 2em 2em;\n    width: 100%; }\n  .weddingcoll {\n    padding: 0 1em; }\n  .circle {\n    right: 1em; }\n  .mar-3 {\n    margin-bottom: 0em; }\n  .h240 {\n    height: 140px; }\n  .padt20 {\n    padding-top: 20px; }\n  .mar-r-1 {\n    margin-right: 0; } }\n@media screen and (max-width: 700px) {\n  .cartext {\n    left: -25rem; }\n  .bottom-left {\n    left: 2em; }\n  .h240 {\n    height: 140px; }\n  .left2 {\n    left: 2em; }\n  .padingt20 {\n    padding-top: 20; }\n  .padl4 {\n    padding-left: 0rem; }\n  .collectionGoldImage {\n    height: 400px;\n    width: auto; }\n  .marb20 {\n    margin-bottom: 20px; }\n  .collectionwedding {\n    height: 140px; } }\n@media all and (min-width: 768px) {\n  .carousel-showmanymoveone .carousel-inner > .active.left,\n  .carousel-showmanymoveone .carousel-inner > .prev {\n    left: -50%; }\n  .carousel-showmanymoveone .carousel-inner > .active.right,\n  .carousel-showmanymoveone .carousel-inner > .next {\n    left: 50%; }\n  .carousel-showmanymoveone .carousel-inner > .left,\n  .carousel-showmanymoveone .carousel-inner > .prev.right,\n  .carousel-showmanymoveone .carousel-inner > .active {\n    left: 0; }\n  .carousel-showmanymoveone .carousel-inner .cloneditem-1 {\n    display: block; } }\n@media all and (min-width: 768px) and (transform-3d), all and (min-width: 768px) and (-webkit-transform-3d) {\n  .carousel-showmanymoveone .carousel-inner > .item.active.right,\n  .carousel-showmanymoveone .carousel-inner > .item.next {\n    transform: translate3d(50%, 0, 0);\n    left: 0; }\n  .carousel-showmanymoveone .carousel-inner > .item.active.left,\n  .carousel-showmanymoveone .carousel-inner > .item.prev {\n    transform: translate3d(-50%, 0, 0);\n    left: 0; }\n  .carousel-showmanymoveone .carousel-inner > .item.left,\n  .carousel-showmanymoveone .carousel-inner > .item.prev.right,\n  .carousel-showmanymoveone .carousel-inner > .item.active {\n    transform: translate3d(0, 0, 0);\n    left: 0; } }\n@media all and (min-width: 992px) {\n  .carousel-showmanymoveone .carousel-inner > .active.left,\n  .carousel-showmanymoveone .carousel-inner > .prev {\n    left: -16.6%; }\n  .carousel-showmanymoveone .carousel-inner > .active.right,\n  .carousel-showmanymoveone .carousel-inner > .next {\n    left: 16.6%; }\n  .carousel-showmanymoveone .carousel-inner > .left,\n  .carousel-showmanymoveone .carousel-inner > .prev.right,\n  .carousel-showmanymoveone .carousel-inner > .active {\n    left: 0; }\n  .carousel-showmanymoveone .carousel-inner .cloneditem-2,\n  .carousel-showmanymoveone .carousel-inner .cloneditem-3 {\n    display: block; } }\n@media all and (min-width: 992px) and (transform-3d), all and (min-width: 992px) and (-webkit-transform-3d) {\n  .carousel-showmanymoveone .carousel-inner > .item.active.right,\n  .carousel-showmanymoveone .carousel-inner > .item.next {\n    transform: translate3d(16.6%, 0, 0);\n    left: 0; }\n  .carousel-showmanymoveone .carousel-inner > .item.active.left,\n  .carousel-showmanymoveone .carousel-inner > .item.prev {\n    transform: translate3d(-16.6%, 0, 0);\n    left: 0; }\n  .carousel-showmanymoveone .carousel-inner > .item.left,\n  .carousel-showmanymoveone .carousel-inner > .item.prev.right,\n  .carousel-showmanymoveone .carousel-inner > .item.active {\n    transform: translate3d(0, 0, 0);\n    left: 0; } }\n.carousel-item {\n  transition: 1s all ease-in-out !important; }\n#demo1 {\n  margin-left: -4rem; }\n.nextCaro[_ngcontent-vqv-c6] {\n  padding: 1em;\n  background-color: #fff;\n  border-radius: 50%;\n  margin-top: -10rem; }\n@media screen and (max-width: 500px) {\n  .homebody {\n    margin-top: 6rem; }\n  .navbar > div > ul > li > a {\n    font-size: 18px;\n    text-align: left; }\n  #navdropdown1 {\n    margin-bottom: 1rem;\n    box-shadow: none;\n    margin-left: 0;\n    width: 100%;\n    position: unset;\n    background-color: #fbfbfb;\n    border: 0px;\n    font-size: 16px;\n    line-height: 2.4;\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none; }\n  #navdropdown2 {\n    margin-bottom: 1rem;\n    box-shadow: none;\n    margin-left: 0;\n    width: 100%;\n    position: unset;\n    background-color: #fbfbfb;\n    border: 0px;\n    font-size: 16px;\n    line-height: 2.4;\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none; }\n  .heroc {\n    height: 80vh; }\n  .carosolimg {\n    transition: 0.3s all ease-in-out;\n    height: 100%; }\n  .bodyHeading {\n    margin: 40px 0 32px 0; }\n  .downarrowdiv {\n    position: absolute;\n    margin-left: 42%; }\n  .lang {\n    right: 5rem;\n    top: 1.4rem; }\n  .navbar-nav {\n    margin-left: 1rem !important; }\n  .padr3 {\n    left: 5em; }\n  .bottom-left {\n    left: 1em; }\n  .top2 {\n    bottom: 2em; }\n  #marriageimg {\n    -o-object-position: 65% 90%;\n       object-position: 65% 90%; }\n  #menimage {\n    -o-object-position: 65% 83%;\n       object-position: 65% 83%; }\n  #womenimg {\n    -o-object-position: 65% 80%;\n       object-position: 65% 80%; } }\n#collectiondropdown {\n  display: none; }\n.navbar-nav > .dropdown1:hover + #productdropdown, .navbar-nav > .dropdown1 > #navlink1:hover {\n  display: block !important;\n  transition: 0.5s all ease-in-out; }\n.collectionhover #collectiondropdown {\n  display: block; }\n.dropdown-submenu {\n  position: relative; }\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -1px;\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  color: #fff;\n  background-color: #efefef;\n  font-size: 14px;\n  border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiamdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RkFBWTtBQUdaO0VBQ0UsWUFBWSxFQUFBO0FBRWQ7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUVFLGtCQUFrQjtFQUNoQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVcsRUFBQTtBQUVmO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFFRSxrQkFBa0I7RUFFbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxrQkFBa0I7RUFDbEIsYUFBWSxFQUFBO0FBRWQ7RUFFRSxhQUFZLEVBQUE7QUFFZDtFQUVFLFlBQVcsRUFBQTtBQUViO0VBQ0UsWUFBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUVBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ04sU0FBUztFQUNULGdDQUFnQyxFQUFBO0FBR2xDO0VBRUUsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUVwQjtFQUVJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBQTtFQUNBLGNBQWM7RUFDZCxTQUFTO0VBQ1QsU0FBUztFQUNULHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBO0FBR2pCO0VBQ0U7SUFBTSxVQUFVO0lBQ2QsYUFBWSxFQUFBO0VBQ2Q7SUFBSSxVQUFVO0lBQ1osU0FBUSxFQUFBLEVBQUE7QUFKWjtFQUNFO0lBQU0sVUFBVTtJQUNkLGFBQVksRUFBQTtFQUNkO0lBQUksVUFBVTtJQUNaLFNBQVEsRUFBQSxFQUFBO0FBRWQ7RUFFRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFl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cHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLm1hdGVyaWFsZGVzaWduaWNvbnMuY29tLzUuNC41NS9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzXCIpO1xyXG5cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uY2FydGV4dFxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHZoO1xyXG4gICAgbGVmdDogLTcwcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ZGFuY2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBoZWlnaHQ6NXJlbTtcclxufVxyXG5tYWluIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlclxyXG57XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIC8vIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZXJvY2Fyb3NvbFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDoxMDB2aDtcclxufVxyXG4uaGVyb2Ncclxue1xyXG4gIGhlaWdodDoxMDB2aDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXJcclxue1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtICwgLml0ZW0gLCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmV7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRleHRvbmltZ1xyXG57XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4jY2hhbmdlZHJvcFxyXG57XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbi5kb3duYXJyb3dcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiA1ZW07ICovXHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDQ3JTtcclxuICAgIGFuaW1hdGlvbjogbXltb3ZlIDFzIGluZmluaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICBmcm9tIHtvcGFjaXR5OiAwO1xyXG4gICAgICBib3R0b206MC41ZW07fVxyXG4gICAgdG8ge29wYWNpdHk6IDE7XHJcbiAgICAgIGJvdHRvbTowO31cclxuICB9XHJcbi50b2RheXNyYXRlXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdG9wOiA3MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgei1pbmRleDogNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5waG9uZWljb25cclxue1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuICBcclxuICAjcHJvZHVjdHNcclxuICB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBlbTtcclxuICB9XHJcbiBcclxuICBcclxuIFxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7ICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAubGFuZ3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLnJhcnJvd1xyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi04cHg7XHJcbiAgICBtYXJnaW4tdG9wOi0ycHg7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gXHJcblxyXG5cclxuI2xhbmd1YWdlXHJcbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuI2xhbmd1YWdlOmZvY3Vze1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG5cclxuI2xhbmd1YWdlIG9wdGlvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOjVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6NWVtO1xyXG4gIGNvbG9yOmdyZXk7XHJcblxyXG59XHJcbiBcclxuLmNhcm9zb2xpbWdcclxue1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4gXHJcblxyXG4gIC5ib2R5Vmlld1xyXG4gIHtcclxuICAgIHBhZGRpbmc6MGVtIDZlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG5cclxuICAuYm9keUhlYWRpbmdcclxuICB7XHJcbiAgICBwYWRkaW5nOjAgMC41ZW07XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46ODBweCAwIDMycHggMDtcclxuICAgIGJvcmRlci1sZWZ0OjhweCBzb2xpZCAjQ0M5RjA4O1xyXG4gIH1cclxuXHJcbiAgLmJvbGRcclxuICB7XHJcbiAgICBmb250LWZhbWlseTogJ29wRUInLCd0YW1pbGYnO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlQ29udGFpbmVyXHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDBlbSAyZW0gMGVtIDBlbTtcclxuICB9XHJcbiAgLnBob25lbGlua1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgfVxyXG4ubWFyYmFyMlxyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbi5jb2xsZWN0aW9uR29sZEltYWdlXHJcbntcclxuICB3aWR0aDogOTclO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxufVxyXG4uc2lsdmVyXHJcbntcclxuICB3aWR0aDoxMDIlO1xyXG59XHJcbi5jb2xsZWN0aW9ud2VkZGluZ1xyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgaGVpZ2h0OiA1MzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG4tby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG59XHJcbi5zbWFsbGhlaWdodFxyXG57XHJcbiAgaGVpZ2h0OjUyMnB4O1xyXG59XHJcbi5jb2xsZWN0aW9uSW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxufVxyXG4ud2VkZGluZ2NvbGxcclxuICB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuYm90dG9tLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxlZnQ6IDJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BCJywndGFtaWxmJztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsZWN0aW9uSW1hZ2U6aG92ZXIgLCAuY29sbGVjdGlvbkdvbGRJbWFnZTpob3ZlciAsIC5jb2xsZWN0aW9ud2VkZGluZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgLmNvbGxlY3Rpb25JbWFnZTpob3ZlciArIC5ib3R0b20tbGVmdCA+LnJhcnJvdyAsIC5jb2xsZWN0aW9uR29sZEltYWdlOmhvdmVyICsgLmJvdHRvbS1sZWZ0ID4gLnJhcnJvdyAsIC5jb2xsZWN0aW9ud2VkZGluZzpob3ZlciArIC5ib3R0b20tbGVmdCA+IC5yYXJyb3dcclxuICB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5Qcm9taXNlQ29udGFpbmVyXHJcbiAge1xyXG4gICBcclxuICAgIGhlaWdodDogMTQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDNlbSA0ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5wY29sb3IxXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFRjtcclxuICB9XHJcbiAgLnBjb2xvcjJcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGN0UzO1xyXG4gIH1cclxuICAucHJvbWlzZUJvZHlcclxuICB7XHJcbiAgICBmb250LWZhbWlseTonb3BCJywndGFtaWxmJztcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLm51bWJlcmluZ1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDotMWVtO1xyXG4gICAgbGVmdDoyZW07XHJcbiAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BFQicsJ3RhbWlsZic7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gXHJcbiAgOjpuZy1kZWVwIC5tYXQtb3B0aW9uLXRleHRcclxuICB7XHJcbiAgICBjb2xvcjojNDQ0O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtb3B0aW9uLXRleHQ6aG92ZXJcclxuICB7XHJcbiAgICBjb2xvcjojQ0M5RjA4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWltYWdlLXJlcGVhdDogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLm1hcmdpblRvcFxyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6IDhlbTtcclxuICB9XHJcbiAgLnVzZXJwaWNcclxuICB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnVzZXJpbWdcclxuICB7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICAuZG91YmxlcXVvdGVzXHJcbiAge1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbWFyZ2luOjFlbSAwO1xyXG4gIH1cclxuICAudXNlcm5hbWVcclxuICB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICB9XHJcbiAgLm5hbWV7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmRlc2lnbmF0aW9uXHJcbiAge1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5jb21tZW50c1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIH1cclxuICAudXNlcmNvbW1lbnRcclxuICB7XHJcbiAgICBtYXJnaW46IDNlbSAwO1xyXG4gIH1cclxuICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuIFxyXG4gIC50YWxrdG91c1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY3Rjc7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyZW0gMWVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgLnRhbGt0b3VzQnV0dG9uXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDOUYwODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxufVxyXG5cclxuLm1hci0zXHJcbntcclxuICBtYXJnaW4tYm90dG9tOjNlbTtcclxuIFxyXG59XHJcbi5tYXItci0xXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4uaDI0MFxyXG57XHJcbiAgaGVpZ2h0OjI0MHB4O1xyXG59XHJcbi5sb2dvaW1ne1xyXG4gIGhlaWdodDo3NXB4O1xyXG4gICAgfVxyXG4ubG9nb2ltZzpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXhcclxue1xyXG4gIHBhZGRpbmc6IDEuNWVtIDA7XHJcbn1cclxuLmZsZXhob3JpXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuI25hdmRyb3Bkb3duMVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxOSU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXI6IDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNDtcclxuICB3aWR0aDogMzAwcHg7XHJcblxyXG59XHJcbiNuYXZkcm9wZG93bjJcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMzEuNSU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXI6IDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gIGNvbG9yOiNDQzlGMDg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mbGV4aG9yaTo6LXdlYmtpdC1zY3JvbGxiYXIgXHJcbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH0gXHJcblxyXG5cclxuLmZsZXhob3JpbW9iaWxlXHJcbntcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldlxyXG57XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBsZWZ0Oi01JTtcclxufVxyXG4jcHJldmJ1dFxyXG4gIHtcclxuICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICAubmV4dENhcm9cclxue1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2I2YjZiNjtcclxufVxyXG4ubGVmdFxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxufVxyXG4ucGFkbDRcclxue1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxufVxyXG4ucmlnaHRcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciwgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiNDQzlGMDg7XHJcbiB9XHJcbiBcclxuIFxyXG4gLm5hdi1saW5rOmhvdmVyIHtcclxuICBcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG4gXHJcblxyXG4jbmF2YmFyQ29udGVudFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNwcm9kdWN0ZHJvcGRvd25cclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNjB2dztcclxuICBsZWZ0OiAyMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0b3A6IDlyZW07XHJcbiAgLyogbWFyZ2luOiBhdXRvIDA7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAyMDtcclxuICBkaXNwbGF5Om5vbmU7XHJcbnRyYW5zaXRpb246MC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG4ud2lkdGg1MFxyXG57XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4ucmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4ubWF0LXNlbGVjdDpmb2N1czpub3QoLm1hdC1zZWxlY3QtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IFxyXG4ubWF0LXNlbGVjdC1hcnJvdyAsIC5tYXQtc2VsZWN0LXVuZGVybGluZSAsIC5tYXQtc2VsZWN0LXRyaWdnZXIgXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWNvbnRyb2wge1xyXG4gIHdpZHRoOiA0JTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNsb25lZGl0ZW0tMSxcclxuLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2xvbmVkaXRlbS0yLFxyXG4uY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jbG9uZWRpdGVtLTMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuaXRlbSAuY29sLXhzLTEyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGFkMFxyXG57XHJcbnBhZGRpbmc6MDtcclxufVxyXG4vKiBNZWRpdW0gRGV2aWNlcywgRGVza3RvcHMgKi9cclxuXHJcblxyXG5cclxuLmltZy1yZXNwb25zaXZlXHJcbntcclxuICBoZWlnaHQ6NTQwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sXHJcbntcclxuICBoZWlnaHQ6NTQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuI2xhbmd1YWdlXHJcbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwO1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuLmxhbmdjbGFzc1xyXG57XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgbWFyZ2luOiAwIDAgMCAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuLmxhbmdvcHRpb25cclxue1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sYW5nb3B0aW9uOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5jb2xvcjojQ0M5RjA4O1xyXG59XHJcbiNsYW5ndWFnZTpmb2N1c3tcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbiNsYW5ndWFnZSBvcHRpb25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjo1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOjVlbTtcclxuICBjb2xvcjpncmV5O1xyXG5cclxufVxyXG5cclxuLm5hdmJhcntcclxuZGlzcGxheTogZmxleDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5vdmVyZmxvdy15OiB1bnNldDtcclxubWFyZ2luOiAwO1xyXG5jb2xvcjojZmZmO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5ib3JkZXI6MHB4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbnBhZGRpbmc6IDAuNXJlbSAxcmVtIDByZW0gMXJlbTtcclxucG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbn1cclxuLm5hdmJhci5zY3JvbGxlZFxyXG57XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICM4MDgwODAyOTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG50cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxuXHJcbi5waG9uZWljb257XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAlKSBjb250cmFzdCg1MCUpO1xyXG59XHJcbn1cclxuLm5hdmJhci5zY3JvbGxlZCAgIHtcclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICBjb2xvcjojNDQ0O1xyXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1pbWFnZS1zb3VyY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItaW1hZ2UtcmVwZWF0OiBzdHJldGNoICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxufVxyXG5jb2xvcjpibGFjaztcclxuLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxudHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rICB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gIC8vIGZvbnQtc2l6ZTogMThweDtcclxuICAvLyBmb250LWZhbWlseTogJ29wQicsICd0YW1pbGYnO1xyXG4gIGZvbnQ6IDE4cHggb3BCLCB0YW1pbGY7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5uYXYtbGluazpob3ZlciAsIC5uYXYtbGluazpmb2N1c3tcclxuY29sb3I6I0NDOUYwOFxyXG59XHJcblxyXG59XHJcbi5uYXZiYXIuc2Nyb2xsZWQgPiBkaXYgPiB1bCA+IGxpID4gYVxyXG57XHJcbiAgY29sb3I6YmxhY2s7XHJcblxyXG59XHJcbi5uYXZiYXIuc2Nyb2xsZWQgPiBkaXYgPiB1bCA+IGxpID4gYTpob3ZlcntcclxuICBjb2xvcjojQ0M5RjA4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgZm9udDogMThweCBvcEIgLCB0YW1pbGY7XHJcbiAgcGFkZGluZzogMnJlbSAwcmVtIDJyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuIFxyXG4gbWFyZ2luOjAgIWltcG9ydGFudDtcclxuIHBhZGRpbmc6IDAgMHB4IDAgNTBweCA7XHJcbiBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2VyXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFlbTtcclxuIFxyXG4gIHRvcDogMi4yZW07XHJcblxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlclxyXG57XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgb3V0bGluZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG5cclxuLmxvZ29pbWd7XHJcbiAgaGVpZ2h0Ojc1cHg7XHJcbiAgICB9XHJcbnVse1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5uYXZiYXItbmF2PmxpIHtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXJnaW46IDAgMCUgMCAxNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4ubGFuZ3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmxhbmdjbGFzc1xyXG57XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgbWFyZ2luOiAycHggMCAwIDFyZW07XHJcbn1cclxuLnBob25lbGlua1xyXG57XHJcbiAgcGFkZGluZy10b3A6IDEuNHJlbTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2MDBweCkge1xyXG4gICNuYXZkcm9wZG93bjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMzclO1xyXG4gIH1cclxuICAjbmF2ZHJvcGRvd24ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzLjUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAubmF2LWxpbmtcclxuICB7XHJcbiAgICBwYWRkaW5nOiA2cHggMHJlbSAxcmVtO1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBtYXJnaW46IDAgMCUgMCA5JTtcclxuICB9XHJcbiAgLm5hdmJhci1uYXZ7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG4jbmF2ZHJvcGRvd24xe1xyXG4gIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbn1cclxuI25hdmRyb3Bkb3duMntcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcbi5sYW5ne1xyXG4gIFxyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgI25hdmRyb3Bkb3duMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG4gICNuYXZkcm9wZG93bjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gIH1cclxuICAuY2FydGV4dFxyXG4gIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NHZoO1xyXG4gIGxlZnQ6IC00MHJlbTtcclxuICBmb250LWZhbWlseTogZGFuY2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIG1hcmdpbjogLTVweCAwJSAwIDklO1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiA+IGxpIHtcclxuICAgIHBhZGRpbmc6IDBweCA3cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdvcEInLCd0YW1pbGYnO1xyXG4gICAgZm9udDogMTRweCBvcEIgLCB0YW1pbGY7XHJcbiAgICBwYWRkaW5nOiAycmVtIDVweDtcclxuICB9XHJcbiAgLmxhbmcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbCAuaXRlbSAuY29sLXhzLTEyOm50aC1sYXN0LWNoaWxkKC1uKzIpIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAucHJvbWlzZUJvZHlcclxuICB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICB9XHJcbiAgLlByb21pc2VDb250YWluZXJ7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzMHB4KXtcclxuICAubmF2YmFyLW5hdlxyXG4gIHtcclxuICAgIG1hcmdpbjogMCAwJSAwIDEzJTtcclxuICB9XHJcbiAgLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgICBwYWRkaW5nOiAwIDElO1xyXG4gIH1cclxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICAgICBcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgXHJcbn1cclxuLmxhbmcge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiA2cHggMCAwIDA7XHJcbn1cclxuI25hdmRyb3Bkb3duMXtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbiNuYXZkcm9wZG93bjJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEycHgpIHtcclxuICAgICAgXHJcbiAgICBcclxuICAubG9nb2ltZ3tcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXItbmF2ID4gbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMHJlbTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgbWFyZ2luOiA0cHggMCUgMCAxMSU7XHJcbiAgICAgIFxyXG4gIH1cclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgIFxyXG4gICAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICBjb2xvcjojNDQ0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWltYWdlLXJlcGVhdDogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gIH1cclxuICB9XHJcbiAgLm5hdmJhci5zY3JvbGxlZFxyXG4gIHtcclxuICAgIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICB9XHJcbiAgLm5hdmJhciA+IGRpdiA+IHVsID4gbGkgPiBhe1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMXJlbTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICB9XHJcbiBcclxuICAubmF2YmFyLWJyYW5kXHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAucGhvbmVsaW5re1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmxhbmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIHRvcDogMS4zcmVtO1xyXG4gIH1cclxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICBcclxufVxyXG4gIC5ib3R0b20tbGVmdCB7XHJcbiAgIFxyXG4gICAgbGVmdDogMWVtO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbndlZGRpbmdcclxue1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5sZWZ0MlxyXG57XHJcbiAgbGVmdDoyZW07XHJcbn1cclxuLnBhZGluZ3QyMFxyXG57XHJcbiAgcGFkZGluZy10b3A6MjA7XHJcbn1cclxuICNwcmV2YnV0XHJcbiB7XHJcbiAgIG9wYWNpdHk6MDtcclxuIH1cclxuIFxyXG4gLmltYWdlQ29udGFpbmVyXHJcbiB7XHJcbiAgIHBhZGRpbmc6MCAxNXB4IDAgMDtcclxuIH1cclxuIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICByaWdodDogLTMlICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5ob21lYm9keSA+IC50YWxrdG91c1xyXG4ge1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAuY2Fyb3NvbGltZ1xyXG4ge1xyXG4gICBvYmplY3QtcG9zaXRpb246IDc1JSA5MCU7XHJcbiB9XHJcbiBcclxuIC5jb2xsZWN0aW9uR29sZEltYWdlXHJcbiB7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG4gIHdpZHRoOmF1dG87XHJcbiB9XHJcbi5jb2xsZWN0aW9uSW1hZ2Vcclxue1xyXG4gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gaGVpZ2h0OjE0MHB4O1xyXG59XHJcbi5sZWZ0ZXJcclxue1xyXG4gIGJvdHRvbToyZW07XHJcbiAgbGVmdDoyZW07XHJcbn1cclxuLnBhZHRvcDEwXHJcbntcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5wYWRsNVxyXG57XHJcbiAgcGFkZGluZy1sZWZ0OjVweDtcclxufVxyXG4ucGFkcjVcclxue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJvdDFcclxue1xyXG4gYm90dG9tOiAxZW07XHJcbn1cclxuIFxyXG4uY2FydGV4dFxyXG57XHJcbiAgbGVmdDogLTI5cmVtO1xyXG59XHJcbiAgLnBhZGRpbmcwXHJcbiAge1xyXG4gICAgcGFkZGluZzowO1xyXG4gIH1cclxuICAgXHJcbiAgIC5tYXJiMjBcclxuICAge1xyXG4gICAgLy8gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6MTAwJVxyXG4gICB9XHJcbiBcclxuICAgI3Byb2R1Y3RzXHJcbiAgIHtcclxuICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgIG1hcmdpbi10b3A6NWVtO1xyXG4gICAgXHJcbiAgIH1cclxuICBcclxuIFxyXG4gICAuUHJvbWlzZUNvbnRhaW5lclxyXG4gICB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTo0ZW07XHJcbiAgIH1cclxuICAgLmRvd25hcnJvd1xyXG4gICB7XHJcbiAgICAgbGVmdDogNDUlO1xyXG4gICB9XHJcbiAgIC5ib2R5Vmlld1xyXG4gICB7XHJcbiAgICAgcGFkZGluZzoyZW0gMmVtO1xyXG4gICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuIFxyXG4gICAud2VkZGluZ2NvbGxcclxuICAge1xyXG4gICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICB9XHJcbiBcclxuICAgXHJcbiAgIC5jaXJjbGV7XHJcbiAgICAgcmlnaHQ6MWVtO1xyXG4gICB9XHJcbiAgIFxyXG4gICAubWFyLTNcclxuICAge1xyXG4gICAgIG1hcmdpbi1ib3R0b206MGVtO1xyXG4gICB9XHJcbiAgIC5oMjQwXHJcbiAgIHtcclxuICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICB9XHJcbiAgIC5wYWR0MjBcclxuICAge1xyXG4gICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgIH1cclxuICAgLm1hci1yLTFcclxuICAge1xyXG4gICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgfVxyXG4gXHJcbiB9XHJcblxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHJcbiAgLmNhcnRleHRcclxuICB7XHJcbiAgbGVmdDogLTI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1sZWZ0IHtcclxuICAgXHJcbiAgICBsZWZ0OiAyZW07XHJcbn1cclxuLmgyNDB7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG4ubGVmdDJcclxue1xyXG4gIGxlZnQ6MmVtO1xyXG59XHJcbi5wYWRpbmd0MjBcclxue1xyXG4gIHBhZGRpbmctdG9wOjIwO1xyXG59XHJcbi5wYWRsNFxyXG57XHJcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbkdvbGRJbWFnZVxyXG57XHJcbiBoZWlnaHQ6NDAwcHg7XHJcbiB3aWR0aDphdXRvO1xyXG59XHJcblxyXG4ubWFyYjIwXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29sbGVjdGlvbndlZGRpbmdcclxue1xyXG4gIGhlaWdodDoxNDBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZS5sZWZ0LFxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLnByZXYge1xyXG4gICAgIGxlZnQ6IC01MCU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZS5yaWdodCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5uZXh0IHtcclxuICAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLmxlZnQsXHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgPiAucHJldi5yaWdodCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUge1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyIC5jbG9uZWRpdGVtLTEge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAodHJhbnNmb3JtLTNkKSxcclxuYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kICgtd2Via2l0LXRyYW5zZm9ybS0zZCkge1xyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0uYWN0aXZlLnJpZ2h0LFxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0ubmV4dCB7XHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDAsIDApO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0uYWN0aXZlLmxlZnQsXHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5wcmV2IHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcclxuICAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLmxlZnQsXHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5wcmV2LnJpZ2h0LFxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0uYWN0aXZlIHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUubGVmdCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5wcmV2IHtcclxuICAgICBsZWZ0OiAtMTYuNiU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZS5yaWdodCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5uZXh0IHtcclxuICAgICBsZWZ0OiAxNi42JTtcclxuICB9XHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgPiAubGVmdCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5wcmV2LnJpZ2h0LFxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZSB7XHJcbiAgICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgLmNsb25lZGl0ZW0tMixcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciAuY2xvbmVkaXRlbS0zIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKHRyYW5zZm9ybS0zZCksXHJcbmFsbCBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAoLXdlYmtpdC10cmFuc2Zvcm0tM2QpIHtcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLmFjdGl2ZS5yaWdodCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLm5leHQge1xyXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNi42JSwgMCwgMCk7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNi42JSwgMCwgMCk7XHJcbiAgICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0uYWN0aXZlLmxlZnQsXHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5wcmV2IHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2LjYlLCAwLCAwKTtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNi42JSwgMCwgMCk7XHJcbiAgICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmNhcm91c2VsLXNob3dtYW55bW92ZW9uZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5sZWZ0LFxyXG4gIC5jYXJvdXNlbC1zaG93bWFueW1vdmVvbmUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0ucHJldi5yaWdodCxcclxuICAuY2Fyb3VzZWwtc2hvd21hbnltb3Zlb25lIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLmFjdGl2ZSB7XHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbiBcclxuICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICBcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2RlbW8xXHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcclxuICAgIH1cclxuICAgIC5uZXh0Q2Fyb1tfbmdjb250ZW50LXZxdi1jNl0ge1xyXG4gICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwcmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAuaG9tZWJvZHlcclxuICAgICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciA+IGRpdiA+IHVsID4gbGkgPiBhIHtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgICNuYXZkcm9wZG93bjEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNDtcclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAjbmF2ZHJvcGRvd24yIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjQ7XHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmhlcm9jXHJcbiAgICAgIHtcclxuICAgICAgICBoZWlnaHQ6ODB2aDtcclxuICAgICAgfVxyXG4gICAgICAuY2Fyb3NvbGltZ1xyXG57XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmJvZHlIZWFkaW5nXHJcbntcclxuIFxyXG4gICAgbWFyZ2luOiA0MHB4IDAgMzJweCAwO1xyXG59XHJcbi5kb3duYXJyb3dkaXZcclxue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OjQyJTtcclxuICBcclxufVxyXG4gICAgICAubGFuZ3tcclxuICAgICAgICByaWdodDogNXJlbTtcclxuICAgICAgICB0b3A6IDEuNHJlbTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wYWRyMyB7XHJcbiAgIFxyXG4gICAgICBsZWZ0OiA1ZW07XHJcbiAgfVxyXG4uYm90dG9tLWxlZnRcclxue1xyXG4gIGxlZnQ6MWVtO1xyXG59XHJcbi50b3AyXHJcbntcclxuICBib3R0b206MmVtO1xyXG59XHJcblxyXG4jbWFycmlhZ2VpbWdcclxue1xyXG4gIG9iamVjdC1wb3NpdGlvbjogNjUlIDkwJTtcclxufVxyXG4jbWVuaW1hZ2Vcclxue1xyXG4gIG9iamVjdC1wb3NpdGlvbjogNjUlIDgzJTtcclxufVxyXG4jd29tZW5pbWdcclxue1xyXG4gIG9iamVjdC1wb3NpdGlvbjo2NSUgODAlO1xyXG59XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjY29sbGVjdGlvbmRyb3Bkb3duXHJcbiAge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiA+IC5kcm9wZG93bjE6aG92ZXIgICArICNwcm9kdWN0ZHJvcGRvd24gLCAubmF2YmFyLW5hdiA+IC5kcm9wZG93bjEgPiNuYXZsaW5rMTpob3ZlclxyXG4gIHtcclxuICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246MC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIC5jb2xsZWN0aW9uaG92ZXJcclxuICB7XHJcbiAgICAjY29sbGVjdGlvbmRyb3Bkb3duXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tc3VibWVudSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1zdWJtZW51IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);







var HomeComponent = /** @class */ (function () {
    function HomeComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
        this.list = [];
        this.langlist = ['LA-EN', 'LA-TA'];
        this.clicked = true;
    }
    HomeComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_6__["init"]({
            duration: 1200
        });
    };
    HomeComponent.prototype.setLang = function () {
        if (window.sessionStorage.getItem('lang') == 'LA-TA') {
            console.log(window.innerWidth);
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "15%";
            }
            if (window.innerWidth < 1500) {
                document.getElementById("navbarnavid").style.marginLeft = "9%";
            }
            if (window.innerWidth < 1200) {
                document.getElementById("navlink1").style.padding = "0 8px";
                document.getElementById("navlink2").style.padding = "0 8px";
                document.getElementById("navlink3").style.padding = "0 8px";
                document.getElementById("navlink4").style.padding = "0 8px";
                document.getElementById("navlink5").style.padding = "0 8px";
                document.getElementById("navbarnavid").style.marginLeft = "10%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navlink1").style.padding = "0rem 1rem";
                document.getElementById("navlink2").style.padding = "0rem 1rem";
                document.getElementById("navlink3").style.padding = "0rem 1rem";
                document.getElementById("navlink4").style.padding = "0rem 1rem";
                document.getElementById("navlink5").style.padding = "0rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "5%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "1%";
            }
            document.getElementById("wrapper").style.fontFamily = "tamilf !important";
        }
        else {
            document.getElementById("navlink1").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink2").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink3").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink4").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink5").style.padding = "10px 0 1rem 1rem";
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "15%";
            }
            if (window.innerWidth < 1200) {
                document.getElementById("navlink1").style.padding = "0rem 1rem";
                document.getElementById("navlink2").style.padding = "0rem 1rem";
                document.getElementById("navlink3").style.padding = "0rem 1rem";
                document.getElementById("navlink4").style.padding = "0rem 1rem";
                document.getElementById("navlink5").style.padding = "0rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "11%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navbarnavid").style.marginLeft = "11%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth < 900) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#changedrop').attr("src", "../../../assets/images/downarrowb.png");
            jquery__WEBPACK_IMPORTED_MODULE_3__('#marriagecoll').attr("src", "../../../assets/images/banners/collectionlandscape.jpg");
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.dropdown-submenu a.test').on("click", function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
            jQuery('.carousel').carousel({
                interval: 3000
            });
        });
        this.sh.getPrices().subscribe(function (data) {
            _this.goldprice = data.goldprice;
            _this.silverprice = data.silverprice;
        });
        // this.sh.setAllProductsData();
        if (window.sessionStorage.getItem('lang') == "EN") {
            window.sessionStorage.setItem('lang', 'LA-EN');
        }
        console.log(window.sessionStorage.getItem('lang'));
        if (window.sessionStorage.getItem('lang')) {
            this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
            console.log(window.sessionStorage.getItem('lang'));
            this.languageselect = window.sessionStorage.getItem('lang');
            console.log(this.languageselect + " selected");
            this.setLang();
        }
        else {
            window.sessionStorage.setItem('lang', 'LA-EN');
            this.languageselect = 'LA-EN';
        }
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.aosInit();
    };
    HomeComponent.prototype.open = function (id) {
        document.getElementById('drop1').style.display = "none";
        document.getElementById('drop2').style.display = "none";
        document.getElementById('drop3').style.display = "none";
        document.getElementById('drop' + id).style.display = "block";
    };
    HomeComponent.prototype.showprev = function () {
        document.getElementById("prevbut").style.opacity = "1";
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.carousel-showmanymoveone .item').each(function () {
            var itemToClone = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            for (var i = 1; i < 6; i++) {
                itemToClone = itemToClone.next();
                // wrap around if at end of item collection
                if (!itemToClone.length) {
                    itemToClone = jquery__WEBPACK_IMPORTED_MODULE_3__(this).siblings(':first');
                }
                // grab item, clone, add marker class, add to collection
                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-" + (i))
                    .appendTo(jquery__WEBPACK_IMPORTED_MODULE_3__(this));
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__(window).scroll(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').toggleClass('scrolled', jquery__WEBPACK_IMPORTED_MODULE_3__(this).scrollTop() > 50);
            if (jquery__WEBPACK_IMPORTED_MODULE_3__(this).scrollTop() > 50) {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".phoneicon").attr("src", "../../../assets/images/wicon.svg");
                // document.getElementById("langclassid").style.color = "black";
                jquery__WEBPACK_IMPORTED_MODULE_3__('#changedrop').attr("src", "../../../assets/images/downarrowb.png");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".phoneicon").attr("src", "../../../assets/images/wiconw.png");
                // document.getElementById("langclassid").style.color = "white";
                jquery__WEBPACK_IMPORTED_MODULE_3__('#changedrop').attr("src", "../../../assets/images/downarrow.png");
                if (window.innerWidth < 900) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#changedrop').attr("src", "../../../assets/images/downarrowb.png");
                }
            }
        });
    };
    HomeComponent.prototype.getLang = function (data) {
        console.log(data);
        if (data == 'LA-TA') {
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "15%";
            }
            if (window.innerWidth < 1500) {
                document.getElementById("navbarnavid").style.marginLeft = "9%";
            }
            if (window.innerWidth < 1200) {
                document.getElementById("navlink1").style.padding = "0 8px";
                document.getElementById("navlink2").style.padding = "0 8px";
                document.getElementById("navlink3").style.padding = "0 8px";
                document.getElementById("navlink4").style.padding = "0 8px";
                document.getElementById("navlink5").style.padding = "0 8px";
                document.getElementById("navbarnavid").style.marginLeft = "10%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navlink1").style.padding = "0rem 1rem";
                document.getElementById("navlink2").style.padding = "0rem 1rem";
                document.getElementById("navlink3").style.padding = "0rem 1rem";
                document.getElementById("navlink4").style.padding = "0rem 1rem";
                document.getElementById("navlink5").style.padding = "0rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "5%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
                document.getElementById("navbarnavid").style.marginLeft = "1%";
            }
            document.getElementById("wrapper").style.fontFamily = "tamilf !important";
        }
        else {
            document.getElementById("navlink1").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink2").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink3").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink4").style.padding = "10px 0 1rem 1rem";
            document.getElementById("navlink5").style.padding = "10px 0 1rem 1rem";
            if (window.innerWidth < 2700) {
                document.getElementById("navbarnavid").style.marginLeft = "35%";
            }
            if (window.innerWidth < 1600) {
                document.getElementById("navbarnavid").style.marginLeft = "15%";
            }
            if (window.innerWidth < 1200) {
                document.getElementById("navlink1").style.padding = "0rem 1rem";
                document.getElementById("navlink2").style.padding = "0rem 1rem";
                document.getElementById("navlink3").style.padding = "0rem 1rem";
                document.getElementById("navlink4").style.padding = "0rem 1rem";
                document.getElementById("navlink5").style.padding = "0rem 1rem";
                document.getElementById("navbarnavid").style.marginLeft = "11%";
            }
            if (window.innerWidth < 800) {
                document.getElementById("navbarnavid").style.marginLeft = "11%";
            }
            if (window.innerWidth < 500) {
                document.getElementById("navlink1").style.padding = "1rem 0";
                document.getElementById("navlink2").style.padding = "1rem 0";
                document.getElementById("navlink3").style.padding = "1rem 0";
                document.getElementById("navlink4").style.padding = "1rem 0";
                document.getElementById("navlink5").style.padding = "1rem 0";
            }
        }
        this.ts.updateComp1Val(data);
        window.sessionStorage.setItem('lang', data);
    };
    HomeComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    HomeComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    HomeComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    HomeComponent.prototype.scrollToproducts = function () {
        document.getElementById("productsec").scrollIntoView();
    };
    HomeComponent.prototype.toggleDrop = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("nav ul li ul").fadeToggle(500);
    };
    HomeComponent.prototype.function = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.carousel-showmanymoveone .item').each(function () {
            var itemToClone = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            for (var i = 1; i < 6; i++) {
                itemToClone = itemToClone.next();
                // wrap around if at end of item collection
                if (!itemToClone.length) {
                    itemToClone = jquery__WEBPACK_IMPORTED_MODULE_3__(this).siblings(':first');
                }
                // grab item, clone, add marker class, add to collection
                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-" + (i))
                    .appendTo(jquery__WEBPACK_IMPORTED_MODULE_3__(this));
            }
        });
    };
    ;
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/products/dialog-data-example-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/products/dialog-data-example-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative\" >\r\n  <button  class=\"close-button\"   [mat-dialog-close]=\"true\" >\r\n  <img src=\"../../../assets/images/closebutton.png\"/>\r\n  </button>\r\n<div mat-dialog-content style=\"max-height: 100%;overflow: hidden;\">\r\n\r\n  <img style=\"width:100%;height:100%\"\r\n  class=\"productimg\"\r\n  src=\"{{data.url }}\"\r\n\r\n/>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/products/dialogcss.scss":
/*!****************************************************!*\
  !*** ./src/app/components/products/dialogcss.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close-button {\n  position: absolute;\n  right: 0;\n  right: -10px;\n  top: -10px;\n  background-color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: 'opEB';\n  color: grey;\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmpnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxkaWFsb2djc3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7RUFFVixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZGlhbG9nY3NzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICByaWdodDogLTEwcHg7XHJcbiAgdG9wOiAtMTBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcEVCJztcclxuICBjb2xvcjogZ3JleTtcclxuICBvdXRsaW5lOjA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"showspinner\" ><div class=\"loading\">  <mat-spinner class=\"spinnerc\" [value]=\"80\"></mat-spinner></div></div>\r\n<div  class=\"productwrapper\" id=\"wrapper\">\r\n  <app-header class=\"headerfixed\"></app-header>\r\n  <div class=\"productbody\">\r\n      <app-todaysrate></app-todaysrate>\r\n    <div class=\"productheroimgdiv\">\r\n      <img id=\"heroimgplaceholder\" class=\"productheroimg loading\"  />\r\n      <div class=\"cartextdiv\">\r\n        {{cartext}}\r\n      </div>\r\n    </div>\r\n    <div class=\"mainbody \">\r\n        \r\n      <div class=\"row w100\">\r\n      <div class=\"col-lg-3 cent\">\r\n        \r\n        <div class=\"findjewels\">\r\n          {{ ts.translate(\"findyourjewels\") | uppercase }}\r\n        </div>\r\n        <div id=\"selectedJewell\" class=\"selectedJewell\">{{ ts.translate(value) | uppercase }}</div>\r\n        <div class=\"btnGroup\">\r\n         <label>\r\n            <input id=\"allproducts\" (change)=\"handleChange($event.target.value)\" type=\"radio\" value=\"allproducts\" name=\"productradio\" />\r\n            <span>{{ ts.translate(\"allproducts\") | titlecase }}</span>\r\n          </label>\r\n\r\n          <label>\r\n            <input id=\"maalai\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"maalai\" name=\"productradio\" />\r\n            <span>{{ ts.translate(\"maalai\") | titlecase }}</span>\r\n          </label>\r\n          <label>\r\n            <input id=\"bangles\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bangles\" name=\"productradio\" />\r\n            <span>{{ ts.translate(\"bangles\") | titlecase }}</span>\r\n          </label>\r\n\r\n          <label>\r\n            <input id=\"necklace\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"necklace\" name=\"productradio\" />\r\n            <span>{{ ts.translate(\"necklace\") | titlecase }}</span>\r\n          </label>\r\n          <label>\r\n            <input id=\"chains\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"chains\"  name=\"productradio\" />\r\n            <span>{{ ts.translate(\"chains\") | titlecase }}</span>\r\n          </label>\r\n\r\n          <label>\r\n            <input id=\"earrings\" type=\"radio\" (change)=\"handleChange($event.target.value)\"  value=\"earrings\" name=\"productradio\" />\r\n            <span>{{ ts.translate(\"earrings\") | titlecase }}</span>\r\n          </label>\r\n          <label>\r\n            <input id=\"rings\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"rings\"  name=\"productradio\" />\r\n            <span>{{ ts.translate(\"rings\") | titlecase }}</span>\r\n          </label>\r\n\r\n          <label>\r\n            <input id=\"anklet\" type=\"radio\" (change)=\"handleChange($event.target.value)\"  value=\"anklet\" name=\"productradio\" />\r\n            <span>{{ ts.translate(\"anklet\") | titlecase }}</span>\r\n          </label>\r\n          <label>\r\n            <input id=\"dollar\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"dollar\"  name=\"productradio\" />\r\n            <span>{{ ts.translate(\"dollar\") | titlecase }}</span>\r\n          </label>\r\n\r\n\r\n          <label>\r\n            <input id=\"bracelet\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bracelet\"  name=\"productradio\" />\r\n            <span>{{ ts.translate(\"bracelet\") | titlecase }}</span>\r\n          </label>\r\n        </div>\r\n      \r\n      </div>\r\n\r\n      <div id=\"dropdown\" class=\"dropdown\" >\r\n        <div class=\"staticfield\">\r\n          <label id=\"findtext\"> {{ ts.translate(\"findyourjewels\") | uppercase }}</label>\r\n        <mat-form-field appearance=\"outline\">\r\n      \r\n        <mat-select  class=\"dropdownselect\" [(ngModel)]=\"selectedoption\" (selectionChange)=\"handleChange($event.value)\" name=\"jwelltype\">\r\n          <mat-option class=\"droptext\" *ngFor=\"let item of types\" [value]=\"item.key\">\r\n            {{ ts.translate(item.value) | titlecase }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n      </div>\r\n    \r\n\r\n      <div  id=\"productsLists\" class=\"col-lg-9 productsLists\">\r\n\r\n        <div *ngIf=\"tempdata.length==0\" class=\"noproducts\">{{ts.translate('noproductsfound')}}</div>\r\n          <!-- <div *ngIf=\"showspinner\" class=\"col-12 col-lg-12 col-md-12 col-sm-12 center\"><div class=\"loading\">  <mat-spinner class=\"spinnerc\"></mat-spinner></div></div> -->\r\n        <div class=\"ImgList col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12\" *ngFor=\"let item of tempdata\">\r\n          <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <!-- <a class=\"zoombut\" (click)=\"openDialog(item)\">Click to zoom</a> -->\r\n            <!-- <button mat-button (click)=\"openDialog(item)\">Click to Zoom</button> -->\r\n            <div class=\"procode\">{{item.code}}</div>\r\n           <div  class=\"proname\"> {{ts.translate(item.category)}} {{item.name}}</div>\r\n            <div (click)=\"openDialog(item)\" class=\"imgwrapper\"><img\r\n              class=\"productimg\"\r\n              src=\"{{ item.imgsrc }}\"\r\n              \r\n            /></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n    \r\n    <app-talktous [talktouscontent]=\"ts.translate('talktouscollection')\"></app-talktous>\r\n  </div>\r\n  <div class=\"linkstab\">\r\n    <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\r\n    <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToProducts('allproducts','allmetals')\"  >{{ts.translate('products')}} </a></span> </span> \r\n    <span class=\"padl15\" *ngIf=\"selectedMetal!=='allmetals'\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> {{ts.translate(selectedMetal) |  titlecase }} </span> </span> \r\n\r\n  </div>\r\n  <app-footer></app-footer>\r\n  </div>\r\n \r\n</div>\r\n\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productwrapper {\n  position: relative; }\n\n.loading {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fff; }\n\n.cartextdiv {\n  position: absolute;\n  top: 22vh;\n  font-family: 'dance';\n  left: 10%;\n  font-size: 5rem;\n  color: #ffffff;\n  height: 5rem; }\n\n.noproducts {\n  text-align: center;\n  font-size: 28px;\n  color: #808080;\n  font-family: 'opR','tamilf'; }\n\n.spinnerc {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto; }\n\n.productbody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: right;\n     object-position: right; }\n\n.filterList {\n  padding: 1em;\n  font-family: 'opEB','tamilf';\n  color: black; }\n\n.productfooter {\n  position: absolute;\n  bottom: 0; }\n\n.cent {\n  text-align: center;\n  display: block; }\n\n.btnGroup {\n  display: inline-flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n  background-color: #fff;\n  text-align: left;\n  padding: 0 0 0 3em; }\n\n.dropdown {\n  display: none; }\n\n.fixeddiv {\n  position: fixed;\n  z-index: 99;\n  margin-top: -520px; }\n\n.fixeddiv + .btnGroup {\n  padding-top: 3em; }\n\n.static {\n  position: fixed;\n  z-index: 99;\n  top: 55px;\n  padding-right: 2em !important; }\n\n.static + .staticfield {\n  padding-top: 3em; }\n\n.imgwrapper {\n  height: 250px;\n  width: 250px; }\n\n.findjewels {\n  color: #333333;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  padding-left: 6rem;\n  font-family: 'opEB','tamilf';\n  margin-top: 2em;\n  padding-bottom: 20px; }\n\n.selectedJewell {\n  color: #CC9F08;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  width: 100%;\n  padding: 0 0 40px;\n  padding-left: 2.6em;\n  font-family: 'opEB','tamilf'; }\n\n.ImgList {\n  display: inline-flex;\n  text-align: center;\n  padding: 0; }\n\n.indiImg {\n  margin: 0em 73px 80px 0;\n  display: flex;\n  flex-flow: column-reverse; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%; }\n\n.productimg:hover {\n  cursor: pointer; }\n\n:checked + span {\n  color: #CC9F08;\n  transition: 0.3s ease-in-out; }\n\ninput[type=\"radio\"] {\n  display: none; }\n\n/* Optional other stuff just to make it look better */\n\nlabel {\n  display: inline-block;\n  width: 200px;\n  padding: 5px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out; }\n\nspan {\n  transition: 0.3s ease-in-out; }\n\nlabel > span:hover {\n  color: #CC9F08; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-family: 'opR','tamilf';\n  padding-top: 20px; }\n\n.procode {\n  color: #888888;\n  font-family: 'opR','tamilf';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  font-family: 'opB','tamilf';\n  padding-top: 16px; }\n\n#findtext {\n  display: none; }\n\n.w100 {\n  width: 100%; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR','tamilf';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n.center {\n  display: flex;\n  justify-content: center; }\n\n::ng-deep .mat-progress-spinner circle, ::ng-deep .mat-spinner circle {\n  stroke: #CC9F08; }\n\n::ng-deep .mat-form-field-flex {\n  outline: 0; }\n\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done, .mat-step-header .mat-step-icon-state-edit {\n  background-color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #CC9F08 !important;\n  opacity: 0.8 !important; }\n\n::ng-deep .mat-input-element {\n  caret-color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\n  caret-color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field-label {\n  color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n  color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #CC9F08 !important; }\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 8px 0 1em 0; }\n\n.headerfixed {\n  position: fixed;\n  z-index: 99;\n  margin: 0;\n  height: 85px;\n  width: 100%;\n  padding: 0; }\n\n@media screen and (max-width: 800px) {\n  .cent {\n    display: none; }\n  #findtext {\n    display: block;\n    transition: 0.5s all ease-in-out; }\n  label {\n    display: inline-block;\n    width: auto;\n    padding: 1em;\n    white-space: nowrap;\n    font-size: 12px;\n    cursor: pointer;\n    transition: 0.2s ease-in-out; }\n  .productheroimg {\n    -o-object-position: 95% 90%;\n       object-position: 95% 90%; }\n  .btnGroup {\n    display: inline-flex;\n    font-size: 20px;\n    background-color: #fff;\n    text-align: left;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    padding: 1em 0 0 0; }\n  .findjewels, .selectedJewell {\n    display: none; }\n  .productsLists {\n    padding: 8em 4em 8em 2em;\n    text-align: center; }\n  .indiImg {\n    margin: 5em 1em;\n    display: flex;\n    width: 100%;\n    height: 200px;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%; }\n  .zoombut {\n    font-size: 10px;\n    padding-top: 4px; }\n  .procode {\n    font-size: 10px; }\n  .proname {\n    font-size: 14px; }\n  .fixeddiv {\n    padding-top: 0;\n    position: -webkit-sticky;\n    position: sticky; }\n  .imgwrapper {\n    width: 100%;\n    height: 100%; }\n  .w100 {\n    width: auto; }\n  .dropdown {\n    display: block;\n    width: 100%;\n    background-color: #fff;\n    z-index: 1;\n    text-align: center;\n    padding: 3em 5em 0 5em; }\n  mat-form-field {\n    width: 100%;\n    font-size: 18px; }\n  ::ng-deep .mat-form-field-appearance-outline ::ng-deep .mat-form-field-outline {\n    border-radius: 5px;\n    outline: 0; }\n  ::ng-deep .mat-form-field-appearance-outline:focus ::ng-deep .mat-form-field-appearance-outline:active ::ng-deep .mat-form-field-appearance-outline:visited .mat-form-field-appearance-outline:hover\n::ng-deep .mat-form-field-outline:focus ::ng-deep .mat-form-field-outline:active ::ng-deep .mat-form-field-outline:visited .mat-form-field-outline:hover {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n    color: rgba(0, 0, 0, 0); }\n  .dropdownselect .dropdownselect:focus {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .droptext {\n    color: #A57F00; }\n  .extrapadtop {\n    padding-top: 24em; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n@media screen and (max-width: 1024px) {\n  .cent {\n    text-align: left; }\n  .findjewels {\n    font-size: 20px;\n    padding-left: 44px;\n    text-align: left; }\n  .selectedJewell {\n    font-size: 20px;\n    width: 100%;\n    padding: 0 0 40px 40px; }\n  .btnGroup {\n    padding: 0 0 0 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmpnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXRCO0VBRUUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBVyxFQUFBOztBQUViO0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQTJCLEVBQUE7O0FBRTdCO0VBRUUsa0JBQWtCO0VBQ3JCLE1BQUs7RUFDTCxTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFFUixZQUFZLEVBQUE7O0FBRWI7RUFFSSxvQkFBb0I7RUFDcEIsa0JBQWlCLEVBQUE7O0FBRXJCO0VBRUksV0FBVztFQUNYLGFBQWE7RUFDakIsa0JBQWtCLEVBQUE7O0FBR2xCO0VBRUksWUFBVztFQUNYLFdBQVU7RUFDVixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLHlCQUFzQjtLQUF0QixzQkFBc0IsRUFBQTs7QUFFMUI7RUFFSSxZQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFlBQVcsRUFBQTs7QUFFZjtFQUVJLGtCQUFrQjtFQUNsQixTQUFRLEVBQUE7O0FBR1o7RUFFSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdyQjtFQUNJLGFBQVksRUFBQTs7QUFHakI7RUFFSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJ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ZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5wcm9kdWN0d3JhcHBlclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICB3aWR0aDoxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuY2FydGV4dGRpdlxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjJ2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZGFuY2UnO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6NXJlbTtcclxuICB9XHJcbiAgLm5vcHJvZHVjdHNcclxuICB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJywndGFtaWxmJztcclxuICB9XHJcbiAgLnNwaW5uZXJjXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuICBcdFxyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG4ucHJvZHVjdGJvZHlcclxue1xyXG4gICAgcGFkZGluZzogN2VtIDAgMGVtIDA7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdGhlcm9pbWdkaXZcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0aGVyb2ltZ1xyXG57XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XHJcbn1cclxuLmZpbHRlckxpc3Rcclxue1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgICBmb250LWZhbWlseTogJ29wRUInLCd0YW1pbGYnO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLnByb2R1Y3Rmb290ZXJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuLy9idXR0b24gZ3JvdXBcclxuLmNlbnRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bkdyb3Vwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDNlbTtcclxuIH1cclxuIFxyXG4gLmRyb3Bkb3due1xyXG4gICAgIGRpc3BsYXk6bm9uZTtcclxuIH1cclxuXHJcbi5maXhlZGRpdlxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIG1hcmdpbi10b3A6IC01MjBweDtcclxufVxyXG4uZml4ZWRkaXYgKyAuYnRuR3JvdXAge1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxuICB9XHJcblxyXG4gIC5zdGF0aWNcclxuICB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN0YXRpYyArIC5zdGF0aWNmaWVsZFxyXG4gIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gIH1cclxuICAuaW1nd3JhcHBlclxyXG4gIHtcclxuICAgICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgICB3aWR0aDoyNTBweDtcclxuICB9XHJcbiAuZmluZGpld2Vsc1xyXG4ge1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BFQicsJ3RhbWlsZic7XHJcbiAgICBtYXJnaW4tdG9wOjJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gfVxyXG5cclxuIC5zZWxlY3RlZEpld2VsbFxyXG4ge1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAwIDQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJywndGFtaWxmJztcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuIH1cclxuXHJcbiAuSW1nTGlzdFxyXG4ge1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gfVxyXG5cclxuIC5pbmRpSW1nXHJcbiB7XHJcbiAgICBtYXJnaW46IDBlbSA3M3B4IDgwcHggMDtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuIH1cclxuXHJcbiAucHJvZHVjdGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBcclxuIH1cclxuXHJcbiAucHJvZHVjdGltZzpob3ZlcntcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiB9XHJcblxyXG4gOmNoZWNrZWQgKyBzcGFuIHtcclxuICAgXHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVxyXG57XHJcbiBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLyogT3B0aW9uYWwgb3RoZXIgc3R1ZmYganVzdCB0byBtYWtlIGl0IGxvb2sgYmV0dGVyICovXHJcbmxhYmVsIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMjAwcHg7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuc3BhbntcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxubGFiZWwgPiBzcGFuOmhvdmVye1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbn1cclxuLnByb2R1Y3RzTGlzdHNcclxue1xyXG4gICAgcGFkZGluZy10b3A6MjBlbTtcclxufVxyXG4ucHJvbmFtZVxyXG57XHJcbiAgICBjb2xvcjojNDQ0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInLCd0YW1pbGYnO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLnByb2NvZGVcclxue1xyXG4gICAgY29sb3I6Izg4ODg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJywndGFtaWxmJztcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi56b29tYnV0XHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzY2NjY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OidvcEInLCd0YW1pbGYnO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuI2ZpbmR0ZXh0XHJcbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4udzEwMFxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5saW5rc3RhYlxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInLCd0YW1pbGYnO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MTFweCA2NXB4O1xyXG59XHJcbi5kb3duYXJyb3dcclxue1xyXG4gICAgaGVpZ2h0OjEycHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG59XHJcbi5wYWRsMTVcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5ob21laW1nXHJcbntcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5wb2ludGVyXHJcbntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCA6Om5nLWRlZXAgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICNDQzlGMDg7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXhcclxuICAgIHtcclxub3V0bGluZTowO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vaW5wdXQgb3V0bGluZSBjb2xvclxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3JcclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgICAgICBjb2xvcjogI0NDOUYwOCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBtYXQtaW5wdXQgZXJyb3Igb3V0bGluZSBjb2xvclxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gICAgICAgIGNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3JcclxuICAgIDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICAgIGNhcmV0LWNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3JcclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICAgIGNhcmV0LWNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGVcclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6ICRtYWluQ29sb3IhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjQ0M5RjA4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICNDQzlGMDggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDFlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXJmaXhlZFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jZW50e1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgICNmaW5kdGV4dFxyXG4gICAge1xyXG5kaXNwbGF5OmJsb2NrOyAgXHJcbiAgICB0cmFuc2l0aW9uOjAuNXMgYWxsIGVhc2UtaW4tb3V0OyAgXHJcbiAgICB9XHJcbiAgICBsYWJlbFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdGhlcm9pbWdcclxuICAgIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDk1JSA5MCU7XHJcbiAgICB9XHJcbiAgICAuYnRuR3JvdXBcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICBcclxuICAgIHBhZGRpbmc6IDFlbSAwIDAgMDtcclxuICAgIH1cclxuICAgIC5maW5kamV3ZWxzICwgLnNlbGVjdGVkSmV3ZWxsXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzTGlzdHNcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nOiA4ZW0gNGVtIDhlbSAyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmRpSW1nXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luOiA1ZW0gMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0aW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnpvb21idXRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5wcm9jb2RlXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb25hbWVcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuZml4ZWRkaXZcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB9XHJcbiAgICAuaW1nd3JhcHBlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcbiAgIC53MTAwXHJcbiAgIHtcclxuICAgICAgIHdpZHRoOmF1dG87XHJcbiAgIH1cclxuXHJcbiAgXHJcbiAgIC5kcm9wZG93blxyXG4gICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNlbSA1ZW0gMCA1ZW07XHJcbiAgIH1cclxuXHJcbiAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgIH1cclxuICBcclxuICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICAvLyBib3JkZXI6IDBweCBzb2xpZCAjQTU3RjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTowO1xyXG5cclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmZvY3VzIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTp2aXNpdGVkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU6aG92ZXJcclxuICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6Zm9jdXMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lOmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6dmlzaXRlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZTpob3ZlcntcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNBNTdGMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duc2VsZWN0IC5kcm9wZG93bnNlbGVjdDpmb2N1c1xyXG4gICAge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0E1N0YwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcHRleHRcclxuICAgIHtcclxuICAgICAgICBjb2xvcjojQTU3RjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5leHRyYXBhZHRvcFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjI0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmtzdGFiXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZzogMTFweCA0MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuZmluZGpld2Vsc1xyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RlZEpld2VsbFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAwIDQwcHggNDBweDtcclxuICAgIH1cclxuICAgIC5idG5Hcm91cFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6MCAwIDAgNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ts, sh, route, router, http, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.talktouscontent = "";
        this.cartext = "";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.metals = ['Gold', 'Silver', 'Diamond'];
        this.typediamind = [
            {
                key: 'allproducts',
                value: 'allproducts'
            },
            {
                key: 'necklace',
                value: 'necklace'
            },
            {
                key: 'stud',
                value: 'stud'
            },
            {
                key: 'rings',
                value: 'rings'
            },
        ];
        this.types = [
            {
                key: 'allproducts',
                value: 'allproducts'
            },
            {
                key: 'maalai',
                value: 'maalai'
            }, {
                key: 'bangles',
                value: 'bangles'
            }, {
                key: 'necklace',
                value: 'necklace'
            }, {
                key: 'chains',
                value: 'chains'
            }, {
                key: 'earrings',
                value: 'earrings'
            }, {
                key: 'rings',
                value: 'rings'
            }, {
                key: 'bracelet',
                value: 'bracelet'
            },
            {
                key: 'anklet',
                value: 'anklet'
            },
            {
                key: 'dollar',
                value: 'dollar'
            },
        ];
        this.showspinner = true;
        this.options = {
            headers: this.httpHeaders
        };
        this.jsondata = [];
        this.value = 'allproducts';
        this.selectedoption = 'allproducts';
        this.tempdata = [];
    }
    ProductsComponent.prototype.openDialog = function (item) {
        // console.log(item.imgsrc);
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                url: item.imgsrc,
                name: item.name,
                code: item.code
            },
            height: 'auto',
            width: '95vh'
        });
    };
    ProductsComponent.prototype.aosInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        aos__WEBPACK_IMPORTED_MODULE_7__["init"]({
            duration: 1200
        });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.selectedMetal = params.metal; });
        this.showspinner = true;
        document.getElementById('wrapper').style.opacity = "0";
        //  this.showspinner = false;
        this.selectedValue = "allproducts";
        this.selectedoption = "allproducts";
        // this.selectedMetal=this.route.snapshot.paramMap.get('metal');
        var img = document.getElementById("heroimgplaceholder");
        if (!this.selectedMetal) {
            this.selectedMetal = "allmetals";
            img.src = "./assets/images/banners/goldbanner.jpg";
        }
        if (this.selectedMetal.toLowerCase() == 'gold') {
            this.cartext = this.ts.translate('gold');
            this.talktouscontent = this.ts.translate('talktousgold');
            img.src = "./assets/images/banners/goldbanner.jpg";
        }
        else if (this.selectedMetal.toLowerCase() == 'silver') {
            this.cartext = this.ts.translate('silver');
            this.talktouscontent = this.ts.translate('talktoussilver');
            img.src = "./assets/images/banners/silverbanner.jpg";
        }
        else if (this.selectedMetal.toLowerCase() == 'diamond') {
            this.cartext = this.ts.translate('diamond');
            this.talktouscontent = this.ts.translate('talktousdiamond');
            img.src = "./assets/images/banners/diamondbanner.jpg";
        }
        else {
            this.talktouscontent = this.ts.translate('talktousproduct');
            img.src = "./assets/images/banners/goldbanner.jpg";
        }
        this.cartext = this.selectedMetal.toLowerCase();
        //this.selectedMetal="allmetals"
        if (this.sh.getValue()) {
            this.value = this.sh.getValue();
            this.selectedoption = this.value;
            this.selectedValue = this.value;
        }
        // this.value="allproducts"
        this.getAllProducts().subscribe(function (data) {
            _this.showspinner = false;
            document.getElementById('wrapper').style.opacity = "1";
            _this.jsondata = data;
            _this.tempdata = _this.jsondata;
            // console.log(this.tempdata);
            if (_this.selectedMetal != "allmetals") {
                _this.jsondata = _this.jsondata.filter(function (data) {
                    return data.metal.toLowerCase() == _this.selectedMetal.toLowerCase();
                });
                console.log(_this.tempdata);
            }
            if (_this.value != 'allproducts') {
                _this.tempdata = _this.jsondata.filter(function (data) {
                    return data.category.toLowerCase() == _this.value;
                });
            }
            else {
                _this.tempdata = _this.jsondata;
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_6__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_6__("#selectedJewell");
            if (y >= 450) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "2", "padding": "14px 2.6em 8px 2.6em  " });
                if (window.innerWidth < 1200) {
                    header.css({ "top": "4em", "padding": "14px 2.6em 8px 45px" });
                }
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding": "0px 2.6em 40px 2.6em  " });
                if (window.innerWidth < 1200) {
                    header.css({ "padding": "0px 0em 40px 45px  " });
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_6__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_6__("#dropdown");
            if (y >= 420) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "1", "padding": "6em 5em 0em 5em" });
                jquery__WEBPACK_IMPORTED_MODULE_6__('#findtext').css({ 'display': 'none' });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#productsLists").css({ "padding-top": "22em" });
                }
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "100%", "padding": "3em 5em 0 5em" });
                jquery__WEBPACK_IMPORTED_MODULE_6__('#findtext').css({ 'display': 'block' });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#productsLists").css({ "padding-top": "8em" });
                }
            }
        });
        this.aosInit();
    };
    ProductsComponent.prototype.ngAfterViewInit = function () {
        // this.showspinner = false;
        jquery__WEBPACK_IMPORTED_MODULE_6__('#exampleModal').on('show.bs.modal', function (event) {
            var button = jquery__WEBPACK_IMPORTED_MODULE_6__(event); // Button that triggered the modal
            var recipient = button.data('whatever'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            // console.log(recipient);
            var modal = jquery__WEBPACK_IMPORTED_MODULE_6__(this);
            modal.find('.modal-title').text('New message to ' + recipient);
            modal.find('.modal-body input').val(recipient);
        });
    };
    ProductsComponent.prototype.getAllProducts = function () {
        return this.http.get('./assets/products.json', this.options);
    };
    ProductsComponent.prototype.handleChange = function (event) {
        var _this = this;
        document.getElementById(event).checked = true;
        this.aosInit();
        window.scrollTo(0, 0);
        this.value = event;
        this.selectedoption = this.value;
        this.selectedValue = event;
        if (this.value != 'allproducts') {
            this.tempdata = this.jsondata.filter(function (data) {
                return data.category.toLowerCase() == _this.value;
            });
            // console.log(this.jsondata);
            // console.log(this.tempdata);
        }
        else {
            this.tempdata = this.jsondata;
        }
    };
    ProductsComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    ProductsComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ProductsComponent);
    return ProductsComponent;
}());

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example-dialog.html */ "./src/app/components/products/dialog-data-example-dialog.html"),
            styles: [__webpack_require__(/*! ./dialogcss.scss */ "./src/app/components/products/dialogcss.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());



/***/ }),

/***/ "./src/app/components/set-prices/set-prices.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/set-prices/set-prices.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"setprices\">\r\n  <div class=\"pad1\">\r\n  <!-- <label  class=\"pad1\">Gold Price</label> -->\r\n<div>\r\n  <!-- <input  class=\"pad1\" type=\"text\" [(ngModel)]=\"goldprice\" placeholder=\"Gold Price\" /> -->\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Gold Price</mat-label>\r\n    <input matInput  [(ngModel)]=\"goldprice\" placeholder=\"Gold Price\">\r\n   </mat-form-field>\r\n</div>\r\n</div>\r\n<div  class=\"pad1\">\r\n    <!-- <label  class=\"pad1\">Silver Price</label> -->\r\n  <div>\r\n    <!-- <input  class=\"pad1\" type=\"text\" [(ngModel)]=\"silverprice\" placeholder=\"Silver Price\" /> -->\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Silver Price</mat-label>\r\n      <input matInput  [(ngModel)]=\"silverprice\" placeholder=\"Silver Price\">\r\n     </mat-form-field>\r\n  </div>\r\n  </div>\r\n  \r\n  <button mat-raised-button (click)=\"setPrice()\">Set Price</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/set-prices/set-prices.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/set-prices/set-prices.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad1 {\n  margin: 1em 0 0 0; }\n\n.setprices {\n  text-align: center;\n  font-family: 'opB';\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXQtcHJpY2VzL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiamdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0LXByaWNlc1xcc2V0LXByaWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQixFQUFBOztBQUdyQjtFQUVJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXQtcHJpY2VzL3NldC1wcmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkMVxyXG57XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxufVxyXG5cclxuLnNldHByaWNlc1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ29wQic7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/set-prices/set-prices.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/set-prices/set-prices.component.ts ***!
  \***************************************************************/
/*! exports provided: SetPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPricesComponent", function() { return SetPricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SetPricesComponent = /** @class */ (function () {
    function SetPricesComponent(ts, sh, snackBar) {
        this.ts = ts;
        this.sh = sh;
        this.snackBar = snackBar;
        this.prices = new src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["Price"]();
        this.goldprice = 0;
        this.silverprice = 0;
    }
    SetPricesComponent.prototype.ngOnInit = function () {
        this.prices = new src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["Price"]();
    };
    SetPricesComponent.prototype.setPrice = function () {
        var _this = this;
        this.prices.goldprice = this.goldprice;
        this.prices.silverprice = this.silverprice;
        this.sh.setPrices(this.prices).subscribe(function (data) {
            console.log("set Successfull");
            _this.goldprice = 0;
            _this.silverprice = 0;
            _this.snackBar.open("prices set", "close", {
                duration: 5000,
            });
        });
    };
    SetPricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-prices',
            template: __webpack_require__(/*! ./set-prices.component.html */ "./src/app/components/set-prices/set-prices.component.html"),
            styles: [__webpack_require__(/*! ./set-prices.component.scss */ "./src/app/components/set-prices/set-prices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SetPricesComponent);
    return SetPricesComponent;
}());



/***/ }),

/***/ "./src/app/components/talktous/talktous.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/talktous/talktous.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"talktous row\" id=\"talktousid\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"col-lg-9 col-md-9 col-sm-9 col-9\" style=\"height:100%;\">\r\n      <div class=\"talktouspara\">\r\n       {{talktouscontent}}\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-3\" style=\"height:100%;\">\r\n      <button (click)=\"goToPage('contactus')\" class=\"talktousButton\">\r\n        {{ts.translate('talktous') |  titlecase }}\r\n      </button>\r\n        \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/talktous/talktous.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/talktous/talktous.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 120px;\n  margin: auto;\n  font-family: 'opR','tamilf';\n  padding: 2em 4.2rem;\n  font-size: 20px; }\n\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  font-weight: 600;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n\n.talktouspara {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: justify;\n  padding-right: 30px; }\n\n.talktousButton {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%); }\n\n@media screen and (max-width: 800px) {\n  .talktous {\n    font-size: 14px; } }\n\n@media screen and (max-width: 500px) {\n  .talktous {\n    font-size: 12px;\n    padding: 2em 0rem; }\n  .talktouspara {\n    text-align: left; } }\n\n.headerfixed {\n  position: fixed;\n  z-index: 99;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWxrdG91cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmpnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRhbGt0b3VzXFx0YWxrdG91cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUUsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFFRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBR1gsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0U7SUFFQSxlQUFlLEVBQUEsRUFDaEI7O0FBRUQ7RUFDQztJQUVDLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUVuQjtJQUVFLGdCQUFnQixFQUFBLEVBQ2pCOztBQUdEO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhbGt0b3VzL3RhbGt0b3VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhbGt0b3VzXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGNztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJywndGFtaWxmJztcclxuICAgIHBhZGRpbmc6IDJlbSA0LjJyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIFxyXG4gIH1cclxuICAudGFsa3RvdXNCdXR0b25cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxufVxyXG4udGFsa3RvdXNwYXJhXHJcbntcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi50YWxrdG91c0J1dHRvblxyXG57XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuXHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAudGFsa3RvdXNcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAudGFsa3RvdXNcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAyZW0gMHJlbTtcclxufVxyXG4udGFsa3RvdXNwYXJhXHJcbntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbn1cclxuXHJcbi5oZWFkZXJmaXhlZFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/talktous/talktous.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/talktous/talktous.component.ts ***!
  \***********************************************************/
/*! exports provided: TalktousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalktousComponent", function() { return TalktousComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TalktousComponent = /** @class */ (function () {
    function TalktousComponent(ts, sh, route, router) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
    }
    TalktousComponent.prototype.ngOnInit = function () {
        console.log(window.sessionStorage.getItem('lang') + " talk tous");
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        if (window.sessionStorage.getItem('lang') == "LA-TA")
            document.getElementById("talktousid").style.fontFamily = "tamilf !important";
        if (window.sessionStorage.getItem('lang') == "LA-EN")
            document.getElementById("talktousid").style.fontFamily = "opR";
        this.aosInit();
        console.log(this.talktouscontent);
    };
    TalktousComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            duration: 1200
        });
    };
    TalktousComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('talktouscontent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TalktousComponent.prototype, "talktouscontent", void 0);
    TalktousComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-talktous',
            template: __webpack_require__(/*! ./talktous.component.html */ "./src/app/components/talktous/talktous.component.html"),
            styles: [__webpack_require__(/*! ./talktous.component.scss */ "./src/app/components/talktous/talktous.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TalktousComponent);
    return TalktousComponent;
}());



/***/ }),

/***/ "./src/app/components/todaysrate/todaysrate.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/todaysrate/todaysrate.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todaysrate\">\r\n    \r\n  <div  class=\"circle\">\r\n   \r\n  \r\n        <span id=\"today\">\r\n          {{ts.translate('todaysrate')}}\r\n        </span>\r\n        <span  id=\"close\">{{ts.translate('close')}}</span>\r\n      \r\n   \r\n      \r\n  </div>\r\n  <div class=\"goldrate\"  id=\"rate\">\r\n    <div class=\"goldratehead\">\r\n        {{ts.translate('todaysrate')}}\r\n    </div>\r\n    <div class=\"goldbody\">\r\n     <div> <span class=\"bold\"><img style=\"width:1.5em;    margin-right: 4px;\" src=\"../../../assets/images/goldrate.png\" /> {{ts.translate('Gold') |  titlecase }} 1gm</span> - RS {{goldprice}}</div>\r\n     <div> <span class=\"bold\"><img  style=\"width:1.5em;    margin-right: 4px;\" src=\"../../../assets/images/silverrate.png\" /> {{ts.translate('Silver') |  titlecase }}  1gm</span> - RS {{silverprice}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bar\"></div>\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/todaysrate/todaysrate.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/todaysrate/todaysrate.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 77%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  font-family: 'opR','tamilf';\n  cursor: pointer; }\n\n.bar {\n  height: 3px;\n  width: 3em;\n  margin-top: 34px;\n  background-color: #A57F00; }\n\n.circle {\n  height: 70px;\n  width: 70px;\n  padding-top: 17px;\n  font-size: 12px;\n  display: flex;\n  flex: 1;\n  margin: auto 0;\n  padding-left: -10px;\n  text-align: center;\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  border-radius: 50%;\n  background-color: #A57F00;\n  color: #fff; }\n\n.circle p.new-label span {\n  font-size: 12px;\n  line-height: 1.5rem;\n  font-weight: 100;\n  white-space: pre-wrap;\n  position: relative; }\n\n.success {\n  width: 100%; }\n\n.circle:hover p.new-label span {\n  display: none; }\n\n.circle:hover p.new-label:after {\n  font-size: 12px;\n  line-height: 1.5rem;\n  font-weight: 100;\n  white-space: pre-wrap;\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n  content: \"close\"; }\n\n.circle:hover {\n  padding-top: 23px; }\n\n#today {\n  opacity: 1; }\n\n#close {\n  opacity: 0;\n  position: absolute;\n  left: 2rem; }\n\n.circle:hover > #today {\n  opacity: 0; }\n\n.circle:hover > #close {\n  opacity: 1; }\n\n.circle:hover + .goldrate {\n  display: block;\n  transform: scale(1);\n  color: black; }\n\n.circle:not(:hover) + .goldrate {\n  display: none; }\n\n.goldrate {\n  width: 15em;\n  font-size: 12px;\n  position: absolute;\n  top: -14rem;\n  right: 3em;\n  text-align: center;\n  background-color: #fff;\n  border-radius: 5px;\n  display: none;\n  transform: scale(1.2);\n  transition: 0.3s all ease-in-out; }\n\n.goldratehead {\n  background-color: #A57F00;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 8px; }\n\n.bold {\n  font-weight: 600; }\n\n.goldbody {\n  padding: 8px;\n  border-left: 2px solid #ececec;\n  border-bottom: 2px solid #ececec;\n  border-right: 2px solid #ececec;\n  border-radius: 5px;\n  line-height: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RheXNyYXRlL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiamdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9kYXlzcmF0ZVxcdG9kYXlzcmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDJCQUEwQjtFQUMxQixlQUFlLEVBQUE7O0FBRWpCO0VBRUUsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLE9BQU87RUFDUCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVUsRUFBQTs7QUFFWjtFQUNFLGFBQWEsRUFBQTs7QUFJZjtFQUNFLGVBQWU7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDakIsZ0JBQWUsRUFBQTs7QUFFakI7RUFHRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxVQUFTLEVBQUE7O0FBRVg7RUFFRSxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFVBQVMsRUFBQTs7QUFFWDtFQUVFLFVBQVMsRUFBQTs7QUFFWDtFQUVFLFVBQVMsRUFBQTs7QUFHWDtFQUdHLGNBQWE7RUFDWixtQkFBbUI7RUFDbkIsWUFBVyxFQUFBOztBQUtmO0VBQ0UsYUFBWSxFQUFBOztBQUdkO0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsc0JBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixhQUFZO0VBRVoscUJBQXFCO0VBQ3JCLGdDQUFnQyxFQUFBOztBQUVsQztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZLEVBQUE7O0FBR2Q7RUFFRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFFSSxZQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ3RCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RheXNyYXRlL3RvZGF5c3JhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kYXlzcmF0ZVxyXG57XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHRvcDogNzclO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZm9udC1mYW1pbHk6J29wUicsJ3RhbWlsZic7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYXJcclxue1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG59XHJcbi5jaXJjbGVcclxue1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxuICBwYWRkaW5nLXRvcDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNpcmNsZSBwLm5ldy1sYWJlbCBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxufVxyXG4uc3VjY2Vzc3tcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5jaXJjbGU6aG92ZXIgcC5uZXctbGFiZWwgc3BhbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmNpcmNsZTpob3ZlciBwLm5ldy1sYWJlbDphZnRlcntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbnRlbnQ6XCJjbG9zZVwiO1xyXG59XHJcbi5jaXJjbGU6aG92ZXJcclxue1xyXG4gIFxyXG4gIHBhZGRpbmctdG9wOiAyM3B4O1xyXG5cclxufVxyXG4jdG9kYXl7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcbiNjbG9zZVxyXG57XHJcbiAgb3BhY2l0eTowO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MnJlbTtcclxufVxyXG4uY2lyY2xlOmhvdmVyID4gI3RvZGF5XHJcbntcclxuICBvcGFjaXR5OjA7XHJcbn1cclxuLmNpcmNsZTpob3ZlciA+ICNjbG9zZVxyXG57XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4uY2lyY2xlOmhvdmVyICsgLmdvbGRyYXRle1xyXG4gXHJcblxyXG4gICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2RmZGZkZjtcclxuXHJcbn1cclxuXHJcbi5jaXJjbGU6bm90KDpob3ZlcikgKyAuZ29sZHJhdGV7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uZ29sZHJhdGVcclxue1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTRyZW07XHJcbiAgcmlnaHQ6IDNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5nb2xkcmF0ZWhlYWRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNTdGMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbn1cclxuLmJvbGRcclxue1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmdvbGRib2R5XHJcbntcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZWNlY2VjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2VjZWM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWNlY2VjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5saW5lLWhlaWdodDogM3JlbTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/todaysrate/todaysrate.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/todaysrate/todaysrate.component.ts ***!
  \***************************************************************/
/*! exports provided: TodaysrateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysrateComponent", function() { return TodaysrateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TodaysrateComponent = /** @class */ (function () {
    function TodaysrateComponent(ts, sh, router, http) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
        this.http = http;
    }
    TodaysrateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.sh.getPrices().subscribe(function (data) {
            _this.goldprice = data.goldprice;
            _this.silverprice = data.silverprice;
        });
    };
    TodaysrateComponent.prototype.toggleview = function () {
        if (document.getElementById('rate').style.display = "block")
            document.getElementById('rate').style.display = "none";
        else
            document.getElementById('rate').style.display = "block";
    };
    TodaysrateComponent.prototype.over = function () {
        document.getElementById('content').innerHTML = this.ts.translate('close');
    };
    TodaysrateComponent.prototype.out = function () {
        document.getElementById('content').innerHTML = this.ts.translate('todaysrate');
    };
    TodaysrateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todaysrate',
            template: __webpack_require__(/*! ./todaysrate.component.html */ "./src/app/components/todaysrate/todaysrate.component.html"),
            styles: [__webpack_require__(/*! ./todaysrate.component.scss */ "./src/app/components/todaysrate/todaysrate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TodaysrateComponent);
    return TodaysrateComponent;
}());

var Prices = /** @class */ (function () {
    function Prices() {
    }
    return Prices;
}());


/***/ }),

/***/ "./src/app/components/topselling/dialog-data-example-dialog.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/topselling/dialog-data-example-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative\" >\r\n  <button  class=\"close-button\"   [mat-dialog-close]=\"true\" >\r\n  <img src=\"../../../assets/images/closebutton.png\"/>\r\n  </button>\r\n<div mat-dialog-content style=\"max-height: 100%;overflow: hidden;\">\r\n\r\n  <img style=\"width:100%;height:100%\"\r\n  class=\"productimg\"\r\n  src=\"{{data.url }}\"\r\n\r\n/>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/topselling/dialogcss.scss":
/*!******************************************************!*\
  !*** ./src/app/components/topselling/dialogcss.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close-button {\n  position: absolute;\n  right: 0;\n  right: -10px;\n  top: -10px;\n  background-color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: 'opEB';\n  color: grey;\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiamdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9wc2VsbGluZ1xcZGlhbG9nY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBRVYsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvcHNlbGxpbmcvZGlhbG9nY3NzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICByaWdodDogLTEwcHg7XHJcbiAgdG9wOiAtMTBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcEVCJztcclxuICBjb2xvcjogZ3JleTtcclxuICBvdXRsaW5lOjA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"demo1\" class=\"carousel slide\" data-interval=\"false\" pause=\"true\" >\r\n\r\n \r\n  <div class=\"carousel-inner no-padding\">\r\n    <div class=\"carousel-item active\">\r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[0].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[0].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[0])\"\r\n          />\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[1].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[1].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[1].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[1])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[2].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[2].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[2].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[2])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[3].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[3].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[3].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[3])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[4].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[4].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[4].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[4])\"\r\n          />\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[5].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[5].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[5].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[5])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[6].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[6].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[6].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[6])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[7].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[7].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[7].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[7])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[8].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[8].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[8].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[8])\"\r\n          />\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[9].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[9].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[9].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[9])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[10].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[10].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[10].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[10])\"\r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[11].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[11].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[11].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[11])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </div>\r\n  \r\n  <a id=\"prevbut1\"  class=\"carousel-control-prev\"  (click)=\"hideprev1()\" href=\"#demo1\" data-slide=\"prev\">\r\n    \r\n    <div class=\"nextCaro\" >\t<img class=\"left\"  src=\"../../../assets/images/arrow.png\" /></div>\r\n   </a>\r\n\r\n  <a id=\"nextbut1\" class=\"carousel-control-next\" (click)=\"showprev1()\" href=\"#demo1\" data-slide=\"next\">\r\n      <div class=\"nextCaro\" >\t<img class=\"right\" src=\"../../../assets/images/arrow.png\" /></div>\r\n    \r\n  </a>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"demo2\" class=\"carousel slide\" data-interval=\"false\" pause=\"true\" >\r\n\r\n \r\n  \r\n  \r\n  <div class=\"carousel-inner no-padding\">\r\n    <div class=\"carousel-item active center\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[0].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[0].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[0])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[1].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[1].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[1].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[1])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[2].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[2].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[2].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[2])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[3].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[3].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[3].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[3])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center \">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[4].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[4].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[4].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[4])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[5].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[5].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[5].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[5])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[6].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[6].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[6].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[6])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12 center\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">{{imgsrc[7].code}}</div>\r\n         <div class=\"proname\"> {{imgsrc[7].name}}</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[7].imgsrc}}\"\r\n            (click)=\"openDialog(imgsrc[7])\"\r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n\r\n    \r\n  </div>\r\n  \r\n  <!-- <a class=\"carousel-control-prev\" href=\"#demo2\" data-slide=\"prev\">\r\n    <div class=\"nextCaro\">\t<img class=\"left\" src=\"../../../assets/images/arrow.png\" /></div>\r\n     -->\r\n    <a id=\"prevbut2\"  class=\"carousel-control-prev\" (click)=\"hideprev2()\"  href=\"#demo2\" data-slide=\"prev\">\r\n    \r\n     <div class=\"nextCaro\">\t<img class=\"left\" src=\"../../../assets/images/arrow.png\" /></div>\r\n    </a>\r\n  \r\n  <a id=\"nextbut2\" class=\"carousel-control-next\" (click)=\"showprev2()\"  href=\"#demo2\" data-slide=\"next\">\r\n      <div class=\"nextCaro\">\t<img class=\"right\" src=\"../../../assets/images/arrow.png\" /></div>\r\n   </a>\r\n\r\n\r\n\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  margin-top: 60px; }\n\n.carousel-control-next {\n  right: -10%; }\n\n.indiImg:hover {\n  cursor: pointer; }\n\n#prevbut1 {\n  opacity: 0;\n  left: -10rem; }\n\n#prevbut2 {\n  opacity: 0; }\n\n.flexitem {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n\n.carousel-inner {\n  display: inline-flex; }\n\n.left {\n  transform: rotate(90deg); }\n\n.right {\n  transform: rotate(-90deg); }\n\n.indiImg {\n  margin: 4em 2em;\n  display: flex;\n  height: 250px;\n  width: 250px;\n  text-align: center;\n  flex-flow: column-reverse; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  margin-bottom: 20px; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-weight: 700;\n  font-family: 'avenirR','tamilf'; }\n\n.carousel-control-prev {\n  opacity: 0; }\n\n.procode {\n  color: #888888;\n  font-family: 'avenirR','tamilf';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  font-family: 'opB','tamilf'; }\n\n.nextCaro {\n  padding: 1em;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 1px #b6b6b6; }\n\n#demo1 {\n  display: block; }\n\n#demo2 {\n  display: none; }\n\n.carousel-control-next {\n  right: -8%; }\n\n@media screen and (max-width: 1200px) {\n  .productimg {\n    height: 90%;\n    width: 70%; }\n  #prevbut1 {\n    left: -7rem; }\n  .indiImg {\n    text-align: left; } }\n\n@media screen and (max-width: 800px) {\n  .productimg {\n    height: 60%;\n    width: 14rem; }\n  .indiImg {\n    margin: 4em 0em; }\n  .carousel-control-next {\n    right: -5%; }\n  #prevbut1 {\n    opacity: 0;\n    left: -4rem; } }\n\n@media screen and (max-width: 600px) {\n  .indiImg {\n    margin: 0 auto;\n    display: flex;\n    width: 60%;\n    height: 100%;\n    flex-flow: column-reverse;\n    text-align: center; }\n  .productimg {\n    height: 77%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .zoombut {\n    font-size: 10px; }\n  .procode {\n    font-size: 16px; }\n  .proname {\n    font-size: 20px; }\n  #demo1 {\n    display: none; }\n  #demo2 {\n    display: block; }\n  .carousel-control-next {\n    right: 0% !important; }\n  .center {\n    text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiamdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9wc2VsbGluZ1xcdG9wc2VsbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVyxFQUFBOztBQUViO0VBRUksZUFBZSxFQUFBOztBQUVuQjtFQUVDLFVBQVM7RUFDVCxZQUFZLEVBQUE7O0FBRWI7RUFFQyxVQUFTLEVBQUE7O0FBU1Y7RUFFRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVuQjtFQUVFLG9CQUFtQixFQUFBOztBQUlyQjtFQUVJLHdCQUF3QixFQUFBOztBQUU1QjtFQUVJLHlCQUF5QixFQUFBOztBQUc3QjtFQUVHLGVBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTdCO0VBRUcsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFXO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRW5CO0VBRUksV0FBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsK0JBQStCLEVBQUE7O0FBRW5DO0VBRUksVUFBUyxFQUFBOztBQUdiO0VBRUksY0FBYTtFQUNiLCtCQUErQjtFQUMvQixlQUFlLEVBQUE7O0FBRW5CO0VBRUksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFhO0VBQ2IsZUFBZTtFQUNmLDJCQUEwQixFQUFBOztBQUU5QjtFQUVJLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdDQUFnQyxFQUFBOztBQUdwQztFQUVJLGNBQWEsRUFBQTs7QUFHakI7RUFFSSxhQUFZLEVBQUE7O0FBSWhCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0k7SUFDSSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRWQ7SUFHQyxXQUFXLEVBQUE7RUFFWjtJQUdNLGdCQUFnQixFQUFBLEVBRXJCOztBQUdMO0VBQ0E7SUFFSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBRWhCO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFFQyxVQUFTO0lBQ1QsV0FBVyxFQUFBLEVBQ1g7O0FBRUE7RUFDRztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7RUFFdEI7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUNKO09BREksaUJBQ0osRUFBQTtFQUNBO0lBRUksZUFBZSxFQUFBO0VBRW5CO0lBRUksZUFBZSxFQUFBO0VBRW5CO0lBRUksZUFBZSxFQUFBO0VBRW5CO0lBRUksYUFBWSxFQUFBO0VBRWhCO0lBRUksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksb0JBQW9CLEVBQUE7RUFFeEI7SUFFSSxrQkFDSixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvcHNlbGxpbmcvdG9wc2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICByaWdodDogLTEwJTtcclxuICB9XHJcbiAgLmluZGlJbWc6aG92ZXJcclxuICB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI3ByZXZidXQxXHJcbiAge1xyXG4gICBvcGFjaXR5OjA7XHJcbiAgIGxlZnQ6IC0xMHJlbTtcclxuICB9XHJcbiAgI3ByZXZidXQyXHJcbiAge1xyXG4gICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIFxyXG4vLyAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbixcclxuLy8gICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuLy8gICAgIHBhZGRpbmc6OHB4O1xyXG4vLyAgIH1cclxuICAuZmxleGl0ZW1cclxuICB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcbiAgLmNhcm91c2VsLWlubmVyXHJcbiAge1xyXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB9XHJcbiBcclxuXHJcbiAgLmxlZnRcclxuICB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gIH1cclxuICAucmlnaHRcclxuICB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuICB9XHJcblxyXG4gIC5pbmRpSW1nXHJcbiB7XHJcbiAgICAgbWFyZ2luOjRlbSAyZW07XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiB9XHJcbiAucHJvZHVjdHNMaXN0c1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoyMGVtO1xyXG59XHJcblxyXG4ucHJvZHVjdGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiB9XHJcbi5wcm9uYW1lXHJcbntcclxuICAgIGNvbG9yOiM0NDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXJSJywndGFtaWxmJztcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2XHJcbntcclxuICAgIG9wYWNpdHk6MDtcclxufVxyXG5cclxuLnByb2NvZGVcclxue1xyXG4gICAgY29sb3I6Izg4ODg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnYXZlbmlyUicsJ3RhbWlsZic7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnpvb21idXRcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjojNjY2NjY2O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6J29wQicsJ3RhbWlsZic7XHJcbn1cclxuLm5leHRDYXJvXHJcbntcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjYjZiNmI2O1xyXG59XHJcblxyXG4jZGVtbzFcclxue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuI2RlbW8yXHJcbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgIHJpZ2h0OiAtOCU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAucHJvZHVjdGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgICNwcmV2YnV0MVxyXG4gICAge1xyXG4gICAgXHJcbiAgICAgbGVmdDogLTdyZW07XHJcbiAgICB9XHJcbiAgICAuaW5kaUltZ1xyXG4gICAge1xyXG4gICAgICAgXHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuLnByb2R1Y3RpbWdcclxue1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbn1cclxuLmluZGlJbWcge1xyXG4gICAgbWFyZ2luOiA0ZW0gMGVtO1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICAgcmlnaHQ6IC01JTtcclxufVxyXG4jcHJldmJ1dDFcclxue1xyXG4gb3BhY2l0eTowO1xyXG4gbGVmdDogLTRyZW07XHJcbn1cclxufVxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5pbmRpSW1nXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH0gIFxyXG4gICAgLnByb2R1Y3RpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDc3JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlclxyXG4gICAgfVxyXG4gICAgLnpvb21idXRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvY29kZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5wcm9uYW1lXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgI2RlbW8xXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgI2RlbW8yXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgICAgICByaWdodDogMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jZW50ZXJcclxuICAgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.ts ***!
  \***************************************************************/
/*! exports provided: TopsellingComponent, TopSellingDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsellingComponent", function() { return TopsellingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSellingDialog", function() { return TopSellingDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");







var TopsellingComponent = /** @class */ (function () {
    function TopsellingComponent(ts, sh, route, router, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.imgsrc = [
            {
                "imgsrc": "../../../assets/images/bangles/bangles1.jpg",
                "name": "Bangles name 1",
                "code": "SBJBA001",
                "category": "Bangles",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/bangles/bangles3.jpg",
                "name": "Bangles name 3",
                "code": "SBJBA003",
                "category": "Bangles",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/earrings/earrings1.jpg",
                "name": "Earrings name 1",
                "code": "SBJER001",
                "category": "Earrings",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/maalai/maalai4.jpg",
                "name": "Maalai name 4",
                "code": "SBJMA004",
                "category": "Maalai",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/maalai/maalai9.jpg",
                "name": "Maalai name 9",
                "code": "SBJMA009",
                "category": "Maalai",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/necklace/necklace2.jpg",
                "name": "Necklace name 2",
                "code": "SBJNC002",
                "category": "Necklace",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/necklace/necklace3.jpg",
                "name": "Necklace name 3",
                "code": "SBJNC003",
                "category": "Necklace",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/necklace/necklace7.jpg",
                "name": "Necklace name 7",
                "code": "SBJNC007",
                "category": "Necklace",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/necklace/necklace12.jpg",
                "name": "Necklace name 12",
                "code": "SBJNC012",
                "category": "Necklace",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/rings/rings3.jpg",
                "name": "Ring name 3",
                "code": "SBJRN003",
                "category": "Rings",
                "collection": ["men"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/bangles/bangles1.jpg",
                "name": "Bangles name 1",
                "code": "SBJBA001",
                "category": "Bangles",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
            {
                "imgsrc": "../../../assets/images/bangles/bangles3.jpg",
                "name": "Bangles name 3",
                "code": "SBJBA003",
                "category": "Bangles",
                "collection": ["marriage", "women"],
                "metal": "Gold"
            },
        ];
    }
    TopsellingComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.step1 = 0;
        this.step2 = 0;
        aos__WEBPACK_IMPORTED_MODULE_5__["init"]({
            duration: 1200
        });
    };
    TopsellingComponent.prototype.show1 = function () {
        document.getElementById("prevbut1").style.opacity = "1";
        document.getElementById("nextbut1").style.opacity = "1";
    };
    TopsellingComponent.prototype.show2 = function () {
        document.getElementById("prevbut2").style.opacity = "1";
        document.getElementById("nextbut1").style.opacity = "1";
    };
    TopsellingComponent.prototype.showprev1 = function () {
        this.show1();
        ++this.step1;
        document.getElementById("prevbut1").style.opacity = "1";
        if (this.step1 == 3) {
            document.getElementById("nextbut1").style.opacity = "0";
        }
        else {
            document.getElementById("nextbut1").style.opacity = "1";
        }
    };
    TopsellingComponent.prototype.hideprev1 = function () {
        this.show1();
        --this.step1;
        if (this.step1 == 0) {
            document.getElementById("prevbut1").style.opacity = "0";
        }
        else {
            document.getElementById("prevbut1").style.opacity = "1";
        }
    };
    TopsellingComponent.prototype.showprev2 = function () {
        this.show2();
        ++this.step2;
        document.getElementById("prevbut2").style.opacity = "1";
        if (this.step2 == 7) {
            document.getElementById("nextbut2").style.opacity = "0";
        }
        else {
            document.getElementById("nextbut2").style.opacity = "1";
        }
    };
    TopsellingComponent.prototype.hideprev2 = function () {
        this.show2();
        --this.step2;
        if (this.step2 == 0) {
            document.getElementById("prevbut2").style.opacity = "0";
        }
        else {
            document.getElementById("nextbut2").style.opacity = "1";
        }
    };
    TopsellingComponent.prototype.openDialog = function (item) {
        // console.log(item.imgsrc);
        this.dialog.open(TopSellingDialog, {
            data: {
                url: item.imgsrc,
                name: item.name,
                code: item.code
            },
            height: 'auto',
            width: '95vh'
        });
    };
    TopsellingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topselling',
            template: __webpack_require__(/*! ./topselling.component.html */ "./src/app/components/topselling/topselling.component.html"),
            styles: [__webpack_require__(/*! ./topselling.component.scss */ "./src/app/components/topselling/topselling.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], TopsellingComponent);
    return TopsellingComponent;
}());

var TopSellingDialog = /** @class */ (function () {
    function TopSellingDialog(data) {
        this.data = data;
    }
    TopSellingDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example-dialog.html */ "./src/app/components/topselling/dialog-data-example-dialog.html"),
            styles: [__webpack_require__(/*! ./dialogcss.scss */ "./src/app/components/topselling/dialogcss.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TopSellingDialog);
    return TopSellingDialog;
}());



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


// import { CommonModule } from '@angular/common';
//import { DragDropModule } from '@angular/cdk/drag-drop';




























var MaterialModuleModule = /** @class */ (function () {
    function MaterialModuleModule() {
    }
    MaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                // CommonModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                //NgxSpinnerModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"]
            ],
            exports: [
                // CommonModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                //Ng5SliderModule,
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                //NgxSpinnerModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MaterialModuleModule);
    return MaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService, Price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.url = "https://sbjbackend.herokuapp.com/getValue";
        this.seturl = "https://sbjbackend.herokuapp.com/setValue";
    }
    SharedService.prototype.getValue = function () {
        return this.value;
    };
    SharedService.prototype.setValue = function (data) {
        this.value = data;
    };
    SharedService.prototype.getPrices = function () {
        return this.http.get(this.url);
    };
    SharedService.prototype.setPrices = function (price) {
        return this.http.post(this.seturl, price);
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SharedService);
    return SharedService;
}());

var Price = /** @class */ (function () {
    function Price() {
        this.goldprice = 0;
        this.silverprice = 0;
    }
    return Price;
}());



/***/ }),

/***/ "./src/app/services/translate/translate.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/translate/translate.service.ts ***!
  \*********************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_vocabulary_vocabulary_ta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vocabulary/vocabulary-ta */ "./src/app/vocabulary/vocabulary-ta.ts");
/* harmony import */ var src_app_vocabulary_vocabulary_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/vocabulary/vocabulary-en */ "./src/app/vocabulary/vocabulary-en.ts");




var TranslateService = /** @class */ (function () {
    function TranslateService() {
    }
    // _comp1ValueBS = new BehaviorSubject<string>('');
    TranslateService.prototype.updateComp1Val = function (val) {
        window.sessionStorage.setItem('lang', val);
    };
    TranslateService.prototype.translate = function (key) {
        if (window.sessionStorage.getItem('lang') === 'LA-EN') {
            return src_app_vocabulary_vocabulary_en__WEBPACK_IMPORTED_MODULE_3__["VOCAB_EN"][key];
        }
        else if (window.sessionStorage.getItem('lang') === 'LA-TA') {
            return src_app_vocabulary_vocabulary_ta__WEBPACK_IMPORTED_MODULE_2__["VOCAB_TA"][key];
        }
        else {
            window.sessionStorage.setItem('lang', 'LA-EN');
            this.translate(key);
        }
    };
    TranslateService.comp1Val = 'EN';
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/vocabulary/vocabulary-en.ts":
/*!*********************************************!*\
  !*** ./src/app/vocabulary/vocabulary-en.ts ***!
  \*********************************************/
/*! exports provided: VOCAB_EN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCAB_EN", function() { return VOCAB_EN; });
var VOCAB_EN = {
    products: 'Products',
    collections: 'Collections',
    goldschemes: 'Gold Schemes',
    aboutus: 'About Us',
    contactus: 'Contact Us',
    our: 'our',
    wedding: 'wedding',
    men: 'men',
    women: 'women',
    kids: 'kids',
    gifts: 'gifts',
    gold: 'gold',
    diamond: 'diamond',
    silver: 'silver',
    promises: 'Promises',
    top: 'top',
    sellingjewels: 'selling jewels',
    whatpeople: 'What People',
    talkaboutus: 'talk about us',
    talktous: 'talk to us',
    todaysrate: 'Today\'s Rate',
    findyourjewels: 'find your jewels',
    necklace: 'necklace',
    allproducts: 'all products',
    maalai: 'maalai',
    bangles: 'bangles',
    chains: 'chains',
    earrings: 'earrings',
    rings: 'rings',
    bracelet: 'bracelet',
    stud: 'stud',
    Maalai: 'maalai',
    Bangles: 'bangles',
    Chains: 'chains',
    Earrings: 'earrings',
    Rings: 'rings',
    Bracelet: 'bracelet',
    Necklace: 'necklace',
    Stud: 'stud',
    Dollar: 'dollar',
    Anklet: 'anklet',
    Gifts: 'gifts',
    //have to translate
    goldsavingscheme: 'gold saving scheme',
    goldschemedata: 'Investing in gold has never been easier, SBJ Gold scheme is a special scheme that helps you to plan and buy your own dream jewellery as well as maintaining your healthy financial stability. We have two options specially designed to suit your individual levels of saving at your own pace. You will also be rewarded with a special prize when you subscribe to one of our gold schemes.',
    flexischemeHead: 'FLEXIBLE MONEY SCHEME',
    flexip1: 'Under this scheme, You will be able to invest money, which will be credited as cash in your account and the premium by the end of 11th month, will be provided to you with a month bonus.',
    flexip2: 'The current gold cost on the day of purchase will be taken into account when we buy gold with this gold scheme. The gold you purchase will be subject to gold making and wastage charge*.',
    flexip3: 'Note: Under this scheme, you won\'t be able to withdraw the premium as cash, the money which is available in your account only be used to buy gold based on that particular day gold rate',
    downloadhere: 'Download Brochure',
    happyGoldHead: 'HAPPY GOLD SCHEME',
    happyGold1: 'With this scheme, Your money will be invested at the current gold rate and will be accumlated as gold weight rather than cash in your account. ',
    happyGold2: 'By the end of the 11th month, you will be able to buy gold corresponding to the accumulated weight without any making and wastage charges*.',
    happyGold3: '*- Taxes Apply at 3% ',
    termshead: 'Terms and Conditions',
    termsbody1: 'The premium due amount can be paid on any day of the month.',
    termsbody2: 'The savings tenure is 11 months only.',
    termsbody3: 'The premium amount can also be paid through NEFT ( Bank account details are given below )',
    termsbody4: 'while depositing the premium amount though NEFT , do not forget to mention the customer identification number as well as the name of the customer with whom the gold scheme is registered.',
    termsbody5: 'After depositing the amount through bank , kinldy call our customer call number and inform them regarding the transfer.',
    termsbody6: 'The gold scheme once registered is not transferable and the entire gold scheme package cannot be transfered to the other person.',
    termsbody7: 'The gold scheme cannot be closed before the tenure. kinldy bring the gold scheme card while depositing the premium amount directly through cash.',
    termsbody8: 'The premium due amount can be paid on any day of the month. kindly bring the customer registration card when buying the gold corresponding to the premium amount After the tenure completes.',
    termsbody9: 'All the " Happy Gold " customers will be able to buy the gold coressponding to the premium amount with any gold making and wastage charge.',
    termsbody10: 'Taxes Application ( Current GST 3 % ).',
    termsbody11: ' The store has the full privilege to modify / change the above terms and conditions.',
    locations: 'locations',
    storename1: 'Sri Balagopalan Jewellery Mart',
    goldstore: 'Gold Store',
    address: 'Address',
    addressbody1: "No.2, Jansi Rani Complex ,\n YMCA Building Opposite, Madurai \u2013 625 001.",
    buisnesshours: 'Buisness Hours',
    buisnesshoursbody1: 'Every Day 9AM - 9PM',
    phonenumber: 'Phone Number',
    phonenumberbody1: '+91-99949-26518',
    phonebody1: '9994926518',
    phonenumberbody2: '+91-452-2346518',
    silverstore: 'Exclusive Store for Silver',
    addressbody2: '218, West Masi Street Madurai-625001',
    phonenumberbody3: '+91-99949-26518',
    phonenumberbody4: '+91-452-2346518',
    get: 'Get',
    intouch: 'in touch',
    fullname: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    enter: 'Enter Your ',
    send: 'Send ',
    connect: 'Connect',
    withus: 'with us',
    allcollections: 'All Collections',
    marriage: 'wedding',
    story: 'story',
    aboutusdata1: 'In 1992, Sri Balagopalan Jewellery Mart has been inaugrated in Small Scale by S.B.Senthilkumar . Each and everyone feel elite on shopping with us in quality, design, price and service . Quality for the end consumer is key priority for us and we are comitted to fulfill our promises!!!',
    Gold: 'gold',
    Diamond: 'diamond',
    Silver: 'silver',
    talktoushome: 'Have questions about our exquisite jewellery collections and can\'t decide what suits your taste! Look no further',
    talktousgold: 'Confused with the gold collection you are looking at? Leave it to us',
    talktousdiamond: 'Confused with the Diamond collection you are looking at? Leave it to us',
    talktoussilver: 'Confused with the Silver collection you are looking at? Leave it to us',
    talktousproduct: 'Can\'t decide between our products? We\'ll make sure that is not a problem, reach out to us',
    talktouscollection: 'Not convinced of our displayed collection here? This is just a tip of iceberg with our collections available at our store, contact us for more info ',
    talktousgoldscheme: ' Not planning to buy gold yet? Invest in our gold scheme to make the most out of your saving. ',
    promise1: 'Certified Pure Gold',
    promise2: 'All Jewels are brand new',
    promise3: 'Transparency in pricing',
    promise4: 'Secure Gold Scheme',
    dollar: 'dollar',
    anklet: 'anklet',
    noproductsfound: 'No Products Found',
    fillallfields: 'Please fill all the fields',
    close: 'close',
};


/***/ }),

/***/ "./src/app/vocabulary/vocabulary-ta.ts":
/*!*********************************************!*\
  !*** ./src/app/vocabulary/vocabulary-ta.ts ***!
  \*********************************************/
/*! exports provided: VOCAB_TA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCAB_TA", function() { return VOCAB_TA; });
var VOCAB_TA = {
    products: 'நகைகள்',
    collections: 'வகைகள்',
    goldschemes: 'தங்க திட்டங்கள்',
    aboutus: 'எங்களை பற்றி',
    contactus: 'தொடர்பு கொள்ள',
    our: 'நமது',
    wedding: 'திருமணம்',
    men: 'ஆண்கள்',
    women: 'பெண்கள்',
    kids: 'குழந்தைகள்',
    gifts: 'பரிசுகள்',
    gold: 'தங்கம்',
    diamond: 'வைரம்',
    silver: 'வெள்ளி',
    promises: 'வாக்குறுதிகள்',
    top: 'அதிக ',
    sellingjewels: 'விற்பனையான நகைகள்',
    whatpeople: 'மக்கள் எங்களைப்',
    talkaboutus: 'பற்றி என்ன நினைக்கிறார்கள்',
    talktous: 'எங்களுடன் பேசுங்கள்',
    todaysrate: 'இன்றைய விலை',
    findyourjewels: 'உங்கள் நகைகளைக் கண்டுபிடி',
    necklace: 'நெக்லஸ்',
    allproducts: 'அனைத்து நகைகள்',
    maalai: 'மாலை ',
    bangles: 'வளையல்கள்',
    chains: 'செய்ன்ஸ்',
    earrings: 'காதணிகள்',
    rings: 'மோதிரங்கள்',
    bracelet: 'ப்ராஸ்லெட் ',
    stud: 'ஸ்டட்',
    Maalai: 'மாலை',
    Bangles: 'வளையல்கள்',
    Chains: 'செய்ன்ஸ்',
    Earrings: 'காதணிகள்',
    Rings: 'மோதிரங்கள்',
    Bracelet: 'ப்ராஸ்லெட்',
    Necklace: 'நெக்லஸ்',
    Stud: 'ஸ்டட்',
    Dollar: 'டாலர்',
    Anklet: 'கணுக்கால்',
    Gifts: 'பரிசுகள்',
    goldsavingscheme: 'தங்க சேமிப்பு திட்டம்',
    goldschemedata: 'தங்கத்தில் முதலீடு செய்வது ஒருபோதும் எளிதானது அல்ல, எஸ்.பி.ஜே தங்கத் திட்டம் என்பது உங்கள் சொந்த கனவு நகைகளைத் திட்டமிட்டு வாங்கவும், உங்கள் ஆரோக்கியமான நிதி ஸ்திரத்தன்மையை பராமரிக்கவும் உதவும் ஒரு சிறப்புத் திட்டமாகும். உங்கள் சொந்த வேகத்தில் சேமிப்பதற்கான உங்கள் தனிப்பட்ட நிலைகளுக்கு ஏற்ப சிறப்பாக வடிவமைக்கப்பட்ட இரண்டு விருப்பங்கள் எங்களிடம் உள்ளன. எங்கள் தங்கத் திட்டங்களில் ஒன்றை நீங்கள் சேரும்போது உங்களுக்கு சிறப்பு பரிசு வழங்கப்படும்.',
    flexischemeHead: 'நெகிழ்வான பணத் திட்டம்',
    flexip1: 'இந்த திட்டத்தின் கீழ், நீங்கள் பணத்தை முதலீடு செய்ய முடியும், இது உங்கள் கணக்கில் ரொக்கமாக வரவு வைக்கப்படும் மற்றும் 11 வது மாத இறுதிக்குள் பிரீமியம் உங்களுக்கு ஒரு மாத போனஸ் வழங்கப்படும்.',
    flexip2: 'இந்த தங்கத் திட்டத்துடன் தங்கத்தை வாங்கும்போது வாங்கும் நாளில் தற்போதைய தங்க செலவு கணக்கில் எடுத்துக்கொள்ளப்படும். நீங்கள் வாங்கும் தங்கம் செய்கூலி மற்றும் சேதாரம் உட்பட்டதாக இருக்கும் *.',
    flexip3: 'குறிப்பு: இந்த திட்டத்தின் கீழ், நீங்கள் பிரீமியத்தை பணமாக திரும்பப் பெற முடியாது, உங்கள் கணக்கில் கிடைக்கும் பணம் அந்த குறிப்பிட்ட நாள் தங்க வீதத்தின் அடிப்படையில் தங்கத்தை வாங்க மட்டுமே பயன்படும்',
    downloadhere: 'சிற்றேட்டைப் பதிவிறக்கவும்',
    happyGoldHead: 'ஹாபி கோல்டு திட்டம்',
    happyGold1: 'இந்த திட்டத்தின் மூலம், உங்கள் பணம் தற்போதைய தங்க விகிதத்தில் முதலீடு செய்யப்படும், மேலும் உங்கள் கணக்கில் உள்ள பணத்தை விட தங்க எடையாக குவிக்கப்படும்.',
    happyGold2: '11 வது மாத இறுதிக்குள், திரட்டப்பட்ட எடையுடன் தொடர்புடைய தங்கத்தை எந்தவொரு தயாரிப்பும் வீணான கட்டணமும் இல்லாமல் வாங்க முடியும் *.',
    happyGold3: '* - 3% வரி பொருந்தும்',
    termshead: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
    termsbody1: 'பிரீமியம் செலுத்த வேண்டிய தொகையை மாதத்தின் எந்த நாளிலும் செலுத்தலாம்.',
    termsbody2: 'சேமிப்பு காலம் 11 மாதங்கள் மட்டுமே.',
    termsbody3: 'பிரீமியம் தொகையை NEFT மூலமாகவும் செலுத்தலாம் (வங்கி கணக்கு விவரங்கள் கீழே கொடுக்கப்பட்டுள்ளன)',
    termsbody4: 'பிரீமியம் தொகையை NEFT என்றாலும் டெபாசிட் செய்யும் போது, ​​வாடிக்கையாளர் அடையாள எண் மற்றும் தங்கத் திட்டம் பதிவுசெய்யப்பட்ட வாடிக்கையாளரின் பெயரைக் குறிப்பிட மறக்காதீர்கள்.',
    termsbody5: 'வங்கியின் மூலம் தொகையை டெபாசிட் செய்த பிறகு, எங்கள் வாடிக்கையாளர் அழைப்பு எண்ணை அழைத்து பரிமாற்றம் குறித்து அவர்களுக்குத் தெரிவிக்கவும்.',
    termsbody6: 'ஒருமுறை பதிவுசெய்யப்பட்ட தங்கத் திட்டம் மாற்றத்தக்கது அல்ல, முழு தங்கத் திட்ட தொகுப்பையும் மற்ற நபருக்கு மாற்ற முடியாது.',
    termsbody7: 'தங்கத் திட்டத்தை பதவிக்காலத்திற்கு முன்பு மூட முடியாது. பிரீமியம் தொகையை நேரடியாக பணத்தின் மூலம் டெபாசிட் செய்யும் போது தங்க திட்ட அட்டையை கொண்டு வரவும்.',
    termsbody8: 'பிரீமியம் செலுத்த வேண்டிய தொகையை மாதத்தின் எந்த நாளிலும் செலுத்தலாம். பிரீமியம் தொகைக்கு ஒத்த தங்கத்தை வாங்கும் போது வாடிக்கையாளர் பதிவு அட்டையை தயவுசெய்து கொண்டு வாருங்கள்.',
    termsbody9: 'அனைத்து "ஹேப்பி கோல்ட்" வாடிக்கையாளர்களும் எந்தவொரு தங்க தயாரித்தல் மற்றும் வீணான கட்டணத்துடன் பிரீமியம் தொகைக்கு தங்க கோர்ஸ்பாண்டிங் வாங்க முடியும்.',
    termsbody10: 'வரி விண்ணப்பம் (தற்போதைய ஜிஎஸ்டி 3%).',
    termsbody11: ' மேற்கண்ட விதிமுறைகளையும் நிபந்தனைகளையும் மாற்ற / மாற்றுவதற்கான முழு சலுகை கடைக்கு உள்ளது.',
    locations: 'இடங்கள்',
    storename1: 'ஸ்ரீ பாலகோபாலன் ஜூவல்லரி மார்ட்',
    goldstore: 'தங்க கடை',
    address: 'முகவரி',
    addressbody1: 'எண் 2, ஜான்சி ராணி வளாகம், ஒய்.எம்.சி.ஏ கட்டிடம் எதிரே, மதுரை - 625 001.',
    buisnesshours: 'வேலை நேரம்',
    buisnesshoursbody1: 'ஒவ்வொரு நாளும் 9AM - 9PM',
    phonenumber: 'தொலைபேசி எண்',
    phonenumberbody1: '+91-99949-26518',
    phonebody1: '9994926518',
    phonenumberbody2: '+91-452-2346518',
    silverstore: 'வெள்ளி கடை',
    addressbody2: '218, மேற்கு மாசி தெரு மதுரை -625001',
    phonenumberbody3: '+91-99949-26518',
    phonenumberbody4: '+91-452-2346518',
    get: '',
    intouch: 'தொடர்பில் இருங்கள்',
    fullname: 'முழு பெயர்',
    email: 'மின்னஞ்சல்',
    subject: 'பொருள்',
    message: 'செய்தி',
    enter: 'உள்ளிடவும்',
    send: 'அனுப்புக ',
    connect: 'எங்களை',
    withus: 'தொடர்பு கொள்ளுங்கள்',
    allcollections: 'அனைத்து வகைகளும்',
    marriage: 'திருமணம்',
    story: 'கதை',
    aboutusdata1: '1992 ஆம் ஆண்டில், ஸ்ரீ பாலகோபாலன் ஜூவல்லரி மார்ட் சிறிய அளவில் எஸ்.பி.செந்தில்குமாரால் திறக்கப்பட்டது. தரம், வடிவமைப்பு, விலை மற்றும் சேவையில் எங்களுடன் ஷாப்பிங் செய்வதில் ஒவ்வொருவரும் உயரடுக்காக உணர்கிறார்கள். இறுதி நுகர்வோருக்கான தரம் எங்களுக்கு முக்கிய முன்னுரிமை மற்றும் எங்கள் வாக்குறுதிகளை நிறைவேற்ற நாங்கள் தயாராக இருக்கிறோம் !!!',
    Gold: 'தங்கம்',
    Diamond: 'வைரம்',
    Silver: 'வெள்ளி',
    talktoushome: 'எங்கள் நேர்த்தியான நகை சேகரிப்புகள் குறித்து கேள்விகள் வைத்திருங்கள், உங்கள் சுவைக்கு எது பொருத்தமானது என்பதை தீர்மானிக்க முடியாது! மேலும் பார்க்க வேண்டாம்',
    talktousgold: 'நீங்கள் பார்க்கும் தங்க சேகரிப்பில் குழப்பமா? அதை எங்களிடம் விட்டு விடுங்கள்',
    talktousdiamond: 'நீங்கள் பார்க்கும் வைர சேகரிப்பில் குழப்பமா? அதை எங்களிடம் விட்டு விடுங்கள்',
    talktoussilver: 'நீங்கள் பார்க்கும் வெள்ளி சேகரிப்பில் குழப்பமா? அதை எங்களிடம் விட்டு விடுங்கள்',
    talktousproduct: 'எங்கள் தயாரிப்புகளுக்கு இடையில் முடிவு செய்ய முடியவில்லையா? அது ஒரு பிரச்சினை அல்ல என்பதை நாங்கள் உறுதி செய்வோம், எங்களை அணுகவும்',
    talktouscollection: 'எங்கள் காட்சிப்படுத்தப்பட்ட தொகுப்பை இங்கே நம்பவில்லையா? இது எங்கள் கடையில் கிடைக்கும் சேகரிப்புகளுடன் கூடிய பனிப்பாறையின் ஒரு முனை மட்டுமே, மேலும் தகவலுக்கு எங்களை தொடர்பு கொள்ளவும்',
    talktousgoldscheme: ' இன்னும் தங்கம் வாங்கத் திட்டமிடவில்லையா? உங்கள் சேமிப்பிலிருந்து அதிகமானதைப் பெற எங்கள் தங்கத் திட்டத்தில் முதலீடு செய்யுங்கள்.',
    promise1: 'சான்றளிக்கப்பட்ட தூய தங்கம்',
    promise2: 'அனைத்து நகைகளும் புத்தம் புதியவை',
    promise3: 'விலையில் வெளிப்படைத்தன்மை',
    promise4: 'பாதுகாப்பான தங்கத் திட்டம்',
    dollar: 'டாலர்',
    anklet: 'கணுக்கால்',
    noproductsfound: 'எதுவும் கிடைக்கவில்லை',
    fillallfields: 'அனைத்து விவரங்களையும் நிரப்பவும',
    close: 'மூடு',
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\gowtham\SBJ\sbjgit\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map