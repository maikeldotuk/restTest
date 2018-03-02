webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-responsive {\n  max-width: 300px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-xs-12 col-sm-9 cold-md-9 col-lg-10 col-xl-11\">\n      <h1>About</h1>\n      <small><i>Las updated 1st of September of 2017</i></small>\n\n    <p>This is a CMS to keep track of your own learning. Instead of dividing it in days like Wordpress or in terms like MediaWiki it is divided in skills and each skill in sub-skills.<br>\n      It is the evolution of the MediaWiki environment that is now kept for comparison in <a href=\"https://www.maikel.uk/old\">https://www.maikel.uk/old</a></p>\n    <p>The MediaWiki format has a few shortcomings:</p>\n    <ul>\n      <li>Editing text is cumbersome.</li>\n      <li>Adding pictures is a hindrance.</li>\n      <li>Adding CSS is an incredible annoyance because you do it globally in Commons.CSS</li>\n      <li>Adding Javascript is the same because you do it globally in Commons.JS</li>\n      <li>To add a new skill I had to manually create a table each and every time or copy-paste one I already did.</li>\n    </ul>\n    <p>This CMS automatises or solves all of the previous shortcomings of MediaWiki by:</p>\n    <ul>\n      <li>Using Froala Editor a WYSIWYG solution.</li>\n      <li>Using Angular for Componentisation of both CSS &amp; Javascript.</li>\n      <li>Automatising the creating of skillboxes.</li>\n    </ul>\n\n      <h2>Future additions</h2>\n      <ul>\n        <li><strong>Testing system: </strong>I want the site to automate and measure knowledge about each skill, notifying if it's time for a refresher otherwise and retagging skills back to Learning if they are.\n        This should be achieved by using multiple option questions</li>\n        <li><strong>Native Android/iOS app: </strong>Using either NativeScript or Ionic. They'd be in charge of the bit about the testing system that way you can retest yourself on your commuting</li>\n      </ul>\n    <p>This is the way the website looks as of 26th of August of 2017. Due to obvious reasons this picture could be outdated. Check the website itself to see the live latest version <a href=\"https://www.maikel.uk\">https://www.maikel.uk</a></p>\n      <p class=\"text-center bold\">In visitor-mode <i class=\"fa fa-arrow-down\"></i></p>\n    <img class=\"img-responsive center-block\" src=\"https://github.com/maikeldotuk/learningCMS/raw/master/images/visitor.png\" alt=\"In visitor-mode\">\n    <p class=\"text-center bold\">In editor-mode <i class=\"fa fa-arrow-down\"></i></p>\n    <img class=\"img-responsive center-block\" src=\"https://github.com/maikeldotuk/learningCMS/raw/master/images/editor.png\" alt=\"In editor-mode\">\n    <p class=\"text-center bold\">Editing a page <i class=\"fa fa-arrow-down\"></i></p>\n    <img class=\"img-responsive center-block\" src=\"https://github.com/maikeldotuk/learningCMS/raw/master/images/editPage.png\" alt=\"Editing a page\">\n\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this.isCollapsed = false;
        this.titleService.setTitle('Maikel.uk: About');
        this.updateWidthValue();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isCollapsed = false;
        }
        else {
            this.isCollapsed = true;
        }
    };
    AboutComponent.prototype.getPaddingBottom = function () {
        return this.isCollapsed === false ? '100px' : '10px';
    };
    return AboutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AboutComponent.prototype, "updateWidthValue", null);
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\" [ngStyle]=\"{'padding-bottom': getPaddingBottom()}\" >\n  <div class=\"row\">\n    <!-- The branding -->\n<app-branding [collapse]=\"!isSmallScreen\"></app-branding>\n<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-2 col-xl-1\">\n  <app-branding [collapse]=\"isSmallScreen\"></app-branding>\n  <app-projects [collapse]=\"isSmallScreen\"></app-projects>\n  <app-legend [collapse]=\"isSmallScreen\"></app-legend>\n  <app-latestnews [collapse]=\"isSmallScreen\"></app-latestnews>\n</div>\n    <router-outlet></router-outlet></div></div>\n<app-footer [collapse]=\"isSmallScreen\"></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.updateWidthValue();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isSmallScreen = false;
        }
        else {
            this.isSmallScreen = true;
        }
        var winTitle = 'Maikel.uk';
        this.titleService.setTitle(winTitle);
    };
    AppComponent.prototype.getPaddingBottom = function () {
        return this.isSmallScreen === false ? '60px' : '10px';
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "updateWidthValue", null);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export metaFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_meta_core__ = __webpack_require__("../../../../@ngx-meta/core/@ngx-meta/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_malihu_scrollbar__ = __webpack_require__("../../../../ngx-malihu-scrollbar/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__branding_branding_component__ = __webpack_require__("../../../../../src/app/branding/branding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__legend_legend_component__ = __webpack_require__("../../../../../src/app/legend/legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__latestnews_latestnews_component__ = __webpack_require__("../../../../../src/app/latestnews/latestnews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__skilleditor_skilleditor_component__ = __webpack_require__("../../../../../src/app/skilleditor/skilleditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__skill_list_skill_list_component__ = __webpack_require__("../../../../../src/app/skill-list/skill-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__skillpreview_skillpreview_component__ = __webpack_require__("../../../../../src/app/skillpreview/skillpreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__skill_list_single_skill_box_single_skill_box_component__ = __webpack_require__("../../../../../src/app/skill-list/single-skill-box/single-skill-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pageeditor_pageeditor_component__ = __webpack_require__("../../../../../src/app/pageeditor/pageeditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__editorpage_editorpage_component__ = __webpack_require__("../../../../../src/app/editorpage/editorpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__skillpage_skillpage_component__ = __webpack_require__("../../../../../src/app/skillpage/skillpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__backbutton_backbutton_component__ = __webpack_require__("../../../../../src/app/backbutton/backbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__loader_loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__facebooklike_facebooklike_component__ = __webpack_require__("../../../../../src/app/facebooklike/facebooklike.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































function metaFactory() {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_meta_core__["c" /* MetaStaticLoader */]({
        pageTitlePositioning: __WEBPACK_IMPORTED_MODULE_8__ngx_meta_core__["d" /* PageTitlePositioning */].PrependPageTitle,
        pageTitleSeparator: ' - ',
        applicationName: 'Maikel.uk',
        defaults: {
            title: 'Maikel.uk',
            description: 'A website about a CMS to empower self-directed learning',
            'og:image': 'https://www.maikel.uk/images/logo.png',
            'og:type': 'website',
        }
    });
}
var routes = [
    { path: '', redirectTo: 'skills', pathMatch: 'full' },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_21__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'skills/:skill/:page', component: __WEBPACK_IMPORTED_MODULE_28__pageeditor_pageeditor_component__["a" /* PageeditorComponent */] },
    { path: 'skills/:skill', component: __WEBPACK_IMPORTED_MODULE_31__skillpage_skillpage_component__["a" /* SkillpageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'skilleditor', component: __WEBPACK_IMPORTED_MODULE_30__editorpage_editorpage_component__["a" /* EditorpageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_29__notfound_notfound_component__["a" /* NotfoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__branding_branding_component__["a" /* BrandingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__legend_legend_component__["a" /* LegendComponent */],
            __WEBPACK_IMPORTED_MODULE_15__latestnews_latestnews_component__["a" /* LatestnewsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_21__skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__skilleditor_skilleditor_component__["a" /* SkilleditorComponent */],
            __WEBPACK_IMPORTED_MODULE_25__skill_list_skill_list_component__["a" /* SkillListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__skillpreview_skillpreview_component__["a" /* SkillpreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__skill_list_single_skill_box_single_skill_box_component__["a" /* SingleSkillBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pageeditor_pageeditor_component__["a" /* PageeditorComponent */],
            __WEBPACK_IMPORTED_MODULE_29__notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_30__editorpage_editorpage_component__["a" /* EditorpageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__skillpage_skillpage_component__["a" /* SkillpageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_33__backbutton_backbutton_component__["a" /* BackbuttonComponent */],
            __WEBPACK_IMPORTED_MODULE_34__loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_35__facebooklike_facebooklike_component__["a" /* FacebooklikeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["c" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ngx_meta_core__["b" /* MetaModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_8__ngx_meta_core__["a" /* MetaLoader */],
                useFactory: (metaFactory)
            }),
            __WEBPACK_IMPORTED_MODULE_10_ngx_malihu_scrollbar__["a" /* MalihuScrollbarModule */].forRoot()
        ],
        providers: [
            // {provide: LocationStrategy, useClass: HashLocationStrategy},
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["h" /* PathLocationStrategy */] },
            __WEBPACK_IMPORTED_MODULE_22__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__server_service__["a" /* ServerService */],
            { provide: 'SERVER_URL', useValue: 'https://www.maikel.uk' }
            //{provide: 'SERVER_URL', useValue: 'http://localhost:3000'}
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/backbutton/backbutton.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch-version {\n  position: fixed;\n  top: 30%;\n  color: red;\n  font-size: 24px;\n  z-index: 999;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backbutton/backbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"!isEdit\" [ngStyle]=\"{'left':buttonLocation}\" class=\"switch-version\"\n        (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-left\"></i></a>\n"

/***/ }),

/***/ "../../../../../src/app/backbutton/backbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackbuttonComponent = (function () {
    function BackbuttonComponent(router) {
        this.router = router;
        this.updateButtonLocation();
    }
    BackbuttonComponent.prototype.ngOnInit = function () {
    };
    BackbuttonComponent.prototype.updateButtonLocation = function () {
        this.buttonLocation = document.body.clientWidth - 50 + 'px';
    };
    BackbuttonComponent.prototype.goBack = function () {
        this.router.navigate(['/skills']);
    };
    return BackbuttonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], BackbuttonComponent.prototype, "isEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('body:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackbuttonComponent.prototype, "updateButtonLocation", null);
BackbuttonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-backbutton',
        template: __webpack_require__("../../../../../src/app/backbutton/backbutton.component.html"),
        styles: [__webpack_require__("../../../../../src/app/backbutton/backbutton.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], BackbuttonComponent);

var _a;
//# sourceMappingURL=backbutton.component.js.map

/***/ }),

/***/ "../../../../../src/app/branding/branding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logo {\n  display:block;\n  margin:auto;\n  max-width: 240px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/branding/branding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\n\n  <div class=\"panel-heading\">\n    <a [routerLink]=\"['/skills']\"><img id=\"logo\" style=\"width:100%\" src=\"assets/logo.png\"></a>\n\n\n\n\n\n  </div>\n\n\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/branding/branding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrandingComponent = (function () {
    function BrandingComponent() {
    }
    BrandingComponent.prototype.ngOnInit = function () {
    };
    return BrandingComponent;
}());
BrandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-branding',
        template: __webpack_require__("../../../../../src/app/branding/branding.component.html"),
        styles: [__webpack_require__("../../../../../src/app/branding/branding.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BrandingComponent);

//# sourceMappingURL=branding.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-9 cold-md-9 col-lg-10 col-xl-11\">\n  <h1>Contact</h1>\n  <p>This section should contain one that does send to the DDBB the form so I can read them later from this same website\n    or my desktop in a <strong>Java</strong> (not Javascript) application</p>\n  <p>In the meantime:</p>\n  <div class=\"text-center\"><a href=\"https://www.linkedin.com/in/maikeldotuk\" target=\"_blank\"\n                              class=\"btn-lg btn-primary \">\n    Follow me on <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(titleService) {
        this.titleService = titleService;
        this.isCollapsed = false;
        this.updateWidthValue();
        var winTitle = 'Maikel.uk: Contact';
        this.titleService.setTitle(winTitle);
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isCollapsed = false;
        }
        else {
            this.isCollapsed = true;
        }
    };
    return ContactComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactComponent.prototype, "updateWidthValue", null);
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/editorpage/editorpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editorpage/editorpage.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Very unfinished -->\n\n<div class=\"container\">\n  <app-branding></app-branding>\n<app-skilleditor></app-skilleditor>\n<app-skillpreview></app-skillpreview>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editorpage/editorpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorpageComponent = (function () {
    function EditorpageComponent() {
    }
    EditorpageComponent.prototype.ngOnInit = function () {
    };
    return EditorpageComponent;
}());
EditorpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editorpage',
        template: __webpack_require__("../../../../../src/app/editorpage/editorpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editorpage/editorpage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditorpageComponent);

//# sourceMappingURL=editorpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/facebooklike/facebooklike.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facebooklike/facebooklike.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/facebooklike/facebooklike.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebooklikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacebooklikeComponent = (function () {
    function FacebooklikeComponent() {
    }
    FacebooklikeComponent.prototype.ngOnInit = function () {
    };
    return FacebooklikeComponent;
}());
FacebooklikeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-facebooklike',
        template: __webpack_require__("../../../../../src/app/facebooklike/facebooklike.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facebooklike/facebooklike.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FacebooklikeComponent);

//# sourceMappingURL=facebooklike.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Not sure what I've done this but works to get rid of the huge bar on mobile. */\n.navbar-fixed-bottom {\n  padding-top:0px !important;\n  padding-bottom:0 !important;\n  max-height:10px !important;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-bottom\" style=\"margin-bottom=0\">\n  <div class=\"container\">\n    <p class=\"navbar-text pull-left\"> Copyright © 2017\n      <a href=\"https://github.com/maikeldotuk/learningCMS/blob/master/LICENSE\" target=\"_blank\" > MIT Licence</a>\n      -\n      <a href=\"https://github.com/maikeldotuk\" target=\"_blank\" >Maikel</a>\n    </p>\n    <a href=\"https://www.linkedin.com/in/maikeldotuk\" target=\"_blank\" class=\"navbar-btn btn-sm btn-primary pull-right\">\n      Follow me on <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\n      </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This navbar is asking to be on its own component-->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n\n\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"isCollapsed = !isCollapsed\" >\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n\n      <a class=\"navbar-brand\" [collapse]=\"!isCollapsed\" [routerLink]=\"['/skills']\">MKB</a>\n      <a class=\"navbar-brand\" [collapse]=\"isCollapsed\" [routerLink]=\"['/skills']\">Maikel Knowledge Base</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/skills']\" (click)=\"shouldCollapse()\">Skills</a></li>\n        <li><a [routerLink]=\"['/about']\" (click)=\"shouldCollapse()\">About</a></li>\n        <li><a [routerLink]=\"['/contact']\" (click)=\"shouldCollapse()\">Contact</a></li>\n        <li><a *ngIf=\"getLoggedStatus() && screenWidthFigure<768\" [routerLink]=\"['/skilleditor']\" (click)=\"shouldCollapse()\">Skill Editor</a></li>\n      </ul>\n\n\n      <p class=\"navbar-text pull-right\" *ngIf=\"!getLoggedStatus()\">\n        <a   (click)=\"login()\"><span class=\"glyphicon glyphicon-log-in\" >\n          </span> Login</a>\n\n\n\n      <p class=\"navbar-text pull-right\" *ngIf=\"getLoggedStatus()\">\n      <a   (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n    </p>\n\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(user) {
        this.user = user;
        this.isCollapsed = false;
        this.updateWidthValue();
    }
    HeaderComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isCollapsed = false;
        }
        else {
            this.isCollapsed = true;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.login = function () {
        this.user.clickedLogin();
        this.shouldCollapse();
    };
    HeaderComponent.prototype.logout = function () {
        this.user.logout();
        this.shouldCollapse();
    };
    HeaderComponent.prototype.getLoggedStatus = function () {
        return this.user.getLoggedStatus();
    };
    HeaderComponent.prototype.shouldCollapse = function () {
        if (this.screenWidthFigure < 768) {
            this.isCollapsed = !this.isCollapsed;
        }
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "updateWidthValue", null);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is the index-->\n\n  <div  class=\"panel panel-default\">\n    <div class=\"panel-heading\"><img style=\"display:block; margin:auto; max-width: 100px\" [src]=\"theSkill.skillLogoURL\"></div>\n    <div *ngIf=\"!noPages\" class=\"list-group\">\n      <a *ngFor=\"let page of thePages\" class=\"list-group-item\" [routerLink]=\"['/skills',page.skill, page.title]\">{{page.title}}</a>\n      <li class=\"list-group-item\" [ngClass]=\"getStyle()\">Status: <strong>{{theSkill.skillLevel}}</strong></li>\n    </div>\n    <li *ngIf=\"noPages\" class=\"list-group-item\" [ngClass]=\"getStyle()\">Status: <strong>{{theSkill.skillLevel}}</strong></li>\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skillbox_model__ = __webpack_require__("../../../../../src/app/skillbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.getStyle = function () {
        switch (this.theSkill.skillLevel) {
            case 'Familiar': {
                return 'item list-group-item-info';
            }
            case 'Learning': {
                return 'list-group-item-success';
            }
            case 'Queued': {
                return 'list-group-item-warning';
            }
        }
    };
    return IndexComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], IndexComponent.prototype, "noPages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__skillbox_model__["a" /* Skillbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__skillbox_model__["a" /* Skillbox */]) === "function" && _a || Object)
], IndexComponent.prototype, "theSkill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], IndexComponent.prototype, "thePages", void 0);
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/latestnews/latestnews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/latestnews/latestnews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Latest News</div>\n  <div class=\"panel-body\">This site is in <strong>BETA</strong> phase, follow its updates in <a class=\"btn-link\" href=\"https://github.com/maikeldotuk/learningCMS/commits/master\">Github</a></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/latestnews/latestnews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestnewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LatestnewsComponent = (function () {
    function LatestnewsComponent() {
    }
    LatestnewsComponent.prototype.ngOnInit = function () {
    };
    return LatestnewsComponent;
}());
LatestnewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-latestnews',
        template: __webpack_require__("../../../../../src/app/latestnews/latestnews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/latestnews/latestnews.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LatestnewsComponent);

//# sourceMappingURL=latestnews.component.js.map

/***/ }),

