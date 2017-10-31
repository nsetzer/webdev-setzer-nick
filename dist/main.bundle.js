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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_queue_service_client__ = __webpack_require__("../../../../../src/app/services/queue.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_social_service_client__ = __webpack_require__("../../../../../src/app/services/social.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assignment_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_assignment_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_assignment_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_assignment_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_assignment_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_assignment_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_assignment_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_assignment_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_assignment_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_assignment_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_assignment_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_assignment_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_assignment_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_assignment_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_assignment_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_assignment_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_assignment_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_assignment_widget_widget_list_widget_list_header_widget_list_header_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-header/widget-list-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_assignment_widget_widget_list_widget_list_image_widget_list_image_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-image/widget-list-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_assignment_widget_widget_list_widget_list_html_widget_list_html_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-html/widget-list-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_assignment_widget_widget_list_widget_list_youtube_widget_list_youtube_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_assignment_widget_widget_list_widget_list_text_widget_list_text_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-text/widget-list-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_assignment_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_project_user_project_register_project_register_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-register/project-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_project_user_project_login_project_login_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_project_user_project_profile_project_profile_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile/project-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_project_user_project_profile_public_project_profile_public_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_project_test_api_test_api_test_component__ = __webpack_require__("../../../../../src/app/components/project/test/api-test/api-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_project_user_project_home_project_home_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_project_playlist_playlist_list_playlist_list_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_project_playlist_playlist_songs_playlist_songs_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_project_playlist_playlist_search_playlist_search_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_project_playlist_playlist_new_playlist_new_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_project_playlist_playlist_edit_playlist_edit_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_project_playlist_playlist_add_playlist_add_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_project_queue_song_queue_song_queue_component__ = __webpack_require__("../../../../../src/app/components/project/queue/song-queue/song-queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_project_playlist_playlist_add_playlist_add_song_details_playlist_add_song_details_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_project_user_notification_view_notification_view_component__ = __webpack_require__("../../../../../src/app/components/project/user/notification-view/notification-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_project_user_notification_compose_notification_compose_component__ = __webpack_require__("../../../../../src/app/components/project/user/notification-compose/notification-compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_project_playlist_playlist_songs_playlist_upload_playlist_upload_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_project_playlist_playlist_songs_playlist_song_details_playlist_song_details_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_project_user_project_admin_project_admin_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-admin/project-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_project_user_project_admin_admin_user_new_admin_user_new_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_project_user_project_admin_admin_user_edit_admin_user_edit_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// default services


// assignment services




// project services














// edit components







// list components






// other


// project components























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
            __WEBPACK_IMPORTED_MODULE_18__components_assignment_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_assignment_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_assignment_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_assignment_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_assignment_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_assignment_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_assignment_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_assignment_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_assignment_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_assignment_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_assignment_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_assignment_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_assignment_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_assignment_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_assignment_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_assignment_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_assignment_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_assignment_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_assignment_widget_widget_list_widget_list_header_widget_list_header_component__["a" /* WidgetListHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_assignment_widget_widget_list_widget_list_image_widget_list_image_component__["a" /* WidgetListImageComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_assignment_widget_widget_list_widget_list_html_widget_list_html_component__["a" /* WidgetListHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_assignment_widget_widget_list_widget_list_youtube_widget_list_youtube_component__["a" /* WidgetListYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_assignment_widget_widget_list_widget_list_text_widget_list_text_component__["a" /* WidgetListTextComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_project_user_project_register_project_register_component__["a" /* ProjectRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_project_user_project_login_project_login_component__["a" /* ProjectLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_project_user_project_profile_project_profile_component__["a" /* ProjectProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_project_user_project_profile_public_project_profile_public_component__["a" /* ProjectProfilePublicComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_project_test_api_test_api_test_component__["a" /* ApiTestComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_project_user_project_home_project_home_component__["a" /* ProjectHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_project_playlist_playlist_list_playlist_list_component__["a" /* PlaylistListComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_project_playlist_playlist_songs_playlist_songs_component__["a" /* PlaylistSongsComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_project_playlist_playlist_search_playlist_search_component__["a" /* PlaylistSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_project_playlist_playlist_new_playlist_new_component__["a" /* PlaylistNewComponent */],
            __WEBPACK_IMPORTED_MODULE_53__components_project_playlist_playlist_edit_playlist_edit_component__["a" /* PlaylistEditComponent */],
            __WEBPACK_IMPORTED_MODULE_54__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_assignment_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_42__directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_55__components_project_queue_song_queue_song_queue_component__["a" /* SongQueueComponent */],
            __WEBPACK_IMPORTED_MODULE_56__components_project_playlist_playlist_add_playlist_add_song_details_playlist_add_song_details_component__["a" /* PlaylistAddSongDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_57__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__["a" /* PlaylistSearchSongDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_58__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__["a" /* PlaylistSearchViewComponent */],
            __WEBPACK_IMPORTED_MODULE_59__components_project_user_notification_view_notification_view_component__["a" /* NotificationViewComponent */],
            __WEBPACK_IMPORTED_MODULE_60__components_project_user_notification_compose_notification_compose_component__["a" /* NotificationComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_61__components_project_playlist_playlist_songs_playlist_upload_playlist_upload_component__["a" /* PlaylistUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_62__components_project_playlist_playlist_songs_playlist_song_details_playlist_song_details_component__["a" /* PlaylistSongDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_63__components_project_user_project_admin_project_admin_component__["a" /* ProjectAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_64__components_project_user_project_admin_admin_user_new_admin_user_new_component__["a" /* AdminUserNewComponent */],
            __WEBPACK_IMPORTED_MODULE_65__components_project_user_project_admin_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_34_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_11__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_12__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_14__services_project_service_client__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_13__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_16__services_queue_service_client__["a" /* QueueService */],
            __WEBPACK_IMPORTED_MODULE_17__services_social_service_client__["a" /* SocialService */],
            __WEBPACK_IMPORTED_MODULE_15__services_playlist_service_client__["a" /* PlaylistService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_assignment_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_project_user_project_login_project_login_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_project_user_project_register_project_register_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-register/project-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_project_user_project_home_project_home_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_project_user_project_profile_project_profile_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile/project-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_project_user_project_profile_public_project_profile_public_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_project_test_api_test_api_test_component__ = __webpack_require__("../../../../../src/app/components/project/test/api-test/api-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_project_playlist_playlist_list_playlist_list_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_project_playlist_playlist_songs_playlist_songs_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_project_playlist_playlist_search_playlist_search_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_project_playlist_playlist_new_playlist_new_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_project_playlist_playlist_edit_playlist_edit_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_project_playlist_playlist_add_playlist_add_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_project_queue_song_queue_song_queue_component__ = __webpack_require__("../../../../../src/app/components/project/queue/song-queue/song-queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_project_playlist_playlist_add_playlist_add_song_details_playlist_add_song_details_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_project_user_notification_view_notification_view_component__ = __webpack_require__("../../../../../src/app/components/project/user/notification-view/notification-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_project_user_notification_compose_notification_compose_component__ = __webpack_require__("../../../../../src/app/components/project/user/notification-compose/notification-compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_project_playlist_playlist_songs_playlist_upload_playlist_upload_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_project_playlist_playlist_songs_playlist_song_details_playlist_song_details_component__ = __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_project_user_project_admin_project_admin_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-admin/project-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_project_user_project_admin_admin_user_new_admin_user_new_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_project_user_project_admin_admin_user_edit_admin_user_edit_component__ = __webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.ts");
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
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/search', component: __WEBPACK_IMPORTED_MODULE_15__components_assignment_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
    { path: 'project/test', component: __WEBPACK_IMPORTED_MODULE_21__components_project_test_api_test_api_test_component__["a" /* ApiTestComponent */] },
    { path: 'project/login', component: __WEBPACK_IMPORTED_MODULE_16__components_project_user_project_login_project_login_component__["a" /* ProjectLoginComponent */] },
    { path: 'project/register', component: __WEBPACK_IMPORTED_MODULE_17__components_project_user_project_register_project_register_component__["a" /* ProjectRegisterComponent */] },
    //http://onehungrymind.com/named-router-outlets-in-angular-2/
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_18__components_project_user_project_home_project_home_component__["a" /* ProjectHomeComponent */],
        children: [
            { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_19__components_project_user_project_profile_project_profile_component__["a" /* ProjectProfileComponent */], outlet: 'project' },
            { path: 'user/:uid/profile/:puid', component: __WEBPACK_IMPORTED_MODULE_20__components_project_user_project_profile_public_project_profile_public_component__["a" /* ProjectProfilePublicComponent */], outlet: 'project' },
            { path: 'user/:uid/profile/:puid/:plid', component: __WEBPACK_IMPORTED_MODULE_31__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__["a" /* PlaylistSearchViewComponent */], outlet: 'project' },
            { path: 'user/:uid/profile/:puid/:plid/:idx', component: __WEBPACK_IMPORTED_MODULE_30__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__["a" /* PlaylistSearchSongDetailsComponent */], outlet: 'project' },
            { path: 'user/:uid/queue', component: __WEBPACK_IMPORTED_MODULE_28__components_project_queue_song_queue_song_queue_component__["a" /* SongQueueComponent */], outlet: 'project' },
            { path: 'user/:uid/messages', component: __WEBPACK_IMPORTED_MODULE_32__components_project_user_notification_view_notification_view_component__["a" /* NotificationViewComponent */], outlet: 'project' },
            { path: 'user/:uid/messages/compose', component: __WEBPACK_IMPORTED_MODULE_33__components_project_user_notification_compose_notification_compose_component__["a" /* NotificationComposeComponent */], outlet: 'project' },
            { path: 'user/:uid/admin', component: __WEBPACK_IMPORTED_MODULE_36__components_project_user_project_admin_project_admin_component__["a" /* ProjectAdminComponent */], outlet: 'project' },
            { path: 'user/:uid/admin/new', component: __WEBPACK_IMPORTED_MODULE_37__components_project_user_project_admin_admin_user_new_admin_user_new_component__["a" /* AdminUserNewComponent */], outlet: 'project' },
            { path: 'user/:uid/admin/:puid', component: __WEBPACK_IMPORTED_MODULE_38__components_project_user_project_admin_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */], outlet: 'project' },
            { path: 'user/:uid/list', component: __WEBPACK_IMPORTED_MODULE_22__components_project_playlist_playlist_list_playlist_list_component__["a" /* PlaylistListComponent */], outlet: 'project' },
            { path: 'user/:uid/list/search', component: __WEBPACK_IMPORTED_MODULE_24__components_project_playlist_playlist_search_playlist_search_component__["a" /* PlaylistSearchComponent */], outlet: 'project' },
            { path: 'user/:uid/list/search/:plid', component: __WEBPACK_IMPORTED_MODULE_31__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__["a" /* PlaylistSearchViewComponent */], outlet: 'project' },
            { path: 'user/:uid/list/search/:plid/:idx', component: __WEBPACK_IMPORTED_MODULE_30__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__["a" /* PlaylistSearchSongDetailsComponent */], outlet: 'project' },
            { path: 'user/:uid/list/new', component: __WEBPACK_IMPORTED_MODULE_25__components_project_playlist_playlist_new_playlist_new_component__["a" /* PlaylistNewComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid', component: __WEBPACK_IMPORTED_MODULE_26__components_project_playlist_playlist_edit_playlist_edit_component__["a" /* PlaylistEditComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/songs', component: __WEBPACK_IMPORTED_MODULE_23__components_project_playlist_playlist_songs_playlist_songs_component__["a" /* PlaylistSongsComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/songs/:idx', component: __WEBPACK_IMPORTED_MODULE_35__components_project_playlist_playlist_songs_playlist_song_details_playlist_song_details_component__["a" /* PlaylistSongDetailsComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/upload', component: __WEBPACK_IMPORTED_MODULE_34__components_project_playlist_playlist_songs_playlist_upload_playlist_upload_component__["a" /* PlaylistUploadComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/add', component: __WEBPACK_IMPORTED_MODULE_27__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/add/:videoId', component: __WEBPACK_IMPORTED_MODULE_27__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/add/details/:idx', component: __WEBPACK_IMPORTED_MODULE_29__components_project_playlist_playlist_add_playlist_add_song_details_playlist_add_song_details_component__["a" /* PlaylistAddSongDetailsComponent */], outlet: 'project' },
            { path: 'user/:uid/list/:plid/add/:videoId/details/:idx', component: __WEBPACK_IMPORTED_MODULE_29__components_project_playlist_playlist_add_playlist_add_song_details_playlist_add_song_details_component__["a" /* PlaylistAddSongDetailsComponent */], outlet: 'project' },
        ] },
    { path: 'project/search/pl', component: __WEBPACK_IMPORTED_MODULE_24__components_project_playlist_playlist_search_playlist_search_component__["a" /* PlaylistSearchComponent */] },
    { path: 'project/search/pl/:plid', component: __WEBPACK_IMPORTED_MODULE_31__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__["a" /* PlaylistSearchViewComponent */] },
    { path: 'project/search/pl/:plid/:idx', component: __WEBPACK_IMPORTED_MODULE_30__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__["a" /* PlaylistSearchSongDetailsComponent */] },
    { path: 'project/search/user/:puid', component: __WEBPACK_IMPORTED_MODULE_20__components_project_user_project_profile_public_project_profile_public_component__["a" /* ProjectProfilePublicComponent */] },
    { path: 'project/search/user/:puid/:plid', component: __WEBPACK_IMPORTED_MODULE_31__components_project_playlist_playlist_search_playlist_search_view_playlist_search_view_component__["a" /* PlaylistSearchViewComponent */] },
    { path: 'project/search/user/:puid/:plid/:idx', component: __WEBPACK_IMPORTED_MODULE_30__components_project_playlist_playlist_search_playlist_search_song_details_playlist_search_song_details_component__["a" /* PlaylistSearchSongDetailsComponent */] },
    { path: 'project/search/s', component: __WEBPACK_IMPORTED_MODULE_27__components_project_playlist_playlist_add_playlist_add_component__["a" /* PlaylistAddComponent */] },
    { path: 'project/search/s/details/:idx', component: __WEBPACK_IMPORTED_MODULE_29__components_project_playlist_playlist_add_playlist_add_song_details_playlist_add_song_details_component__["a" /* PlaylistAddSongDetailsComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES, { enableTracing: false });
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

module.exports = "\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid + '/website/' + wid + '/page']\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.name\"\n             name=\"pageName\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pageDescription\">Page Title</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.title\"\n             name=\"pageTitle\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"delete()\" >Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

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
        this.current_page = { name: "", title: "" };
        this.error_message = "";
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
        var _this = this;
        this._service.findPageById(this.pid).subscribe(function (page) { _this.current_page = page; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    PageEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this._service.updatePage(this.pid, this.current_page).subscribe(function (res) {
            _this.router.navigate(["/user/" + _this.uid + "/website/" + _this.wid + "/page"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this._service.deletePage(this.pid).subscribe(function (res) {
            _this.router.navigate(["/user/" + _this.uid + "/website/" + _this.wid + "/page"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid + '/website/']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/'+wid+'/page/new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <div *ngIf=\"pages.length===0\" class=\"help-block\">\n        No Pages to display.\n  </div>\n\n\n  <ul class=\"list-group\" *ngIf=\"pages.length>0\">\n    <li *ngFor=\"let page of pages\"\n        class=\"list-group-item list-item-borderless\">\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + page._id + '/widget']\"\n           >{{page.name}}</a>\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + page._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n    </li>\n\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

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
        this.error_message = "";
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
        var _this = this;
        this._service.findPagesByWebsiteId(this.wid).subscribe(function (pages) { _this.pages = pages; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid + '/website/' + wid + '/page']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>New Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.name\"\n             name=\"pageName\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pageDescription\">Page Title</label>\n      <input type=\"text\"\n             [(ngModel)]=\"current_page.title\"\n             name=\"pageTitle\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             required/>\n    </div>\n  </form>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

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
        this.current_page = { name: "", title: "" };
        this.error_message = "";
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
        var _this = this;
        this._service.createPage(this.wid, this.current_page).subscribe(function (res) {
            _this.router.navigate(["/user/" + _this.uid + "/website/" + _this.wid + "/page"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
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

module.exports = "\n<div class=\"container\">\n\n    <h1 (click)=\"username='alice'; password='alice'\">Login</h1>\n\n    <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n    </div>\n\n    <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <input type=\"text\"\n             [(ngModel)]=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             required\n             autofocus/>\n      <div *ngIf=\"invalid_username\" class=\"help-block\">\n        Username not Found\n      </div>\n\n      <input type=\"password\"\n             [(ngModel)]=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             class=\"form-control\"\n             required\n             />\n      <div *ngIf=\"invalid_password\" class=\"help-block\">\n        Invalid Username or Password\n      </div>\n\n      <button type=\"submit\" [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\">Login</button>\n\n    </form>\n\n    <a class=\"btn btn-success btn-block\"\n       [routerLink]=\"['/register']\">Register</a>\n\n\n</div>"

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
        this.error_message = "";
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
        this._service.validateUser(this.username, this.password, function (user) { return _this.router.navigate(["/user/" + user._id]); })
            .subscribe(function (code) {
            if (code == 2) {
                _this.invalid_password = true;
            }
            else if (code == 1) {
                _this.invalid_username = true;
            }
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
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

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <div *ngIf=\"changes_saved\" class=\"help-block\">Changes Saved</div>\n\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             [(ngModel)]=\"user.email\"\n             name=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             class=\"form-control\"\n             placeholder=\"First Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             class=\"form-control\"\n             placeholder=\"Last Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/'+ uid + '/website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"logout()\">Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_user_object__ = __webpack_require__("../../../../../src/app/objects/user.object.ts");
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




var ProfileComponent = (function () {
    function ProfileComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.error_message = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_2__objects_user_object__["a" /* User */]("", "", "", "", "", "");
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
        var _this = this;
        this._service.findUserById(this.uid).subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
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

module.exports = "\n<div class=\"container-fluid container-margin\">\n  <h1>Register</h1>\n\n  <form name=\"form\" (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <div *ngIf=\"error_message\" class=\"help-block\">\n      {{error_message}}\n    </div>\n\n\n    <input type=\"text\"\n           [(ngModel)]=\"firstName\"\n           name=\"firstName\"\n           placeholder=\"First Name\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"text\"\n           [(ngModel)]=\"lastName\"\n           name=\"lastName\"\n           placeholder=\"Last Name\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"text\"\n           [(ngModel)]=\"username\"\n           name=\"username\"\n           placeholder=\"username\"\n           class=\"form-control\"\n           required/>\n\n    <div *ngIf=\"invalid_username\" class=\"help-block\">Username Already Exists</div>\n\n    <input type=\"email\"\n           [(ngModel)]=\"email\"\n           name=\"email\"\n           placeholder=\"email\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"password\"\n           [(ngModel)]=\"password\"\n           name=\"password\"\n           placeholder=\"password\"\n           class=\"form-control\"\n           required/>\n\n    <input type=\"password\"\n           [(ngModel)]=\"password_check\"\n           name=\"password_check\"\n           placeholder=\"retype password\"\n           class=\"form-control\"\n           required/>\n\n    <div *ngIf=\"password!=password_check\" class=\"help-block\">Passwords do not match</div>\n\n  <button type=\"submit\" [disabled]=\"!f.valid\"\n          class=\"btn btn-primary btn-block\">Register</button>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/login']\">Cancel</a>\n\n</div>"

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
        this.error_message = "";
        this.invalid_username = false;
        this.invalid_password = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.invalid_username = false;
        this.invalid_password = false;
        if (this.password != this.password_check) {
            this.invalid_password = true;
            return;
        }
        this._service.createUser({
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        }).subscribe(function (user) {
            _this.router.navigate(["/login"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
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

module.exports = "\n  <nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n      <div class=\"row\">\n      <div class=\"col-sm-4 hidden-xs padding-none\" >\n\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Website</b>\n        </a>\n\n        <!--tick mark-->\n        <!--TODO: link?-->\n        <p class=\"navbar-text pull-right glyph-padding-short\">\n          <a [routerLink]=\"['/user/'+ uid + '/website/new']\"\n             class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n\n      </div>\n\t  <!-- end lhs column-->\n\n      <!-- rhs (small) column-->\n      <div class=\"col-sm-8 hidden-xs padding-left-default padding-right-none\">\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Edit Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div>\n\t  <!-- end rhs column-->\n      <!-- rhs (normal) column-->\n      <div class=\"col-xs-12 hidden-sm padding-left-default padding-right-none\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Edit Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div> <!-- end rhs (normal) column-->\n      </div> <!-- end row-->\n  </div>\n\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs padding-none\">\n\n        <div *ngIf=\"websites.length===0\" class=\"help-block\">\n          No Websites to display\n        </div>\n\n        <ul class=\"list-group\" *ngIf=\"websites.length>0\">\n          <li *ngFor=\"let website of websites\"\n              class=\"list-group-item list-item-borderless\">\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id + '/page']\">{{website.name}}</a>\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id]\"\n                 class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n        </li>\n        </ul>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8 padding-content\">\n\n      <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n      </div>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n             [(ngModel)]=\"current_site.name\"\n             name=\"websiteName\"\n             class=\"form-control\"\n             placeholder=\"Website Name\"\n             required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea rows=\"5\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"current_site.description\"\n                    name=\"description\"\n                    id=\"websiteDescription\">{{current_site.description}}</textarea>\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

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
        this.current_site = { name: "", description: "" };
        this.error_message = "";
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
        var _this = this;
        this._service.findWebsitesByUser(this.uid).subscribe(function (sites) { _this.websites = sites; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
        this._service.findWebsiteById(this.wid).subscribe(function (site) {
            _this.current_site = site;
            if (!_this.current_site) {
                //this.current_site  = {name:"ERROR",description:"ERROR"}
                _this.router.navigate(["/user/" + _this.uid + "/website"]);
            }
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WebsiteEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this._service.updateWebsite(this.wid, this.current_site).subscribe(function (res) {
            _this.router.navigate(["/user/" + _this.uid + "/website"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this._service.deleteWebsite(this.wid).subscribe(function (res) {
            _this.router.navigate(["/user/" + _this.uid + "/website"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
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

module.exports = "\n\n<nav class=\"navbar navbar-dark bg-primary  navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Website List</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <div *ngIf=\"websites.length===0\" class=\"help-block\">\n        No Websites to display\n  </div>\n\n  <ul class=\"list-group\" *ngIf=\"websites.length>0\">\n    <li *ngFor=\"let website of websites\"\n        class=\"list-group-item list-item-borderless\">\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+website._id + '/page']\">{{website.name}}</a>\n\n        <a [routerLink]=\"['/user/'+uid+'/website/'+website._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n    </li>\n  </ul>\n\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

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
        this.error_message = "";
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid']; // (+) converts string 'id' to a number
            _this.reload();
        });
    };
    WebsiteListComponent.prototype.reload = function () {
        var _this = this;
        this._service.findWebsitesByUser(this.uid).subscribe(function (sites) { _this.websites = sites; }, function (err) {
            console.log(_this.uid);
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
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

module.exports = "\n  <nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n\n      <!-- lhs column-->\n      <div class=\"col-sm-4 hidden-xs padding-none\" >\n\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>Website</b>\n        </a>\n\n        <!--plus icon -->\n        <!--TODO: link?-->\n        <p class=\"navbar-text pull-right glyph-padding-short\">\n          <a [routerLink]=\"['/user/'+ uid + '/website/new']\"\n             class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n\n      </div>\n\t  <!-- end lhs column-->\n\n      <!-- rhs (small) column-->\n      <div class=\"col-sm-8 hidden-xs padding-left-default padding-right-none\">\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>New Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div>\n\t  <!-- end rhs column-->\n      <!-- rhs (normal) column-->\n      <div class=\"col-xs-12 hidden-sm padding-left-default padding-right-none\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/user/'+ uid + '/website']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <a class=\"navbar-brand thick\">\n          <b>New Website</b>\n        </a>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right glyph-margin\">\n          <a class=\"navbar-link\"\n             (click)=\"saveChanges()\">\n            <span class=\"glyphicon glyphicon-ok padding-right-default\"></span>\n          </a>\n        </p>\n      </div> <!-- end rhs (normal) column-->\n      </div> <!-- end row-->\n  </div>\n\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs padding-none\">\n\n        <div *ngIf=\"websites.length===0\" class=\"help-block\">\n          No Websites to display\n        </div>\n\n        <ul class=\"list-group\" *ngIf=\"websites.length>0\">\n          <li *ngFor=\"let website of websites\"\n              class=\"list-group-item list-item-borderless\">\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id + '/page']\">{{website.name}}</a>\n\n              <a [routerLink]=\"['/user/'+uid+'/website/'+website._id]\"\n                 class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n        </li>\n        </ul>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8 padding-content\">\n      <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n      </div>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n             [(ngModel)]=\"current_site.name\"\n             name=\"websiteName\"\n                 class=\"form-control\"\n             placeholder=\"Website Name\"\n             required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea rows=\"5\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"current_site.description\"\n                    name=\"description\"\n                    id=\"websiteDescription\">{{current_site.description}}</textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

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
        this.current_site = { name: "", description: "" };
        this.error_message = "";
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
        var _this = this;
        this._service.findWebsitesByUser(this.uid).subscribe(function (sites) { _this.websites = sites; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
        this.current_site = {
            name: "New Website",
            description: "",
        };
    };
    WebsiteNewComponent.prototype.saveChanges = function () {
        var _this = this;
        this._service.createWebsite(this.uid, this.current_site).subscribe(function (res) {
            _this.router.navigate(["/user/" + _this.uid + "/website"]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
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

module.exports = "\n\n<nav class=\"navbar navbar-default  navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/' + uid + '/website/'+ wid + '/page' + pid]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let kind of widget_types\"\n        class=\"list-group-item list-item-borderless\">\n      <a (click)=\"newWidget(kind)\">{{kind}}</a>\n    </li>\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

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
        this.error_message = "";
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
        /*
        todo: can I move the factory into the server?
              use a request with pageid and kind?
        */
        var _this = this;
        kind = kind.toUpperCase();
        if (kind == "HEADING" ||
            kind == "HTML" ||
            kind == "IMAGE" ||
            kind == "YOUTUBE" ||
            kind == "TEXT") {
            var widget = this._service.widgetFactory(this.pid, kind);
            this._service.createWidget(this.pid, widget).subscribe(function (res) {
                var url = "/user/" + _this.uid +
                    "/website/" + _this.wid +
                    "/page/" + _this.pid +
                    "/widget/" + res._id;
                console.log(url);
                _this.router.navigate([url]);
            }, function (err) {
                var msg = JSON.parse(err._body);
                _this.error_message = msg.message.message;
            });
        }
        else {
            this.error_message = kind + " not supported.";
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
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

module.exports = "\n<div [ngSwitch]=\"widget.widgetType\">\n\n <div *ngSwitchCase=\"'HEADING'\">\n\n   <app-widget-header></app-widget-header>\n </div>\n\n <div *ngSwitchCase=\"'IMAGE'\">\n   <app-widget-image></app-widget-image>\n </div>\n\n <div *ngSwitchCase=\"'YOUTUBE'\">\n   <app-widget-youtube></app-widget-youtube>\n </div>\n\n <div *ngSwitchCase=\"'HTML'\">\n   <app-widget-html></app-widget-html>\n </div>\n\n <div *ngSwitchCase=\"'TEXT'\">\n   <app-widget-text></app-widget-text>\n </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__["a" /* Widget */]('', '', '');
        this.error_message = "";
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
        var _this = this;
        this._service.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"titleText\">Title Text</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.text\"\n             name=\"widgetText\"\n             placeholder=\"Title Text\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetSize\">Size</label>\n      <input type=\"number\"\n             [(ngModel)]=\"widget.size\"\n             name=\"widgetSize\"\n             placeholder=\"Heading Size\"\n             class=\"form-control\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__["a" /* Widget */]('', '', '');
        this.error_message = "";
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
        var _this = this;
        this._service.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetHeaderComponent.prototype.saveChanges = function () {
        var _this = this;
        this._service.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this._service.deleteWidget(this.wgid).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <!--\n    <div class=\"form-group\">\n      <label for=\"widgetText\">Raw HTML</label>\n      <textarea rows=\"5\"\n                class=\"form-control\"\n                [(ngModel)]=\"widget.text\"\n                name=\"widgetText\"\n                id=\"widgetText\">{{widget.text}}</textarea>\n    </div>\n    -->\n    <div class=\"form-group\">\n    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </div>\n\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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





var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.error_message = "";
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__["a" /* Widget */]('', '', '');
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
        var _this = this;
        this._service.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetHtmlComponent.prototype.saveChanges = function () {
        var _this = this;
        this._service.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetHtmlComponent.prototype.delete = function () {
        var _this = this;
        this._service.deleteWidget(this.wgid).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget/' + wgid]\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Search Flickr</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n<div class=\"input-group\">\n <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\" placeholder=\"Enter Search Term\">\n <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<div class=\"row\">\n <div *ngFor = \"let photo of photos\"\n      class=\"col-xs-4\">\n   <img    (click)=\"selectPhoto(photo)\"\n           width=\"100%\"\n           [src] = \"photo.url\"/>\n\n   <p></p>\n </div>\n</div>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(route, router, _wservice, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._wservice = _wservice;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.searchText = "";
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
        this.widget = new __WEBPACK_IMPORTED_MODULE_5__objects_widget_object__["a" /* Widget */]('', '', '');
        this.photos = [];
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            // TODO: if wgid is not a image widget, redirect
            _this.reload();
        });
    };
    FlickrImageSearchComponent.prototype.reload = function () {
        var _this = this;
        this._wservice.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) { });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        if (!this.searchText) {
            // todo errors
            return;
        }
        this._service
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            _this.photos = data;
        }, function (err) {
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        this.widget.url = photo.url;
        this._wservice.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget/" + _this.wgid;
            _this.router.navigate([url]);
        }, function (err) {
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetUrl\">URL</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.url\"\n             name=\"widgetUrl\"\n             placeholder=\"url\"\n             class=\"form-control\"\n             required/>\n    </div>\n    <div *ngIf=\"invalid_link\" class=\"help-block\">You must supply an image link</div>\n\n\n    <div class=\"form-group\">\n      <label for=\"widgetWidth\">Width</label>\n      <!-- 100px and 100% are valid-->\n      <input type=\"text\"\n             [(ngModel)]=\"widget.width\"\n             name=\"widgetWidth\"\n             placeholder=\"Width (percentage)\"\n             class=\"form-control\"\n             required/>\n    <div *ngIf=\"invalid_width\" class=\"help-block\">Width must be in the form of \"100px\" or \"100%\"</div>\n\n    </div>\n  </form>\n\n\n  <form name=\"myForm\" #myForm\n        method=\"post\" enctype=\"multipart/form-data\">\n     <input  name=\"myFile\" #myFile type=\"file\"     class=\"form-control\"/>\n     <button type=\"button\" (click)=\"uploadImage()\"\n             class=\"btn btn-block btn-primary\">Upload Image</button>\n     <span class=\"small text-danger ml-2\"\n            *ngIf=\"invalid_file\">Please Select a File to Upload</span>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n         (click)=\"searchFlickr()\">Search Flickr</a>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__["a" /* Widget */]('', '', '');
        this.error_message = "";
        this.invalid_width = false;
        this.invalid_link = false;
        this.invalid_file = false;
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
        var _this = this;
        this._service.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetImageComponent.prototype.saveChanges = function () {
        var _this = this;
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
        this._service.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this._service.deleteWidget(this.wgid).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetImageComponent.prototype.uploadImage = function () {
        var _this = this;
        var myFile = this.myFile.nativeElement;
        var myForm = this.myForm.nativeElement;
        if (myFile.files && myFile.files[0]) {
            var formData = new FormData();
            formData.append('myFile', myFile.files[0]);
            this._service.uploadImage(formData).subscribe(function (url) {
                _this.widget.url = url;
                myForm.reset();
                _this.invalid_file = false;
            }, function (err) {
                _this.invalid_file = true;
                myForm.reset();
            });
        }
        else {
            this.invalid_file = true;
        }
    };
    WidgetImageComponent.prototype.searchFlickr = function () {
        var url = "/user/" + this.uid +
            "/website/" + this.wid +
            "/page/" + this.pid +
            "/widget/" + this.wgid + "/search";
        this.router.navigate([url]);
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myFile'),
    __metadata("design:type", Object)
], WidgetImageComponent.prototype, "myFile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myForm'),
    __metadata("design:type", Object)
], WidgetImageComponent.prototype, "myForm", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n\n<label for=\"widget.text\">Text</label>\n<input [(ngModel)]=\"widget.text\" class=\"form-control\"/>\n\n<label for=\"widget.rows\">Rows</label>\n<input [(ngModel)]=\"widget.rows\" class=\"form-control\" type=\"number\"/>\n\n<label for=\"widget.name\">Name</label>\n<div>\n  <input [(ngModel)]=\"widget.name\"\n         type=\"text\"\n         class=\"form-control\"\n         id=\"Name\"\n         name=\"name\"\n         placeholder=\"Name\">\n</div>\n\n<label for=\"widget.placeholder\">Placeholder</label>\n<input [(ngModel)]=\"widget.placeholder\" class=\"form-control\" required/>\n\n<p></p>\n<div class=\"input-group\">\n  <input type=\"text\"\n         readonly\n         value=\"Formatted\"\n         class=\"form-control\"/>\n  <span class=\"input-group-addon\">\n    <input [(ngModel)]=\"widget.formatted\"\n           type=\"checkbox\"/>\n   </span>\n</div>\n<p></p>\n<a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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





var WidgetTextComponent = (function () {
    function WidgetTextComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.error_message = "";
        this.uid = "";
        this.wid = "";
        this.pid = "";
        this.wgid = "";
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__["a" /* Widget */]('', '', '');
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.reload();
        });
    };
    WidgetTextComponent.prototype.reload = function () {
        var _this = this;
        this._service.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetTextComponent.prototype.saveChanges = function () {
        var _this = this;
        this._service.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetTextComponent.prototype.delete = function () {
        var _this = this;
        this._service.deleteWidget(this.wgid).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetTextComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left  glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/' + wid + '/page/' + pid + '/widget']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Widget</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n        {{error_message}}\n  </div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.name\"\n             name=\"widgetName\"\n             placeholder=\"Widget Name\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetUrl\">URL</label>\n      <input type=\"text\"\n             [(ngModel)]=\"widget.url\"\n             name=\"widgetUrl\"\n             placeholder=\"url\"\n             class=\"form-control\"\n             required/>\n    </div>\n    <div *ngIf=\"invalid_link\" class=\"help-block\">You must supply a youtube link</div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetWidth\">Width</label>\n      <!-- 100px and 100% are valid-->\n      <input type=\"text\"\n             [(ngModel)]=\"widget.width\"\n             name=\"widgetWidth\"\n             placeholder=\"Width (percentage)\"\n             class=\"form-control\"\n             required/>\n    <div *ngIf=\"invalid_width\" class=\"help-block\">Width must be in the form of \"100px\" or \"100%\"</div>\n\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__objects_widget_object__["a" /* Widget */]('', '', '');
        this.error_message = "";
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
        var _this = this;
        this._service.findWidgetById(this.wgid).subscribe(function (widget) { _this.widget = widget; }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetYoutubeComponent.prototype.saveChanges = function () {
        var _this = this;
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
        this._service.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this._service.deleteWidget(this.wgid).subscribe(function (widget) {
            var url = "/user/" + _this.uid +
                "/website/" + _this.wid +
                "/page/" + _this.pid +
                "/widget";
            _this.router.navigate([url]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-header/widget-list-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-header/widget-list-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.size\">\n\n    <div *ngSwitchCase=\"1\">\n      <h1>{{widget.text}}</h1>\n    </div>\n\n    <div *ngSwitchCase=\"2\">\n      <h2>{{widget.text}}</h2>\n    </div>\n\n    <div *ngSwitchCase=\"3\">\n      <h3>{{widget.text}}</h3>\n    </div>\n\n    <div *ngSwitchCase=\"4\">\n      <h4>{{widget.text}}</h4>\n    </div>\n\n    <div *ngSwitchCase=\"5\">\n      <h5>{{widget.text}}</h5>\n    </div>\n\n    <div *ngSwitchDefault>\n      error -- widget.size = {{widget.size}} invalid\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-header/widget-list-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetListHeaderComponent = (function () {
    function WidgetListHeaderComponent() {
    }
    WidgetListHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetListHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */]) === "function" && _a || Object)
], WidgetListHeaderComponent.prototype, "widget", void 0);
WidgetListHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list-header',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-header/widget-list-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-header/widget-list-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListHeaderComponent);

var _a;
//# sourceMappingURL=widget-list-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-html/widget-list-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-html/widget-list-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"widget.text\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-html/widget-list-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetListHtmlComponent = (function () {
    function WidgetListHtmlComponent() {
    }
    WidgetListHtmlComponent.prototype.ngOnInit = function () {
    };
    return WidgetListHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */]) === "function" && _a || Object)
], WidgetListHtmlComponent.prototype, "widget", void 0);
WidgetListHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list-html',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-html/widget-list-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-html/widget-list-html.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListHtmlComponent);

var _a;
//# sourceMappingURL=widget-list-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-image/widget-list-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-image/widget-list-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-container\">\n    <img [src]=\"makeSafe(widget.url)\"\n         [style.width]=\"widget.width\"\n         class=\"image-container\"\n         />\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-image/widget-list-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListImageComponent = (function () {
    function WidgetListImageComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    WidgetListImageComponent.prototype.ngOnInit = function () {
    };
    WidgetListImageComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */]) === "function" && _a || Object)
], WidgetListImageComponent.prototype, "widget", void 0);
WidgetListImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list-image',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-image/widget-list-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-image/widget-list-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], WidgetListImageComponent);

var _a, _b;
//# sourceMappingURL=widget-list-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-text/widget-list-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-text/widget-list-text.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"widget.formatted\">\n   <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n </div>\n\n <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n        placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n           rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n           class=\"form-control\">{{widget.text}}</textarea>\n"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-text/widget-list-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListTextComponent = (function () {
    function WidgetListTextComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    WidgetListTextComponent.prototype.ngOnInit = function () {
    };
    WidgetListTextComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */]) === "function" && _a || Object)
], WidgetListTextComponent.prototype, "widget", void 0);
WidgetListTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list-text',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-text/widget-list-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-text/widget-list-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], WidgetListTextComponent);

var _a, _b;
//# sourceMappingURL=widget-list-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container-outer\"\n     [style.width]=\"widget.width\">\n  <div class=\"video-container-inner\">\n      <iframe class=\"video-container\"\n              [src]=\"makeSafe(widget.url)\"\n              frameborder=\"0\" allowfullscreen>\n      </iframe>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__ = __webpack_require__("../../../../../src/app/objects/widget.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListYoutubeComponent = (function () {
    function WidgetListYoutubeComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    WidgetListYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetListYoutubeComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects_widget_object__["a" /* Widget */]) === "function" && _a || Object)
], WidgetListYoutubeComponent.prototype, "widget", void 0);
WidgetListYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list-youtube',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], WidgetListYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-list-youtube.component.js.map

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

module.exports = "\n<nav class=\"navbar  navbar-default navbar-fixed-top\" >\n  <div class=\"container-fluid\" >\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page']\"\n         class=\"navbar-link navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + pid + '/widget/new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n  <div *ngIf=\"error_message\" class=\"help-block\">\n    {{error_message}}\n  </div>\n\n<ul class=\"list-group\" *ngIf=\"widgets.length > 0\"\n    appSortable\n    (newIndexes)=\"sortWidget($event)\">\n\n    <li *ngFor=\"let widget of widgets\"\n        class=\"list-group-item list-item-user-widget\">\n        <div class=\"user-widget\">\n            <div class=\"user-widget-toolbar\">\n                <a [routerLink]=\"['/user/'+uid+'/website/'+ wid + '/page/' + pid + '/widget/' + widget._id]\"\n                   class=\"navbar-link\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                </a>\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </div>\n\n            <!--\n             heading\n             label\n             html\n             text\n             link\n             button\n             image\n             youtube\n             table\n             repeater\n             -->\n\n            <div [ngSwitch]=\"widget.widgetType\">\n                <div *ngSwitchCase=\"'HEADING'\">\n                  <app-widget-list-header [widget]=\"widget\"></app-widget-list-header>\n                </div>\n                <div *ngSwitchCase=\"'YOUTUBE'\">\n                  <app-widget-list-youtube [widget]=\"widget\"></app-widget-list-youtube>\n                </div>\n                <div *ngSwitchCase=\"'IMAGE'\">\n                  <app-widget-list-image [widget]=\"widget\"></app-widget-list-image>\n                </div>\n                <div *ngSwitchCase=\"'HTML'\">\n                  <app-widget-list-html [widget]=\"widget\"></app-widget-list-html>\n                </div>\n                <div *ngSwitchCase=\"'TEXT'\">\n                  <app-widget-list-text [widget]=\"widget\"></app-widget-list-text>\n                </div>\n            </div>\n\n      </div>\n    </li>\n\n\n</ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n  <p class=\"navbar-text pull-left glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-play\"></span>\n    </a>\n\n  </p>\n  <p class=\"navbar-text pull-left glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-eye-open\"></span>\n    </a>\n\n  </p>\n\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/user/'+uid]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>"

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
        this.error_message = "";
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
        var _this = this;
        this._service.findWidgetsByPageId(this.pid).subscribe(function (widgets) {
            _this.widgets = widgets;
            console.log(widgets);
        }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    WidgetListComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.sortWidget = function (event) {
        var _this = this;
        event.uid = this.uid;
        event.wid = this.wid;
        event.pid = this.pid;
        this._service.sortWidget(event).subscribe(function (res) { }, function (err) {
            var msg = JSON.parse(err._body);
            _this.error_message = msg.message;
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/assignment/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
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

/***/ "../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\" *ngIf=\"uid\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a (click)=\"return()\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Playlist Info</b>\n          </a>\n        </p>\n    </div>\n\n    <div class=\"row\" *ngIf=\"!uid\">\n\n\n      <div class=\"col-xs-8\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a (click)=\"return()\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Project Title Here</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/login']\"\n           class=\"btn btn-default btn-block\">Login</a>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/register']\"\n           class=\"btn btn-danger btn-block\">Register</a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<div *ngIf=\"song\">\n\n  Title: {{song.title}}<br>\n  Description: {{song.description}}<br>\n\n  <div class=\"image-container\">\n      <img [src]=\"makeSafe(song.thumbnail)\"\n           width=\"33%\"\n           class=\"image-container\"\n           />\n  </div>\n</div>\n\n<div >\n  <p>Playlists from other users that contain this song:</p>\n  <ul *ngIf=\"playlists.length>0\">\n    <li *ngFor=\"let playlist of playlists\">\n      {{playlist.name}}\n    </li>\n  </ul>\n</div>\n\n</div>\n\n<!-- Footer -->\n<nav *ngIf=\"!uid\"\n  class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistAddSongDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
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





var PlaylistAddSongDetailsComponent = (function () {
    function PlaylistAddSongDetailsComponent(route, router, _service, _pservice, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._pservice = _pservice;
        this.sanitizer = sanitizer;
        this.videoId = null;
        this.idx = 0;
        this.playlists = [];
    }
    PlaylistAddSongDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["uid"]) {
                _this.uid = params['uid'];
            }
            else {
                _this.uid = null;
            }
            _this.plid = params['plid'];
            _this.idx = +params['idx'];
            /*
            let results = []
            if (params["videoId"]) {
              this.videoId = params['videoId']
              results = this._service.getPreviousRelatedSearch().results;
            } else {
              results = this._service.getPreviousKeywordSearch().results;
            }
            */
            var results = _this._service.getPreviousSearchResults().results;
            if (params["videoId"]) {
                _this.videoId = params['videoId'];
            }
            // if the user landed on this page providing invalid arguments, leave
            if (_this.idx < 0 || !results || _this.idx >= results.length) {
                var url = "";
                if (_this.uid) {
                    url = "/project/(project:user/" + _this.uid + "/list/" + _this.plid + "/songs)";
                }
                else {
                    url = "/project/search/s";
                }
                _this.router.navigateByUrl(url);
            }
            _this.reload(results);
        });
    };
    PlaylistAddSongDetailsComponent.prototype.reload = function (results) {
        var _this = this;
        this.song = results[this.idx];
        if (this.song.videoId) {
            this._pservice.findPlaylistsContaining(this.song.videoId).subscribe(function (lists) { _this.playlists = lists; }, function (err) { });
        }
    };
    PlaylistAddSongDetailsComponent.prototype.return = function () {
        var url = "";
        if (this.uid) {
            url = "/project/(project:user/" + this.uid + "/list/" + this.plid;
            if (this.videoId) {
                url += "/add/" + this.videoId;
            }
            else {
                url += "/add";
            }
        }
        else {
            url = "/project/search/s";
        }
        this.router.navigateByUrl(url);
    };
    PlaylistAddSongDetailsComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return PlaylistAddSongDetailsComponent;
}());
PlaylistAddSongDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-add-song-details',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], PlaylistAddSongDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=playlist-add-song-details.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\" *ngIf=\"uid\">\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', plid, 'songs']}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Add Songs</b>\n        </a>\n      </p>\n    </div>\n\n    <div class=\"row\" *ngIf=\"!uid\">\n      <div class=\"col-xs-8\">\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Project Title Here</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/login']\"\n           class=\"btn btn-default btn-block\">Login</a>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/register']\"\n           class=\"btn btn-danger btn-block\">Register</a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<div class=\"row\" *ngIf=\"!uid\">\n  <div class=\"col-xs-3 padding-all\">\n  </div>\n  <div class=\"col-xs-3 padding-all\">\n  <a [routerLink]=\"['/project/search/pl']\"\n     class=\"btn btn-success btn-block\">Search for Playlists</a>\n  </div>\n  <div class=\"col-xs-3 padding-all\">\n  <p disabled=\"true\"\n     class=\"btn btn-success btn-block\">Search for Songs</p>\n  </div>\n  <div class=\"col-xs-3 padding-all\">\n  </div>\n</div>\n\n<!--\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully executed query\"\n  </div>\n-->\n\n<div class=\"input-group\">\n <input [(ngModel)]=\"searchTerm\" type=\"text\" class=\"form-control\"\n        placeholder=\"Enter Search Term\">\n <span class=\"input-group-btn\">\n         <a (click)=\"runSearch()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<div *ngIf=\"searchResults.length>0\">\n <div *ngFor=\"let result of searchResults\">\n       {{result.title}}\n\n       <audio name=\"audioPlayer\" #audioPlayer>\n          <source type=\"audio/mp3\">\n       </audio>\n\n        <div class =\"pull-right\">\n            <!-- TODO: after POC hide this behind user role -->\n            <a (click)=\"playPauseIndex(result.index)\">\n            <span class=\"glyphicon glyphicon-play\"  *ngIf=\"result.state==='wait'\"></span>\n            <span class=\"glyphicon glyphicon-play\"  *ngIf=\"result.state==='paused'\"></span>\n            <span class=\"glyphicon glyphicon-pause\" *ngIf=\"result.state==='playing'\"></span>\n            <span class=\"glyphicon glyphicon-stop\"  *ngIf=\"result.state==='error'\"></span>\n            </a>\n\n            <a *ngIf=\"uid\"\n               (click)=\"addIndexToPlaylist(result.index)\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n            </a>\n\n            <a (click)=\"findRelatedSongs(result.index)\">\n            <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n\n            <a (click)=\"viewDetails(result.index)\">\n            <span class=\"glyphicon glyphicon-info-sign\"></span>\n            </a>\n        </div>\n </div>\n\n</div>\n\n<div *ngIf=\"searchWasRun && !searchResults.length\">\nNo results to display\n</div>\n\n\n</div>\n\n<!-- Footer -->\n<nav *ngIf=\"!uid\"\n  class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>\n"

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
        this.searchWasRun = false;
    }
    PlaylistAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["uid"]) {
                _this.uid = params['uid'];
            }
            else {
                _this.uid = null;
            }
            _this.plid = params['plid'];
            if (params["videoId"]) {
                _this.videoId = params['videoId'];
                _this.searchTerm = "related:" + _this.videoId;
                _this.runSearch();
            }
            else {
                _this.videoId = null;
                var state = _this._service.getPreviousSearchResults();
                _this.searchTerm = state.searchTerm;
                _this.searchResults = state.results;
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
            // used cached search results if available
            var res = this._service.getPreviousRelatedSearch();
            //res.searchTerm==videoId
            if (res.searchTerm === videoId) {
                this.searchResults = res.results;
            }
            else {
                this._service.relatedSearch(videoId)
                    .subscribe(function (data) {
                    _this.successMessage = true;
                    for (var x = 0; x < data.length; x++) {
                        data[x].index = x;
                        data[x].state = "wait";
                    }
                    _this.searchResults = data;
                    _this.searchWasRun = true;
                });
            }
        }
        else {
            var res = this._service.getPreviousKeywordSearch();
            if (res.searchTerm == this.searchTerm) {
                this.searchResults = res.results;
            }
            else {
                this._service.keywordSearch(this.searchTerm)
                    .subscribe(function (data) {
                    _this.successMessage = true;
                    for (var x = 0; x < data.length; x++) {
                        data[x].index = x;
                        data[x].state = "wait";
                    }
                    _this.searchResults = data;
                    _this.searchWasRun = true;
                });
            }
        }
    };
    PlaylistAddComponent.prototype.findRelatedSongs = function (index) {
        var vid = this.searchResults[index].videoId;
        this.searchTerm = "related:" + vid;
        this.runSearch();
    };
    PlaylistAddComponent.prototype.addIndexToPlaylist = function (index) {
        var _this = this;
        if (0 <= index && index < this.searchResults.length) {
            this._plservice.addSongToPlaylist(this.plid, this.searchResults[index]).subscribe(function (res) {
                _this.searchResults.splice(index, 1);
            }, function (err) { console.log("error"); });
        }
    };
    PlaylistAddComponent.prototype.play = function (index) {
        // play an indx and pause others
        for (var x = 0; x < this.searchResults.length; x++) {
            var res = this.searchResults[x];
            if (res.state == "playing" && x !== index) {
                var audio = this.audioPlayer._results[x].nativeElement;
                audio.pause();
                this.searchResults[x].state = "paused";
            }
            else if (res.state == "paused" && x === index) {
                var audio = this.audioPlayer._results[x].nativeElement;
                audio.play();
                this.searchResults[x].state = "playing";
            }
        }
    };
    PlaylistAddComponent.prototype.pause = function (index) {
        var audio = this.audioPlayer._results[index].nativeElement;
        audio.pause();
        this.searchResults[index].state = "paused";
    };
    PlaylistAddComponent.prototype.playPauseIndex = function (index) {
        var audio = this.audioPlayer._results[index].nativeElement;
        // delay loading the source until the user requests playback
        if (this.searchResults[index].state === "wait") {
            audio.src = this.searchResults[index].url;
            this.searchResults[index].state = "paused";
            audio.load();
        }
        if (!audio.error) {
            if (audio.paused) {
                this.play(index);
            }
            else {
                audio.pause();
                this.searchResults[index].state = "paused";
            }
        }
        else {
            console.log(audio.error);
            this.searchResults[index].state = "error";
        }
    };
    PlaylistAddComponent.prototype.viewDetails = function (index) {
        var url = "/project";
        if (!this.uid) {
            url += "/search/s/details/" + index;
        }
        else {
            url += "/(project:user/" + this.uid + "/list/" + this.plid;
            if (this.videoId) {
                url += "/add/" + this.videoId + "/details/" + index;
            }
            else {
                url += "/add/details/" + index;
            }
        }
        console.log(url);
        this.router.navigateByUrl(url);
    };
    return PlaylistAddComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChildren */])('audioPlayer'),
    __metadata("design:type", Object)
], PlaylistAddComponent.prototype, "audioPlayer", void 0);
PlaylistAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-add',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-add/playlist-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_project_service_client__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
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
        this.playlist = { name: "" };
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
        var _this = this;
        this._plservice.findPlaylistById(this.plid).subscribe(function (playlist) {
            _this.playlist = playlist;
        }, function (err) { });
    };
    PlaylistEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + "/list)";
            _this.router.navigateByUrl(url);
        });
    };
    PlaylistEditComponent.prototype.delete = function () {
        var _this = this;
        this._plservice.deletePlaylist(this.plid).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + "/list)";
            _this.router.navigateByUrl(url);
        });
    };
    return PlaylistEditComponent;
}());
PlaylistEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-edit',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-edit/playlist-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
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

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Playlists</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', 'new']}}]\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<ul class=\"list-group\" *ngIf=\"playlists\">\n    <li *ngFor=\"let lst of playlists\"\n         class=\"list-group-item list-item-borderless\">\n\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list', lst._id, 'songs']}}]\">{{lst.name}}</a>\n\n        <p class=\"pull-right\">\n          <a (click)=\"queuePlaylist(lst)\"\n             class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-share\"></span>\n          </a>\n\n          <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list', lst._id]}}]\"\n             class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </p>\n\n    </li>\n</ul>\n\n</div>\n\n<!--\n<ol class=\"list-group\">\n            <li *ngFor=\"let sng of lst.songs\"\n                class=\"list-group-item list-item-borderless\">\n            {{sng.videoId}} -- {{sng.title}}\n            </li>\n        </ol>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_queue_service_client__ = __webpack_require__("../../../../../src/app/services/queue.service.client.ts");
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
    function PlaylistListComponent(route, router, _service, _plservice, _qservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this._qservice = _qservice;
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
        var _this = this;
        this.user = this._service.findUserById(this.uid).subscribe(function (user) {
            _this.user = user;
        }, function (err) { });
        this._plservice.findPlaylistsByUser(this.uid).subscribe(function (playlists) {
            _this.playlists = playlists;
        }, function (err) { });
    };
    PlaylistListComponent.prototype.queuePlaylist = function (lst) {
        var _this = this;
        console.log("eneueue playlist");
        // TODO this should be done on the server side
        this._plservice.findPlaylistById(lst._id).subscribe(function (true_lst) {
            _this._qservice.setQueue(_this.uid, true_lst).subscribe(function (res) {
                console.log("lst set");
            }, function (err) {
                console.log("error setting lst");
            });
        }, function (err) {
            console.log("error retreiving lst");
        });
    };
    return PlaylistListComponent;
}());
PlaylistListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-list',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-list/playlist-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_queue_service_client__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_queue_service_client__["a" /* QueueService */]) === "function" && _e || Object])
], PlaylistListComponent);

