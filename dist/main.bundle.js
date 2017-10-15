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

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/assets/css/style.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_assignment_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assignment_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_assignment_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assignment_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_assignment_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_assignment_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_assignment_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_assignment_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_assignment_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_assignment_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_assignment_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_assignment_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_assignment_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_assignment_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_assignment_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_assignment_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_project_user_project_register_project_register_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-register/project-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_project_user_project_login_project_login_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_project_user_project_profile_project_profile_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile/project-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_project_user_project_profile_public_project_profile_public_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_project_test_api_test_api_test_component__ = __webpack_require__("../../../../../src/app/components/project/test/api-test/api-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_project_user_project_home_project_home_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_project_playlist_playlist_list_playlist_list_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_project_playlist_playlist_songs_playlist_songs_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_project_playlist_playlist_search_playlist_search_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_project_playlist_playlist_new_playlist_new_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_project_playlist_playlist_edit_playlist_edit_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_project_playlist_playlist_add_playlist_add_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_assignment_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_assignment_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_assignment_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_assignment_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_assignment_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_assignment_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_assignment_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_assignment_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_assignment_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_assignment_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_assignment_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_assignment_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_assignment_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_assignment_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_assignment_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_assignment_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_assignment_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_project_user_project_register_project_register_component__["a" /* ProjectRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_project_user_project_login_project_login_component__["a" /* ProjectLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_project_user_project_profile_project_profile_component__["a" /* ProjectProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_project_user_project_profile_public_project_profile_public_component__["a" /* ProjectProfilePublicComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_project_test_api_test_api_test_component__["a" /* ApiTestComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_project_user_project_home_project_home_component__["a" /* ProjectHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_project_playlist_playlist_list_playlist_list_component__["a" /* PlaylistListComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_project_playlist_playlist_songs_playlist_songs_component__["a" /* PlaylistSongsComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_project_playlist_playlist_search_playlist_search_component__["a" /* PlaylistSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_project_playlist_playlist_new_playlist_new_component__["a" /* PlaylistNewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_project_playlist_playlist_edit_playlist_edit_component__["a" /* PlaylistEditComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_11__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_12__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_13__services_project_service_client__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_14__services_playlist_service_client__["a" /* PlaylistService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_assignment_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_assignment_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_assignment_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_assignment_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_assignment_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_assignment_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_assignment_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_assignment_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_assignment_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_assignment_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_assignment_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_assignment_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_project_user_project_login_project_login_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_project_user_project_register_project_register_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-register/project-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_project_user_project_home_project_home_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_project_user_project_profile_project_profile_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile/project-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_project_user_project_profile_public_project_profile_public_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_project_test_api_test_api_test_component__ = __webpack_require__("../../../../../src/app/components/project/test/api-test/api-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_project_playlist_playlist_list_playlist_list_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_project_playlist_playlist_songs_playlist_songs_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_project_playlist_playlist_search_playlist_search_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_project_playlist_playlist_new_playlist_new_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_project_playlist_playlist_edit_playlist_edit_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_project_playlist_playlist_add_playlist_add_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.ts");
/**
 * Created by sesha on 7/26/17.
 *
 * creating a component:
 * ng g component <component name>
 * update this file for new routing
 * you may need to update import path in app.module.ts
 */



























var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_assignment_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_assignment_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_assignment_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_assignment_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_10__components_assignment_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_11__components_assignment_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_9__components_assignment_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_assignment_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_assignment_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_6__components_assignment_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_assignment_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_13__components_assignment_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_assignment_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'project/test', component: __WEBPACK_IMPORTED_MODULE_20__components_project_test_api_test_api_test_component__["a" /* ApiTestComponent */] },
    { path: 'project/login', component: __WEBPACK_IMPORTED_MODULE_15__components_project_user_project_login_project_login_component__["a" /* ProjectLoginComponent */] },
    { path: 'project/register', component: __WEBPACK_IMPORTED_MODULE_16__components_project_user_project_register_project_register_component__["a" /* ProjectRegisterComponent */] },
    //{path: 'project/user/:uid',         component: ProjectProfileComponent},
    //{path: 'project/user/:uid/profile', component: ProjectProfilePublicComponent},
    //http://onehungrymind.com/named-router-outlets-in-angular-2/
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_17__components_project_user_project_home_project_home_component__["a" /* ProjectHomeComponent */],
        children: [
            { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_18__components_project_user_project_profile_project_profile_component__["a" /* ProjectProfileComponent */], outlet: 'project' },
            { path: 'user/:uid/profile/:puid', component: __WEBPACK_IMPORTED_MODULE_19__components_project_user_project_profile_public_project_profile_public_component__["a" /* ProjectProfilePublicComponent */], outlet: 'project' },
            { path: 'user/:uid/list', component: __WEBPACK_IMPORTED_MODULE_21__components_project_playlist_playlist_list_playlist_list_component__["a" /* PlaylistListComponent */], outlet: 'project' },
            { path: 'user/:uid/list/new', component: __WEBPACK_IMPORTED_MODULE_24__components_project_playlist_playlist_new_playlist_new_component__["a" /* PlaylistNewComponent */], outlet: 'project' },
            { path: 'user/:uid/list/search', component: __WEBPACK_IMPORTED_MODULE_23__components_project_playlist_playlist_search_playlist_search_component__["a" /* PlaylistSearchComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid', component: __WEBPACK_IMPORTED_MODULE_25__components_project_playlist_playlist_edit_playlist_edit_component__["a" /* PlaylistEditComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/songs', component: __WEBPACK_IMPORTED_MODULE_22__components_project_playlist_playlist_songs_playlist_songs_component__["a" /* PlaylistSongsComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/add', component: __WEBPACK_IMPORTED_MODULE_26__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/add/:videoId', component: __WEBPACK_IMPORTED_MODULE_26__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */], outlet: 'project' },
        ] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES, { enableTracing: false });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid + '/website/' + wid + '/page']\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.name\"\n             name=\"pageName\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pageDescription\">Page Title</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.title\"\n             name=\"pageTitle\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"delete()\" >Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = (function () {
    function PageEditComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.uid = "";
        this.wid = "";
        this.pid = "";
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.reload();
        });
    };
    PageEditComponent.prototype.reload = function () {
        this.current_page = this._service.findPageById(this.pid);
    };
    PageEditComponent.prototype.saveChanges = function () {
        this._service.updatePage(this.pid, this.current_page);
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
    };
    PageEditComponent.prototype.delete = function () {
        this._service.deletePage(this.pid);
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid + '/website/']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/'+wid+'/page/new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let page of pages\"\n        class=\"list-group-item list-item-borderless\">\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + page._id + '/widget']\"\n           >{{page.name}}</a>\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + page._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n    </li>\n\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.uid = "";
        this.wid = "";
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.reload();
        });
    };
    PageListComponent.prototype.reload = function () {
        this.pages = this._service.findPagesByWebsiteId(this.wid);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid + '/website/' + wid + '/page']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>New Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.name\"\n             name=\"pageName\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pageDescription\">Page Title</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.title\"\n             name=\"pageTitle\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             required/>\n    </div>\n  </form>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNewComponent = (function () {
    function PageNewComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.uid = "";
        this.wid = "";
        this.pid = "";
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.reload();
        });
    };
    PageNewComponent.prototype.reload = function () {
        this.current_page = {
            name: "New Page",
            title: "New Page"
        };
    };
    PageNewComponent.prototype.saveChanges = function () {
        this._service.createPage(this.wid, this.current_page);
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <h1>Login</h1>\n\n    <!--\n    jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial\n    -->\n    <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <input type=\"text\"\n             [(ngModel)]=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             required\n             autofocus/>\n      <div *ngIf=\"invalid_username\" class=\"help-block\">\n        Username not Found\n      </div>\n\n      <input type=\"password\"\n             [(ngModel)]=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             class=\"form-control\"\n             required\n             />\n      <div *ngIf=\"invalid_password\" class=\"help-block\">\n        Invalid Username or Password\n      </div>\n\n      <button type=\"submit\" [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\">Login</button>\n\n    </form>\n\n    <a class=\"btn btn-success btn-block\"\n       [routerLink]=\"['/register']\">Register</a>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = "";
        this.password = "";
        this.invalid_username = false;
        this.invalid_password = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.invalid_password = false;
        this.invalid_username = false;
        var code = this._service.validateUser(this.username, this.password, function (user) { return _this.router.navigate(["/user/" + user._id]); });
        if (code == 2) {
            this.invalid_password = true;
        }
        else if (code == 1) {
            this.invalid_username = true;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"changes_saved\" class=\"help-block\">Changes Saved</div>\n\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             [(ngModel)]=\"user.email\"\n             name=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             class=\"form-control\"\n             placeholder=\"First Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             class=\"form-control\"\n             placeholder=\"Last Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/'+ uid + '/website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"logout()\">Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.changes_saved = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid']; // (+) converts string 'id' to a number
            _this.reload();
        });
    };
    ProfileComponent.prototype.reload = function () {
        this.user = this._service.findUserById(this.uid);
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(["/login"]);
    };
    ProfileComponent.prototype.saveChanges = function () {
        this._service.updateUser(this.uid, this.user);
        this.changes_saved = true;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/assignment/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid container-margin\">\n  <h1>Register</h1>\n\n  <form name=\"form\" (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <input type=\"text\"\n           [(ngModel)]=\"firstName\"\n           name=\"firstName\"\n           placeholder=\"First Name\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"text\"\n           [(ngModel)]=\"lastName\"\n           name=\"lastName\"\n           placeholder=\"Last Name\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"text\"\n           [(ngModel)]=\"username\"\n           name=\"username\"\n           placeholder=\"username\"\n           class=\"form-control\"\n           required/>\n\n    <div *ngIf=\"invalid_username\" class=\"help-block\">Username Already Exists</div>\n\n    <input type=\"email\"\n           [(ngModel)]=\"email\"\n           name=\"email\"\n           placeholder=\"email\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"password\"\n           [(ngModel)]=\"password\"\n           name=\"password\"\n           placeholder=\"password\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"password\"\n           [(ngModel)]=\"password_check\"\n           name=\"password_check\"\n           placeholder=\"retype password\"\n           class=\"form-control\"\n           required/>\n\n    <div *ngIf=\"password!=password_check\" class=\"help-block\">Passwords do not match</div>\n\n  <button type=\"submit\" [disabled]=\"!f.valid\"\n          class=\"btn btn-primary btn-block\">Register</button>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/login']\">Cancel</a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.username = "";
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.password = "";
        this.password_check = "";
        this.invalid_username = false;
        this.invalid_password = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.invalid_username = false;
        this.invalid_password = false;
        if (this.password != this.password_check) {
            this.invalid_password = true;
            return;
        }
        if (this._service.findUserByUsername(this.username)) {
            this.invalid_username = true;
            return;
        }
        var user = this._service.createUser({
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        });
        this.router.navigate(["/login"]);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n      <div class=\"row\">\n      <div class=\"col-sm-4 hidden-xs padding-none\" >\n\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Website</b>\n        </a>\n\n        <!--tick mark-->\n        <!--TODO: link?-->\n        <p class=\"navbar-text pull-right glyph-padding-short\">\n          <a [routerLink]=\"['/user/'+ uid + '/website/new']\"\n             class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n\n      </div>\n\t  <!-- end lhs column-->\n\n      <!-- rhs (small) column-->\n      <div class=\"col-sm-8 hidden-xs padding-left-default padding-right-none\">\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Edit Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div>\n\t  <!-- end rhs column-->\n      <!-- rhs (normal) column-->\n      <div class=\"col-xs-12 hidden-sm padding-left-default padding-right-none\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Edit Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div> <!-- end rhs (normal) column-->\n      </div> <!-- end row-->\n  </div>\n\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs padding-none\">\n\n\n        <ul class=\"list-group\">\n          <li *ngFor=\"let website of websites\"\n              class=\"list-group-item list-item-borderless\">\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id + '/page']\">{{website.name}}</a>\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id]\"\n                 class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n        </li>\n        </ul>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8 padding-content\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n             [(ngModel)]=\"current_site.name\"\n             name=\"websiteName\"\n             class=\"form-control\"\n             placeholder=\"Website Name\"\n             required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea rows=\"5\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"current_site.description\"\n                    name=\"description\"\n                    id=\"websiteDescription\">{{current_site.description}}</textarea>\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.reload();
        });
    };
    WebsiteEditComponent.prototype.reload = function () {
        this.websites = this._service.findWebsitesByUser(this.uid);
        this.current_site = this._service.findWebsiteById(this.wid);
        if (!this.current_site) {
            //this.current_site  = {name:"ERROR",description:"ERROR"}
            this.router.navigate(["/user/" + this.uid + "/website"]);
        }
    };
    WebsiteEditComponent.prototype.saveChanges = function () {
        this._service.updateWebsite(this.wid, this.current_site);
        this.router.navigate(["/user/" + this.uid + "/website"]);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this._service.deleteWebsite(this.wid);
        this.router.navigate(["/user/" + this.uid + "/website"]);
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-dark bg-primary  navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Website List</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let website of websites\"\n        class=\"list-group-item list-item-borderless\">\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+website._id + '/page']\">{{website.name}}</a>\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+website._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n    </li>\n  </ul>\n\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid']; // (+) converts string 'id' to a number
            _this.reload();
        });
    };
    WebsiteListComponent.prototype.reload = function () {
        this.websites = this._service.findWebsitesByUser(this.uid);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n\n      <!-- lhs column-->\n      <div class=\"col-sm-4 hidden-xs padding-none\" >\n\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Website</b>\n        </a>\n\n        <!--plus icon -->\n        <!--TODO: link?-->\n        <p class=\"navbar-text pull-right glyph-padding-short\">\n          <a [routerLink]=\"['/user/'+ uid + '/website/new']\"\n             class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n\n      </div>\n\t  <!-- end lhs column-->\n\n      <!-- rhs (small) column-->\n      <div class=\"col-sm-8 hidden-xs padding-left-default padding-right-none\">\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>New Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div>\n\t  <!-- end rhs column-->\n      <!-- rhs (normal) column-->\n      <div class=\"col-xs-12 hidden-sm padding-left-default padding-right-none\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>New Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div> <!-- end rhs (normal) column-->\n      </div> <!-- end row-->\n  </div>\n\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs padding-none\">\n\n\n        <ul class=\"list-group\">\n          <li *ngFor=\"let website of websites\"\n              class=\"list-group-item list-item-borderless\">\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id + '/page']\">{{website.name}}</a>\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id]\"\n                 class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n        </li>\n        </ul>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8 padding-content\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n             [(ngModel)]=\"current_site.name\"\n             name=\"websiteName\"\n                 class=\"form-control\"\n             placeholder=\"Website Name\"\n             required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea rows=\"5\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"current_site.description\"\n                    name=\"description\"\n                    id=\"websiteDescription\">{{current_site.description}}</textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.reload();
        });
    };
    WebsiteNewComponent.prototype.reload = function () {
        this.websites = this._service.findWebsitesByUser(this.uid);
        this.current_site = {
            name: "New Website",
            description: "",
        };
    };
    WebsiteNewComponent.prototype.saveChanges = function () {
        this._service.createWebsite(this.uid, this.current_site);
        this.router.navigate(["/user/" + this.uid + "/website"]);
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default  navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/' + uid + '/website/'+ wid + '/page' + pid]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let kind of widget_types\"\n        class=\"list-group-item list-item-borderless\">\n      <a (click)=\"newWidget(kind)\">{{kind}}</a>\n    </li>\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooseComponent = (function () {
    function WidgetChooseComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.widgets = [];
        this.widget_types = [
            "Heading",
            "Label",
            "HTML",
            "Text",
            "Link",
            "Button",
            "Image",
            "Youtube",
            "Table",
            "Repeater"
        ];
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.reload();
        });
    };
    WidgetChooseComponent.prototype.reload = function () {
    };
    WidgetChooseComponent.prototype.newWidget = function (kind) {
        kind = kind.toUpperCase();
        if (kind == "HEADING" ||
            kind == "HTML" ||
            kind == "IMAGE" ||
            kind == "YOUTUBE") {
            var widget = this._service.widgetFactory(this.pid, kind);
            console.log(widget);
            this._service.createWidget(this.pid, widget);
            var url = "/user/" + this.uid +
                "/website/" + this.wid +
                "/page/" + this.pid +
                "/widget/" + widget._id;
            this.router.navigate([url]);
        }
    };
    return WidgetChooseComponent;
}());
WidgetChooseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-choose',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetChooseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-choose.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [ngSwitch]=\"widget.widgetType\">\n\n <div *ngSwitchCase=\"'HEADING'\">\n\n   <app-widget-header></app-widget-header>\n </div>\n\n <div *ngSwitchCase=\"'IMAGE'\">\n   <app-widget-image></app-widget-image>\n </div>\n\n <div *ngSwitchCase=\"'YOUTUBE'\">\n   <app-widget-youtube></app-widget-youtube>\n </div>\n\n <div *ngSwitchCase=\"'HTML'\">\n   <app-widget-html></app-widget-html>\n </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = (function () {
    function WidgetEditComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.reload();
        });
    };
    WidgetEditComponent.prototype.reload = function () {
        this.widget = this._service.findWidgetById(this.wgid);
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"titleText\">Title Text</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.text\"\n             name=\"widgetText\"\n             placeholder=\"Title Text\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetSize\">Size</label>\n      <input type=\"number\"\n             [(ngModel)]=\"widget.size\"\n             name=\"widgetSize\"\n             placeholder=\"Heading Size\"\n             class=\"form-control\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.reload();
        });
    };
    WidgetHeaderComponent.prototype.reload = function () {
        this.widget = this._service.findWidgetById(this.wgid);
        console.log(this.widget);
    };
    WidgetHeaderComponent.prototype.saveChanges = function () {
        this._service.updateWidget(this.wgid, this.widget);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    WidgetHeaderComponent.prototype.delete = function () {
        this._service.deleteWidget(this.wgid);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetText\">Raw HTML</label>\n      <textarea rows=\"5\"\n                class=\"form-control\"\n                [(ngModel)]=\"widget.text\"\n                name=\"widgetText\"\n                id=\"widgetText\">{{widget.text}}</textarea>\n    </div>\n\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.reload();
        });
    };
    WidgetHtmlComponent.prototype.reload = function () {
        this.widget = this._service.findWidgetById(this.wgid);
    };
    WidgetHtmlComponent.prototype.saveChanges = function () {
        this._service.updateWidget(this.wgid, this.widget);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    WidgetHtmlComponent.prototype.delete = function () {
        this._service.deleteWidget(this.wgid);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetUrl\">URL</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.url\"\n             name=\"widgetUrl\"\n             placeholder=\"url\"\n             class=\"form-control\"\n             required/>\n    </div>\n    <div *ngIf=\"invalid_link\" class=\"help-block\">You must supply an image link</div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetWidth\">Width</label>\n      <!-- 100px and 100% are valid-->\n      <input type=\"text\"\n             [(ngModel)]=\"widget.width\"\n             name=\"widgetWidth\"\n             placeholder=\"Width (percentage)\"\n             class=\"form-control\"\n             required/>\n    <div *ngIf=\"invalid_width\" class=\"help-block\">Width must be in the form of \"100px\" or \"100%\"</div>\n\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
        this.invalid_width = false;
        this.invalid_link = false;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.reload();
        });
    };
    WidgetImageComponent.prototype.reload = function () {
        this.widget = this._service.findWidgetById(this.wgid);
    };
    WidgetImageComponent.prototype.saveChanges = function () {
        this.invalid_width = false;
        this.invalid_link = false;
        if (!this.widget.width.endsWith("px") &&
            !this.widget.width.endsWith("%")) {
            this.invalid_width = true;
            return;
        }
        if (!this.widget.url) {
            this.invalid_link = true;
            return;
        }
        this._service.updateWidget(this.wgid, this.widget);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    WidgetImageComponent.prototype.delete = function () {
        this._service.deleteWidget(this.wgid);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetUrl\">URL</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.url\"\n             name=\"widgetUrl\"\n             placeholder=\"url\"\n             class=\"form-control\"\n             required/>\n    </div>\n    <div *ngIf=\"invalid_link\" class=\"help-block\">You must supply a youtube link</div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetWidth\">Width</label>\n      <!-- 100px and 100% are valid-->\n      <input type=\"text\"\n             [(ngModel)]=\"widget.width\"\n             name=\"widgetWidth\"\n             placeholder=\"Width (percentage)\"\n             class=\"form-control\"\n             required/>\n    <div *ngIf=\"invalid_width\" class=\"help-block\">Width must be in the form of \"100px\" or \"100%\"</div>\n\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
        this.invalid_width = false;
        this.invalid_link = false;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.reload();
        });
    };
    WidgetYoutubeComponent.prototype.reload = function () {
        this.widget = this._service.findWidgetById(this.wgid);
    };
    WidgetYoutubeComponent.prototype.saveChanges = function () {
        this.invalid_width = false;
        this.invalid_link = false;
        if (!this.widget.width.endsWith("px") &&
            !this.widget.width.endsWith("%")) {
            this.invalid_width = true;
            return;
        }
        if (!this.widget.url) {
            this.invalid_link = true;
            return;
        }
        this._service.updateWidget(this.wgid, this.widget);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        this._service.deleteWidget(this.wgid);
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget";
        this.router.navigate([url]);
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar  navbar-default navbar-fixed-top\" >\n  <div class=\"container-fluid\" >\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + pid + '/widget/new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n<ul class=\"list-group\">\n\n    <li *ngFor=\"let widget of widgets\"\n        class=\"list-group-item list-item-user-widget\">\n        <div class=\"user-widget\">\n            <div class=\"user-widget-toolbar\">\n                <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + pid + '/widget/' + widget._id]\"\n                   class=\"navbar-link\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                </a>\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </div>\n\n            <!--\n             heading\n             label\n             html\n             text\n             link\n             button\n             image\n             youtube\n             table\n             repeater\n             -->\n\n            <div [ngSwitch]=\"widget.widgetType\">\n                <div *ngSwitchCase=\"'HEADING'\">\n                  <div [ngSwitch]=\"widget.size\">\n\n                    <div *ngSwitchCase=\"1\">\n                      <h1>{{widget.text}}</h1>\n                    </div>\n\n                    <div *ngSwitchCase=\"2\">\n                      <h2>{{widget.text}}</h2>\n                    </div>\n\n                    <div *ngSwitchCase=\"3\">\n                      <h3>{{widget.text}}</h3>\n                    </div>\n\n                    <div *ngSwitchCase=\"4\">\n                      <h4>{{widget.text}}</h4>\n                    </div>\n\n                    <div *ngSwitchCase=\"5\">\n                      <h5>{{widget.text}}</h5>\n                    </div>\n\n                    <div *ngSwitchDefault>\n                      error -- widget.size = {{widget.size}} invalid\n                    </div>\n                  </div>\n                </div>\n\n                <div *ngSwitchCase=\"'YOUTUBE'\">\n                    <div class=\"video-container-outer\"\n                         [style.width]=\"widget.width\">\n                      <div class=\"video-container-inner\">\n                          <iframe class=\"video-container\"\n                                  [src]=\"makeSafe(widget.url)\"\n                                  frameborder=\"0\" allowfullscreen>\n                          </iframe>\n                      </div>\n                    </div>\n                </div>\n\n                <div *ngSwitchCase=\"'IMAGE'\">\n                    <div class=\"image-container\">\n                        <img [src]=\"makeSafe(widget.url)\"\n                             [style.width]=\"widget.width\"\n                             class=\"image-container\"\n                             />\n                    </div>\n                </div>\n\n                <div *ngSwitchCase=\"'HTML'\">\n                    <div [innerHTML]=\"widget.text\"></div>\n                </div>\n            </div>\n\n      </div>\n    </li>\n\n\n</ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-left glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-play\"></span>\n    </a>\n\n  </p>\n  <p class=\"navbar-text pull-left glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-eye-open\"></span>\n    </a>\n\n  </p>\n\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.reload();
        });
    };
    WidgetListComponent.prototype.reload = function () {
        this.widgets = this._service.findWidgetsByPageId(this.pid);
    };
    WidgetListComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Meta tags for making website for mobile-->\n  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n  <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n  <meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">\n\n  <meta charset=\"UTF-8\">\n  <title>Home</title>\n  <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n\n</head>\n<div class=\"container-fluid\">\n\n  <h1>\n    CS6510 Mean Stack Development\n  </h1>\n\n    <p>\n        This page contains links to the project and assignments for CS5610.\n    </p>\n\n  <h4>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item list-item-borderless\">\n            <a [routerLink]=\"['/project/login']\">Project</a><br>\n            <p>Main login page for project</p>\n        </li>\n        <li class=\"list-group-item list-item-borderless\">\n            <a [routerLink]=\"['/project/test']\">Test Project API</a><br>\n            <p>API Proof of Concept</p>\n        </li>\n\n        <li class=\"list-group-item list-item-borderless\">\n            <a [routerLink]=\"['/login']\">Assignment</a><br>\n            <p>Main login for Assignment</p>\n        </li>\n        <li class=\"list-group-item list-item-borderless\">\n            <a [routerLink]=\"['/test']\">Test MongoDB</a>\n        </li>\n        <li class=\"list-group-item list-item-borderless\">\n            <a href=\"https://github.com/nsetzer/webdev-setzer-nick\">GitHub Repository</a>\n        </li>\n    </ul>\n\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', plid, 'songs']}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Add Songs</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully executed query\"\n  </div>\n\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Enter a search term and press the search button</th>\n      <th>&nbsp;</th>\n    </tr>\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"searchTerm\"\n               placeholder=\"search term\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"runSearch()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let result of searchResults\">\n\n\n      <td>\n      <div *ngIf=result>\n          {{result.title}}\n        <br>\n\n        <audio controls *ngIf=result>\n          <source src=\"{{result.url}}\" type=\"audio/mp3\">\n        </audio>\n      </div>\n      <div *ngIf=!result>\n        No Results to display\n      </div>\n\n        <div class =\"pull-right\">\n            <a (click)=\"addIndexToPlaylist(0)\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n            </a>\n        </div>\n\n\n      </td>\n    </tr>\n    </tbody>\n\n  </table>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistAddComponent = (function () {
    function PlaylistAddComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this.videoId = null;
        this.searchResults = [];
        this.alertMessage = false;
        this.successMessage = false;
    }
    PlaylistAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.plid = params['plid'];
            if (params["videoId"]) {
                _this.videoId = params['videoId'];
                _this.searchTerm = "related:" + _this.videoId;
                _this.runSearch();
            }
            else {
                _this.videoId = null;
                _this.searchTerm = "";
            }
            _this.reload();
        });
    };
    PlaylistAddComponent.prototype.reload = function () {
    };
    PlaylistAddComponent.prototype.runSearch = function () {
        var _this = this;
        var term = this.searchTerm.replace(/^\s+|\s+$/g, '');
        if (term.startsWith("related:")) {
            var videoId = term.replace(/related:/, '');
            return this._service.relatedSearch(videoId)
                .subscribe(function (data) {
                _this.successMessage = true;
                _this.searchResults = data;
            });
        }
        else {
            return this._service.keywordSearch(this.searchTerm)
                .subscribe(function (data) {
                _this.successMessage = true;
                _this.searchResults = data;
            });
        }
    };
    PlaylistAddComponent.prototype.addIndexToPlaylist = function (index) {
        if (0 <= index && index < this.searchResults.length) {
            this._plservice.addSongToPlaylist(this.plid, this.searchResults[index]);
            this.searchResults.splice(index, 1);
        }
    };
    return PlaylistAddComponent;
}());
PlaylistAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-add',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list']}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Playlist</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"listName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"playlist.name\"\n             name=\"listName\"\n             class=\"form-control\"\n             placeholder=\"Playlist Name\"\n             required/>\n    </div>\n\n  </form>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"delete()\" >Delete</a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistEditComponent = (function () {
    function PlaylistEditComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this.uid = "";
        this.plid = "";
        this.pid = "";
    }
    PlaylistEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.plid = params['plid'];
            _this.reload();
        });
    };
    PlaylistEditComponent.prototype.reload = function () {
        this.playlist = this._plservice.findPlaylistById(this.plid);
    };
    PlaylistEditComponent.prototype.saveChanges = function () {
        this._plservice.updatePlaylist(this.plid, this.playlist);
        var url = "/project/(project:user/" + this.uid + "/list)";
        this.router.navigateByUrl(url);
    };
    PlaylistEditComponent.prototype.delete = function () {
        this._plservice.deletePlaylist(this.plid);
        var url = "/project/(project:user/" + this.uid + "/list)";
        this.router.navigateByUrl(url);
    };
    return PlaylistEditComponent;
}());
PlaylistEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-edit',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Playlists</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', 'new']}}]\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<ul class=\"list-group\">\n    <li *ngFor=\"let lst of playlists\"\n         class=\"list-group-item list-item-borderless\">\n\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list', lst._id, 'songs']}}]\">{{lst.name}}</a>\n\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list', lst._id]}}]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n\n\n    </li>\n</ul>\n\n\n<!--\n<ol class=\"list-group\">\n            <li *ngFor=\"let sng of lst.songs\"\n                class=\"list-group-item list-item-borderless\">\n            {{sng.videoId}} -- {{sng.title}}\n            </li>\n        </ol>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistListComponent = (function () {
    function PlaylistListComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this.playlists = [];
    }
    PlaylistListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    PlaylistListComponent.prototype.reload = function () {
        this.user = this._service.findUserById(this.uid);
        this.playlists = this._plservice.findPlaylistsByUser(this.uid);
    };
    return PlaylistListComponent;
}());
PlaylistListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-list',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list']}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>New Playlist</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"listName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"playlist.name\"\n             name=\"listName\"\n             class=\"form-control\"\n             placeholder=\"Playlist Name\"\n             required/>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_playlist_object__ = __webpack_require__("../../../../../src/app/objects/playlist.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaylistNewComponent = (function () {
    function PlaylistNewComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this.uid = "";
        this.plid = "";
        this.pid = "";
    }
    PlaylistNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    PlaylistNewComponent.prototype.reload = function () {
        this.playlist = new __WEBPACK_IMPORTED_MODULE_4__objects_playlist_object__["a" /* Playlist */]("", "New Playlist", this.uid);
    };
    PlaylistNewComponent.prototype.saveChanges = function () {
        this._plservice.createPlaylist(this.uid, this.playlist);
        var url = "/project/(project:user/" + this.uid + "/list)";
        this.router.navigateByUrl(url);
    };
    return PlaylistNewComponent;
}());
PlaylistNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-new',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  playlist-search works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSearchComponent; });
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