/***/ "../../../../../src/app/legend/legend.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#knownTitle{ background-color: rgba(41, 155, 255, 0.8); }\n#learningTitle { background-color: #b3ffb3; }\n#queuedTitle { background-color: #ffef3f; }\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/legend/legend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\n\n  <div class=\"panel-heading\">Legend</div>\n  <div class=\"list-group\">\n\n    <li  class=\"list-group-item item list-group-item-info\">Tested & Passed</li>\n    <li  class=\"list-group-item list-group-item-success\">Tested & Learning</li>\n    <li  class=\"list-group-item list-group-item-warning\">Untested & Queued</li>\n\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/legend/legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegendComponent = (function () {
    function LegendComponent() {
    }
    LegendComponent.prototype.ngOnInit = function () {
    };
    return LegendComponent;
}());
LegendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-legend',
        template: __webpack_require__("../../../../../src/app/legend/legend.component.html"),
        styles: [__webpack_require__("../../../../../src/app/legend/legend.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LegendComponent);

//# sourceMappingURL=legend.component.js.map

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#normalLogo {\n  background-color: transparent !important;\n}\n\n\n\n\n.everything {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100vh;\n  color: darkred;\n  font-size:30px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"everything\">\n\n<img class=\"img-rounded well well-sm\" style=\"max-width:200px\" src=\"https://www.maikel.uk/images/gifs/catdrinking.gif\">\n\n  <p>Loading <i class=\"fa fa-refresh fa-spin  fa-fw\"></i></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"centerNotFound\">\n        <style>\n          #centerNotFound {\n            display: flex;\n            justify-content: center;\n            flex-direction: column;\n            align-items: center;\n            height: 60vh;\n            color: black;\n\n          }\n          body {\n            background: black;\n            margin: 0;\n            padding: 0;\n          }\n\n\n        </style>\n        <h1 style=\"text-align: center\">Page Not Found</h1>\n        <img style=\"max-width: 300px;\" class=\"img-rounded img-responsive\" src=\"https://media.giphy.com/media/XsUtdIeJ0MWMo/source.gif\">\n        <br>\n\n\n        <p>You were trying to go somewhere that doesn't exist</p>\n\n        <a href=\"index.html\" class=\"btn btn-primary\" >Go Home</a>\n\n\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__("../../../../../src/app/notfound/notfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notfound/notfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/page.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(id, title, content, skill, editDate, imgURL) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.skill = skill;
        this.editDate = editDate;
        this.imgURL = imgURL;
    }
    return Page;
}());