var _a, _b, _c, _d, _e;
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
        var _this = this;
        this._plservice.createPlaylist(this.uid, this.playlist).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + "/list)";
            _this.router.navigateByUrl(url);
        });
    };
    return PlaylistNewComponent;
}());
PlaylistNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-new',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-new/playlist-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\" *ngIf=\"uid\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a (click)=\"return()\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Playlist Info</b>\n          </a>\n        </p>\n    </div>\n\n    <div class=\"row\" *ngIf=\"!uid\">\n\n\n      <div class=\"col-xs-8\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a (click)=\"return()\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Project Title Here</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/login']\"\n           class=\"btn btn-default btn-block\">Login</a>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/register']\"\n           class=\"btn btn-danger btn-block\">Register</a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<div *ngIf=\"song\">\n\n    Title: {{song.title}}<br>\n    Description: {{song.description}}<br>\n\n    <div class=\"image-container\" *ngIf=\"song.thumbnail\">\n        <img [src]=\"makeSafe(song.thumbnail)\"\n             width=\"33%\"\n             class=\"image-container\"\n             />\n    </div>\n</div>\n\n<div >\n  <p>Playlists from other users that contain this song:</p>\n  <ul *ngIf=\"playlists.length>0\">\n    <li *ngFor=\"let playlist of playlists\">\n      {{playlist.name}}\n    </li>\n  </ul>\n</div>\n\n</div>\n\n<!-- Footer -->\n<nav *ngIf=\"!uid\"\n  class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSearchSongDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
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