var PlaylistSearchComponent = (function () {
    function PlaylistSearchComponent() {
    }
    PlaylistSearchComponent.prototype.ngOnInit = function () {
    };
    return PlaylistSearchComponent;
}());
PlaylistSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-search',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlaylistSearchComponent);

//# sourceMappingURL=playlist-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list']}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>{{playlist.name}}</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', plid, 'add']}}]\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<ul class=\"list-group\">\n    <li *ngFor=\"let song of playlist.songs\"\n         class=\"list-group-item list-item-borderless\">\n\n        {{song.title}}\n\n\n\n        <div class =\"pull-right\">\n            <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', playlist._id, 'add', song.videoId]}}]\">\n            <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n\n\n            <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\">\n            <span class=\"glyphicon glyphicon-info-sign\"></span>\n            </a>\n        </div>\n\n    </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSongsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistSongsComponent = (function () {
    function PlaylistSongsComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
    }
    PlaylistSongsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.plid = params['plid'];
            _this.reload();
        });
    };
    PlaylistSongsComponent.prototype.reload = function () {
        this.user = this._service.findUserById(this.uid);
        this.playlist = this._plservice.findPlaylistById(this.plid);
    };
    PlaylistSongsComponent.prototype.saveChanges = function () {
        this._plservice.updatePlaylist(this.plid, this.playlist);
        var url = "/project/(project:user/" + this.uid + "/list)";
        this.router.navigateByUrl(url);
    };
    return PlaylistSongsComponent;
}());
PlaylistSongsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-songs',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistSongsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-songs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/test/api-test/api-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/test/api-test/api-test.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n  <h1>Project Api Test</h1>\n\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully executed query\"\n  </div>\n\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Enter a search term and press the search button</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"searchTerm\"\n               placeholder=\"search term\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"keywordSearch()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let result of searchResults\">\n\n\n      <td>\n      <div *ngIf=result>\n          {{result.title}}\n        <br>\n\n        <audio controls *ngIf=result>\n          <source src=\"{{result.url}}\" type=\"audio/mp3\">\n        </audio>\n      </div>\n      <div *ngIf=!result>\n        No Results to display\n      </div>\n\n\n\n      </td>\n    </tr>\n    </tbody>\n\n  </table>\n\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/test/api-test/api-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiTestComponent = (function () {
    function ApiTestComponent(_service) {
        this._service = _service;
        this.alertMessage = false;
        this.successMessage = false;
        this.searchResults = [0,];
    }
    ApiTestComponent.prototype.ngOnInit = function () {
    };
    ApiTestComponent.prototype.keywordSearch = function () {
        var _this = this;
        return this._service.keywordSearch(this.searchTerm)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.searchTerm = null;
            _this.searchResults = data;
        });
    };
    return ApiTestComponent;
}());
ApiTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-api-test',
        template: __webpack_require__("../../../../../src/app/components/project/test/api-test/api-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/test/api-test/api-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service_client__["a" /* ProjectService */]) === "function" && _a || Object])
], ApiTestComponent);