//# sourceMappingURL=page.model.js.map

/***/ }),

/***/ "../../../../../src/app/pageeditor/pageeditor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pageeditor/pageeditor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-9 cold-md-9 col-lg-10 col-xl-11\" *ngIf=\"!isLoading\">\n<app-backbutton [isEdit]=\"isEdit\"></app-backbutton>\n\n  <h1><a [routerLink]=\"['/skills',thePage.skill]\">{{thePage.skill}}</a> <i class=\"fa fa-angle-right\"></i> {{thePage.title}}\n  <div *ngIf=\"getLoggedStatus()\" class=\"btn-group\">\n\n    <button class=\"btn btn-xs btn-primary\" *ngIf=\"!isEdit\" (click)=\"onToggleEditor()\">Edit\n    </button>\n    <button *ngIf=\"isEdit\" class=\"btn btn-xs btn-primary\" (click)=\"onSavePage()\">{{pageSavingButtonLabel}}\n      <app-spinner *ngIf=\"showSpinner\"></app-spinner>\n    </button>\n    <button class=\"btn btn-xs btn-danger\" (click)=\"onRemovePage()\">Delete\n    </button>\n  </div>\n</h1>\n\n<div style=\"color: #760a0e; font-style: italic; font-size:12px;\" *ngIf=\"getLoggedStatus() && isEdit\"> Last Edited on\n  {{lastEdit}}\n</div>\n\n<div  *ngIf=\"!isEdit\">\n  <div  [froalaView]=\"thePage.content\"></div>\n\n</div>\n\n\n<!-- The view with the editor-->\n<div *ngIf=\"isEdit\">\n  <img class=\"img-thumbnail \" *ngIf=\"thePage.imgURL !== null\" [src]=\"thePage.imgURL\" style=\"max-width:130px;float:right;\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Rename</span>\n    <input [(ngModel)]=\"thePage.title\" type=\"text\" class=\"form-control\" name=\"msg\">\n\n  </div>\n  <br>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">SEO image URL</span>\n    <input [(ngModel)]=\"thePage.imgURL\" type=\"text\" class=\"form-control\" name=\"msg\" placeholder=\"Recommended to be bigger than 250x250px\">\n\n  </div>\n\n  <br>\n\n\n  <div [froalaEditor]=\"froalaOptions\" [(ngModel)]=\"thePage.content\"></div>\n\n</div>\n</div>\n<div *ngIf=\"isLoading\"><app-loader></app-loader></div>\n"

/***/ }),