var PlaylistSearchSongDetailsComponent = (function () {
    function PlaylistSearchSongDetailsComponent(route, router, _plservice, sanitizer) {
        this.route = route;
        this.router = router;
        this._plservice = _plservice;
        this.sanitizer = sanitizer;
        this.videoId = null;
        this.idx = 0;
        this.playlists = [];
    }
    PlaylistSearchSongDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["uid"]) {
                _this.uid = params['uid'];
            }
            else {
                _this.uid = null;
            }
            if (params["puid"]) {
                _this.puid = params['puid'];
            }
            else {
                _this.puid = null;
            }
            _this.plid = params['plid'];
            _this.idx = +params['idx'];
            _this.reload();
        });
    };
    PlaylistSearchSongDetailsComponent.prototype.reload = function () {
        var _this = this;
        // todo make a direct api for this
        this._plservice.findSongsForPlaylist(this.plid).subscribe(function (lst) {
            _this.song = lst[_this.idx];
            if (_this.song.videoId) {
                _this._plservice.findPlaylistsContaining(_this.song.videoId).subscribe(function (lists) { _this.playlists = lists; }, function (err) { });
            }
        });
    };
    PlaylistSearchSongDetailsComponent.prototype.return = function () {
        var url = "";
        if (this.uid) {
            if (this.puid) {
                url = "/project/(project:user/" + this.uid +
                    "/profile/" + this.puid + "/" + this.plid;
            }
            else {
                url = "/project/(project:user/" + this.uid +
                    "/list/search/" + this.plid;
            }
        }
        else {
            if (this.puid) {
                url = "/project/search/user/" + this.puid + "/" + this.plid;
            }
            else {
                url = "/project/search/pl/" + this.plid;
            }
        }
        this.router.navigateByUrl(url);
    };
    PlaylistSearchSongDetailsComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return PlaylistSearchSongDetailsComponent;
}());
PlaylistSearchSongDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-search-song-details',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], PlaylistSearchSongDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-search-song-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\" *ngIf=\"uid\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a (click)=\"return()\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>{{playlist.name}}</b>\n          </a>\n        </p>\n    </div>\n\n    <div class=\"row\" *ngIf=\"!uid\">\n\n\n      <div class=\"col-xs-8\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a (click)=\"return()\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Project Title Here</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/login']\"\n           class=\"btn btn-default btn-block\">Login</a>\n      </div>\n\n      <div class=\"col-xs-2 padding-all\">\n        <a [routerLink]=\"['/project/register']\"\n           class=\"btn btn-danger btn-block\">Register</a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<ol *ngIf=\"songs.length>0\">\n     <li *ngFor=\"let song of songs; let i = index;\">\n           {{song.title}}\n\n            <div class =\"pull-right\">\n                <a (click)=\"viewDetails(i)\">\n                <span class=\"glyphicon glyphicon-info-sign\"></span>\n                </a>\n            </div>\n     </li>\n</ol>\n\n</div>\n\n<!-- Footer -->\n<nav *ngIf=\"!uid\"\n  class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSearchViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
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




