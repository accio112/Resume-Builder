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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _user_resume_resume_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/resume/resume.component */ "./src/app/user/resume/resume.component.ts");
/* harmony import */ var _user_template_template_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/template/template.component */ "./src/app/user/template/template.component.ts");
/* harmony import */ var _select_template_select_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./select-template/select-template.component */ "./src/app/select-template/select-template.component.ts");
/* harmony import */ var _user_template2_template2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/template2/template2.component */ "./src/app/user/template2/template2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// built-in







// components



//routes




//other






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                _user_resume_resume_component__WEBPACK_IMPORTED_MODULE_15__["ResumeComponent"],
                _user_template_template_component__WEBPACK_IMPORTED_MODULE_16__["TemplateComponent"],
                _select_template_select_template_component__WEBPACK_IMPORTED_MODULE_17__["SelectTemplateComponent"],
                _user_template2_template2_component__WEBPACK_IMPORTED_MODULE_18__["Template2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_9__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true
                }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _shared_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/resume/resume.component */ "./src/app/user/resume/resume.component.ts");
/* harmony import */ var _user_template_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/template/template.component */ "./src/app/user/template/template.component.ts");
/* harmony import */ var _user_template2_template2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/template2/template2.component */ "./src/app/user/template2/template2.component.ts");
/* harmony import */ var _select_template_select_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-template/select-template.component */ "./src/app/select-template/select-template.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");