var _a;
//# sourceMappingURL=api-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-home/project-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-home/project-home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <router-outlet name=\"project\"></router-outlet>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  <p class=\"navbar-text pull-left glyph-margin\">\n    <audio controls>\n      <source src=\"http://localhost:3100/api/youtube/2oPeZFOpPAM\" type=\"audio/mp3\">\n    </audio>\n  </p>\n\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a (click)=\"openProfileHome()\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-home/project-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectHomeComponent = (function () {
    function ProjectHomeComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
    }
    ProjectHomeComponent.prototype.ngOnInit = function () {
    };
    ProjectHomeComponent.prototype.reload = function () {
    };
    ProjectHomeComponent.prototype.openProfileHome = function () {
        var uid = this.route.snapshot.firstChild.url[1].path;
        if (uid) {
            var url = "/project/(project:user/" + uid + ")";
            this.router.navigateByUrl(url);
        }
    };
    return ProjectHomeComponent;
}());
ProjectHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-home',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ProjectHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=project-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-login/project-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-login/project-login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <h1>Login</h1>\n\n    <!--\n    jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial\n    -->\n    <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <input type=\"text\"\n             [(ngModel)]=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             required/>\n      <div *ngIf=\"invalid_username\" class=\"help-block\">Username not Found</div>\n      <input type=\"password\"\n             [(ngModel)]=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             class=\"form-control\"\n             required/>\n      <div *ngIf=\"invalid_password\" class=\"help-block\">Password is required</div>\n\n      <button (click)=\"login()\"\n              class=\"btn btn-primary btn-block\">Login</button>\n\n    </form>\n\n    <a class=\"btn btn-success btn-block\"\n       [routerLink]=\"['project/register']\">Register</a>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-login/project-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectLoginComponent = (function () {
    function ProjectLoginComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
    }
    ProjectLoginComponent.prototype.ngOnInit = function () {
        this.username = "";
        this.password = "";
        this.invalid_username = false;
        this.invalid_password = false;
    };
    ProjectLoginComponent.prototype.login = function () {
        var user = this._service.findUserByUsername(this.username);
        if (user) {
            this.invalid_username = false;
            if (user.password == this.password) {
                var url = "/project/(project:user/" + user._id + ")";
                this.router.navigateByUrl(url);
            }
            else {
                this.invalid_password = true;
            }
        }
        else {
            this.invalid_username = true;
        }
    };
    return ProjectLoginComponent;
}());
ProjectLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-login',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ProjectLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=project-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"changes_saved\" class=\"help-block\">Changes Saved</div>\n\n      User Name: {{user.username}}<br>\n      Name: {{user.firstName}} {{user.lastName}}<br>\n      Email: {{user.email}}<br>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'profile', '123']}}]\">\n     test 123</a>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'profile', '234']}}]\">\n     test 234</a>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'profile', '345']}}]\">\n     test 456</a>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'profile', '456']}}]\">\n     test 567</a>\n\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', '123' , 'profile', '123']}}]\">\n     view as 123</a>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', '234' , 'profile', '234']}}]\">\n     view as 234</a>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', '345' , 'profile', '345']}}]\">\n     view as 345</a>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', '456' , 'profile', '456']}}]\">\n     view as 456</a>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProfilePublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectProfilePublicComponent = (function () {
    function ProjectProfilePublicComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.changes_saved = false;
    }
    ProjectProfilePublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['puid']; // (+) converts string 'id' to a number
            _this.reload();
        });
    };
    ProjectProfilePublicComponent.prototype.reload = function () {
        this.user = this._service.findUserById(this.uid);
    };
    ProjectProfilePublicComponent.prototype.logout = function () {
        // this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
        this.router.navigate(["/login"]);
    };
    ProjectProfilePublicComponent.prototype.saveChanges = function () {
        this._service.updateUser(this.uid, this.user);
        this.changes_saved = true;
    };
    return ProjectProfilePublicComponent;
}());
ProjectProfilePublicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-profile-public',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ProjectProfilePublicComponent);