var PlaylistSearchViewComponent = (function () {
    function PlaylistSearchViewComponent(route, router, _plservice, sanitizer) {
        this.route = route;
        this.router = router;
        this._plservice = _plservice;
        this.sanitizer = sanitizer;
        this.playlist = { songs: [] };
        this.songs = [];
    }
    PlaylistSearchViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["uid"]) {
                _this.uid = params['uid'];
            }
            else {
                _this.uid = null;
            }
            if (params["puid"]) {
                _this.puid = params['puid'];
            }
            else {
                _this.puid = null;
            }
            _this.plid = params['plid'];
            _this.reload();
        });
    };
    PlaylistSearchViewComponent.prototype.reload = function () {
        var _this = this;
        this._plservice.findPlaylistById(this.plid).subscribe(function (lst) { _this.playlist = lst; });
        this._plservice.findSongsForPlaylist(this.plid).subscribe(function (songs) { _this.songs = songs; });
    };
    PlaylistSearchViewComponent.prototype.return = function () {
        var url = "";
        if (this.uid) {
            if (this.puid) {
                url = "/project/(project:user/" + this.uid + "/profile/" + this.puid;
            }
            else {
                url = "/project/(project:user/" + this.uid + "/list/search";
            }
        }
        else {
            if (this.puid) {
                url = "/project/search/user/" + this.puid;
            }
            else {
                url = "/project/search/pl";
            }
        }
        this.router.navigateByUrl(url);
    };
    PlaylistSearchViewComponent.prototype.viewDetails = function (index) {
        var url = "";
        if (this.uid) {
            if (this.puid) {
                url = "/project/(project:user/" + this.uid +
                    "/profile/" + this.puid + "/" + this.plid + "/" + index;
            }
            else {
                url = "/project/(project:user/" + this.uid +
                    "/list/search/" + this.plid + "/" + index;
            }
        }
        else {
            if (this.puid) {
                url = "/project/search/user/" + this.puid + "/" + this.plid + "/" + index;
            }
            else {
                url = "/project/search/pl/" + this.plid + "/" + index;
            }
        }
        this.router.navigateByUrl(url);
    };
    return PlaylistSearchViewComponent;
}());
PlaylistSearchViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-search-view',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], PlaylistSearchViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-search-view.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\" *ngIf=\"uid\">\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Search Playlists</b>\n      </a>\n      </p>\n    </div>\n\n    <div class=\"row\" *ngIf=\"!uid\">\n      <div class=\"col-sm-8 col-xs-4\">\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Project Title Here</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-sm-2 col-xs-4 padding-all\">\n        <a [routerLink]=\"['/project/login']\"\n           class=\"btn btn-default btn-block\">Login</a>\n      </div>\n\n      <div class=\"col-sm-2 col-xs-4 padding-all\">\n        <a [routerLink]=\"['/project/register']\"\n           class=\"btn btn-danger btn-block\">Register</a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<div class=\"row\" *ngIf=\"!uid\">\n  <div class=\"col-sm-3 hidden-xs padding-all\">\n  </div>\n  <div class=\"col-sm-3 col-xs-6 padding-all\">\n  <p disabled=\"true\"\n     class=\"btn btn-success btn-block\">Search for Playlists</p>\n  </div>\n  <div class=\"col-sm-3 col-xs-6 padding-all\">\n  <a [routerLink]=\"['/project/search/s']\"\n     class=\"btn btn-success btn-block\">Search for Songs</a>\n  </div>\n  <div class=\"col-sm-3 col-xs-3 hidden-xs padding-all\">\n  </div>\n</div>\n<!--\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully executed query\"\n  </div>\n-->\n\n<div class=\"input-group\">\n <input [(ngModel)]=\"searchTerm\" type=\"text\" class=\"form-control\"\n        placeholder=\"Enter Search Term\">\n <span class=\"input-group-btn\">\n         <a (click)=\"runSearch()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<ul *ngIf=\"searchResults.length>0\"\n    class=\"list-group\">\n  <li *ngFor=\"let result of searchResults\"\n      class=\"list-group-item\">\n        <div class=\"search-result\">\n        {{result.name}}\n        </div>\n        <span class=\"search-result-icons\">\n             <a (click)=\"openProfile(result)\">\n             <span class=\"glyphicon glyphicon-user padding-left-default\"></span>\n             </a>\n\n             <a *ngIf=\"uid\"\n                (click)=\"copyPlaylist(result)\">\n             <span class=\"glyphicon glyphicon-copy padding-left-default\"></span>\n             </a>\n\n             <a (click)=\"viewPlaylist(result)\">\n             <span class=\"glyphicon glyphicon-info-sign padding-left-default\"></span>\n             </a>\n         </span>\n  </li>\n</ul>\n\n<div *ngIf=\"searchWasRun && !searchResults.length\">\nNo results to display\n</div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav *ngIf=\"!uid\"\n  class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
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




