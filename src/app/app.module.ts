import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';

import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// default services
import { TestService } from './services/test.service.client';
import { UserService } from './services/user.service.client';
import { SharedService } from './services/shared.service.client';
import { AuthGuard } from './services/auth-guard.service.client';

// assignment services
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { FlickrService } from './services/flickr.service.client';
// project services
import { ProjectService } from './services/project.service.client';
import { PlaylistService } from './services/playlist.service.client';
import { QueueService } from './services/queue.service.client';
import { SocialService } from './services/social.service.client';

import { LoginComponent } from './components/assignment/user/login/login.component';
import { ProfileComponent } from './components/assignment/user/profile/profile.component';
import { RegisterComponent } from './components/assignment/user/register/register.component';

import { PageEditComponent } from './components/assignment/page/page-edit/page-edit.component';
import { PageListComponent } from './components/assignment/page/page-list/page-list.component';
import { PageNewComponent } from './components/assignment/page/page-new/page-new.component';

import { WebsiteEditComponent } from './components/assignment/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/assignment/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/assignment/website/website-new/website-new.component';

import { WidgetChooseComponent } from './components/assignment/widget/widget-choose/widget-choose.component';

// edit components
import { WidgetEditComponent } from './components/assignment/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './components/assignment/widget/widget-edit/widget-header/widget-header.component';
import { WidgetYoutubeComponent } from './components/assignment/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetImageComponent } from './components/assignment/widget/widget-edit/widget-image/widget-image.component';
import { WidgetHtmlComponent } from './components/assignment/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/assignment/widget/widget-edit/widget-text/widget-text.component';

import { QuillEditorModule } from 'ngx-quill-editor';

// list components
import { WidgetListComponent } from './components/assignment/widget/widget-list/widget-list.component';
import { WidgetListHeaderComponent } from './components/assignment/widget/widget-list/widget-list-header/widget-list-header.component';
import { WidgetListImageComponent } from './components/assignment/widget/widget-list/widget-list-image/widget-list-image.component';
import { WidgetListHtmlComponent } from './components/assignment/widget/widget-list/widget-list-html/widget-list-html.component';
import { WidgetListYoutubeComponent } from './components/assignment/widget/widget-list/widget-list-youtube/widget-list-youtube.component';
import { WidgetListTextComponent } from './components/assignment/widget/widget-list/widget-list-text/widget-list-text.component';

// other
import { FlickrImageSearchComponent } from './components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { SortableDirective } from './directives/sortable.directive';

// project components
import { ProjectRegisterComponent } from './components/project/user/project-register/project-register.component';
import { ProjectLoginComponent } from './components/project/user/project-login/project-login.component';
import { ProjectProfileComponent } from './components/project/user/project-profile/project-profile.component';
import { ProjectProfilePublicComponent } from './components/project/user/project-profile-public/project-profile-public.component';
import { ApiTestComponent } from './components/project/test/api-test/api-test.component';
import { ProjectHomeComponent } from './components/project/user/project-home/project-home.component';
import { PlaylistListComponent } from './components/project/playlist/playlist-list/playlist-list.component';
import { PlaylistSongsComponent } from './components/project/playlist/playlist-songs/playlist-songs.component';
import { PlaylistSearchComponent } from './components/project/playlist/playlist-search/playlist-search.component';
import { PlaylistNewComponent } from './components/project/playlist/playlist-new/playlist-new.component';
import { PlaylistEditComponent } from './components/project/playlist/playlist-edit/playlist-edit.component';
import { PlaylistAddComponent } from './components/project/playlist/playlist-add/playlist-add.component';
import { SongQueueComponent } from './components/project/queue/song-queue/song-queue.component';
import { PlaylistAddSongDetailsComponent } from './components/project/playlist/playlist-add/playlist-add-song-details/playlist-add-song-details.component';
import { PlaylistSearchSongDetailsComponent } from './components/project/playlist/playlist-search/playlist-search-song-details/playlist-search-song-details.component';
import { PlaylistSearchViewComponent } from './components/project/playlist/playlist-search/playlist-search-view/playlist-search-view.component';
import { NotificationViewComponent } from './components/project/user/notification-view/notification-view.component';
import { NotificationComposeComponent } from './components/project/user/notification-compose/notification-compose.component';
import { PlaylistUploadComponent } from './components/project/playlist/playlist-songs/playlist-upload/playlist-upload.component';
import { PlaylistSongDetailsComponent } from './components/project/playlist/playlist-songs/playlist-song-details/playlist-song-details.component';
import { ProjectAdminComponent } from './components/project/user/project-admin/project-admin.component';
import { AdminUserNewComponent } from './components/project/user/project-admin/admin-user-new/admin-user-new.component';
import { AdminUserEditComponent } from './components/project/user/project-admin/admin-user-edit/admin-user-edit.component';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageEditComponent,
    PageListComponent,
    PageNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WidgetChooseComponent,
    WidgetListComponent,
    WidgetEditComponent,
    WidgetHtmlComponent,
    WidgetHeaderComponent,
    WidgetYoutubeComponent,
    WidgetImageComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    WidgetListHeaderComponent,
    WidgetListImageComponent,
    WidgetListHtmlComponent,
    WidgetListYoutubeComponent,
    WidgetListTextComponent,
    ProjectRegisterComponent,
    ProjectLoginComponent,
    ProjectProfileComponent,
    ProjectProfilePublicComponent,
    ApiTestComponent,
    ProjectHomeComponent,
    PlaylistListComponent,
    PlaylistSongsComponent,
    PlaylistSearchComponent,
    PlaylistNewComponent,
    PlaylistEditComponent,
    PlaylistAddComponent,
    FlickrImageSearchComponent,
    SortableDirective,
    SongQueueComponent,
    PlaylistAddSongDetailsComponent,
    PlaylistSearchSongDetailsComponent,
    PlaylistSearchViewComponent,
    NotificationViewComponent,
    NotificationComposeComponent,
    PlaylistUploadComponent,
    PlaylistSongDetailsComponent,
    ProjectAdminComponent,
    AdminUserNewComponent,
    AdminUserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [ TestService,
               UserService,
               SharedService,
               AuthGuard,
               WebsiteService,
               PageService,
               WidgetService,
               ProjectService,
               FlickrService,
               QueueService,
               SocialService,
               PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