var _a, _b, _c;
//# sourceMappingURL=project-profile-public.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile/project-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile/project-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"changes_saved\" class=\"help-block\">Changes Saved</div>\n\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             [(ngModel)]=\"user.email\"\n             name=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             class=\"form-control\"\n             placeholder=\"First Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             class=\"form-control\"\n             placeholder=\"Last Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list']}}]\">\n     My Playlists</a>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"logout()\">Logout</a>\n\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile/project-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectProfileComponent = (function () {
    function ProjectProfileComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this.changes_saved = false;
        this.playlists = [];
    }
    ProjectProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid']; // (+) converts string 'id' to a number
            _this.reload();
        });
    };
    ProjectProfileComponent.prototype.reload = function () {
        this.user = this._service.findUserById(this.uid);
        this.playlists = this._plservice.findPlaylistsByUser(this.uid);
    };
    ProjectProfileComponent.prototype.logout = function () {
        this.router.navigateByUrl("/project/login");
    };
    ProjectProfileComponent.prototype.saveChanges = function () {
        this._service.updateUser(this.uid, this.user);
        this.changes_saved = true;
    };
    return ProjectProfileComponent;
}());
ProjectProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-profile',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-profile/project-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-profile/project-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], ProjectProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-register/project-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-register/project-register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  project-register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-register/project-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRegisterComponent; });
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