var PlaylistSearchComponent = (function () {
    function PlaylistSearchComponent(route, router, _service, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this.uid = "";
        this.searchTerm = "";
        this.searchResults = [];
        this.alertMessage = false;
        this.successMessage = false;
        this.searchWasRun = false;
    }
    PlaylistSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["uid"]) {
                _this.uid = params['uid'];
            }
            else {
                _this.uid = null;
            }
            _this.reload();
        });
    };
    PlaylistSearchComponent.prototype.reload = function () {
        var state = this._plservice.getPreviousKeywordSearch();
        this.searchTerm = state.searchTerm;
        this.searchResults = state.results;
    };
    PlaylistSearchComponent.prototype.runSearch = function () {
        var _this = this;
        this._plservice.keywordSearch(this.searchTerm)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.searchResults = data;
            _this.searchWasRun = true;
        });
    };
    PlaylistSearchComponent.prototype.openProfile = function (lst) {
        if (this.uid) {
            var url = "/project/(project:user/" + this.uid + "/profile/" + lst.uid + ")";
            this.router.navigateByUrl(url);
        }
        else {
            var url = "/project/search/user/" + lst.uid;
            this.router.navigateByUrl(url);
        }
    };
    PlaylistSearchComponent.prototype.copyPlaylist = function (lst) {
        var _this = this;
        if (this.uid) {
            lst.name = "Copy of " + lst.name;
            this._plservice.createPlaylist(this.uid, lst)
                .subscribe(function (new_lst) {
                var url = "/project/(project:user/" + _this.uid + "/list/" + new_lst._id + ")";
                _this.router.navigateByUrl(url);
            });
        }
    };
    PlaylistSearchComponent.prototype.viewPlaylist = function (lst) {
        if (this.uid) {
            var url = "/project/(project:user/" + this.uid + "/list/search/" + lst._id + ")";
            this.router.navigateByUrl(url);
        }
        else {
            var url = "/project/search/pl/" + lst._id;
            this.router.navigateByUrl(url);
        }
    };
    return PlaylistSearchComponent;
}());
PlaylistSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-search',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-search/playlist-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_service_client__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object])
], PlaylistSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', plid, 'songs']}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Song Details</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid content-body\">\n\n<div *ngIf=\"song\">\n\n    <!-- TODO this should allow editing -->\n\n    <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"song.title\"\n             name=\"widgetName\"\n             placeholder=\"Song Title\"\n             class=\"form-control\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widgetText\">Description</label>\n      <textarea rows=\"5\"\n                class=\"form-control\"\n                [(ngModel)]=\"song.description\"\n                name=\"widgetText\"\n                id=\"widgetText\">{{song.description}}</textarea>\n    </div>\n\n    </form>\n\n    <div class=\"image-container\" *ngIf=\"song.thumbnail\">\n        <img [src]=\"makeSafe(song.thumbnail)\"\n             width=\"33%\"\n             class=\"image-container\"\n             />\n    </div>\n\n<!--\n    <div >\n      <p>Playlists from other users that contain this song:</p>\n      <ul *ngIf=\"playlists.length>0\">\n        <li *ngFor=\"let playlist of playlists\">\n          {{playlist.name}}\n        </li>\n      </ul>\n    </div>\n-->\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSongDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
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




var PlaylistSongDetailsComponent = (function () {
    function PlaylistSongDetailsComponent(route, router, _plservice, sanitizer) {
        this.route = route;
        this.router = router;
        this._plservice = _plservice;
        this.sanitizer = sanitizer;
        this.videoId = null;
        this.idx = 0;
        this.song = { title: "", description: "" };
        this.playlist = [];
        this.playlists = [];
    }
    PlaylistSongDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.plid = params['plid'];
            _this.idx = +params['idx'];
            _this.reload();
        });
    };
    PlaylistSongDetailsComponent.prototype.reload = function () {
        var _this = this;
        // todo make a direct api for this
        this._plservice.findPlaylistById(this.plid).subscribe(function (lst) {
            _this.playlist = lst;
            _this.song = lst.songs[_this.idx];
            /*
            if (this.song.videoId) {
              this._pservice.findPlaylistsContaining(this.song.videoId).subscribe(
                (lists) => { this.playlists = lists },
                (err) => {}
              )
            }
            */
        });
    };
    PlaylistSongDetailsComponent.prototype.saveChanges = function () {
        var _this = this;
        this.playlist[this.idx] = this.song;
        this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + "/list/" + _this.plid + "/songs)";
            _this.router.navigateByUrl(url);
        });
    };
    PlaylistSongDetailsComponent.prototype.makeSafe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return PlaylistSongDetailsComponent;
}());
PlaylistSongDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-song-details',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], PlaylistSongDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=playlist-song-details.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list']}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>{{playlist.name}}</b>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"uploadSong()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-cloud-upload\"></span>\n      </a>\n\n      <a (click)=\"addSongs()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<ul class=\"list-group\"\n    *ngIf=\"playlist && songs\"\n    appSortable\n    (newIndexes)=\"reorderList($event)\">\n    <li *ngFor=\"let song of songs; let i = index\"\n         class=\"list-group-item list-item-borderless\">\n\n        {{song.index}}. {{song.title}}\n\n        <div class =\"pull-right\">\n            <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', playlist._id, 'add', song.videoId]}}]\">\n            <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n\n            <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', playlist._id, 'songs', i]}}]\">\n            <span class=\"glyphicon glyphicon-info-sign\"></span>\n            </a>\n        </div>\n\n    </li>\n</ul>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSongsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
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
    function PlaylistSongsComponent(route, router, _service, _plservice, _pservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._plservice = _plservice;
        this._pservice = _pservice;
        this.playlist = { songs: [] };
        this.songs = [];
        this.changed = false;
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
        var _this = this;
        this.user = this._service.findUserById(this.uid).subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.log(err);
        });
        this._plservice.findPlaylistById(this.plid).subscribe(function (playlist) {
            _this.playlist = playlist;
        }, function (err) { });
        this._plservice.findSongsForPlaylist(this.plid).subscribe(function (songs) {
            _this.songs = songs;
            for (var i = 0; i < _this.songs.length; i++) {
                _this.songs[i].index = i + 1;
            }
            console.log("got here");
        }, function (err) {
            console.log(err);
        });
    };
    PlaylistSongsComponent.prototype.saveChanges = function () {
        var _this = this;
        console.log(this.playlist.songs.map(function (x) { return x; }));
        this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + "/list)";
            _this.router.navigateByUrl(url);
        });
    };
    PlaylistSongsComponent.prototype.uploadSong = function () {
        var _this = this;
        if (this.changed) {
            this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(function () {
                var url = "/project/(project:user/" + _this.uid + "/list/" + _this.plid + "/upload)";
                _this.router.navigateByUrl(url);
            }, function (err) { });
        }
        else {
            var url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/upload)";
            this.router.navigateByUrl(url);
        }
    };
    PlaylistSongsComponent.prototype.addSongs = function () {
        var _this = this;
        if (this.changed) {
            this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(function () {
                _this._pservice.clearPreviousKeywordSearch();
                var url = "/project/(project:user/" + _this.uid + "/list/" + _this.plid + "/add)";
                _this.router.navigateByUrl(url);
            }, function (err) { });
        }
        else {
            this._pservice.clearPreviousKeywordSearch();
            var url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/add)";
            this.router.navigateByUrl(url);
        }
    };
    // TODO: other ways out of this page need to check if the list was changed
    // TODO: reordered elements need their indices updated
    PlaylistSongsComponent.prototype.reorderList = function (event) {
        // drag and drop does not upadte the internal list, only the view
        this.playlist.songs.splice(event.endIndex, 0, this.playlist.songs.splice(event.startIndex, 1)[0]);
        this.songs.splice(event.endIndex, 0, this.songs.splice(event.startIndex, 1)[0]);
        this.changed = true;
        for (var i = 0; i < this.songs.length; i++) {
            this.songs[i].index = i + 1;
        }
    };
    return PlaylistSongsComponent;
}());
PlaylistSongsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-songs',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-songs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_project_service_client__["a" /* ProjectService */]) === "function" && _e || Object])
], PlaylistSongsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=playlist-songs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Upload Song</b>\n        </a>\n      </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <form name=\"myForm\" #myForm\n        method=\"post\" enctype=\"multipart/form-data\">\n     <label for=\"artist\">Artist</label>\n      <input type=\"text\"\n             [(ngModel)]=\"artist\"\n             name=\"artist\"\n             placeholder=\"Artist Name\"\n             class=\"form-control\"\n             required/>\n     <label for=\"title\">Title</label>\n      <input type=\"text\"\n             [(ngModel)]=\"title\"\n             name=\"title\"\n             placeholder=\"Song Title\"\n             class=\"form-control\"\n             required/>\n\n     <label for=\"myFile\">File Upload</label>\n     <input  name=\"myFile\" #myFile type=\"file\"     class=\"form-control\"/>\n     <button type=\"button\" (click)=\"uploadAudio()\"\n             class=\"btn btn-block btn-primary\">Upload Audio</button>\n     <span class=\"small text-danger ml-2\"\n            *ngIf=\"invalid_file\">Please Select a File to Upload</span>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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