/***/ "../../../../../src/app/pageeditor/pageeditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageeditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_model__ = __webpack_require__("../../../../../src/app/page.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PageeditorComponent = (function () {
    // @Output() onSavedPage: EventEmitter<Page>;
    function PageeditorComponent(titleService, route, router, server, user) {
        var _this = this;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.server = server;
        this.user = user;
        this.isLoading = true;
        this.thePage = new __WEBPACK_IMPORTED_MODULE_4__page_model__["a" /* Page */]('', '', '', '', null, '');
        this.isEdit = false;
        this.pageSavingButtonLabel = 'Save Page';
        this.showSpinner = false;
        this.scrollbarOptions = { alwaysShowScrollbar: 2, axis: 'xy', theme: 'dark-thick', scrollButtons: { enable: true } };
        this.dateOptions = {
            weekday: 'long', year: 'numeric', month: 'long',
            day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true,
        };
        this.froalaOptions = this.server.globalFroala;
        route.params.subscribe(function (params) {
            _this.addressSkill = params['skill'];
            _this.addressPage = params['page'];
            if (!_this.addressSkill && !_this.addressPage) {
                _this.thePage.skill = 'Error';
                _this.thePage.content = 'You need to write something';
            }
            else {
                _this.waitForArrayToLoad();
            }
        });
    }
    PageeditorComponent.prototype.ngOnInit = function () {
        var isActive = function (cmd) {
            var blocks = this.selection.blocks();
            var tag;
            if (blocks.length) {
                var blk = blocks[0];
                tag = 'N';
                var default_tag = this.html.defaultTag();
                if (blk.tagName.toLowerCase() !== default_tag && blk !== this.el) {
                    tag = blk.tagName;
                }
            }
            if (['LI', 'TD', 'TH'].indexOf(tag) >= 0) {
                tag = 'N';
            }
            return tag.toLowerCase() === cmd;
        };
        $.FroalaEditor.DefineIcon('alert', { NAME: 'info' });
        $.FroalaEditor.RegisterCommand('alert', {
            title: 'Hello',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                alert('Hello!');
            }
        });
        $.FroalaEditor.DefineIcon('h1', { NAME: '<strong>H1</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('h2', { NAME: '<strong>H2</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('h3', { NAME: '<strong>H3</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('h4', { NAME: '<strong>H4</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('p', { NAME: '<strong>p</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('pre', { NAME: '<strong>Code</strong>', template: 'text' });
        $.FroalaEditor.RegisterCommand('h1', {
            title: 'Heading 1',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('h2', {
            title: 'Heading 2',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('h3', {
            title: 'Heading 3',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('h4', {
            title: 'Heading 4',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('p', {
            title: 'Normal',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('pre', {
            title: 'Code',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
    };
    PageeditorComponent.prototype.getLoggedStatus = function () {
        return this.user.getLoggedStatus();
    };
    PageeditorComponent.prototype.onToggleEditor = function () {
        this.isEdit = true;
    };
    PageeditorComponent.prototype.waitForArrayToLoad = function () {
        var _this = this;
        // I need to simplify this
        var step = 300;
        if (this.server.arrayAllPages.length === 0) {
            setTimeout(function () {
                console.log('Array still loading 1');
                if (_this.server.arrayAllPages.length === 0) {
                    setTimeout(function () {
                        console.log('Array still loading 2');
                        if (_this.server.arrayAllPages.length === 0) {
                            setTimeout(function () {
                                console.log('Array still loading 3');
                                if (_this.server.arrayAllPages.length === 0) {
                                    setTimeout(function () {
                                        console.log('Array still loading 4');
                                    }, step);
                                }
                                else {
                                    _this.loadPageData();
                                }
                            }, step);
                        }
                        else {
                            _this.loadPageData();
                        }
                    }, step);
                }
                else {
                    _this.loadPageData();
                }
            }, step);
        }
        else {
            this.loadPageData();
        }
    };
    PageeditorComponent.prototype.loadPageData = function () {
        var _this = this;
        if ((this.server.arrayAllPages.find(function (thePage) { return thePage.skill === _this.addressSkill && thePage.title === _this.addressPage; }))) {
            this.thePage = this.server.arrayAllPages.find(function (thePage) { return thePage.skill === _this.addressSkill && thePage.title === _this.addressPage; });
            var someDate = this.thePage.editDate;
            if (someDate !== undefined) {
                var aDate = new Date(someDate);
                this.lastEdit = aDate.toLocaleString('en-GB', this.dateOptions);
                // Title change
                var winTitle = this.thePage.skill + ': ' + this.thePage.title + ' - Maikel.uk';
                this.titleService.setTitle(winTitle);
                this.isLoading = false;
            }
            else {
                this.lastEdit = 'Unknown';
            }
        }
        else {
            this.thePage.content = 'This page doesn\'t exist';
            return;
        }
    };
    PageeditorComponent.prototype.onSavePage = function () {
        var _this = this;
        this.pageSavingButtonLabel = 'Saving';
        this.showSpinner = true;
        this.lastEdit = new Date().toLocaleDateString('en-GB', this.dateOptions);
        this.server.onSavePage(this.thePage);
        setTimeout(function () {
            _this.pageSavingButtonLabel = 'Saved';
            _this.showSpinner = false;
            _this.pageSavingButtonLabel = 'Save';
            _this.isEdit = false;
            _this.router.navigate(['/skills', _this.thePage.skill, _this.thePage.title]);
        }, 1000);
    };
    PageeditorComponent.prototype.onRemovePage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'Once deleted you can\'t recover this page',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            showLoaderOnConfirm: true,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            cancelButtonClass: 'btn btn-primary',
            focusCancel: true,
            preConfirm: function (data) {
                return new Promise(function (resolve) {
                    resolve();
                });
            }
        }).then(function () {
            _this.server.onRemovePage(_this.thePage);
        }).catch(__WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.noop);
    };
    return PageeditorComponent;
}());
PageeditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pageeditor',
        template: __webpack_require__("../../../../../src/app/pageeditor/pageeditor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pageeditor/pageeditor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _e || Object])
], PageeditorComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pageeditor.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Current Projects</div>\n  <div class=\"list-group\">\n    <a href=\"https://github.com/maikeldotuk/learningCMS\" class=\"list-group-item\">Learning CMS</a>\n    <a href=\"https://github.com/maikeldotuk/restTest\" class=\"list-group-item\">Rest API</a>\n    <a href=\"https://github.com/maikeldotuk/WeightAwareness\" class=\"list-group-item\">Weight Awareness</a>\n    <a href=\"https://github.com/maikeldotuk/tdlplatform\" class=\"list-group-item\">Knowledge Tester</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__("../../../../../src/app/page.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skillbox_model__ = __webpack_require__("../../../../../src/app/skillbox.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ServerService = (function () {
    function ServerService(router, http, user, server) {
        this.router = router;
        this.http = http;
        this.user = user;
        this.globalFroala = {
            imageUploadURL: '/upload_image',
            imageManagerLoadURL: '/load_images',
            imageManagerDeleteURL: '/delete_image',
            placeholderText: 'Add here the text for the page',
            charCounterCount: true,
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', '|', 'undo', 'redo', '|', 'h1', 'h2', 'h3', 'h4', 'p', 'pre', '|', 'formatOL', 'formatUL', 'quote', 'insertLink', 'insertImage', 'insertTable', 'html'],
            /* toolbarButtonsMD: ['fullscreen', 'bold', 'italic', 'underline', '|', 'color', 'paragraphStyle', '|', 'align',
              'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo',
              'insertFile', 'insertTable', '|', 'help', 'html', '|', 'undo', 'redo', 'paragraphFormat'], */
            tableStyles: {
                'table table-bordered': 'BS bordered',
                'table table-condensed': 'BS condensed'
            }
        };
        this.textWhenShow = 'Show Skillset';
        this.thePages = [];
        this.arraySkillboxes = [];
        this.arrayAllPages = [];
        this.editorTitleField = '';
        this.editorLogoField = '';
        this.editorMasteryField = 'Learning';
        this.showSkillBox = true;
        this.showSkillEditorText = 'Hide Editor';
        this.pageFroalaEditorHidden = true;
        this.server = server;
        this.getUpdatedSkillsGrid();
        this.getAllPagesList();
        this.showSkillEditor = true;
    }
    /* By moving all the methods to this service I have to wrap them in all the components and therefore discover
     easily which ones uses which and if they intercommunicate or not. If they don't they can be moved locally to that
     component.
     */
    // Depreacated because the skill editor is going to be part of the skill page.
    ServerService.prototype.addPageToSkill = function (aPage) {
        // Maybe this one can be changed.
        var _this = this;
        var results;
        var somePage;
        var theData = {
            title: aPage.title,
            content: '',
            imgURL: aPage.imgURL,
            skill: aPage.skill,
            editDate: aPage.editDate
        };
        var address = this.server + '/api/v1/page';
        var req = this.http.post(address, theData);
        req.subscribe(function (data) {
            results = data;
            somePage = new __WEBPACK_IMPORTED_MODULE_1__page_model__["a" /* Page */](results._id, results.title, results.content, results.skill, results.editDate, results.imgURL);
            _this.arrayAllPages.push(somePage);
        });
    };
    ServerService.prototype.onRemoveSkill = function (theSkill) {
        // The actual deleting of the skill
        var id = this.arraySkillboxes.indexOf(theSkill);
        var thePages = this.getPages(theSkill);
        var address = this.server + '/api/v1/skill/' + theSkill.skillID;
        var req = this.http.delete(address);
        req.subscribe();
        this.arraySkillboxes.splice(id, 1);
        // With this the associated pages are also deleted because this it's not a modification.
        if (thePages.length === 0) {
            this.router.navigate(['skills']);
            return;
        }
        else {
            for (var _i = 0, _a = Object.keys(thePages); _i < _a.length; _i++) {
                var index = _a[_i];
                var eachPage = thePages[index];
                var address2 = this.server + '/api/v1/page/' + eachPage.id;
                var req2 = this.http.delete(address2);
                req2.subscribe();
                this.router.navigate(['skills']);
            }
        }
    };
    ServerService.prototype.getUpdatedSkillsGrid = function () {
        var _this = this;
        this.arraySkillboxes = [];
        var address = this.server + '/api/v1/skills';
        this.http.get(address).subscribe(function (data) {
            // Read the result field from the JSON response.
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.arraySkillboxes.push(new __WEBPACK_IMPORTED_MODULE_2__skillbox_model__["a" /* Skillbox */](data[entry]._id, data[entry].title, data[entry].logoURL, data[entry].mastery, data[entry].descriptHTML));
            }
            _this.arraySkillboxes.sort(function (n1, n2) { return _this.sortSkills(n1, n2); });
        });
    };
    ServerService.prototype.sortSkills = function (n1, n2) {
        if (n1.skillLevel < n2.skillLevel) {
            return -1;
        }
        else if (n1.skillLevel > n2.skillLevel) {
            return 1;
        }
        if (n1.skillTitle < n2.skillTitle) {
            return -1;
        }
        else if (n1.skillTitle > n2.skillTitle) {
            return 1;
        }
        else {
            return 0;
        }
    };
    // IMPORTANT: Change blank here otherwise you'd overwrite them all.
    ServerService.prototype.onSendSkill = function (theSkill) {
        var _this = this;
        var formattedItem;
        var newSkill = {
            title: theSkill.skillTitle,
            logoURL: theSkill.skillLogoURL,
            mastery: theSkill.skillLevel,
            descriptHTML: (theSkill.descriptHTML.length === 0 ? 'blank' : theSkill.descriptHTML)
        };
        var address = this.server + '/api/v1/skill';
        var results;
        var req = this.http.post(address, newSkill);
        req.subscribe(function (data) {
            results = data;
            formattedItem = new __WEBPACK_IMPORTED_MODULE_2__skillbox_model__["a" /* Skillbox */](results.newID, newSkill.title, newSkill.logoURL, newSkill.mastery, newSkill.descriptHTML);
            _this.arraySkillboxes.push(formattedItem);
            _this.getAllPagesList();
            _this.router.navigate(['skills']);
        });
    };
    ServerService.prototype.onSavePage = function (thePage) {
        var _this = this;
        var aPage = {
            title: thePage.title,
            content: thePage.content,
            imgURL: thePage.imgURL,
            skill: thePage.skill,
            editDate: new Date()
        };
        var address = this.server + '/api/v1/page/' + thePage.id;
        var req = this.http.put(address, aPage);
        req.subscribe(function (data) {
            _this.getAllPagesList();
            _this.getUpdatedSkillsGrid();
            _this.router.navigate(['/skills', aPage.skill, aPage.title]);
        });
    };
    // This is going to be to modify
    ServerService.prototype.onAmendSkill = function (newSkill, oldSkillTitle) {
        var _this = this;
        this.getUpdatedSkillsGrid();
        setTimeout(function () {
            var oldSkill = _this.arraySkillboxes.find(function (aSkill) { return aSkill.skillTitle === oldSkillTitle; });
            var orderOnGrid = _this.arraySkillboxes.indexOf(oldSkill);
            _this.movePagesToNewSkill(newSkill, oldSkill); // Link the pages to the new skill title.
            // Deletes the old skill without deleting the pages.
            var address = _this.server + '/api/v1/skill/' + oldSkill.skillID;
            var req = _this.http.delete(address);
            req.subscribe();
            _this.arraySkillboxes.splice(orderOnGrid, 1);
            // Now to add the new one.
            _this.onSendSkill(newSkill);
        }, 2000);
    };
    ServerService.prototype.movePagesToNewSkill = function (newSkill, oldSkill) {
        var thePages = this.getPages(oldSkill);
        // receiving the old skill but also have the global orderOnGrid
        for (var _i = 0, _a = Object.keys(thePages); _i < _a.length; _i++) {
            var index = _a[_i];
            var eachPage = thePages[index];
            var aPage = {
                title: eachPage.title,
                content: eachPage.content,
                imgURL: eachPage.imgURL,
                skill: newSkill.skillTitle,
                editDate: eachPage.editDate
            };
            var address = this.server + '/api/v1/page/' + eachPage.id;
            var req = this.http.put(address, aPage);
            req.subscribe();
        }
    };
    ServerService.prototype.onToogleEditor = function () {
        if (this.showSkillEditor === true) {
            this.showSkillEditor = false;
            this.showSkillEditorText = 'Show Editor';
        }
        else {
            this.showSkillEditor = true;
            this.showSkillEditorText = 'Hide Editor';
        }
    };
    ServerService.prototype.getPages = function (aSkill) {
        var thePages = this.arrayAllPages.filter(function (item) {
            return item.skill === aSkill.skillTitle;
        });
        return thePages;
    };
    // New setters and getters
    ServerService.prototype.getArraySkillBoxes = function () {
        return this.arraySkillboxes;
    };
    ServerService.prototype.createOrError = function () {
        this.router.navigate(['/error']);
    };
    ServerService.prototype.getShowSkillEditorText = function () {
        return this.showSkillEditorText;
    };
    ServerService.prototype.getShowSkillEditor = function () {
        return this.showSkillEditor;
    };
    ServerService.prototype.getIsPageEnabled = function () {
        return this.isPageEnabled;
    };
    ServerService.prototype.getShowSkillbox = function () {
        return this.showSkillBox;
    };
    ServerService.prototype.addDescriptionToSkill = function (theID, content) {
        var _this = this;
        // Deletes the old skill without deleting the pages.
        var id = theID;
        var theSkillToChange = this.arraySkillboxes[id];
        var formattedItem;
        var amendedSkill = {
            title: theSkillToChange.skillTitle,
            logoURL: theSkillToChange.skillLogoURL,
            mastery: theSkillToChange.skillLevel,
            descriptHTML: content
        };
        var address = this.server + '/api/v1/skill/' + theSkillToChange.skillID;
        var results;
        var req = this.http.put(address, amendedSkill);
        req.subscribe(function (data) {
            results = data;
            formattedItem = new __WEBPACK_IMPORTED_MODULE_2__skillbox_model__["a" /* Skillbox */](results.newID, amendedSkill.title, amendedSkill.logoURL, amendedSkill.mastery, amendedSkill.descriptHTML);
            _this.arraySkillboxes.splice(id, 1);
            _this.arraySkillboxes.push(formattedItem);
            _this.arraySkillboxes.sort(function (n1, n2) { return _this.sortSkills(n1, n2); });
        });
    };
    ServerService.prototype.onRemovePage = function (thePage) {
        var _this = this;
        var address = this.server + '/api/v1/page/' + thePage.id;
        var req = this.http.delete(address);
        req.subscribe(function (data) {
            var id = _this.arrayAllPages.indexOf(thePage);
            _this.arrayAllPages.splice(id, 1);
            _this.router.navigate(['/skills', thePage.skill]);
        });
    };
    ServerService.prototype.getAllPagesList = function () {
        var _this = this;
        // This must be rewrittent o avoid reading the whole set of skills
        this.arrayAllPages = [];
        var address = this.server + '/api/v1/pages';
        this.http.get(address).subscribe(function (data) {
            // Read the result field from the JSON response.
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.arrayAllPages.push(new __WEBPACK_IMPORTED_MODULE_1__page_model__["a" /* Page */](data[entry]._id, data[entry].title, data[entry].content, data[entry].skill, data[entry].editDate, data[entry].imgURL));
            }
        });
    };
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('SERVER_URL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, String])
], ServerService);

var _a, _b, _c;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/skill-list/single-skill-box/single-skill-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Sans-Serif;\n}\n\n#skillBox {\n  border: 1px dashed lightgrey;\n  width: 130px;\n  height: 100px;\n  text-align: center;\n  background-color: #f8f8f8;\n  margin: 2px;\n}\n\n\n\ntable {\n  border-collapse: collapse;\n}\n\n\n\n#knownTitle, #hoveredTitle, #learningTitle, #queuedTitle, #legendTitle {\n  position: absolute;\n  opacity: 0.9;\n  color: black;\n  font-size: 14px;\n  padding: 4px;\n  font-weight: bold;\n}\n\n#knownTitle, #knownTitleCollapsed  {\n  background-color: rgba(41, 155, 255, 0.8);\n}\n\n\n#learningTitle, #learningTitleCollapsed {\n  background-color: #b3ffb3;\n}\n\n#queuedTitle, #queuedTitleCollapsed {\n  background-color: #ffef3f;\n}\n\n\n\n\n\n#hoveredTitle {\n  background-color: black;\n  font-weight: normal;\n  color: yellow;\n}\n\n#legendTitle {\n  background-color: black;\n  color: white\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-content {\n  top: 0px;\n  display: none;\n  position: absolute;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  z-index: 1;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n#theContent {\n  background-color: black;\n  padding: 10px;\n\n}\n\n#theContent p, a, a:active {\n  color: yellow;\n  text-decoration: none;\n}\n\n#theContent a:hover {\n  color: red;\n  text-decoration: none;\n}\n\n#theContent a.new {\n  color: grey;\n  font-weight: normal;\n}\n\n#theLogo {\n  max-width: 130px;\n  max-height: 100px;\n  padding: 5px;\n}\n\n#normalLogo {\n  height: 100px;\n}\n\n#hooveredLogo {\n  height: 100px;\n  background: repeating-linear-gradient(\n    45deg,\n    transparent,\n    transparent 10px,\n    #ffb3b3 10px,\n    #ffb3b3 20px\n  ),\n    /* on \"bottom\" */ linear-gradient(\n    to bottom,\n    #ffffb3,\n    #ffffb3\n  );\n}\n\n\n\n#listOfSkills {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n}\n\n\n\nbutton,\nbutton:active,\nbutton:focus,\nbutton:hover,\n.btn,\n.btn:active,\n.btn:focus,\n.btn:hover {\n  outline: none !important;\n}\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skill-list/single-skill-box/single-skill-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"listOfSkills\" *ngIf=\"!isCollapsed\">\n<div class=\"dropdown\" >\n  <table id=\"skillBox\"> <tr>\n    <p [id]=getStyle()>{{skill.skillTitle}}\n    </p>\n\n    <td id=\"normalLogo\"><img id=\"theLogo\" [src]=\"skill.skillLogoURL\"></td>\n  </tr>\n  </table>\n\n  <div class=\"dropdown-content\">\n\n    <table id=\"skillBox\">\n      <div id=\"hoveredTitle\">{{skill.skillTitle}}</div><tr>\n\n      <td id=\"hooveredLogo\" [routerLink]=\"['/skills',skill.skillTitle]\"><img id=\"theLogo\" [src]=\"skill.skillLogoURL\"></td>\n\n    </tr>\n\n      <tr>\n        <td *ngIf=\"!(myPages.length===0)\" id=\"theContent\">\n\n          <a  *ngFor=\"let subskill of myPages;\"\n             [routerLink]=\"['/skills',subskill.skill, subskill.title]\">{{subskill.title}}\n          </a>\n\n        </td>\n\n      </tr>\n    </table>\n  </div>\n</div>\n</div>\n\n\n<accordion-group *ngIf=\"isCollapsed\"  >\n    <div accordion-heading >\n      {{skill.skillTitle}}\n      <img class=\"pull-right flot-xs-right\" style=\"max-height:30px; max-width:150px\" [src]=\"skill.skillLogoURL\">\n\n    </div>\n  <div class=\"list-group-item\" [id]=\"getStyle()\">Status: <strong>{{skill.skillLevel}}</strong></div>\n  <div class=\"list-group-item\" [routerLink]=\"['/skills',skill.skillTitle]\">About {{skill.skillTitle}}</div>\n    <div class=\"list-group-item\" *ngFor=\"let subskill of myPages;\"\n     [routerLink]=\"['/skills',subskill.skill, subskill.title]\">{{subskill.title}}\n  </div>\n\n\n\n</accordion-group>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/skill-list/single-skill-box/single-skill-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSkillBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skillbox_model__ = __webpack_require__("../../../../../src/app/skillbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleSkillBoxComponent = (function () {
    function SingleSkillBoxComponent() {
        this.isCollapsed = false;
        this.onSelectedSkill = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.updateWidthValue();
    }
    SingleSkillBoxComponent.prototype.ngOnInit = function () {
    };
    /* Depreacated but not deleted from others
    onClickedSskill() {
      this.onSelectedSkill.emit(this.skill);
    }
    */
    SingleSkillBoxComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isCollapsed = false;
        }
        else {
            this.isCollapsed = true;
        }
    };
    SingleSkillBoxComponent.prototype.getStyle = function () {
        if (!(this.isCollapsed)) {
            return this.skill.getStyle();
        }
        else {
            var original = this.skill.getStyle();
            return original + 'Collapsed';
        }
    };
    return SingleSkillBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__skillbox_model__["a" /* Skillbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__skillbox_model__["a" /* Skillbox */]) === "function" && _a || Object)
], SingleSkillBoxComponent.prototype, "skill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], SingleSkillBoxComponent.prototype, "myPages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], SingleSkillBoxComponent.prototype, "onSelectedSkill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SingleSkillBoxComponent.prototype, "updateWidthValue", null);
SingleSkillBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-single-skill-box',
        template: __webpack_require__("../../../../../src/app/skill-list/single-skill-box/single-skill-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skill-list/single-skill-box/single-skill-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingleSkillBoxComponent);

var _a, _b;
//# sourceMappingURL=single-skill-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/skill-list/skill-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#listOfSkills {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n}\n\nbutton,\nbutton:active,\nbutton:focus,\nbutton:hover,\n.btn,\n.btn:active,\n.btn:focus,\n.btn:hover {\n  outline: none !important;\n}\n\n\n#userControls {\n  border: 1px dashed lightgrey;\n  width: 90px;\n  height: 100px;\n  text-align: center;\n  background-color:white;\n  margin: 2px;\n}\n\n\n.dropdown {\n  position: relative;\n}\n\n#normalLogo {\n  height: 100px;\n}\n\n\n\n\n\n\n\n* {\n  font-family: Sans-Serif;\n}\n\n#skillBox {\n  border: 1px dashed lightgrey;\n  width: 130px;\n  height: 100px;\n  text-align: center;\n  background-color: #f8f8f8;\n  margin: 2px;\n}\n\n\n\ntable {\n  border-collapse: collapse;\n}\n\n#knownTitle, #hoveredTitle, #learningTitle, #queuedTitle, #legendTitle {\n  position: absolute;\n  opacity: 0.9;\n  color: black;\n  font-size: 14px;\n  padding: 4px;\n  font-weight: bold;\n}\n\n#knownTitle {\n  background-color: rgba(41, 155, 255, 0.8);\n}\n\n\n#learningTitle {\n  background-color: #00d700;\n}\n\n#queuedTitle {\n  background-color: #ffef3f;\n}\n\n\n#hoveredTitle {\n  background-color: black;\n  font-weight: normal;\n  color: yellow;\n}\n\n#legendTitle {\n  background-color: black;\n  color: white\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-content {\n  top: 0px;\n  display: none;\n  position: absolute;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  z-index: 1;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n#theContent {\n  background-color: black;\n  padding: 10px;\n\n}\n\n#theContent p, a, a:active {\n  color: yellow;\n  text-decoration: none;\n}\n\n#theContent a:hover {\n  color: red;\n  text-decoration: none;\n}\n\n#theContent a.new {\n  color: grey;\n  font-weight: normal;\n}\n\n#theLogo {\n  max-width: 130px;\n  max-height: 100px;\n  padding: 5px;\n}\n\n#normalLogo {\n  height: 100px;\n}\n\n#hooveredLogo {\n  height: 100px;\n  background: repeating-linear-gradient(\n    45deg,\n    transparent,\n    transparent 10px,\n    #ffb3b3 10px,\n    #ffb3b3 20px\n  ),\n    /* on \"bottom\" */ linear-gradient(\n    to bottom,\n    #ffffb3,\n    #ffffb3\n  );\n}\n\n\n\n#listOfSkills {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n}\n\n\n\nbutton,\nbutton:active,\nbutton:focus,\nbutton:hover,\n.btn,\n.btn:active,\n.btn:focus,\n.btn:hover {\n  outline: none !important;\n}\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skill-list/skill-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!isCollapsed\">\n\n<div class=\"panel-heading\">Skills</div>\n  <div class=\"panel-body\">\n<div id=\"listOfSkills\">\n  <!-- The skillboxes -->\n  <app-single-skill-box *ngFor=\"let skill of arraySkills; let skillNumber=index\"\n                        [skill]=\"skill\" [myPages]=\"getPages(skill)\"\n                         (onSelectedSkill)=\"skillSelected(skillNumber)\"></app-single-skill-box>\n\n  <!-- The box to Hide the Skill Editor -->\n\n</div>\n  </div>\n</div>\n\n\n<accordion style=\"width:100%\" [closeOthers]=\"oneAtATime\" *ngIf=\"isCollapsed\" >\n\n  <!-- The skillboxes -->\n  <app-single-skill-box class=\"list-group\" *ngFor=\"let skill of arraySkills; let skillNumber=index\"\n                        [skill]=\"skill\" [myPages]=\"getPages(skill)\"\n                        (onSelectedSkill)=\"skillSelected(skillNumber)\"></app-single-skill-box>\n\n</accordion>\n"

/***/ }),

/***/ "../../../../../src/app/skill-list/skill-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillListComponent = (function () {
    function SkillListComponent(server) {
        this.server = server;
        this.isCollapsed = false;
        this.oneAtATime = true;
        this.selectedSkill = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.emitToggleEditor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.updateWidthValue();
    }
    SkillListComponent.prototype.ngOnInit = function () {
    };
    SkillListComponent.prototype.skillSelected = function (skillIDinArray) {
        this.selectedSkill.emit(skillIDinArray);
    };
    SkillListComponent.prototype.onToogleEditor = function () {
        this.emitToggleEditor.emit('Done');
    };
    SkillListComponent.prototype.getPages = function (skill) {
        return this.server.getPages(skill);
    };
    SkillListComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isCollapsed = false;
        }
        else {
            this.isCollapsed = true;
        }
    };
    return SkillListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SkillListComponent.prototype, "loggedIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], SkillListComponent.prototype, "arraySkills", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SkillListComponent.prototype, "toggleButtonText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], SkillListComponent.prototype, "selectedSkill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], SkillListComponent.prototype, "emitToggleEditor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillListComponent.prototype, "updateWidthValue", null);
SkillListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skill-list',
        template: __webpack_require__("../../../../../src/app/skill-list/skill-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skill-list/skill-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _c || Object])
], SkillListComponent);

var _a, _b, _c;
//# sourceMappingURL=skill-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/skillbox.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skillbox; });
var Skillbox = (function () {
    function Skillbox(skillID, skillTitle, skillLogoURL, skillLevel, descriptHTML) {
        this.skillID = skillID;
        this.skillTitle = skillTitle;
        this.skillLogoURL = skillLogoURL;
        this.skillLevel = skillLevel;
        this.descriptHTML = descriptHTML;
    }
    Skillbox.prototype.getStyle = function () {
        switch (this.skillLevel) {
            case 'Familiar': {
                return 'knownTitle';
            }
            case 'Learning': {
                return 'learningTitle';
            }
            case 'Queued': {
                return 'queuedTitle';
            }
        }
    };
    return Skillbox;
}());

//# sourceMappingURL=skillbox.model.js.map

/***/ }),

/***/ "../../../../../src/app/skilleditor/skilleditor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skilleditor/skilleditor.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Skill Editor</div>\n    <div class=\"panel-body\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Skill</span>\n        <input [(ngModel)]=\"theSkill.skillTitle\" type=\"text\" class=\"form-control\" name=\"msg\"\n               placeholder=\"The name of the skill\">\n      </div>\n      <br>\n\n\n\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Logo</span>\n        <input [(ngModel)]=\"theSkill.skillLogoURL\" type=\"text\" class=\"form-control\" name=\"msg\"\n               placeholder=\"A valid URL with the logo\">\n      </div>\n      <br>\n      <form *ngIf=\"!isNew\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Page within the skill\" [(ngModel)]=\"moreContent\"\n                 [ngModelOptions]=\"{standalone: true}\">\n          <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" (click)=\"addPageToSkill()\">\n              <i class=\"glyphicon glyphicon-plus\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n\n\n      <div class=\"form-group\">\n        <label for=\"level\">Level of Mastery:</label>\n        <select [(ngModel)]=\"theSkill.skillLevel\" class=\"form-control\" id=\"level\">\n\n          <option>Familiar</option>\n          <option selected=\"selected\">Learning</option>\n          <option>Queued</option>\n\n        </select></div></div>\n\n\n        <div class=\"panel-footer\">\n\n          <button class=\"btn btn-xs btn-danger\" (click)=\"onCancel()\">Cancel\n          </button>\n          <!--\n          <button class=\"btn btn-xs btn-primary\" [disabled]=\"editorAddModifyButtonVisible\"\n                  *ngIf=\"isExistingSkill\" (click)=\"onAmendSkill()\">Modify\n          </button>\n     <button style=\" float: right;\" type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"onClearFields()\">\n        Clear\n      </button>\n\n    </div>-->\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/skilleditor/skilleditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkilleditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skillbox_model__ = __webpack_require__("../../../../../src/app/skillbox.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_model__ = __webpack_require__("../../../../../src/app/page.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkilleditorComponent = (function () {
    function SkilleditorComponent(router) {
        this.router = router;
        this.onAddedPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SkilleditorComponent.prototype.ngOnInit = function () {
    };
    SkilleditorComponent.prototype.addPageToSkill = function () {
        var aPage = new __WEBPACK_IMPORTED_MODULE_2__page_model__["a" /* Page */]('', this.moreContent, '', this.theSkill.skillTitle, new Date(), 'empty');
        this.onAddedPage.emit(aPage);
        this.moreContent = '';
    };
    SkilleditorComponent.prototype.onCancel = function () {
        this.cancelEdit.emit(0);
    };
    return SkilleditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__skillbox_model__["a" /* Skillbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__skillbox_model__["a" /* Skillbox */]) === "function" && _a || Object)
], SkilleditorComponent.prototype, "theSkill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SkilleditorComponent.prototype, "moreContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SkilleditorComponent.prototype, "isNew", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], SkilleditorComponent.prototype, "onAddedPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], SkilleditorComponent.prototype, "cancelEdit", void 0);
SkilleditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skilleditor',
        template: __webpack_require__("../../../../../src/app/skilleditor/skilleditor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skilleditor/skilleditor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SkilleditorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=skilleditor.component.js.map

/***/ }),