var ProjectRegisterComponent = (function () {
    function ProjectRegisterComponent() {
    }
    ProjectRegisterComponent.prototype.ngOnInit = function () {
    };
    return ProjectRegisterComponent;
}());
ProjectRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-register',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-register/project-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-register/project-register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectRegisterComponent);

//# sourceMappingURL=project-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/objects/page.object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(_id, name, websiteId, title, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = title;
        this.description = description;
    }
    Page.getDefaultPages = function () {
        var pages = [
            new Page("321", "Post 1", "456", "Post 1", "Lorem"),
            new Page("432", "Post 2", "456", "Post 2", "Lorem"),
            new Page("543", "Post 3", "456", "Post 3", "Lorem"),
            new Page("100", "Post 1", "123", "Post 1", "Lorem"),
            new Page("101", "Post 2", "123", "Post 2", "Lorem"),
            new Page("102", "Post 3", "123", "Post 3", "Lorem"),
            new Page("110", "Post 1", "234", "Post 1", "Lorem"),
            new Page("111", "Post 2", "234", "Post 2", "Lorem"),
            new Page("112", "Post 3", "234", "Post 3", "Lorem"),
            new Page("120", "Lang", "890", "Post 1", "Lorem"),
            new Page("121", "Game", "890", "Post 2", "Lorem"),
            new Page("122", "Home", "890", "Post 3", "Lorem"),
            new Page("130", "Easy", "567", "Post 1", "Lorem"),
            new Page("131", "Medium", "567", "Post 2", "Lorem"),
            new Page("132", "Hard", "567", "Post 3", "Lorem"),
            new Page("140", "Post 1", "678", "Post 1", "Lorem"),
            new Page("141", "Post 2", "678", "Post 2", "Lorem"),
            new Page("142", "Post 3", "678", "Post 3", "Lorem"),
            new Page("150", "Post 1", "789", "Post 1", "Lorem"),
            new Page("151", "Post 2", "789", "Post 2", "Lorem"),
            new Page("152", "Post 3", "789", "Post 3", "Lorem")
        ];
        return pages;
    };
    return Page;
}());