var PlaylistUploadComponent = (function () {
    function PlaylistUploadComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.uid = "";
        this.plid = "";
        this.artist = "";
        this.title = "";
        this.description = "";
    }
    PlaylistUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.plid = params['plid'];
            _this.reload();
        });
    };
    PlaylistUploadComponent.prototype.reload = function () {
    };
    PlaylistUploadComponent.prototype.uploadAudio = function () {
        var _this = this;
        var myFile = this.myFile.nativeElement;
        var myForm = this.myForm.nativeElement;
        if (myFile.files && myFile.files[0]) {
            var formData = new FormData();
            formData.append('myFile', myFile.files[0]);
            formData.append('artist', this.artist);
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('baseUrl', this.baseUrl);
            formData.append('plid', this.plid);
            formData.append('uid', this.uid);
            this._service.uploadAudio(formData).subscribe(function (song) {
                console.log("got here");
                var url = "/project/(project:user/" + _this.uid + "/list/" + _this.plid + "/songs)";
                _this.router.navigateByUrl(url);
            }, function (err) {
                //this.invalid_file = true
                myForm.reset();
            });
        }
        else {
            //this.invalid_file = true;
        }
    };
    return PlaylistUploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myFile'),
    __metadata("design:type", Object)
], PlaylistUploadComponent.prototype, "myFile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myForm'),
    __metadata("design:type", Object)
], PlaylistUploadComponent.prototype, "myForm", void 0);
PlaylistUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-playlist-upload',
        template: __webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _c || Object])
], PlaylistUploadComponent);

var _a, _b, _c;
//# sourceMappingURL=playlist-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/queue/song-queue/song-queue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/queue/song-queue/song-queue.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left glyph-margin\">\n      <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n         class=\"navbar-link  navbar-chevron-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>My Song Queue</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n<ul class=\"list-group\"\n    *ngIf=\"playlist && playlist.songs.length>0\"\n    appSortable\n    (newIndexes)=\"reorderList($event)\">\n    <li *ngFor=\"let song of playlist.songs\"\n         class=\"list-group-item list-item-borderless\">\n\n        {{song.title}}\n\n        <div class =\"pull-right\">\n\n\n            <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\">\n            <span class=\"glyphicon glyphicon-info-sign\"></span>\n            </a>\n        </div>\n\n    </li>\n</ul>\n\n<div *ngIf=\"!(playlist) || playlist.songs.length===0\">\nNo Songs To Display\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/queue/song-queue/song-queue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongQueueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_queue_service_client__ = __webpack_require__("../../../../../src/app/services/queue.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongQueueComponent = (function () {
    function SongQueueComponent(route, router, _service, _qservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._qservice = _qservice;
        this.playlist = { songs: [] };
    }
    SongQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    SongQueueComponent.prototype.reload = function () {
        var _this = this;
        this.user = this._service.findUserById(this.uid).subscribe(function (user) {
            _this.user = user;
            console.log("found user");
        }, function (err) {
            console.log("error loading user");
        });
        this._qservice.getQueue(this.uid).subscribe(function (playlist) {
            _this.playlist = playlist;
            console.log("found queue");
            console.log(playlist);
        }, function (err) {
            console.log("error loading queue");
        });
    };
    SongQueueComponent.prototype.saveChanges = function () {
        var _this = this;
        this._qservice.setQueue(this.uid, this.playlist).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + ")";
            _this.router.navigateByUrl(url);
        });
    };
    SongQueueComponent.prototype.reorderList = function (event) {
        // drag and drop does not upadte the internal list, only the view
        var song = this.playlist.songs.splice(event.startIndex, 1)[0];
        this.playlist.songs.splice(event.endIndex, 0, song);
        // this.playlist.songs.map( x => x._id )
    };
    return SongQueueComponent;
}());
SongQueueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-song-queue',
        template: __webpack_require__("../../../../../src/app/components/project/queue/song-queue/song-queue.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/queue/song-queue/song-queue.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_queue_service_client__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_queue_service_client__["a" /* QueueService */]) === "function" && _d || Object])
], SongQueueComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=song-queue.component.js.map

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

/***/ "../../../../../src/app/components/project/user/notification-compose/notification-compose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/notification-compose/notification-compose.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n    <div class=\"col-xs-8\">\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid,'messages']}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Compose</b>\n        </a>\n      </p>\n    </div>\n\n    <div class=\"col-xs-4 padding-all\">\n        <a (click)=\"sendMessage()\"\n           class=\"btn btn-primary btn-block\">Send</a>\n    </div>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <p>\n  you have {{followers.length}} followers\n  </p>\n  <form>\n\n    <div class=\"form-group\">\n      <!--<label for=\"widgetText\">Raw HTML</label>-->\n      <textarea rows=\"5\"\n                maxlength=\"140\"\n                class=\"form-control\"\n                [(ngModel)]=\"message\"\n                name=\"widgetText\"\n                id=\"widgetText\">{{message}}</textarea>\n    </div>\n    {{140 - message.length}}\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/notification-compose/notification-compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_social_service_client__ = __webpack_require__("../../../../../src/app/services/social.service.client.ts");
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




var NotificationComposeComponent = (function () {
    function NotificationComposeComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.message = "";
        this.followers = [];
    }
    NotificationComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    NotificationComposeComponent.prototype.reload = function () {
        var _this = this;
        this._service.getFollowers(this.uid).subscribe(function (lst) { _this.followers = lst; }, function (err) { });
    };
    NotificationComposeComponent.prototype.sendMessage = function () {
        var _this = this;
        this._service.sendNotification(this.uid, this.message).subscribe(function (res) {
            var url = "/project/(project:user/" + _this.uid + "/messages)";
            _this.router.navigateByUrl(url);
        }, function (err) { });
    };
    return NotificationComposeComponent;
}());
NotificationComposeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notification-compose',
        template: __webpack_require__("../../../../../src/app/components/project/user/notification-compose/notification-compose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/notification-compose/notification-compose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_social_service_client__["a" /* SocialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_social_service_client__["a" /* SocialService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], NotificationComposeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=notification-compose.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/notification-view/notification-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/notification-view/notification-view.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n    <div class=\"col-xs-8\">\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Notifications</b>\n        </a>\n      </p>\n    </div>\n\n    <div class=\"col-xs-4 padding-all\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'messages', 'compose']}}]\"\n           class=\"btn btn-danger btn-block\">Compose</a>\n    </div>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid content-body\">\n\n<ul *ngIf=\"messages.length>0\"\n    class=\"list-group\">\n    <li *ngFor=\"let message of messages\"\n         class=\"list-group-item\">\n        {{message.message}}\n    </li>\n</ul>\n\n<div *ngIf=\"messages.length===0\" class=\"centered-content\">\nNo messages to display. Try following other users!\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/notification-view/notification-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_social_service_client__ = __webpack_require__("../../../../../src/app/services/social.service.client.ts");
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




var NotificationViewComponent = (function () {
    function NotificationViewComponent(route, router, _service, sanitizer) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.sanitizer = sanitizer;
        this.messages = [];
    }
    NotificationViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    NotificationViewComponent.prototype.reload = function () {
        var _this = this;
        this._service.getNotifications(this.uid).subscribe(function (messages) {
            _this.messages = messages;
            console.log("got msg return");
            console.log(_this.messages);
        });
    };
    return NotificationViewComponent;
}());
NotificationViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notification-view',
        template: __webpack_require__("../../../../../src/app/components/project/user/notification-view/notification-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/notification-view/notification-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_social_service_client__["a" /* SocialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_social_service_client__["a" /* SocialService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], NotificationViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=notification-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'admin']}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Admin: Edit User</b>\n      </a>\n      </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid content-body\">\n\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"role\">Role</label>\n      <input type=\"role\"\n             [(ngModel)]=\"user.role\"\n             name=\"role\"\n             placeholder=\"Role\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             [(ngModel)]=\"user.email\"\n             name=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             class=\"form-control\"\n             placeholder=\"First Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             class=\"form-control\"\n             placeholder=\"Last Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"resetPassword()\">\n     Delete User</a>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"deleteUser()\">\n     Delete User</a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_user_object__ = __webpack_require__("../../../../../src/app/objects/user.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserEditComponent = (function () {
    function AdminUserEditComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.uid = "";
        this.puid = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_3__objects_user_object__["a" /* User */]("", "", "", "", "", "");
    }
    AdminUserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.puid = params['puid'];
            _this.reload();
        });
    };
    AdminUserEditComponent.prototype.reload = function () {
        var _this = this;
        this._service.findUserById(this.puid).subscribe(function (user) {
            _this.user = user;
        }, function (err) { });
    };
    AdminUserEditComponent.prototype.resetPassword = function () {
    };
    AdminUserEditComponent.prototype.deleteUser = function () {
    };
    return AdminUserEditComponent;
}());
AdminUserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-edit',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-edit/admin-user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], AdminUserEditComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'admin']}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Admin: Create User</b>\n      </a>\n      </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid content-body\">\n\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"role\">Role</label>\n      <input type=\"role\"\n             [(ngModel)]=\"user.role\"\n             name=\"role\"\n             placeholder=\"Role\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\"\n             [(ngModel)]=\"user.password\"\n             name=\"password\"\n             class=\"form-control\"\n             placeholder=\"Password\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Verify Password</label>\n      <input type=\"password\"\n             [(ngModel)]=\"verify_password\"\n             name=\"password\"\n             class=\"form-control\"\n             placeholder=\"Password\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             [(ngModel)]=\"user.email\"\n             name=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             class=\"form-control\"\n             placeholder=\"First Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             class=\"form-control\"\n             placeholder=\"Last Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n\n  </form>\n\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"createUser()\">\n     Create User</a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_user_object__ = __webpack_require__("../../../../../src/app/objects/user.object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserNewComponent = (function () {
    function AdminUserNewComponent(route, router, _service) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this.uid = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_3__objects_user_object__["a" /* User */]("", "", "", "", "", "");
    }
    AdminUserNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    AdminUserNewComponent.prototype.reload = function () {
    };
    AdminUserNewComponent.prototype.createUser = function () {
    };
    return AdminUserNewComponent;
}());
AdminUserNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-new',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-admin/admin-user-new/admin-user-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], AdminUserNewComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-user-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/project-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/project-admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n      <!--back mark-->\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid]}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Admin</b>\n      </a>\n      </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid content-body\">\n\n<a class=\"btn btn-danger btn-block \"\n     (click)=\"reset()\">\n     Reset Database</a>\n\n<a class=\"btn btn-danger btn-block \"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'admin', 'new']}}]\">\n     Create User</a>\n\n<div class=\"input-group\">\n <input [(ngModel)]=\"searchTerm\" type=\"text\" class=\"form-control\"\n        placeholder=\"Search For Users\">\n <span class=\"input-group-btn\">\n         <a (click)=\"runSearch()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<div *ngIf=\"searchResults.length>0\">\n <div *ngFor=\"let result of searchResults\">\n       {{result.username}}\n\n        <div class =\"pull-right\">\n            <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'admin', result._id]}}]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n        </div>\n </div>\n\n</div>\n\n<div *ngIf=\"searchWasRun && !searchResults.length\">\nNo results to display\n</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-admin/project-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service_client__ = __webpack_require__("../../../../../src/app/services/project.service.client.ts");
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




var ProjectAdminComponent = (function () {
    function ProjectAdminComponent(route, router, _service, _pservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._pservice = _pservice;
        this.uid = "";
        this.searchTerm = "";
        this.searchResults = [];
        this.searchWasRun = false;
    }
    ProjectAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    ProjectAdminComponent.prototype.reload = function () {
        var state = this._service.getPreviousUserSearch();
        this.searchTerm = state.searchTerm;
        this.searchResults = state.results;
    };
    ProjectAdminComponent.prototype.reset = function () {
        var _this = this;
        this._pservice.databaseReset().subscribe(function (res) {
            _this.router.navigateByUrl("/project/search/pl");
        }, function (err) {
        });
    };
    ProjectAdminComponent.prototype.runSearch = function () {
        var _this = this;
        this._service.findUsersByName(this.searchTerm)
            .subscribe(function (data) {
            _this.searchResults = data;
            _this.searchWasRun = true;
        });
    };
    return ProjectAdminComponent;
}());
ProjectAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-admin',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-admin/project-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-admin/project-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_service_client__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_service_client__["a" /* ProjectService */]) === "function" && _d || Object])
], ProjectAdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project-admin.component.js.map

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