var appRoutes = [
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] }]
    },
    {
        path: 'userprofile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'resume', component: _user_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"]
    },
    {
        path: 'template', component: _user_template_template_component__WEBPACK_IMPORTED_MODULE_5__["TemplateComponent"]
    },
    {
        path: 'select-template', component: _select_template_select_template_component__WEBPACK_IMPORTED_MODULE_7__["SelectTemplateComponent"]
    },
    {
        path: 'template2', component: _user_template2_template2_component__WEBPACK_IMPORTED_MODULE_6__["Template2Component"]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/select-template/select-template.component.css":
/*!***************************************************************!*\
  !*** ./src/app/select-template/select-template.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC10ZW1wbGF0ZS9zZWxlY3QtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/select-template/select-template.component.html":
/*!****************************************************************!*\
  !*** ./src/app/select-template/select-template.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 1%\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 flex-center\">\r\n      <img src=\"../../assets/img/template-1.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-md-6 flex-center\">\r\n      <img src=\"../../assets/img/template-2.jpg\" alt=\"\" style=\"width: 100%\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 flex-center\"> <button (click)=\"template1()\" rounded=\"true\" class=\" my-4 waves-effect z-depth-0 btn-lg blue-gradient btn-block col-md-8 flex-center\" mdbWavesEffect>Select</button> </div>\r\n    <div class=\"col-md-6 flex-center\"> <button (click)=\"template2()\" rounded=\"true\" class=\" my-4 waves-effect z-depth-0 btn-lg blue-gradient btn-block col-md-8 flex-center\" mdbWavesEffect>Select</button> </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/select-template/select-template.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/select-template/select-template.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTemplateComponent", function() { return SelectTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectTemplateComponent = /** @class */ (function () {
    function SelectTemplateComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
    }
    SelectTemplateComponent.prototype.ngOnInit = function () {
    };
    SelectTemplateComponent.prototype.template1 = function () {
        this.router.navigate(['/template']);
    };
    SelectTemplateComponent.prototype.template2 = function () {
        this.router.navigate(['/template2']);
    };
    SelectTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-template',
            template: __webpack_require__(/*! ./select-template.component.html */ "./src/app/select-template/select-template.component.html"),
            styles: [__webpack_require__(/*! ./select-template.component.css */ "./src/app/select-template/select-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SelectTemplateComponent);
    return SelectTemplateComponent;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            fullName: '',
            email: '',
            password: '',
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    //HttpMethods
    UserService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/register', user, this.noAuthHeader);
    };
    UserService.prototype.postDetails = function (user) {
        var new_user = { user: user, id: localStorage.getItem('id') };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/saveDetails', new_user, this.noAuthHeader);
    };
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/userProfile');
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"userDetails\" class=\"table-fill\">\r\n  <thead>\r\n      <tr>\r\n          <th colspan=\"2\" class=\"text-center\">User Profile</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr>\r\n          <td>First Name</td>\r\n          <td>{{userDetails.fullName.split(' ')[0]}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Last Name</td>\r\n          <td>{{userDetails.fullName.split(' ')[1]}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Email</td>\r\n          <td>{{userDetails.email}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td colspan=\"2\" class=\"text-center\">\r\n              <input type=\"button\" (click)=\"onLogout()\" value=\"Logout\" />\r\n              <input type=\"button\" (click)=\"buildResume()\" value=\"Build Resume\" />\r\n              <!--<input type=\"button\" (click)=\"selectTemplate()\" value=\"Template\" />-->\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
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



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            localStorage.setItem('id', res['id']);
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.onLogout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    };
    UserProfileComponent.prototype.buildResume = function () {
        console.log("resume clicked" + this.userDetails);
        this.router.navigate(['/resume']);
    };
    UserProfileComponent.prototype.selectTemplate = function () {
        this.router.navigate(['/template']);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/resume/resume.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/resume/resume.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  margin-top: 2%;\r\n  /*background-color: black !important;*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jYXJkIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/resume/resume.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/resume/resume.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Material form login -->\r\n<div class=\"my-card\" >\r\n<mdb-card >\r\n\r\n  <mdb-card-header class=\"info-color white-text text-center py-4\">\r\n    <h1>\r\n      <strong>Resume</strong>\r\n    </h1>\r\n    <p style=\"opacity: 0.5\">(If saved already, go to select template)</p>\r\n  </mdb-card-header>\r\n\r\n\r\n  <!--Card content-->\r\n  <mdb-card-body class=\"px-lg-5 pt-0\">\r\n\r\n    <!-- Form -->\r\n    <form class=\"text-center\" style=\"color: #757575;\" [formGroup]=\"profileForm\" >\r\n\r\n      <!-- Name -->\r\n      <div class=\"form-group\">\r\n        <h3>Name</h3>\r\n        <div class=\"row\">\r\n        <div class=\"md-form col\" >\r\n          <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"First Name\" value=\"First Name\" formControlName=\"firstName\" mdbInput>\r\n          <!--<label for=\"materialLoginFormEmail\">First Name</label>-->\r\n        </div>\r\n        <div class=\"md-form col\">\r\n          <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Last Name\" value=\"Last Name\" formControlName=\"lastName\" mdbInput>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Title-->\r\n      <div class=\"form-group\">\r\n        <h3>Title</h3>\r\n        <div class=\"row\">\r\n          <div class=\"md-form col\" >\r\n            <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Web Developer/Data Scientist/etc..\" formControlName=\"title\" mdbInput>\r\n            <!--<label for=\"materialLoginFormEmail\">First Name</label>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Email-->\r\n      <div class=\"form-group\">\r\n        <h3>Email</h3>\r\n        <div class=\"row\">\r\n          <div class=\"md-form col\" >\r\n            <input type=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Email\" value=\"Email\" formControlName=\"email\" mdbInput>\r\n            <!--<label for=\"materialLoginFormEmail\">First Name</label>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Contact-->\r\n      <div class=\"form-group\">\r\n        <h3>Contact</h3>\r\n        <div class=\"row\">\r\n          <div class=\"md-form col\" >\r\n            <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Contact\" value=\"Contact\" formControlName=\"contact\" mdbInput>\r\n            <!--<label for=\"materialLoginFormEmail\">First Name</label>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Summary-->\r\n      <div class=\"form-group\">\r\n        <h3>Summary</h3>\r\n        <div class=\"row\">\r\n          <div class=\"md-form col\" >\r\n            <input type=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Summary\" value=\"Summary\" formControlName=\"summary\" mdbInput>\r\n            <!--<label for=\"materialLoginFormEmail\">First Name</label>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- address -->\r\n      <div class=\"form-group\" formGroupName=\"address\">\r\n        <h3>Address</h3>\r\n        <div class=\"row\">\r\n          <div class=\"md-form col\" >\r\n            <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Street\" value=\"Street\" formControlName=\"street\" mdbInput>\r\n          </div>\r\n          <div class=\"md-form col\">\r\n            <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"City\" value=\"City\" formControlName=\"city\" mdbInput>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"md-form col\" >\r\n            <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"State\" value=\"State\" formControlName=\"state\" mdbInput>\r\n          </div>\r\n          <div class=\"md-form col\">\r\n            <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Pincode\" value=\"Pincode\" formControlName=\"zip\" mdbInput>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div formArrayName=\"aliases\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h3> Skills</h3>\r\n            <button (click)=\"addAlias()\" mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect> Add Skills </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let address of aliases.controls; let i=index\">\r\n          <!-- The repeated alias template -->\r\n          <div class=\"row\">\r\n            <div class=\"md-form col\" >\r\n              <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Skill\" [formControlName]=\"i\" mdbInput>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div formArrayName=\"projects\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h3> Projects</h3>\r\n            <button (click)=\"addProject()\" mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect> Add Projects </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let address of projects.controls; let i=index\">\r\n          <!-- The repeated alias template -->\r\n          <div class=\"row\">\r\n            <div class=\"md-form col\" >\r\n              <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Project\" [formControlName]=\"i\" mdbInput>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div formArrayName=\"achievements\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h3> Achievements</h3>\r\n            <button (click)=\"addAchievement()\" mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect> Add Achievement </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let address of achievements.controls; let i=index\">\r\n          <!-- The repeated alias template -->\r\n          <div class=\"row\">\r\n            <div class=\"md-form col\" >\r\n              <input type=\"text\" id=\"materialLoginFormEmail\" class=\"form-control\" placeholder=\"Achievement\" [formControlName]=\"i\" mdbInput>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Password -->\r\n      <!--<div class=\"md-form\">-->\r\n        <!--<input type=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" mdbInput>-->\r\n        <!--<label for=\"materialLoginFormEmail\">Password</label>-->\r\n      <!--</div>-->\r\n\r\n\r\n      <!-- Sign in button -->\r\n      <!--<button mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect-->\r\n              <!--type=\"submit\">Sign in</button>-->\r\n\r\n\r\n    <!-- Form -->\r\n      <div class=\"col-md-6 float-left\">\r\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n      <button type=\"submit\" [disabled]=\"!profileForm.valid\" rounded=\"true\" class=\" my-4 waves-effect z-depth-0 btn-lg blue-gradient btn-block\" mdbWavesEffect>Save</button>\r\n    </form></div>\r\n      <div class=\"col-md-6 float-right\">\r\n        <button type=\"submit\" rounded=\"true\" (click)=\"chooseTemp()\" class=\"pull-right my-4 waves-effect z-depth-0 btn-lg blue-gradient btn-block\" mdbWavesEffect>Select Template </button>\r\n      </div>\r\n      <!--<input type=\"button\" (click)=\"selectTemplate()\" value=\"Template\" />-->\r\n    </form>\r\n  </mdb-card-body>\r\n\r\n</mdb-card>\r\n</div>\r\n<!-- Material form login -->\r\n"

/***/ }),

/***/ "./src/app/user/resume/resume.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/resume/resume.component.ts ***!
  \*************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.profileForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            summary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: this.fb.group({
                street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            aliases: this.fb.array([
                this.fb.control('')
            ]),
            projects: this.fb.array([
                this.fb.control('')
            ]),
            achievements: this.fb.array([
                this.fb.control('')
            ])
        });
    }
    ;
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            // localStorage.setItem('id', res['id']);
        }, function (err) {
            console.log(err);
        });
    };
    ResumeComponent.prototype.addAlias = function () {
        this.aliases.push(this.fb.control(''));
    };
    ResumeComponent.prototype.addProject = function () {
        this.projects.push(this.fb.control(''));
    };
    ResumeComponent.prototype.addAchievement = function () {
        this.achievements.push(this.fb.control(''));
    };
    Object.defineProperty(ResumeComponent.prototype, "aliases", {
        get: function () {
            return this.profileForm.get('aliases');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResumeComponent.prototype, "projects", {
        get: function () {
            return this.profileForm.get('projects');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResumeComponent.prototype, "achievements", {
        get: function () {
            return this.profileForm.get('achievements');
        },
        enumerable: true,
        configurable: true
    });
    ResumeComponent.prototype.updateName = function () {
        this.name.setValue('Nancy');
    };
    ResumeComponent.prototype.onSubmit = function () {
        var _this = this;
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
        this.userService.postDetails(this.profileForm.value).subscribe(function (res) {
            // this.showSucessMessage = true;
            // setTimeout(() => this.showSucessMessage = false, 4000);
            // this.resetForm(this.profileForm);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        });
        this.router.navigate(['/select-template']);
    };
    ResumeComponent.prototype.updateProfile = function () {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    };
    ResumeComponent.prototype.chooseTemp = function () {
        this.router.navigate(['/select-template']);
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/user/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/user/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <img src=\"assets/img/single_user.png\" id=\"icon\" alt=\"User Icon\" />\r\n  </div>\r\n  <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\r\n    <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\r\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\r\n    <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\r\n      <label class=\"validation-message\">Invalid email address.</label>\r\n    </div>\r\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required minlength=\"4\"\r\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\r\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\r\n      <label class=\"validation-message\">Minimum 4 characters.</label>\r\n    </div>\r\n    <input type=\"submit\" value=\"Sign In\">\r\n  </form>\r\n  <!-- Error message -->\r\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n    {{serverErrorMessages}}\r\n  </div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignInComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn())
            this.router.navigateByUrl('/userprofile');
    };
    SignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/userprofile');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <img src=\"/assets/img/users.png\" id=\"icon\" alt=\"User Icon\" />\r\n</div>\r\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\r\n  <input type=\"text\" #fullName=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"Full Name\"\r\n  required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid }\">\r\n  <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\r\n    <label class=\"validation-message\">This field is required.</label>\r\n  </div>\r\n  <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\r\n  required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\r\n  <div *ngIf=\"signUpForm.submitted && email.errors\">\r\n    <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\r\n    <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\r\n  </div>\r\n  <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\r\n  minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\r\n  <div *ngIf=\"signUpForm.submitted && password.errors\">\r\n    <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\r\n    <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\r\n  </div>\r\n  <input type=\"submit\" value=\"Sign Up\">\r\n</form>\r\n\r\n<!-- Success message -->\r\n<div class=\"success\" *ngIf=\"showSucessMessage\">\r\n  Saved successfully\r\n</div>\r\n\r\n<!-- Error message -->\r\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n  {{serverErrorMessages}}\r\n</div>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.showSucessMessage = true;
            setTimeout(function () { return _this.showSucessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/template/template.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/template/template.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {\r\n  border:0;\r\n  font:inherit;\r\n  font-size:100%;\r\n  margin:0;\r\n  padding:0;\r\n  vertical-align:baseline;\r\n}\r\n\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {\r\n  display:block;\r\n}\r\n\r\nhtml, body {background: #181818; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;}\r\n\r\n.clear {clear: both;}\r\n\r\np {\r\n  font-size: 1em;\r\n  line-height: 1.4em;\r\n  margin-bottom: 20px;\r\n  color: #444;\r\n}\r\n\r\n#cv {\r\n  width: 90%;\r\n  max-width: 800px;\r\n  background: #f3f3f3;\r\n  margin: 30px auto;\r\n}\r\n\r\n.mainDetails {\r\n  padding: 25px 35px;\r\n  border-bottom: 2px solid #cf8a05;\r\n  background: #ededed;\r\n}\r\n\r\n#name h1 {\r\n  font-size: 2.5em;\r\n  font-weight: 700;\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n  margin-bottom: -6px;\r\n}\r\n\r\n#name h2 {\r\n  font-size: 2em;\r\n  margin-left: 2px;\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n#mainArea {\r\n  padding: 0 40px;\r\n}\r\n\r\n#headshot {\r\n  width: 12.5%;\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n#headshot img {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 50px;\r\n}\r\n\r\n#name {\r\n  float: left;\r\n}\r\n\r\n#contactDetails {\r\n  float: right;\r\n}\r\n\r\n#contactDetails ul {\r\n  list-style-type: none;\r\n  font-size: 0.9em;\r\n  margin-top: 2px;\r\n}\r\n\r\n#contactDetails ul li {\r\n  margin-bottom: 3px;\r\n  color: #444;\r\n}\r\n\r\n#contactDetails ul li a, a[href^=tel] {\r\n  color: #444;\r\n  text-decoration: none;\r\n  transition: all .3s ease-in;\r\n}\r\n\r\n#contactDetails ul li a:hover {\r\n  color: #cf8a05;\r\n}\r\n\r\nsection {\r\n  border-top: 1px solid #dedede;\r\n  padding: 20px 0 0;\r\n}\r\n\r\nsection:first-child {\r\n  border-top: 0;\r\n}\r\n\r\nsection:last-child {\r\n  padding: 20px 0 10px;\r\n}\r\n\r\n.sectionTitle {\r\n  float: left;\r\n  width: 25%;\r\n}\r\n\r\n.sectionContent {\r\n  float: right;\r\n  width: 72.5%;\r\n}\r\n\r\n.sectionTitle h1 {\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n  font-style: italic;\r\n  font-size: 1.5em;\r\n  color: #cf8a05;\r\n}\r\n\r\n.sectionContent h2 {\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n  font-size: 1.5em;\r\n  margin-bottom: -2px;\r\n}\r\n\r\n.subDetails {\r\n  font-size: 0.8em;\r\n  font-style: italic;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.keySkills {\r\n  list-style-type: none;\r\n  -webkit-column-count:3;\r\n  column-count:3;\r\n  margin-bottom: 20px;\r\n  font-size: 1em;\r\n  color: #444;\r\n}\r\n\r\n.keySkills ul li {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n@media all and (min-width: 602px) and (max-width: 800px) {\r\n  #headshot {\r\n    display: none;\r\n  }\r\n\r\n  .keySkills {\r\n    -webkit-column-count:2;\r\n    column-count:2;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 601px) {\r\n  #cv {\r\n    width: 95%;\r\n    margin: 10px auto;\r\n    min-width: 280px;\r\n  }\r\n\r\n  #headshot {\r\n    display: none;\r\n  }\r\n\r\n  #name, #contactDetails {\r\n    float: none;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .sectionTitle, .sectionContent {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n\r\n  .sectionTitle {\r\n    margin-left: -2px;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  .keySkills {\r\n    -webkit-column-count:2;\r\n    column-count:2;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 480px) {\r\n  .mainDetails {\r\n    padding: 15px 15px;\r\n  }\r\n\r\n  section {\r\n    padding: 15px 0 0;\r\n  }\r\n\r\n  #mainArea {\r\n    padding: 0 25px;\r\n  }\r\n\r\n\r\n  .keySkills {\r\n    -webkit-column-count:1;\r\n    column-count:1;\r\n  }\r\n\r\n  #name h1 {\r\n    line-height: .8em;\r\n    margin-bottom: 4px;\r\n  }\r\n}\r\n\r\n@media print {\r\n  #cv {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes reset {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes reset {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.instaFade {\r\n  -webkit-animation-name: reset, fade-in;\r\n  -webkit-animation-duration: 1.5s;\r\n  -webkit-animation-timing-function: ease-in;\r\n\r\n  -moz-animation-name: reset, fade-in;\r\n  -moz-animation-duration: 1.5s;\r\n  -moz-animation-timing-function: ease-in;\r\n\r\n  animation-name: reset, fade-in;\r\n  animation-duration: 1.5s;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n.quickFade {\r\n  -webkit-animation-name: reset, fade-in;\r\n  -webkit-animation-duration: 2.5s;\r\n  -webkit-animation-timing-function: ease-in;\r\n\r\n  -moz-animation-name: reset, fade-in;\r\n  -moz-animation-duration: 2.5s;\r\n  -moz-animation-timing-function: ease-in;\r\n\r\n  animation-name: reset, fade-in;\r\n  animation-duration: 2.5s;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n.delayOne {\r\n  -webkit-animation-delay: 0, .5s;\r\n  animation-delay: 0, .5s;\r\n}\r\n\r\n.delayTwo {\r\n  -webkit-animation-delay: 0, 1s;\r\n  animation-delay: 0, 1s;\r\n}\r\n\r\n.delayThree {\r\n  -webkit-animation-delay: 0, 1.5s;\r\n  animation-delay: 0, 1.5s;\r\n}\r\n\r\n.delayFour {\r\n  -webkit-animation-delay: 0, 2s;\r\n  animation-delay: 0, 2s;\r\n}\r\n\r\n.delayFive {\r\n  -webkit-animation-delay: 0, 2.5s;\r\n  animation-delay: 0, 2.5s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixjQUFjO0VBQ2QsUUFBUTtFQUNSLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsWUFBWSxtQkFBbUIsRUFBRSxpREFBaUQsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDOztBQUVqSCxRQUFRLFdBQVcsQ0FBQzs7QUFFcEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0RBQW9EO0VBQ3BELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUtyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFFckIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBRUUsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBRUUsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0VBR0E7SUFFRSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUF1QkE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEMsMENBQTBDOztFQUUxQyxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLHVDQUF1Qzs7RUFFdkMsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDLDBDQUEwQzs7RUFFMUMsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qix1Q0FBdUM7O0VBRXZDLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsK0JBQStCO0VBRS9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUU5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFFaEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsOEJBQThCO0VBRTlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUVoQyx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHksZGl2LHNwYW4sb2JqZWN0LGlmcmFtZSxoMSxoMixoMyxoNCxoNSxoNixwLGJsb2NrcXVvdGUscHJlLGFiYnIsYWRkcmVzcyxjaXRlLGNvZGUsZGVsLGRmbixlbSxpbWcsaW5zLGtiZCxxLHNhbXAsc21hbGwsc3Ryb25nLHN1YixzdXAsdmFyLGIsaSxkbCxkdCxkZCxvbCx1bCxsaSxmaWVsZHNldCxmb3JtLGxhYmVsLGxlZ2VuZCx0YWJsZSxjYXB0aW9uLHRib2R5LHRmb290LHRoZWFkLHRyLHRoLHRkLGFydGljbGUsYXNpZGUsY2FudmFzLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWVudSxuYXYsc2VjdGlvbixzdW1tYXJ5LHRpbWUsbWFyayxhdWRpbyx2aWRlbyB7XHJcbiAgYm9yZGVyOjA7XHJcbiAgZm9udDppbmhlcml0O1xyXG4gIGZvbnQtc2l6ZToxMDAlO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxuICB2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtcclxufVxyXG5cclxuYXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1lbnUsbmF2LHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge2JhY2tncm91bmQ6ICMxODE4MTg7IGZvbnQtZmFtaWx5OiAnTGF0bycsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6ICMyMjI7fVxyXG5cclxuLmNsZWFyIHtjbGVhcjogYm90aDt9XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuI2N2IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG5cclxuLm1haW5EZXRhaWxzIHtcclxuICBwYWRkaW5nOiAyNXB4IDM1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZjhhMDU7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxufVxyXG5cclxuI25hbWUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogJ1Jva2tpdHQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IC02cHg7XHJcbn1cclxuXHJcbiNuYW1lIGgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ra2l0dCcsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNtYWluQXJlYSB7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG59XHJcblxyXG4jaGVhZHNob3Qge1xyXG4gIHdpZHRoOiAxMi41JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNoZWFkc2hvdCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuI25hbWUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jY29udGFjdERldGFpbHMge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI2NvbnRhY3REZXRhaWxzIHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbiNjb250YWN0RGV0YWlscyB1bCBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4jY29udGFjdERldGFpbHMgdWwgbGkgYSwgYVtocmVmXj10ZWxdIHtcclxuICBjb2xvcjogIzQ0NDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4jY29udGFjdERldGFpbHMgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNjZjhhMDU7XHJcbn1cclxuXHJcblxyXG5zZWN0aW9uIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiAyMHB4IDAgMDtcclxufVxyXG5cclxuc2VjdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxufVxyXG5cclxuc2VjdGlvbjpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxufVxyXG5cclxuLnNlY3Rpb25UaXRsZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnNlY3Rpb25Db250ZW50IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDcyLjUlO1xyXG59XHJcblxyXG4uc2VjdGlvblRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogJ1Jva2tpdHQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjY2Y4YTA1O1xyXG59XHJcblxyXG4uc2VjdGlvbkNvbnRlbnQgaDIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ra2l0dCcsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG59XHJcblxyXG4uc3ViRGV0YWlscyB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ua2V5U2tpbGxzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgLW1vei1jb2x1bW4tY291bnQ6MztcclxuICAtd2Via2l0LWNvbHVtbi1jb3VudDozO1xyXG4gIGNvbHVtbi1jb3VudDozO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5rZXlTa2lsbHMgdWwgbGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNjAycHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICNoZWFkc2hvdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmtleVNraWxscyB7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDoyO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6MjtcclxuICAgIGNvbHVtbi1jb3VudDoyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAxcHgpIHtcclxuICAjY3Yge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICB9XHJcblxyXG4gICNoZWFkc2hvdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI25hbWUsICNjb250YWN0RGV0YWlscyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25UaXRsZSwgLnNlY3Rpb25Db250ZW50IHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvblRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgfVxyXG5cclxuICAua2V5U2tpbGxzIHtcclxuICAgIC1tb3otY29sdW1uLWNvdW50OjI7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDoyO1xyXG4gICAgY29sdW1uLWNvdW50OjI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5tYWluRGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAwO1xyXG4gIH1cclxuXHJcbiAgI21haW5BcmVhIHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICB9XHJcblxyXG5cclxuICAua2V5U2tpbGxzIHtcclxuICAgIC1tb3otY29sdW1uLWNvdW50OjE7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDoxO1xyXG4gICAgY29sdW1uLWNvdW50OjE7XHJcbiAgfVxyXG5cclxuICAjbmFtZSBoMSB7XHJcbiAgICBsaW5lLWhlaWdodDogLjhlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgI2N2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJlc2V0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyByZXNldCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlc2V0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zdGFGYWRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByZXNldCwgZmFkZS1pbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcblxyXG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHJlc2V0LCBmYWRlLWluO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuXHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJlc2V0LCBmYWRlLWluO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG59XHJcblxyXG4ucXVpY2tGYWRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByZXNldCwgZmFkZS1pbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcblxyXG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHJlc2V0LCBmYWRlLWluO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xyXG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuXHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJlc2V0LCBmYWRlLWluO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG59XHJcblxyXG4uZGVsYXlPbmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLCAuNXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAsIC41cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAsIC41cztcclxufVxyXG5cclxuLmRlbGF5VHdvIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMCwgMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAsIDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMCwgMXM7XHJcbn1cclxuXHJcbi5kZWxheVRocmVlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMCwgMS41cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMCwgMS41cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAsIDEuNXM7XHJcbn1cclxuXHJcbi5kZWxheUZvdXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLCAycztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMCwgMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLCAycztcclxufVxyXG5cclxuLmRlbGF5Rml2ZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAsIDIuNXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAsIDIuNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLCAyLjVzO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/template/template.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/template/template.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cv\" class=\"\">\r\n  <div class=\"mainDetails\">\r\n    <!--<div id=\"headshot\" class=\"\">-->\r\n      <!--<img src=\"../../../assets/img/headshot.jpg\" alt=\"{{userDetails.details.firstName}}.jpg\" />-->\r\n    <!--</div>-->\r\n\r\n    <div id=\"name\" class=\"\">\r\n      <h1 class=\"\" style=\"font-size: 2vw\"> {{userDetails.details.firstName}} {{userDetails.details.lastName}}</h1>\r\n      <h2 class=\"\">{{userDetails.title}}</h2>\r\n    </div>\r\n\r\n    <div id=\"contactDetails\">\r\n      <ul style=\"font-size:\">\r\n        <li>e-mail: <a href=\"mailto:{{userDetails.details.email}}\" target=\"_blank\">{{userDetails.details.email}}</a></li>\r\n        <!--<li>w: <a href=\"http://www.bloggs.com\">www.bloggs.com</a></li>-->\r\n        <li>Contact: {{userDetails.details.contact}}</li>\r\n        <li>Address: {{userDetails.details.address.street}} </li>\r\n        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{userDetails.details.address.city}}, {{userDetails.details.address.state}}, {{userDetails.details.address.zip}} </li>\r\n        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n  </div>\r\n\r\n  <div id=\"mainArea\" class=\"\">\r\n    <section>\r\n      <article>\r\n        <div class=\"sectionTitle\">\r\n          <h1>Summary</h1>\r\n        </div>\r\n\r\n        <div class=\"sectionContent\">\r\n          <p>{{userDetails.details.summary}}</p>\r\n        </div>\r\n      </article>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n\r\n\r\n    <section>\r\n      <div class=\"sectionTitle\">\r\n        <h1>Experience</h1>\r\n      </div>\r\n\r\n      <div class=\"sectionContent\">\r\n        <article *ngFor=\"let projects of userDetails.details.projects\">\r\n          <h4>{{projects}}</h4>\r\n          <!--<p class=\"subDetails\">April 2011 - Present</p>-->\r\n          <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>-->\r\n        </article>\r\n      </div>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n\r\n\r\n    <section>\r\n      <div class=\"sectionTitle\">\r\n        <h1>Key Skills</h1>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"sectionContent col-md-3\" *ngFor=\"let alias of userDetails.details.aliases\">\r\n              {{alias}}\r\n        </div>\r\n      </div>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n\r\n\r\n    <section>\r\n      <div class=\"sectionTitle\">\r\n        <h1>Achievements</h1>\r\n      </div>\r\n\r\n      <div class=\"sectionContent\" *ngFor=\"let achievement of userDetails.details.achievements\">\r\n        <article>\r\n          <p>{{achievement}}</p>\r\n        </article>\r\n      </div>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<input type=\"button\" data-html2canvas-ignore (click)=\"pdfGenerate()\" value=\"Download pdf\" />\r\n\r\n\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/user/template/template.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/template/template.component.ts ***!
  \*****************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
    }
    TemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            // localStorage.setItem('id', res['id']);
        }, function (err) {
            console.log(err);
        });
    };
    TemplateComponent.prototype.pdfGenerate = function () {
        console.log("Downloading pdf ...");
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4___default.a();
        // doc.text(20,20,'Hello world');
        // doc.save('Resume.pdf');
        html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(document.querySelector("#cv")).then(function (canvas) {
            var img = canvas.toDataURL('image/png');
            console.log(img);
            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4___default.a("p", "mm", "a4");
            pdf.addImage(img, 'JPEG', 0, 0, width, height);
            pdf.save('resume.pdf');
        });
    };
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/user/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/user/template/template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/user/template2/template2.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/template2/template2.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n  transition: 0.35s ease;\r\n}\r\n.rela-block {\r\n  display: block;\r\n  position: relative;\r\n  margin: auto;\r\n  top: ;\r\n  left: ;\r\n  right: ;\r\n  bottom: ;\r\n}\r\n.rela-inline {\r\n  display: inline-block;\r\n  position: relative;\r\n  margin: auto;\r\n  top: ;\r\n  left: ;\r\n  right: ;\r\n  bottom: ;\r\n}\r\n.floated {\r\n  display: inline-block;\r\n  position: relative;\r\n  margin: false;\r\n  top: ;\r\n  left: ;\r\n  right: ;\r\n  bottom: ;\r\n  float: left;\r\n}\r\n.abs-center {\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: false;\r\n  bottom: false;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  text-align: center;\r\n  width: 88%;\r\n}\r\nbody {\r\n  font-family: 'Open Sans';\r\n  font-size: 18px;\r\n  letter-spacing: 0px;\r\n  font-weight: 400;\r\n  line-height: 28px;\r\n  background: url(\"http://kingofwallpapers.com/leaves/leaves-016.jpg\") right no-repeat;\r\n  background-size: cover;\r\n}\r\nbody:before {\r\n  content: \"\";\r\n  display: false;\r\n  position: fixed;\r\n  margin: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(255,255,255,0.92);\r\n}\r\n.caps {\r\n  text-transform: uppercase;\r\n}\r\n.justified {\r\n  text-align: justify;\r\n}\r\np.light {\r\n  color: #777;\r\n}\r\nh2 {\r\n  font-family: 'Open Sans';\r\n  font-size: 30px;\r\n  letter-spacing: 5px;\r\n  font-weight: 600;\r\n  line-height: 40px;\r\n  color: #000;\r\n}\r\nh3 {\r\n  font-family: 'Open Sans';\r\n  font-size: 21px;\r\n  letter-spacing: 1px;\r\n  font-weight: 600;\r\n  line-height: 28px;\r\n  color: #000;\r\n}\r\n.page {\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  margin: 80px auto;\r\n  background-color: #fff;\r\n  box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);\r\n}\r\n.top-bar {\r\n  height: 220px;\r\n  background-color: #848484;\r\n  color: #fff;\r\n}\r\n.name {\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: false;\r\n  left: calc(350px + 5%);\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 120px;\r\n  text-align: center;\r\n  font-family: 'Raleway';\r\n  font-size: 58px;\r\n  letter-spacing: 8px;\r\n  font-weight: 100;\r\n  line-height: 60px;\r\n}\r\n.name div {\r\n  width: 94%;\r\n}\r\n.side-bar {\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: 220px;\r\n  left: 5%;\r\n  right: false;\r\n  bottom: 0;\r\n  width: 350px;\r\n  background-color: #f7e0c1;\r\n  padding: 80px 30px 50px;\r\n}\r\n.mugshot {\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: 50px;\r\n  left: 70px;\r\n  right: false;\r\n  bottom: false;\r\n  height: 210px;\r\n  width: 210px;\r\n}\r\n.mugshot .logo {\r\n  margin: -23px;\r\n}\r\n.logo {\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: 0;\r\n  left: 0;\r\n  right: false;\r\n  bottom: false;\r\n  z-index: 100;\r\n  margin: 0;\r\n  color: #000;\r\n  height: 250px;\r\n  width: 250px;\r\n}\r\n.logo .logo-svg {\r\n  height: auto;\r\n  width: 100%;\r\n  stroke: #000;\r\n  cursor: pointer;\r\n}\r\n.logo .logo-text {\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: 58%;\r\n  left: ;\r\n  right: 16%;\r\n  bottom: ;\r\n  cursor: pointer;\r\n  font-family: \"Montserrat\";\r\n  font-size: 55px;\r\n  letter-spacing: 0px;\r\n  font-weight: 400;\r\n  line-height: 58.333333333333336px;\r\n}\r\n.social {\r\n  padding-left: 60px;\r\n  margin-bottom: 20px;\r\n  cursor: pointer;\r\n}\r\n.social:before {\r\n  content: \"\";\r\n  display: false;\r\n  position: absolute;\r\n  margin: false;\r\n  top: -4px;\r\n  left: 10px;\r\n  right: false;\r\n  bottom: false;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-size: cover !important;\r\n}\r\n.social.twitter:before {\r\n  background: url(\"https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png\") center no-repeat;\r\n}\r\n.social.pinterest:before {\r\n  background: url(\"https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Pinterest-23-128.png\") center no-repeat;\r\n}\r\n.social.linked-in:before {\r\n  background: url(\"https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png\") center no-repeat;\r\n}\r\n.social.github:before {\r\n  background: url(\"https://cdn4.iconfinder.com/data/icons/43-social-media-line-icons/24/github-512.png\") center no-repeat;\r\n}\r\n.side-header {\r\n  font-family: 'Open Sans';\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n  font-weight: 600;\r\n  line-height: 28px;\r\n  margin: 10px auto 10px;\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px solid #888;\r\n}\r\n.list-thing {\r\n  padding-left: 25px;\r\n  margin-bottom: 10px;\r\n}\r\n.content-container {\r\n  margin-right: 0;\r\n  width: calc(95% - 350px);\r\n  padding: 25px 40px 50px;\r\n}\r\n.content-container > * {\r\n  margin: 0 auto 25px;\r\n}\r\n.content-container > h3 {\r\n  margin: 0 auto 5px;\r\n}\r\n.content-container > p.long-margin {\r\n  margin: 0 auto 50px;\r\n}\r\n.title {\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n.separator {\r\n  width: 240px;\r\n  height: 2px;\r\n  background-color: #999;\r\n}\r\n.greyed {\r\n  background-color: #ddd;\r\n  width: 100%;\r\n  max-width: 580px;\r\n  text-align: center;\r\n  font-family: 'Open Sans';\r\n  font-size: 18px;\r\n  letter-spacing: 6px;\r\n  font-weight: 600;\r\n  line-height: 28px;\r\n}\r\n@media screen and (max-width: 1150px) {\r\n  .name {\r\n    color: #fff;\r\n    font-family: 'Raleway';\r\n    font-size: 38px;\r\n    letter-spacing: 6px;\r\n    font-weight: 100;\r\n    line-height: 48px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90ZW1wbGF0ZTIvdGVtcGxhdGUyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixLQUFLO0VBQ0wsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLEtBQUs7RUFDTCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7QUFDVjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsS0FBSztFQUNMLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvRkFBb0Y7RUFDcEYsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixTQUFTO0VBQ1QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUF3QztBQUMxQztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsTUFBTTtFQUNOLFVBQVU7RUFDVixRQUFRO0VBQ1IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usb0lBQW9JO0FBQ3RJO0FBQ0E7RUFDRSxzSUFBc0k7QUFDeEk7QUFDQTtFQUNFLGtJQUFrSTtBQUNwSTtBQUNBO0VBQ0UsdUhBQXVIO0FBQ3pIO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RlbXBsYXRlMi90ZW1wbGF0ZTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcclxufVxyXG4ucmVsYS1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDtcclxuICBsZWZ0OiA7XHJcbiAgcmlnaHQ6IDtcclxuICBib3R0b206IDtcclxufVxyXG4ucmVsYS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogO1xyXG4gIGxlZnQ6IDtcclxuICByaWdodDogO1xyXG4gIGJvdHRvbTogO1xyXG59XHJcbi5mbG9hdGVkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogZmFsc2U7XHJcbiAgdG9wOiA7XHJcbiAgbGVmdDogO1xyXG4gIHJpZ2h0OiA7XHJcbiAgYm90dG9tOiA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmFicy1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZhbHNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IGZhbHNlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICByaWdodDogZmFsc2U7XHJcbiAgYm90dG9tOiBmYWxzZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDg4JTtcclxufVxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8va2luZ29md2FsbHBhcGVycy5jb20vbGVhdmVzL2xlYXZlcy0wMTYuanBnXCIpIHJpZ2h0IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbmJvZHk6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGZhbHNlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45Mik7XHJcbn1cclxuLmNhcHMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmp1c3RpZmllZCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5wLmxpZ2h0IHtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5wYWdlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogODBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogNnB4IDEwcHggMjhweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcbi50b3AtYmFyIHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hbWUge1xyXG4gIGRpc3BsYXk6IGZhbHNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IGZhbHNlO1xyXG4gIHRvcDogZmFsc2U7XHJcbiAgbGVmdDogY2FsYygzNTBweCArIDUlKTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICBmb250LXNpemU6IDU4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5uYW1lIGRpdiB7XHJcbiAgd2lkdGg6IDk0JTtcclxufVxyXG4uc2lkZS1iYXIge1xyXG4gIGRpc3BsYXk6IGZhbHNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IGZhbHNlO1xyXG4gIHRvcDogMjIwcHg7XHJcbiAgbGVmdDogNSU7XHJcbiAgcmlnaHQ6IGZhbHNlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTBjMTtcclxuICBwYWRkaW5nOiA4MHB4IDMwcHggNTBweDtcclxufVxyXG4ubXVnc2hvdCB7XHJcbiAgZGlzcGxheTogZmFsc2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogZmFsc2U7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGxlZnQ6IDcwcHg7XHJcbiAgcmlnaHQ6IGZhbHNlO1xyXG4gIGJvdHRvbTogZmFsc2U7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxuICB3aWR0aDogMjEwcHg7XHJcbn1cclxuLm11Z3Nob3QgLmxvZ28ge1xyXG4gIG1hcmdpbjogLTIzcHg7XHJcbn1cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZhbHNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IGZhbHNlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiBmYWxzZTtcclxuICBib3R0b206IGZhbHNlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLmxvZ28gLmxvZ28tc3ZnIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgc3Ryb2tlOiAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubG9nbyAubG9nby10ZXh0IHtcclxuICBkaXNwbGF5OiBmYWxzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBmYWxzZTtcclxuICB0b3A6IDU4JTtcclxuICBsZWZ0OiA7XHJcbiAgcmlnaHQ6IDE2JTtcclxuICBib3R0b206IDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIGZvbnQtc2l6ZTogNTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDU4LjMzMzMzMzMzMzMzMzMzNnB4O1xyXG59XHJcbi5zb2NpYWwge1xyXG4gIHBhZGRpbmctbGVmdDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc29jaWFsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBmYWxzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBmYWxzZTtcclxuICB0b3A6IC00cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICByaWdodDogZmFsc2U7XHJcbiAgYm90dG9tOiBmYWxzZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG59XHJcbi5zb2NpYWwudHdpdHRlcjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vY2RuMy5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL3NvY2lhbC1tZWRpYS0yMDI2LzYwL1NvY2lhbG1lZGlhX2ljb25zX1R3aXR0ZXItMDctMTI4LnBuZ1wiKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG59XHJcbi5zb2NpYWwucGludGVyZXN0OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9jZG4zLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvc29jaWFsLW1lZGlhLTIwMjYvNjAvU29jaWFsbWVkaWFfaWNvbnNfUGludGVyZXN0LTIzLTEyOC5wbmdcIikgY2VudGVyIG5vLXJlcGVhdDtcclxufVxyXG4uc29jaWFsLmxpbmtlZC1pbjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vY2RuMy5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL3NvY2lhbC1tZWRpYS0yMDI2LzYwL1NvY2lhbG1lZGlhX2ljb25zX0xpbmtlZEluLTEyOC5wbmdcIikgY2VudGVyIG5vLXJlcGVhdDtcclxufVxyXG4uc29jaWFsLmdpdGh1YjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zLzQzLXNvY2lhbC1tZWRpYS1saW5lLWljb25zLzI0L2dpdGh1Yi01MTIucG5nXCIpIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuLnNpZGUtaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XHJcbn1cclxuLmxpc3QtdGhpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIHdpZHRoOiBjYWxjKDk1JSAtIDM1MHB4KTtcclxuICBwYWRkaW5nOiAyNXB4IDQwcHggNTBweDtcclxufVxyXG4uY29udGVudC1jb250YWluZXIgPiAqIHtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciA+IGgzIHtcclxuICBtYXJnaW46IDAgYXV0byA1cHg7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyID4gcC5sb25nLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gNTBweDtcclxufVxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZXBhcmF0b3Ige1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG59XHJcbi5ncmV5ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1ODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgLm5hbWUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/template2/template2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/template2/template2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FONTS -->\r\n<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css'>\r\n<link href='https://fonts.googleapis.com/css?family=Raleway:100' rel='stylesheet' type='text/css'>\r\n<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>\r\n\r\n<!-- PAGE STUFF -->\r\n<div class=\"rela-block page\" id=\"cv\">\r\n  <div class=\"rela-block top-bar\">\r\n    <div class=\"caps name\"><div class=\"abs-center\">{{userDetails.details.firstName}} {{userDetails.details.lastName}}</div></div>\r\n  </div>\r\n  <div class=\"side-bar\">\r\n\r\n    <p class=\"rela-block caps side-header\">Address</p>\r\n    <p>{{userDetails.details.address.street}}</p>\r\n    <p>{{userDetails.details.address.city}}, {{userDetails.details.address.state}}, {{userDetails.details.address.zip}}</p>\r\n    <p></p>\r\n    <p></p>\r\n    <br>\r\n    <p class=\"rela-block caps side-header\">Email</p>\r\n    <p>{{userDetails.details.email}}</p><br>\r\n\r\n    <p class=\"rela-block caps side-header\">Contact</p>\r\n    <p>{{userDetails.details.contact}}</p><br>\r\n\r\n    <p class=\"rela-block caps side-header\">Expertise</p>\r\n    <div *ngFor=\"let alias of userDetails.details.aliases\">\r\n      <p class=\"rela-block list-thing\">{{alias}}</p>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"rela-block content-container\">\r\n    <h2 class=\"rela-block caps title\">{{userDetails.details.title}}</h2>\r\n    <div class=\"rela-block separator\"></div>\r\n    <div class=\"rela-block caps greyed\">Profile</div>\r\n    <p class=\"long-margin\">{{userDetails.details.summary}}</p>\r\n\r\n    <div class=\"rela-block caps greyed\">Projects</div>\r\n    <div *ngFor=\"let projects of userDetails.details.projects\">\r\n      <h3>{{projects}}</h3>\r\n      <p class=\"light\">{{projects}}</p>\r\n    </div>\r\n    <!--<p class=\"light\">First job description</p>-->\r\n    <!--<p class=\"justified\">Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle rights aesthetic hella PBR&B. </p>-->\r\n\r\n    <div class=\"rela-block caps greyed\">Achievements</div>\r\n    <div *ngFor=\"let projects of userDetails.details.achievements\">\r\n      <p class=\"light\">{{projects}}</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<input type=\"button\" data-html2canvas-ignore (click)=\"pdfGenerate()\" value=\"Download pdf\" />\r\n\r\n\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js\"></script>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/template2/template2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/template2/template2.component.ts ***!
  \*******************************************************/
/*! exports provided: Template2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template2Component", function() { return Template2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Template2Component = /** @class */ (function () {
    function Template2Component(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
    }
    Template2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            // localStorage.setItem('id', res['id']);
        }, function (err) {
            console.log(err);
        });
    };
    Template2Component.prototype.pdfGenerate = function () {
        console.log("Downloading pdf ...");
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4___default.a();
        // doc.text(20,20,'Hello world');
        // doc.save('Resume.pdf');
        html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(document.querySelector("#cv")).then(function (canvas) {
            var img = canvas.toDataURL('image/png');
            console.log(img);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4___default.a("p", "mm", "a3");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(img, 'JPEG', 0, 0, width, height);
            pdf.save('resume.pdf');
        });
    };
    Template2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template2',
            template: __webpack_require__(/*! ./template2.component.html */ "./src/app/user/template2/template2.component.html"),
            styles: [__webpack_require__(/*! ./template2.component.css */ "./src/app/user/template2/template2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Template2Component);
    return Template2Component;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div id=\"formContent\">\r\n    <h2 class=\"underlineHover\"  routerLink=\"/login\"  routerLinkActive=\"active\"> Sign In </h2>\r\n    <h2 class=\"underlineHover\"  routerLink=\"/signup\"  routerLinkActive=\"active\">Sign Up </h2>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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
    production: false,
    apiBaseUrl: 'http://localhost:3000/api'
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

module.exports = __webpack_require__(/*! F:\div\Resume-Builder\Angular 6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map