//# sourceMappingURL=page.object.js.map

/***/ }),

/***/ "../../../../../src/app/objects/playlist.object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__song_object__ = __webpack_require__("../../../../../src/app/objects/song.object.ts");

var Playlist = (function () {
    function Playlist(_id, name, userid) {
        this._id = _id;
        this.userid = userid;
        this.name = name;
        this.songs = new Array();
    }
    Playlist.prototype.setList = function (lst) {
        this.songs = lst;
    };
    Playlist.createDemoPlaylist = function (userid, plid) {
        var lst = new Playlist(plid, "Default Playlist", userid);
        lst.setList(__WEBPACK_IMPORTED_MODULE_0__song_object__["a" /* Song */].getDefaultSongs());
        return lst;
    };
    return Playlist;
}());

//# sourceMappingURL=playlist.object.js.map

/***/ }),

/***/ "../../../../../src/app/objects/song.object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Song; });
var Song = (function () {
    function Song(_id, videoId, description, title, artist, thumbnail) {
        this._id = _id;
        this.videoId = videoId;
        this.description = description;
        this.title = title;
        this.artist = artist;
        this.thumbnail = thumbnail;
    }
    Song.getDefaultSongs = function () {
        var songs = [new Song("song:123", "2oPeZFOpPAM", "2006 WMG Wicked Garden (Video)", "Wicked Garden", "Stone Temple Pilots", "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
            new Song("song:234", "9lZgHdOU-ko", "", "Wicked Garden (live)", "", "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg")
        ];
        return songs;
    };
    return Song;
}());

//# sourceMappingURL=song.object.js.map

/***/ }),

/***/ "../../../../../src/app/objects/user.object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    User.getDefaultUsers = function () {
        var users = [new User("123", "alice", "alice", "Alice", "Wonder", "alice@example.com"),
            new User("234", "bob", "bob", "Bob", "Marley", "bob@example.com"),
            new User("345", "charly", "charly", "Charly", "Garcia", "charly@example.com"),
            new User("456", "jannunzi", "jannunzi", "Jose", "Annunzi", "jannunzi@example.com")
        ];
        return users;
    };
    return User;
}());

//# sourceMappingURL=user.object.js.map

/***/ }),

/***/ "../../../../../src/app/objects/website.object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    Website.getDefaultSites = function () {
        var sites = [
            new Website("123", "Facebook", "456", "Lorem"),
            new Website("234", "Tweeter", "456", "Lorem"),
            new Website("456", "Gizmodo", "456", "Lorem"),
            new Website("890", "Go", "123", "Lorem"),
            new Website("567", "Tic Tac Toe", "123", "Lorem"),
            new Website("678", "Checkers", "123", "Lorem"),
            new Website("789", "Chess", "234", "Lorem")
        ];
        return sites;
    };
    return Website;
}());