module.exports = "\n<div>\n    <router-outlet name=\"project\"></router-outlet>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  <p class=\"navbar-text pull-left glyph-margin\">\n    <audio\n       name=\"audioPlayer\"\n       #audioPlayer\n       width=0px\n       height=0px>\n      <!--<source src=\"http://localhost:3100/api/youtube/2oPeZFOpPAM\" type=\"audio/mp3\">-->\n      <source src=\"http://localhost:3100/public/uploads/top.wav\" type=\"audio/mp3\">\n    </audio>\n\n    <a (click)=\"playPauseClicked()\"\n       class=\"navbar-link\">\n\n      <span class=\"glyphicon glyphicon-warning-sign\" *ngIf=\"song_load_error\"></span>\n      <span class=\"glyphicon glyphicon-play\" *ngIf=\"!song_load_error && !audioPlayer.error && audioPlayer.paused\"></span>\n      <span class=\"glyphicon glyphicon-pause\" *ngIf=\"!song_load_error && !audioPlayer.error && !audioPlayer.paused\"></span>\n      <span class=\"glyphicon glyphicon-stop\" *ngIf=\"!song_load_error && audioPlayer.error\"></span>\n    </a>\n\n    <a (click)=\"loadNextSong()\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-forward\"></span>\n    </a>\n\n    {{current_song.length}}. {{current_song.title}}\n  </p>\n\n  <p class=\"navbar-text pull-right glyph-margin\">\n    <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid,'messages']}}]\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-bell\"></span>\n    </a>\n\n    <a (click)=\"openSongQueue()\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-th-list\"></span>\n    </a>\n\n    <a (click)=\"openProfileHome()\"\n       class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-home/project-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_queue_service_client__ = __webpack_require__("../../../../../src/app/services/queue.service.client.ts");
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
    function ProjectHomeComponent(route, router, _service, _qservice) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._service = _service;
        this._qservice = _qservice;
        this.current_song = { length: 0, url: "", title: "" };
        this.song_load_error = false;
        _qservice.queueChangedEvent.subscribe(function (res) {
            _this.onQueueChanged();
        });
    }
    ProjectHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var aud = this.audioPlayer.nativeElement;
        aud.onended = function () { _this.onPlaybackEnd(); };
        console.log(aud);
        // redirect the user to the real home page when
        // an invalid path is given
        if (!this.route.snapshot.firstChild ||
            !this.route.snapshot.firstChild.url[1].path) {
            var url = "/project/search/pl";
            this.router.navigateByUrl(url);
        }
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // this._activatedRoute.snapshot is up to date
                if (_this.route.snapshot.firstChild) {
                    var uid = _this.route.snapshot.firstChild.url[1].path;
                    _this.onRouteChanged(uid);
                    console.log(event);
                }
            }
        });
    };
    ProjectHomeComponent.prototype.reload = function () {
    };
    ProjectHomeComponent.prototype.onRouteChanged = function (uid) {
        console.log("route changed " + uid);
    };
    ProjectHomeComponent.prototype.openSongQueue = function () {
        if (this.route.snapshot.firstChild) {
            var uid = this.route.snapshot.firstChild.url[1].path;
            if (uid) {
                var url = "/project/(project:user/" + uid + "/queue)";
                this.router.navigateByUrl(url);
            }
        }
    };
    ProjectHomeComponent.prototype.openProfileHome = function () {
        if (this.route.snapshot.firstChild) {
            var uid = this.route.snapshot.firstChild.url[1].path;
            if (uid) {
                var url = "/project/(project:user/" + uid + ")";
                this.router.navigateByUrl(url);
            }
        }
    };
    ProjectHomeComponent.prototype.onQueueChanged = function () {
        if (this.route.snapshot.firstChild) {
            var uid = this.route.snapshot.firstChild.url[1].path;
            if (uid) {
                this.loadCurrentSong();
            }
        }
    };
    ProjectHomeComponent.prototype.playPauseClicked = function () {
        var aud = this.audioPlayer.nativeElement;
        if (!aud.error) {
            if (aud.paused) {
                aud.play();
            }
            else {
                aud.pause();
            }
        }
        else {
            console.error(aud.error);
        }
    };
    ProjectHomeComponent.prototype.loadCurrentSong = function () {
        var _this = this;
        if (!this.route.snapshot.firstChild) {
            return;
        }
        var uid = this.route.snapshot.firstChild.url[1].path;
        var aud = this.audioPlayer.nativeElement;
        if (uid) {
            this._qservice.currentSong(uid).subscribe(function (song) {
                _this.song_load_error = false;
                _this.current_song = song;
                console.log(song);
                aud.src = song.url;
                aud.play();
            }, function (err) {
                console.log("error loading current song");
                _this.song_load_error = true;
                _this.current_song = { length: 0, url: "", title: "" };
            });
        }
    };
    ProjectHomeComponent.prototype.loadNextSong = function () {
        var _this = this;
        if (!this.route.snapshot.firstChild) {
            return;
        }
        var uid = this.route.snapshot.firstChild.url[1].path;
        var aud = this.audioPlayer.nativeElement;
        if (uid) {
            this._qservice.nextSong(uid).subscribe(function (song) {
                _this.song_load_error = false;
                _this.current_song = song;
                aud.src = song.url;
                aud.play();
            }, function (err) {
                console.log("error loading next song");
                _this.song_load_error = true;
                _this.current_song = { length: 0, url: "", title: "" };
            });
        }
    };
    ProjectHomeComponent.prototype.onPlaybackEnd = function () {
        this.loadNextSong();
    };
    return ProjectHomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('audioPlayer'),
    __metadata("design:type", Object)
], ProjectHomeComponent.prototype, "audioPlayer", void 0);
ProjectHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-home',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-home/project-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_queue_service_client__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_queue_service_client__["a" /* QueueService */]) === "function" && _d || Object])
], ProjectHomeComponent);

var _a, _b, _c, _d;
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

module.exports = "\n<div class=\"container\">\n\n    <h1  (click)=\"username='alice'; password='alice'\">Login</h1>\n\n    <!--\n    jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial\n    -->\n    <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <input type=\"text\"\n             [(ngModel)]=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             required/>\n      <div *ngIf=\"invalid_username\" class=\"help-block\">Username not Found</div>\n      <input type=\"password\"\n             [(ngModel)]=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             class=\"form-control\"\n             required/>\n      <div *ngIf=\"invalid_password\" class=\"help-block\">Password is required</div>\n\n      <button (click)=\"login()\"\n              class=\"btn btn-primary btn-block\">Login</button>\n\n    </form>\n\n    <a class=\"btn btn-success btn-block\"\n       [routerLink]=\"['project/register']\">Register</a>\n\n\n</div>"

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
        var _this = this;
        this.invalid_password = false;
        this.invalid_username = false;
        this._service.validateUser(this.username, this.password, function (user) { return _this.router.navigateByUrl("/project/(project:user/" + user._id + ")"); })
            .subscribe(function (code) {
            if (code == 2) {
                _this.invalid_password = true;
            }
            else if (code == 1) {
                _this.invalid_username = true;
            }
        }, function (err) { });
    };
    return ProjectLoginComponent;
}());
ProjectLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-login',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-login/project-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
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

module.exports = "\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\" *ngIf=\"uid\">\n      <!--back mark-->\n      <!--\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid, 'list', 'search']}}]\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      -->\n\n      <p class=\"navbar-text pull-left glyph-margin\">\n        <a (click)=\"back()\"\n           class=\"navbar-link  navbar-chevron-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>{{user_public.username}}</b>\n      </a>\n      </p>\n    </div>\n\n    <div class=\"row\" *ngIf=\"!uid\">\n\n      <div class=\"col-xs-6 col-md-8\">\n        <!--back mark-->\n        <p class=\"navbar-text pull-left glyph-margin\">\n          <a [routerLink]=\"['/project/search/pl']\"\n             class=\"navbar-link  navbar-chevron-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>{{user_public.username}}</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-3 col-md-2 padding-all\">\n        <a [routerLink]=\"['/project/login']\"\n           class=\"btn btn-default btn-block\">Login</a>\n      </div>\n\n      <div class=\"col-xs-3 col-md-2 padding-all\">\n        <a [routerLink]=\"['/project/register']\"\n           class=\"btn btn-danger btn-block\">Register</a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid content-body\">\n\n      User Name: {{user_public.username}}<br>\n      Name: {{user_public.firstName}} {{user_public.lastName}}<br>\n      Email: {{user_public.email}}<br>\n\n<div *ngIf=\"uid\">\n\n<div *ngIf=\"isConnected\">\n  <a class=\"btn btn-primary btn-block\"\n     (click)=\"unfollow()\">\n     Unfollow</a>\n</div>\n\n<div *ngIf=\"!isConnected\">\n  <a class=\"btn btn-primary btn-block\"\n     (click)=\"follow()\">\n     Follow</a>\n</div>\n\n</div>\n\n<br>\nPlaylists:\n<br>\n\n\n\n<div *ngIf=\"playlists.length>0\">\n <div *ngFor=\"let lst of playlists\">\n       {{lst.name}}\n\n        <div class =\"pull-right\">\n            <a *ngIf=\"uid\"\n               (click)=\"copyPlaylist(lst)\">\n            <span class=\"glyphicon glyphicon-copy\"></span>\n            </a>\n\n            <a (click)=\"viewPlaylist(lst)\">\n            <span class=\"glyphicon glyphicon-info-sign\"></span>\n            </a>\n        </div>\n </div>\n</div>\n<div *ngIf=\"playlists.length===0\">\nNo Playlists to display\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProfilePublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_social_service_client__ = __webpack_require__("../../../../../src/app/services/social.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function ProjectProfilePublicComponent(route, router, location, _service, _plservice, _socialService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this._service = _service;
        this._plservice = _plservice;
        this._socialService = _socialService;
        this.isConnected = false;
        this.user_public = { username: "" };
        this.playlists = [];
    }
    ProjectProfilePublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["uid"]) {
                _this.uid = params['uid'];
            }
            else {
                _this.uid = null;
            }
            _this.puid = params['puid'];
            _this.reload();
        });
    };
    ProjectProfilePublicComponent.prototype.reload = function () {
        var _this = this;
        this._service.findUserById(this.puid).subscribe(function (user) { _this.user_public = user; }, function (err) { });
        /*
        this._service.findUserById(this.uid).subscribe(
          (user : User) => {this.user = user;},
          (err : any) => { }
          );
        */
        this._plservice.findPlaylistsByUser(this.puid).subscribe(function (lsts) { _this.playlists = lsts; }, function (err) { });
        if (this.uid) {
            this._socialService.isConnectedTo(this.uid, this.puid).subscribe(function (res) { _this.isConnected = res; }, function (err) { });
        }
    };
    ProjectProfilePublicComponent.prototype.back = function () {
        this.location.back();
    };
    ProjectProfilePublicComponent.prototype.follow = function () {
        var _this = this;
        this._socialService.follow(this.uid, this.puid).subscribe(function (res) { _this.isConnected = true; }, function (err) { });
    };
    ProjectProfilePublicComponent.prototype.unfollow = function () {
        var _this = this;
        this._socialService.unfollow(this.uid, this.puid).subscribe(function (res) { _this.isConnected = false; }, function (err) { });
    };
    ProjectProfilePublicComponent.prototype.copyPlaylist = function (lst) {
        var _this = this;
        if (this.uid) {
            lst.name = "Copy of " + lst.name;
            this._plservice.createPlaylist(this.uid, lst)
                .subscribe(function (new_lst) {
                var url = "/project/(project:user/" + _this.uid + "/list/" + new_lst._id + ")";
                _this.router.navigateByUrl(url);
            });
        }
    };
    ProjectProfilePublicComponent.prototype.viewPlaylist = function (lst) {
        if (this.uid) {
            var url = "/project/(project:user/" + this.uid + "/profile/" +
                this.puid + "/" + lst._id + ")";
            this.router.navigateByUrl(url);
        }
        else {
            var url = "/project/search/user/" + this.puid + "/" + lst._id;
            this.router.navigateByUrl(url);
        }
    };
    return ProjectProfilePublicComponent;
}());
ProjectProfilePublicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-profile-public',
        template: __webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/user/project-profile-public/project-profile-public.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_social_service_client__["a" /* SocialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_social_service_client__["a" /* SocialService */]) === "function" && _f || Object])
], ProjectProfilePublicComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right glyph-margin\">\n      <a (click)=\"saveChanges()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid container-margin content-body\">\n\n  <div *ngIf=\"changes_saved\" class=\"help-block\">Changes Saved</div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.username\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             [(ngModel)]=\"user.email\"\n             name=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             class=\"form-control\"\n             placeholder=\"First Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             class=\"form-control\"\n             placeholder=\"Last Name\"\n             (ngModelChange)=\"changes_saved=false\"\n             required/>\n    </div>\n  </form>\n\n  <div *ngIf=\"following.length===0\">\n    Not Following any users\n  </div>\n\n  <div *ngIf=\"following.length>0\">\n  <p>Following:</p><br>\n    <ul *ngFor=\"let followee of following\">\n      <li> {{followee.username}}\n      <div class =\"pull-right\">\n        <a [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'profile', followee._id]}}]\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </div>\n      </li>\n    </ul>\n  </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list']}}]\">\n     My Playlists</a>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'queue']}}]\">\n     My Song Queue</a>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'messages']}}]\">\n     My Notifications</a>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'list', 'search']}}]\">\n     Search Public Playlists</a>\n\n  <a class=\"btn btn-danger btn-block \"\n     [routerLink]=\"['/project', {outlets: {'project': ['user', uid , 'admin']}}]\">\n     Admin</a>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"logout()\">Logout</a>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/project/user/project-profile/project-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_social_service_client__ = __webpack_require__("../../../../../src/app/services/social.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_user_object__ = __webpack_require__("../../../../../src/app/objects/user.object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_playlist_service_client__ = __webpack_require__("../../../../../src/app/services/playlist.service.client.ts");
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
    function ProjectProfileComponent(route, router, _service, _socialService, _plservice) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._socialService = _socialService;
        this._plservice = _plservice;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__objects_user_object__["a" /* User */]("", "", "", "", "", "");
        this.changes_saved = false;
        this.playlists = [];
        this.following = [];
    }
    ProjectProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.reload();
        });
    };
    ProjectProfileComponent.prototype.reload = function () {
        var _this = this;
        this._service.findUserById(this.uid).subscribe(function (user) {
            _this.user = user;
        }, function (err) { });
        this._socialService.getFollowing(this.uid).subscribe(function (users) { _this.following = users; console.log(users); }, function (err) { });
    };
    ProjectProfileComponent.prototype.logout = function () {
        this.router.navigateByUrl("/project/search/pl");
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_social_service_client__["a" /* SocialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_social_service_client__["a" /* SocialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_playlist_service_client__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_playlist_service_client__["a" /* PlaylistService */]) === "function" && _e || Object])
], ProjectProfileComponent);