/***/ "../../../../../src/app/skillpage/skillpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skillpage/skillpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"doesExist\" class=\"col-xs-12 col-sm-9 cold-md-9 col-lg-10 col-xl-11\">\n\n  <!--The Skill editor-->\n  <div *ngIf=\"isEdit\" class=\"row\">\n  <div class=\"col-xs-9\">\n    <app-skilleditor [isNew]=\"isNew\" [theSkill]=\"theSkill\" [moreContent]=\"moreContent\" (cancelEdit)=\"onCancelEdit($event)\" (onAddedPage)=\"onAddPage($event)\"></app-skilleditor>\n  </div>\n  <div class=\"col-xs-3\">\n    <app-index [noPages]=\"noPages\" [thePages]=\"thePages\"\n               [theSkill]=\"theSkill\" ></app-index>\n  </div>\n</div>\n\n\n  <!--The Skill Page-->\n  <h1>{{theSkill.skillTitle}}\n    <div *ngIf=\"getLoggedStatus()\" class=\"btn-group\">\n\n      <button class=\"btn btn-xs btn-primary\" *ngIf=\"!isEdit\" (click)=\"onToggleEditor()\">Edit\n      </button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-xs btn-primary\" (click)=\"onSaveSkill()\">{{pageSavingButtonLabel}}\n        <app-spinner *ngIf=\"showSpinner\"></app-spinner>\n      </button>\n      <button *ngIf=\"isEdit\" class=\"btn btn-xs btn-danger\" (click)=\"onRemoveSkill()\">Delete Skill</button>\n    </div>\n  </h1>\n  <!-- This is the index-->\n  <app-index *ngIf=\"!isEdit\" style=\"margin-left: 20px; float:right\" [noPages]=\"noPages\" [thePages]=\"thePages\"\n             [theSkill]=\"theSkill\" ></app-index>\n  <div *ngIf=\"!isEdit\" [froalaView]=\"theSkill.descriptHTML\"></div>\n  <div *ngIf=\"isEdit\" [froalaEditor]=\"froalaOptions\" [(froalaModel)]=\"theSkill.descriptHTML\"></div>\n  <br>\n</div>\n\n<div *ngIf=\"isLoading\"><app-loader></app-loader></div>\n<div *ngIf=\"!doesExist && !isLoading\" class=\"col-xs-12 col-sm-9 cold-md-9 col-lg-10 col-xl-11\">\n  <h1>The skill <strong>{{addressSkill}}</strong> has no section</h1>\n  <p>Would you like to create it?</p>\n  <button *ngIf=\"getLoggedStatus()\" class=\"btn btn-primary\" (click)=\"createSkill()\">Yes, please!</button>\n  <p *ngIf=\"!getLoggedStatus()\" >You will need to <strong>log-in</strong> first</p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/skillpage/skillpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skillbox_model__ = __webpack_require__("../../../../../src/app/skillbox.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SkillpageComponent = (function () {
    function SkillpageComponent(titleService, metaService, route, server, user) {
        var _this = this;
        this.titleService = titleService;
        this.metaService = metaService;
        this.route = route;
        this.server = server;
        this.user = user;
        this.isEdit = false;
        this.pageSavingButtonLabel = 'Save Skill';
        this.showSpinner = false;
        this.theSkill = new __WEBPACK_IMPORTED_MODULE_3__skillbox_model__["a" /* Skillbox */]('', '', '', 'Learning', '');
        this.isSmallScreen = false;
        this.noPages = true;
        this.isNew = false;
        this.isLoading = true;
        this.doesExist = false;
        this.froalaOptions = this.server.globalFroala;
        this.updateWidthValue();
        route.params.subscribe(function (params) {
            _this.addressSkill = params['skill'];
            if (!_this.addressSkill) {
                _this.titleSkill = 'Error';
                _this.textPage = 'You need to write something';
            }
            else {
                _this.waitForArrayToLoad();
            }
        });
    }
    SkillpageComponent.prototype.ngOnInit = function () {
        var isActive = function (cmd) {
            var blocks = this.selection.blocks();
            var tag;
            if (blocks.length) {
                var blk = blocks[0];
                tag = 'N';
                var default_tag = this.html.defaultTag();
                if (blk.tagName.toLowerCase() !== default_tag && blk !== this.el) {
                    tag = blk.tagName;
                }
            }
            if (['LI', 'TD', 'TH'].indexOf(tag) >= 0) {
                tag = 'N';
            }
            return tag.toLowerCase() === cmd;
        };
        $.FroalaEditor.DefineIcon('alert', { NAME: 'info' });
        $.FroalaEditor.RegisterCommand('alert', {
            title: 'Hello',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                alert('Hello!');
            }
        });
        $.FroalaEditor.DefineIcon('h1', { NAME: '<strong>H1</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('h2', { NAME: '<strong>H2</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('h3', { NAME: '<strong>H3</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('h4', { NAME: '<strong>H4</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('p', { NAME: '<strong>p</strong>', template: 'text' });
        $.FroalaEditor.DefineIcon('pre', { NAME: '<strong>Code</strong>', template: 'text' });
        $.FroalaEditor.RegisterCommand('h1', {
            title: 'Heading 1',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('h2', {
            title: 'Heading 2',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('h3', {
            title: 'Heading 3',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('h4', {
            title: 'Heading 4',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('p', {
            title: 'Normal',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
        $.FroalaEditor.RegisterCommand('pre', {
            title: 'Code',
            callback: function (cmd, val, params) {
                if (isActive.apply(this, [cmd])) {
                    this.paragraphFormat.apply('N');
                }
                else {
                    this.paragraphFormat.apply(cmd);
                }
            },
            refresh: function ($btn) {
                $btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
            }
        });
    };
    SkillpageComponent.prototype.getLoggedStatus = function () {
        return this.user.getLoggedStatus();
    };
    SkillpageComponent.prototype.onToggleEditor = function () {
        this.isEdit = true;
    };
    SkillpageComponent.prototype.onSaveSkill = function () {
        var originalTitle = this.addressSkill;
        var hasChangedTitle = originalTitle === this.theSkill.skillTitle ? false : true;
        this.isEdit = false;
        if (this.isNew === false && hasChangedTitle === false) {
            this.server.addDescriptionToSkill(this.theID, this.theSkill.descriptHTML);
        }
        else if (this.isNew === false && hasChangedTitle === true) {
            this.server.onAmendSkill(this.theSkill, this.addressSkill);
        }
        else {
            this.server.onSendSkill(this.theSkill);
        }
    };
    SkillpageComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isSmallScreen = false;
        }
        else {
            this.isSmallScreen = true;
        }
    };
    SkillpageComponent.prototype.onAddPage = function (aPage) {
        var _this = this;
        this.server.addPageToSkill(aPage);
        setTimeout(function () {
            _this.updateSkill();
        }, 1000);
    };
    SkillpageComponent.prototype.waitForArrayToLoad = function () {
        var _this = this;
        // I need to simplify this
        var step = 400;
        if (this.server.arraySkillboxes.length === 0) {
            setTimeout(function () {
                console.log('Array still loading 1');
                if (_this.server.arraySkillboxes.length === 0) {
                    setTimeout(function () {
                        console.log('Array still loading 2');
                        if (_this.server.arraySkillboxes.length === 0) {
                            setTimeout(function () {
                                console.log('Array still loading 3');
                                if (_this.server.arraySkillboxes.length === 0) {
                                    setTimeout(function () {
                                        console.log('Array still loading 4');
                                    }, step);
                                }
                                else {
                                    _this.updateSkill();
                                    ;
                                }
                            }, step);
                        }
                        else {
                            _this.updateSkill();
                        }
                    }, step);
                }
                else {
                    _this.updateSkill();
                }
            }, step);
        }
        else {
            this.updateSkill();
        }
    };
    SkillpageComponent.prototype.updateSkill = function () {
        var _this = this;
        if ((this.server.getArraySkillBoxes().find(function (theSkill) { return theSkill.skillTitle === _this.addressSkill; }))) {
            this.theSkill = this.server.getArraySkillBoxes().find(function (theSkill) { return theSkill.skillTitle === _this.addressSkill; });
            this.theID = this.server.getArraySkillBoxes().indexOf(this.theSkill);
            this.thePages = this.server.getPages(this.theSkill);
            this.noPages = (this.thePages.length === 0) ? true : false;
            this.doesExist = true;
            // Meta tags
            var winTitle = 'Maikel.uk: ' + this.theSkill.skillTitle;
            this.titleService.setTitle(winTitle);
            this.metaService.addTag({ property: 'og:title', content: winTitle });
            this.metaService.addTag({ property: 'og:icon', content: this.theSkill.skillLogoURL });
            this.isLoading = false;
        }
        else {
            this.theSkill = new __WEBPACK_IMPORTED_MODULE_3__skillbox_model__["a" /* Skillbox */]('', '', '', 'Learning', '');
            this.doesExist = false;
            this.isLoading = false;
            return;
        }
    };
    SkillpageComponent.prototype.createSkill = function () {
        this.theSkill.skillTitle = this.addressSkill;
        this.isNew = true;
        this.isEdit = true;
        this.doesExist = true;
    };
    SkillpageComponent.prototype.onCancelEdit = function (someVar) {
        if (this.isNew === true) {
            this.doesExist = false;
        }
        this.isEdit = false;
    };
    SkillpageComponent.prototype.onRemoveSkill = function () {
        // this.server.onRemoveSkill(
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You\'ll lose the skill and any pages attached to it',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Yes, delete it!',
            showLoaderOnConfirm: true,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            cancelButtonClass: 'btn btn-primary',
            focusCancel: true,
            preConfirm: function (data) {
                return new Promise(function (resolve) {
                    resolve();
                });
            }
        }).then(function () {
            _this.server.onRemoveSkill(_this.theSkill);
        }).catch(__WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.noop);
    };
    return SkillpageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillpageComponent.prototype, "updateWidthValue", null);
SkillpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skillpage',
        template: __webpack_require__("../../../../../src/app/skillpage/skillpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skillpage/skillpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Meta */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _e || Object])
], SkillpageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=skillpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/skillpreview/skillpreview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#skillBox {\n  border: 1px dashed lightgrey;\n  width: 130px;\n  height: 100px;\n  text-align: center;\n  background-color: #f8f8f8;\n  margin: 2px;\n}\n\n#normalLogo {\n  height: 100px;\n}\n\n#knownTitle, #hoveredTitle, #learningTitle, #queuedTitle, #memorisingTitle, #legendTitle {\n  position: absolute;\n  opacity: 0.9;\n  color: black;\n  font-size: 14px;\n  padding: 4px;\n  font-weight: bold;\n}\n\n#knownTitle {\n  background-color: rgba(41, 155, 255, 0.8);\n}\n\n\n#learningTitle {\n  background-color: #b3ffb3;\n}\n\n#queuedTitle {\n  background-color: #ffef3f;\n}\n\n\n#hoveredTitle {\n  background-color: black;\n  font-weight: normal;\n  color: yellow;\n}\n\n\n#theContent {\n  background-color: black;\n  padding: 10px;\n\n}\n\n#theContent p, a, a:active {\n  color: yellow;\n  text-decoration: none;\n}\n\n#theContent a:hover {\n  color: red;\n  text-decoration: none;\n}\n\n#theContent a.new {\n  color: grey;\n  font-weight: normal;\n}\n\n\n#theLogo {\n  max-width: 130px;\n  max-height: 100px;\n  padding: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skillpreview/skillpreview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\n\n  <div class=\"panel-heading\">Preview</div>\n  <div class=\"panel-body\">\n\n\n\n    <table id=\"skillBox\" style=\"margin: 0px auto;\">\n      <tr>\n        <th [id]=theSkill.getStyle()>\n\n          {{theSkill.skillTitle}}\n        </th>\n      </tr>\n      <tr>\n        <td id=\"normalLogo\"><img id=\"theLogo\" [src]=\"theSkill.skillLogoURL\"></td>\n      </tr>\n      <tr>\n        <td id=\"theContent\">\n          <a *ngFor=\"let subskill of thePages;\"\n             [routerLink]=\"['/skills',subskill.skill, subskill.title]\">{{subskill.title}}\n          </a>\n\n\n        </td>\n      </tr>\n    </table>\n    <!--<button class=\"btn btn-danger\"  (click)=\"globals.onClearFields()\">Clear</button>-->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skillpreview/skillpreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillpreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skillbox_model__ = __webpack_require__("../../../../../src/app/skillbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillpreviewComponent = (function () {
    function SkillpreviewComponent(globals, user) {
        this.globals = globals;
        this.user = user;
    }
    SkillpreviewComponent.prototype.ngOnInit = function () {
    };
    SkillpreviewComponent.prototype.getLoggedStatus = function () {
        return this.user.getLoggedStatus();
    };
    return SkillpreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__skillbox_model__["a" /* Skillbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__skillbox_model__["a" /* Skillbox */]) === "function" && _a || Object)
], SkillpreviewComponent.prototype, "theSkill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], SkillpreviewComponent.prototype, "thePages", void 0);
SkillpreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skillpreview',
        template: __webpack_require__("../../../../../src/app/skillpreview/skillpreview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skillpreview/skillpreview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _c || Object])
], SkillpreviewComponent);

var _a, _b, _c;
//# sourceMappingURL=skillpreview.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = " <div [ngClass]=\"{'col-md-9': getShowSkillEditor(), 'col-sm-9': getShowSkillEditor(),\n     'col-lg-10': getShowSkillEditor(), 'col-xl-11':getShowSkillEditor(), 'col-md-12':getShowSkillEditor() && getLoggedStatus(),\n     'col-sm-12':getShowSkillEditor() && getLoggedStatus()}\" class=\"col-xs-12\">\n      <app-skill-list *ngIf=\"getShowSkillbox()\" [loggedIn]=\"getLoggedStatus()\" [arraySkills]=\"getSkillBoxes()\"\n                      [toggleButtonText]=\"getSkillEditorText()\" (emitToggleEditor)=\"editorToggled($event)\"></app-skill-list>\n </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SkillsComponent = (function () {
    function SkillsComponent(titleService, server, http, user) {
        this.titleService = titleService;
        this.server = server;
        this.http = http;
        this.user = user;
        this.isSmallScreen = false;
        this.updateWidthValue();
        var winTitle = 'Maikel.uk: Skills';
        this.titleService.setTitle(winTitle);
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent.prototype.getLoggedStatus = function () {
        return this.user.getLoggedStatus();
    };
    SkillsComponent.prototype.getSkillBoxes = function () {
        return this.server.getArraySkillBoxes();
    };
    SkillsComponent.prototype.getShowSkillEditor = function () {
        if (this.user.getLoggedStatus() === false) {
            return true;
        }
        else {
            return this.server.getShowSkillEditor();
        }
    };
    SkillsComponent.prototype.getShowSkillbox = function () {
        return this.server.getShowSkillbox();
    };
    SkillsComponent.prototype.getSkillEditorText = function () {
        return this.server.getShowSkillEditorText();
    };
    SkillsComponent.prototype.editorToggled = function (event) {
        this.server.onToogleEditor();
    };
    SkillsComponent.prototype.updateWidthValue = function () {
        this.screenWidthFigure = window.screen.width;
        if (this.screenWidthFigure >= 768) {
            this.isSmallScreen = false;
        }
        else {
            this.isSmallScreen = true;
        }
    };
    SkillsComponent.prototype.getPaddingBottom = function () {
        return this.isSmallScreen === false ? '100px' : '10px';
    };
    return SkillsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillsComponent.prototype, "updateWidthValue", null);
SkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _d || Object])
], SkillsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i>\n"

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-spinner',
        template: __webpack_require__("../../../../../src/app/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spinner/spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//The reason for the existence of this component is that on app.component the spinner doesn't work.
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UserService = (function () {
    function UserService(http, server) {
        this.http = http;
        this.server = server;
        this.logedin = false;
    }
    UserService.prototype.getLoggedStatus = function () {
        return this.logedin;
    };
    UserService.prototype.login = function (password) {
        var _this = this;
        var address = this.server + '/api/v1/user/' + password;
        var results;
        this.http.get(address).subscribe(function (data) {
            // Read the result field from the JSON response.
            results = data;
            if (results.password === 'true') {
                _this.logedin = true;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    title: 'Wrong Password!',
                    imageUrl: 'https://www.maikel.uk/images/gifs/tenor.gif',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-primary',
                    confirmButtonText: 'Try Again',
                });
            }
        });
    };
    UserService.prototype.logout = function () {
        this.logedin = false;
    };
    UserService.prototype.clickedLogin = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Introduce the Password',
            input: 'password',
            imageUrl: 'https://www.maikel.uk/images/logo.png',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary',
            confirmButtonText: 'Let me In',
        }).then(function (data) {
            if (!data) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    title: 'Password can\'t be blank',
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-primary',
                    confirmButtonText: 'Try Again'
                });
                return;
            }
            else {
                _this.login(data);
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('SERVER_URL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, String])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map