//# sourceMappingURL=website.object.js.map

/***/ }),

/***/ "../../../../../src/app/objects/widget.object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(_id, name, pageId) {
        this._id = _id;
        this.name = name;
        this.pageId = pageId;
    }
    Widget.newHeadingWidget = function (_id, name, pageId, size, text) {
        var widget = new Widget(_id, name, pageId);
        widget.widgetType = "HEADING";
        widget.size = size;
        widget.text = text;
        return widget;
    };
    Widget.newImageWidget = function (_id, name, pageId, width, url) {
        var widget = new Widget(_id, name, pageId);
        widget.widgetType = "IMAGE";
        widget.width = width;
        widget.url = url;
        return widget;
    };
    Widget.newYoutubeWidget = function (_id, name, pageId, width, url) {
        var widget = new Widget(_id, name, pageId);
        widget.widgetType = "YOUTUBE";
        widget.width = width;
        widget.url = url;
        return widget;
    };
    Widget.newHTMLWidget = function (_id, name, pageId, text) {
        var widget = new Widget(_id, name, pageId);
        widget.widgetType = "HTML";
        widget.text = text;
        return widget;
    };
    Widget.widgetFactory = function (wgid, pageId, type) {
        /*
        creates and returns a new widget given the type of widget to create
        The new widget's pageId is set to the pageId parameter
        */
        var widget = new Widget(wgid, "", pageId);
        widget.widgetType = type;
        if (type === "IMAGE" || type === "YOUTUBE") {
            widget.width = "100%";
            widget.url = "";
        }
        if (type === "HEADING" || type === "HTML") {
            widget.text = "";
        }
        if (type === "HEADING") {
            widget.size = 2;
        }
        return widget;
    };
    Widget.getDefaultWidgets = function () {
        var widgets = [
            Widget.newHeadingWidget("123", "", "321", 2, "GIZMODO"),
            Widget.newHeadingWidget("234", "", "321", 4, "Lorem ipsum"),
            Widget.newHeadingWidget("567", "", "321", 4, "Lorem ipsum"),
            Widget.newImageWidget("345", "", "321", "100%", "http://lorempixel.com/400/200/"),
            Widget.newYoutubeWidget("678", "", "321", "100%", "https://www.youtube.com/embed/AM2Ivdi9c4E"),
            Widget.newHTMLWidget("456", "", "321", "<p>Lorem ipsum</p>"),
            Widget.newHTMLWidget("789", "", "321", "<p>Lorem ipsum</p>")
        ];
        var pages = [432, 543,
            100, 101, 102,
            110, 111, 112,
            120, 121, 122,
            130, 131, 132,
            140, 141, 142,
            150, 151, 152];
        var nextId = 800;
        for (var i = 0; i < pages.length; i++) {
            widgets.push(Widget.newHeadingWidget("" + nextId, "", "" + pages[i], 2, "HEADING " + nextId));
            nextId = nextId + 1;
            widgets.push(Widget.newImageWidget("" + nextId, "", "" + pages[i], "100%", "http://lorempixel.com/400/200/"));
            nextId = nextId + 1;
            widgets.push(Widget.newYoutubeWidget("" + nextId, "", "" + pages[i], "100%", "https://www.youtube.com/embed/AM2Ivdi9c4E"));
            nextId = nextId + 1;
            widgets.push(Widget.newHTMLWidget("" + nextId, "", "" + pages[i], "<b>Lorem</b> <i>ipsum</i>"));
            nextId = nextId + 1;
        }
        return widgets;
    };
    return Widget;
}());