var _a, _b, _c, _d, _e;
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

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); // this will emit an event for the parent                                             component or the directive calling component
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

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
        this.role = "user";
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
        this.widgetType = "NONE";
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
    Widget.newTextWidget = function (_id, name, pageId, text) {
        var widget = new Widget(_id, name, pageId);
        widget.widgetType = "TEXT";
        widget.text = text;
        widget.placeholder = "";
        widget.rows = 3;
        widget.formatted = false;
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
        if (type === "TEXT") {
            widget.text = "";
            widget.placeholder = "";
            widget.rows = 3;
            widget.formatted = false;
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

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
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




var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'searchPhotos': this.searchPhotos,
        };
    }
    FlickrService.prototype.searchPhotos = function (text) {
        text = encodeURIComponent(text);
        return this._http.get(this.baseUrl + ("/api/search?text=" + text))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

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
        return this._http.post(this.baseUrl + ("/api/website/" + websiteId + "/page"), page)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        /*
        retrieves the pages in local pages array whose
        websiteId matches the parameter websiteId
        */
        return this._http.get(this.baseUrl + ("/api/website/" + websiteId + "/page"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        /*
        retrieves the page in local pages array
        whose _id matches the pageId parameter
        */
        return this._http.get(this.baseUrl + ("/api/page/" + pageId))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        /*
        updates the page in local pages array whose
        _id matches the pageId parameter
        */
        return this._http.put(this.baseUrl + ("/api/page/" + pageId), page)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        /*
        removes the page from local pages array whose
        _id matches the pageId parameter
        */
        return this._http.delete(this.baseUrl + ("/api/page/" + pageId))
            .map(function (res) {
            var data = res.json();
            return data;
        });
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
        this.search_state = { searchTerm: "", results: [] };
    }
    PlaylistService.prototype.createPlaylist = function (userid, lst) {
        return this._http.post(this.baseUrl + ("/api/user/" + userid + "/playlist"), lst)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.findPlaylistsByUser = function (userid) {
        return this._http.get(this.baseUrl + ("/api/user/" + userid + "/playlist"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.findPlaylistById = function (plid) {
        return this._http.get(this.baseUrl + ("/api/playlist/" + plid))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.updatePlaylist = function (plid, lst) {
        return this._http.put(this.baseUrl + ("/api/playlist/" + plid), lst)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.deletePlaylist = function (plid) {
        return this._http.delete(this.baseUrl + ("/api/playlist/" + plid))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.addSongToPlaylist = function (plid, song) {
        return this._http.put(this.baseUrl + ("/api/playlist/" + plid + "/append"), song)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.keywordSearch = function (keyword) {
        var _this = this;
        var keyword = encodeURIComponent(keyword);
        return this._http.get(this.baseUrl + ("/api/playlist?term=" + keyword))
            .map(function (res) {
            var data = res.json();
            _this.search_state = { searchTerm: keyword, results: data };
            return data;
        });
    };
    PlaylistService.prototype.getPreviousKeywordSearch = function () {
        return this.search_state;
    };
    PlaylistService.prototype.clearPreviousKeywordSearch = function () {
        this.search_state = { results: [], searchTerm: "" };
    };
    // upload an audio file and return the url for the new resource
    PlaylistService.prototype.uploadAudio = function (form) {
        return this._http.post(this.baseUrl + "/api/upload/audio", form).map(function (res) {
            var song = res.json();
            return song;
        });
    };
    PlaylistService.prototype.findSongsForPlaylist = function (plid) {
        return this._http.get(this.baseUrl + ("/api/playlist/" + plid + "/songs"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PlaylistService.prototype.findPlaylistsContaining = function (vid) {
        return this._http.get(this.baseUrl + ("/api/playlist-contains/" + vid))
            .map(function (res) {
            var data = res.json();
            return data;
        });
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
        this.keyword_state = { results: [], searchTerm: "" };
        this.related_state = { results: [], searchTerm: "" };
    }
    ProjectService.prototype.keywordSearch = function (searchTerm) {
        var _this = this;
        this.keyword_state.searchTerm = searchTerm;
        var encTerm = encodeURIComponent(searchTerm);
        var path = this.baseUrl + '/api/youtube/query/' + encTerm;
        return this._http.get(path)
            .map(function (res) {
            var data = res.json();
            // add the url, using the current environment for each result
            for (var i = 0; i < data.length; ++i) {
                data[i].url = _this.baseUrl + "/api/youtube/" + data[i].videoId;
            }
            _this.keyword_state.results = data;
            _this.clearPreviousRelatedSearch();
            return data;
        });
    };
    ProjectService.prototype.getPreviousKeywordSearch = function () {
        return this.keyword_state;
    };
    ProjectService.prototype.clearPreviousKeywordSearch = function () {
        this.keyword_state = { results: [], searchTerm: "" };
    };
    ProjectService.prototype.relatedSearch = function (videoId) {
        var _this = this;
        //var encTerm = encodeURIComponent(videoId);
        this.related_state.searchTerm = videoId;
        var path = this.baseUrl + '/api/youtube/related/' + videoId;
        return this._http.get(path)
            .map(function (res) {
            var data = res.json();
            // add the url, using the current environment for each result
            for (var i = 0; i < data.length; ++i) {
                data[i].url = _this.baseUrl + "/api/youtube/" + data[i].videoId;
            }
            _this.related_state.results = data;
            _this.clearPreviousKeywordSearch();
            return data;
        });
    };
    ProjectService.prototype.getPreviousRelatedSearch = function () {
        return this.related_state;
    };
    ProjectService.prototype.clearPreviousRelatedSearch = function () {
        this.related_state = { results: [], searchTerm: "" };
    };
    ProjectService.prototype.getPreviousSearchResults = function () {
        if (this.keyword_state.searchTerm !== "") {
            return this.keyword_state;
        }
        if (this.related_state.searchTerm !== "") {
            return { results: this.related_state.results,
                searchTerm: "related:" + this.related_state.searchTerm };
        }
        return { results: [], searchTerm: "" };
    };
    ProjectService.prototype.databaseReset = function () {
        return this._http.delete(this.baseUrl +
            "/api/reset")
            .map(function (res) {
            var data = res.json();
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

/***/ "../../../../../src/app/services/queue.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QueueService = (function () {
    function QueueService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'setQueue': this.setQueue,
            'getQueue': this.getQueue,
            'currentSong': this.currentSong,
            'nextSong': this.nextSong
        };
        this.queueUpdatedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.queueChangedEvent = this.queueUpdatedSource.asObservable();
    }
    QueueService.prototype.queueChanged = function () {
        this.queueUpdatedSource.next(null);
    };
    QueueService.prototype.setQueue = function (uid, playlist) {
        var _this = this;
        return this._http.put(this.baseUrl + ("/api/user/" + uid + "/queue"), playlist)
            .map(function (res) {
            _this.queueChanged();
            var data = res.json();
            return data;
        });
    };
    QueueService.prototype.getQueue = function (uid) {
        return this._http.get(this.baseUrl + ("/api/user/" + uid + "/queue"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    QueueService.prototype.currentSong = function (uid) {
        var _this = this;
        return this._http.get(this.baseUrl + ("/api/user/" + uid + "/queue/head"))
            .map(function (res) {
            var data = res.json();
            data.url = _this.baseUrl + data.url;
            return data;
        });
    };
    QueueService.prototype.nextSong = function (uid) {
        var _this = this;
        return this._http.delete(this.baseUrl + ("/api/user/" + uid + "/queue/head"))
            .map(function (res) {
            var data = res.json();
            data.url = _this.baseUrl + data.url;
            return data;
        });
    };
    return QueueService;
}());
QueueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QueueService);

var _a;
//# sourceMappingURL=queue.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/social.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialService; });
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




var SocialService = (function () {
    function SocialService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    SocialService.prototype.follow = function (uid, puid) {
        return this._http.put(this.baseUrl + ("/api/user/" + uid + "/social/" + puid), null)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SocialService.prototype.unfollow = function (uid, puid) {
        return this._http.delete(this.baseUrl + ("/api/user/" + uid + "/social/" + puid))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    // return true if uid connects to puid
    SocialService.prototype.isConnectedTo = function (uid, puid) {
        return this._http.get(this.baseUrl +
            ("/api/user/" + uid + "/social/" + puid))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SocialService.prototype.getFollowers = function (uid) {
        return this._http.get(this.baseUrl +
            ("/api/user/" + uid + "/social"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SocialService.prototype.getFollowing = function (uid) {
        return this._http.get(this.baseUrl +
            ("/api/user/" + uid + "/social-following"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SocialService.prototype.sendNotification = function (userId, messageText) {
        return this._http.post(this.baseUrl +
            ("/api/user/" + userId + "/notifications"), { "message": messageText })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    SocialService.prototype.getNotifications = function (userId) {
        /*
        retrieves the websites in local websites array whose
        developerId matches the parameter userId
        */
        return this._http.get(this.baseUrl +
            ("/api/user/" + userId + "/notifications"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    // rate a given playlist for a user on a 5 point scale
    // any user can rate any playlist
    SocialService.prototype.rateList = function (uid, plid, value) {
        return this._http.put(this.baseUrl +
            ("/api/user/" + uid + "/rate/" + plid), { "value": value })
            .map(function (res) {
            return;
        });
    };
    // remove a rating for a playlist for a given user
    SocialService.prototype.unrateList = function (uid, plid) {
        return this._http.delete(this.baseUrl +
            ("/api/user/" + uid + "/rate/" + plid))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return SocialService;
}());
SocialService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SocialService);

var _a;
//# sourceMappingURL=social.service.client.js.map

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
        this.state = { searchTerm: "", results: [] };
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user/', user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + ("/api/user?username=" + username))
            .map(function (res) {
            if (res.ok) {
                var data = res.json();
                return data;
            }
            else {
                return;
            }
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + "/api/user/" + userId, user)
            .map(function (res) {
            return;
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + "/api/user/" + userId)
            .map(function (res) {
            return;
        });
    };
    /**
     * fn : a function accepting the validated user object
     * returns: 0 on success
     *          1 for invalid username
     *          2 for invalid password
     */
    UserService.prototype.validateUser = function (username, password, fn) {
        return this._http.get(this.baseUrl + ("/api/user?username=" + username + "&password=" + password))
            .map(function (res) {
            var user = res.json();
            if (!user) {
                return 1;
            }
            else {
                fn(user);
                return 0;
            }
        });
    };
    UserService.prototype.findUsersByName = function (username) {
        var _this = this;
        return this._http.get(this.baseUrl + ("/api/user/find?username=" + username))
            .map(function (res) {
            var data = res.json();
            _this.state.searchTerm = username;
            _this.state.results = data;
            return data;
        });
    };
    UserService.prototype.getPreviousUserSearch = function () {
        return this.state;
    };
    UserService.prototype.clearPreviousUserSearch = function () {
        this.state = { results: [], searchTerm: "" };
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
        return this._http.post(this.baseUrl + ("/api/user/" + userId + "/website"), website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        /*
        retrieves the websites in local websites array whose
        developerId matches the parameter userId
        */
        return this._http.get(this.baseUrl + ("/api/user/" + userId + "/website"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        /*
        retrieves the website in local websites array
        whose _id matches the websiteId parameter
        */
        return this._http.get(this.baseUrl + ("/api/website/" + websiteId))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        /*
        updates the website in local websites array
        whose _id matches the websiteId parameter
        */
        return this._http.put(this.baseUrl + ("/api/website/" + websiteId), website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        /*
         removes the website from local websites array
         whose _id matches the websiteId parameter
         */
        return this._http.delete(this.baseUrl + ("/api/website/" + websiteId))
            .map(function (res) {
            var data = res.json();
            return data;
        });
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
        this.widgets = __WEBPACK_IMPORTED_MODULE_4__objects_widget_object__["a" /* Widget */].getDefaultWidgets();
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'uploadImage': this.uploadImage,
            'sortWidget': this.sortWidget
        };
    }
    WidgetService.prototype.widgetFactory = function (pageId, type) {
        return __WEBPACK_IMPORTED_MODULE_4__objects_widget_object__["a" /* Widget */].widgetFactory("", pageId, type);
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        /*
        adds the widget parameter instance to the local widgets array.
        The new widget's pageId is set to the pageId parameter
        */
        return this._http.post(this.baseUrl + ("/api/page/" + pageId + "/widget"), widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        /*
        retrieves the widgets in local widgets array whose
        pageId matches the parameter pageId
        */
        return this._http.get(this.baseUrl + ("/api/page/" + pageId + "/widget"))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        /*
        retrieves the widget in local widgets array whose
        _id matches the widgetId parameter
        */
        return this._http.get(this.baseUrl + ("/api/widget/" + widgetId))
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        /*
        updates the widget in local widgets array whose
        _id matches the widgetId parameter
        */
        return this._http.put(this.baseUrl + ("/api/widget/" + widgetId), widget)
            .map(function (res) {
            return;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        /*
        removes the widget from local widgets array whose
        _id matches the widgetId parameter
        */
        return this._http.delete(this.baseUrl + ("/api/widget/" + widgetId))
            .map(function (res) {
            return;
        });
    };
    WidgetService.prototype.uploadImage = function (form) {
        var _this = this;
        return this._http.post(this.baseUrl + "/api/upload", form).map(function (res) {
            var data = res.json();
            var url = _this.baseUrl + data.url;
            return url;
        });
    };
    WidgetService.prototype.sortWidget = function (event) {
        var from = event.startIndex;
        var to = event.endIndex;
        var pid = event.pid;
        console.log("reorder page " + pid + " from index " + from + " to " + to);
        return this._http.put(this.baseUrl + ("/api/page/" + pid + "/widget?from=" + from + "&to=" + to), {})
            .map(function (res) {
            if (res.ok) {
                return res.json();
            }
            else {
                return;
            }
        });
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