//# sourceMappingURL=widget.object.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_page_object__ = __webpack_require__("../../../../../src/app/objects/page.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageService = (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.nextId = 1000;
        this.pages = __WEBPACK_IMPORTED_MODULE_4__objects_page_object__["a" /* Page */].getDefaultPages();
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        /*
        adds the page parameter instance to the local pages array.
        The new page's websiteId is set to the websiteId parameter
        */
        page._id = "" + this.nextId;
        this.nextId = this.nextId + 1;
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        /*
        retrieves the pages in local pages array whose
        websiteId matches the parameter websiteId
        */
        var pages = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pages.push(this.pages[x]);
            }
        }
        return pages;
    };
    PageService.prototype.findPageById = function (pageId) {
        /*
        retrieves the page in local pages array
        whose _id matches the pageId parameter
        */
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        /*
        updates the page in local pages array whose
        _id matches the pageId parameter
        */
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].description = page.description;
                this.pages[x].websiteId = page.websiteId; // todo ?
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        /*
        removes the page from local pages array whose
        _id matches the pageId parameter
        */
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/playlist.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_playlist_object__ = __webpack_require__("../../../../../src/app/objects/playlist.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_user_object__ = __webpack_require__("../../../../../src/app/objects/user.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaylistService = (function () {
    function PlaylistService(_http) {
        this._http = _http;
        this.nextId = 1000;
        // create a default playlist for all users
        this.playlists = __WEBPACK_IMPORTED_MODULE_5__objects_user_object__["a" /* User */].getDefaultUsers().map(function (user) {
            return __WEBPACK_IMPORTED_MODULE_4__objects_playlist_object__["a" /* Playlist */].createDemoPlaylist(user._id, "lst:" + user._id);
        });
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PlaylistService.prototype.createPlaylist = function (userId, lst) {
        lst._id = "" + this.nextId;
        this.nextId = this.nextId + 1;
        lst.userId = userId;
        this.playlists.push(lst);
        return lst;
    };
    PlaylistService.prototype.findPlaylistsByUser = function (userid) {
        return this.playlists.filter(function (lst) { return lst.userid === userid; });
    };
    PlaylistService.prototype.findPlaylistById = function (plid) {
        for (var x = 0; x < this.playlists.length; x++) {
            if (this.playlists[x]._id === plid) {
                return this.playlists[x];
            }
        }
    };
    PlaylistService.prototype.updatePlaylist = function (plid, lst) {
        for (var x = 0; x < this.playlists.length; x++) {
            if (this.playlists[x]._id === plid) {
                lst._id = this.playlists[x]._id;
                this.playlists[x] = lst;
            }
        }
    };
    PlaylistService.prototype.deletePlaylist = function (plid) {
        for (var x = 0; x < this.playlists.length; x++) {
            if (this.playlists[x]._id === plid) {
                this.playlists.splice(x, 1);
            }
        }
    };
    PlaylistService.prototype.addSongToPlaylist = function (plid, song) {
        var pl = this.findPlaylistById(plid);
        pl.songs.push(song);
        this.updatePlaylist(plid, pl);
    };
    return PlaylistService;
}());
PlaylistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PlaylistService);

var _a;
//# sourceMappingURL=playlist.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/project.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ProjectService.prototype.keywordSearch = function (searchTerm) {
        var _this = this;
        var encTerm = encodeURIComponent(searchTerm);
        var path = this.baseUrl + '/api/youtube/query/' + encTerm;
        return this._http.get(path)
            .map(function (res) {
            var data = res.json();
            // add the url, using the current environment for each result
            for (var i = 0; i < data.length; ++i) {
                data[i].url = _this.baseUrl + "/api/youtube/" + data[i].videoId;
            }
            return data;
        });
    };
    ProjectService.prototype.relatedSearch = function (videoId) {
        var _this = this;
        //var encTerm = encodeURIComponent(videoId);
        var path = this.baseUrl + '/api/youtube/related/' + videoId;
        return this._http.get(path)
            .map(function (res) {
            var data = res.json();
            // add the url, using the current environment for each result
            for (var i = 0; i < data.length; ++i) {
                data[i].url = _this.baseUrl + "/api/youtube/" + data[i].videoId;
            }
            return data;
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_user_object__ = __webpack_require__("../../../../../src/app/objects/user.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.nextId = 1000;
        this.users = __WEBPACK_IMPORTED_MODULE_4__objects_user_object__["a" /* User */].getDefaultUsers();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = "" + this.nextId;
        this.nextId = this.nextId + 1;
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    /**
     * fn : a function accepting the validated user object
     * returns: 0 on success
     *          1 for invalid username
     *          2 for invalid password
     */
    UserService.prototype.validateUser = function (username, password, fn) {
        var user = this.findUserByUsername(username);
        if (user) {
            if (user.password != password) {
                return 2;
            }
        }
        else {
            return 1;
        }
        fn(user);
        return 0;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_website_object__ = __webpack_require__("../../../../../src/app/objects/website.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.nextId = 1000;
        this.sites = __WEBPACK_IMPORTED_MODULE_4__objects_website_object__["a" /* Website */].getDefaultSites();
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        /*
        adds the website parameter instance to the local websites array.
        The new website's developerId is set to the userId parameter
        */
        website._id = "" + this.nextId;
        this.nextId = this.nextId + 1;
        website.developerId = userId;
        this.sites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        /*
        retrieves the websites in local websites array whose
        developerId matches the parameter userId
        */
        var sites = [];
        for (var x = 0; x < this.sites.length; x++) {
            if (this.sites[x].developerId === userId) {
                sites.push(this.sites[x]);
            }
        }
        return sites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        /*
        retrieves the website in local websites array
        whose _id matches the websiteId parameter
        */
        for (var x = 0; x < this.sites.length; x++) {
            if (this.sites[x]._id === websiteId) {
                return this.sites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        /*
        updates the website in local websites array
        whose _id matches the websiteId parameter
        */
        for (var x = 0; x < this.sites.length; x++) {
            if (this.sites[x]._id === websiteId) {
                website._id = this.sites[x]._id;
                this.sites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        /*
         removes the website from local websites array
         whose _id matches the websiteId parameter
         */
        for (var x = 0; x < this.sites.length; x++) {
            if (this.sites[x]._id === websiteId) {
                this.sites.splice(x, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetService = (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.nextId = 1000;
        this.widgets = __WEBPACK_IMPORTED_MODULE_4__objects_widget_object__["a" /* Widget */].getDefaultWidgets();
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.widgetFactory = function (pageId, type) {
        var widget = __WEBPACK_IMPORTED_MODULE_4__objects_widget_object__["a" /* Widget */].widgetFactory("" + this.nextId, pageId, type);
        this.nextId = this.nextId + 1;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        /*
        adds the widget parameter instance to the local widgets array.
        The new widget's pageId is set to the pageId parameter
        */
        widget._id = "" + this.nextId;
        this.nextId = this.nextId + 1;
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        /*
        retrieves the widgets in local widgets array whose
        pageId matches the parameter pageId
        */
        var widgets = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                widgets.push(this.widgets[x]);
            }
        }
        return widgets;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        /*
        retrieves the widget in local widgets array whose
        _id matches the widgetId parameter
        */
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        /*
        updates the widget in local widgets array whose
        _id matches the widgetId parameter
        */
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget; // todo ?
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        /*
        removes the widget from local widgets array whose
        _id matches the widgetId parameter
        */
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/assets/css/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar-dark .navbar-brand,\n.navbar-dark .navbar-brand:hover,\n.navbar-dark .navbar-link,\n.navbar-dark .navbar-text {\n  color: white;\n}\n\n.navbar-chevron-link {\n  margin-right: 15px;\n}\n\n/*rule to center a div*/\n.centered-content {\n    width: 600px;\n    margin: auto;\n    text-align: justify;\n}\n\nimg.centered {\n  margin: auto;\n  text-align: justify;\n}\n\n.navbar-default,\n.navbar-dark {\n  height: 60px;\n}\n\nbody,\n.content-body {\n   /*navbar height (60) + padding*/\n    padding-top: 65px;\n    padding-bottom: 60px;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.user-widget {\n    position: relative;\n    z-index: 1;\n}\n\nli.list-item-user-widget {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: none;\n  margin: 0px;\n}\n.user-widget .user-widget-toolbar {\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(192, 192, 192, 0.4) ;\n    padding: 3px;\n    border-bottom-left-radius: 8px;\n    z-index: 3;\n}\n\n/**\n * user-widget-proportional allows for proportional images and iframes\n * to be rendered centered on the page.\n */\ndiv.user-widget-proportional {\n  position: relative;\n  width:50%;\n  height: 0px;\n  padding-bottom: 60%;\n\n   z-index: 2;\n}\n\niframe.user-widget-proportional {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  margin:auto;\n\n   z-index: 2;\n}\n\nli.list-item-borderless {\n  border: none;\n  margin: 0px;\n}\n\nul.list-group {\n  margin: 0px;\n  padding: 0px;\n}\n\n.border-line-right {\n  border-right: thin gray solid;\n  height: 100%;\n}\n\n\n.padding-rhs {\n  padding-right:10px;\n}\n\n.padding-none {\n  padding-right:0px;\n  padding-left:0px;\n}\n\n.padding-left-none {\n  padding-left:0px;\n}\n\n.padding-right-none {\n  padding-right:0px;\n}\n\n\n.padding-left-default {\n  padding-left:15px;\n}\n\n.padding-right-default {\n  padding-right:15px;\n}\n\n.padding-right-double {\n  padding-right:30px;\n  padding-left:0px;\n}\n\n.padding-default {\n  padding-left:15px;\n  padding-right:15px;\n}\n\n.padding-content {\n  padding-left:15px;\n  padding-right:30px;\n}\n\n/*\nsed -i s=\"class\\=\\\"navbar-text pull-left\\\"\"=\"class\\=\\\"navbar-text pull-left glyph-margin\\\"\"=g\nsed -i s=\"class\\=\\\"navbar-text pull-right\\\"\"=\"class\\=\\\"navbar-text pull-right glyph-margin\\\"\"=g\n*/\np.glyph-margin {\n  margin-left:15px;\n  margin-right:15px;\n}\n\np.glyph-padding-short {\n  padding-right:10px;\n}\n\ndiv.container-margin {\n  margin-left:15px;\n  margin-right:15px;\n}\n\ninput {\n  margin-bottom: 5px;\n}\n\n/*create a div with some width, centered\n  this width can be set programatically\n  [style.width]=\"attribute\"\n*/\ndiv.video-container-outer {\n    width: 50%;\n    margin: auto;\n}\n\n/*inside a centered div, another div creates a\n  proportional space to embed a video\n*/\ndiv.video-container-inner {\n    position:relative;\n    padding-bottom:56.25%;\n    padding-top:30px;\n\n    height:0;\n    overflow:hidden;\n}\n\n/* a video container expands to take up all of the area inside\n   of the div. in this case, that area is specified by video-container-inner\n*/\niframe.video-container {\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n}\n\ndiv.image-container {\n  position: relative;\n  width:100%;\n}\n\nimg.image-container {\n  display: block;\n  margin:auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
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