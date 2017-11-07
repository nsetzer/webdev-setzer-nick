/**
 * Created by sesha on 7/26/17.
 *
 * creating a component:
 * ng g component <component name>
 * update this file for new routing
 * you may need to update import path in app.module.ts
 */

import {AuthGuard} from './services/auth-guard.service.client';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';

import {LoginComponent} from './components/assignment/user/login/login.component';
import {RegisterComponent} from './components/assignment/user/register/register.component';
import {ProfileComponent} from './components/assignment/user/profile/profile.component';

import {PageEditComponent} from './components/assignment/page/page-edit/page-edit.component';
import {PageListComponent} from './components/assignment/page/page-list/page-list.component';
import {PageNewComponent}  from './components/assignment/page/page-new/page-new.component';

import {WebsiteEditComponent} from './components/assignment/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './components/assignment/website/website-list/website-list.component';
import {WebsiteNewComponent}  from './components/assignment/website/website-new/website-new.component';

import {WidgetListComponent} from './components/assignment/widget/widget-list/widget-list.component';
import {WidgetChooseComponent} from './components/assignment/widget/widget-choose/widget-choose.component';
import {WidgetEditComponent} from './components/assignment/widget/widget-edit/widget-edit.component';
import {FlickrImageSearchComponent} from './components/assignment/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

import { ProjectLoginComponent } from './components/project/user/project-login/project-login.component';
import { ProjectRegisterComponent } from './components/project/user/project-register/project-register.component';
import { ProjectHomeComponent } from './components/project/user/project-home/project-home.component';
import { ProjectProfileComponent } from './components/project/user/project-profile/project-profile.component';
import { ProjectProfilePublicComponent } from './components/project/user/project-profile-public/project-profile-public.component';

import {ApiTestComponent} from './components/project/test/api-test/api-test.component';

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


const APP_ROUTES: Routes = [
  {path: '',          component: HomeComponent},
  {path: 'test',      component: TestComponent},
  {path: 'login',     component: LoginComponent},
  {path: 'register',  component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuard]},

  {path: 'user/:uid/website',      component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/new',  component: WebsiteNewComponent,  canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},

  {path: 'user/:uid/website/:wid/page',      component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/new',  component: PageNewComponent,  canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},

  {path: 'user/:uid/website/:wid/page/:pid/widget',              component: WidgetListComponent,        canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new',          component: WidgetChooseComponent,      canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid',        component: WidgetEditComponent,        canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/search', component: FlickrImageSearchComponent, canActivate: [AuthGuard]},

  {path: 'project/test',      component: ApiTestComponent},
  {path: 'project/login',     component: ProjectLoginComponent},
  {path: 'project/register',  component: ProjectRegisterComponent},

  //http://onehungrymind.com/named-router-outlets-in-angular-2/
  {path: 'project',  component: ProjectHomeComponent,
    children: [
     { path: 'user/:uid',                           component: ProjectProfileComponent,            outlet: 'project' },
     { path: 'user/:uid/profile/:puid',             component: ProjectProfilePublicComponent,      outlet: 'project' },
     { path: 'user/:uid/profile/:puid/:plid',       component: PlaylistSearchViewComponent,        outlet: 'project' },
     { path: 'user/:uid/profile/:puid/:plid/:idx',  component: PlaylistSearchSongDetailsComponent, outlet: 'project' },
     { path: 'user/:uid/queue',                     component: SongQueueComponent,                 outlet: 'project' },
     { path: 'user/:uid/messages',                  component: NotificationViewComponent,          outlet: 'project' },
     { path: 'user/:uid/messages/compose',          component: NotificationComposeComponent,       outlet: 'project' },
     { path: 'user/:uid/admin',                     component: ProjectAdminComponent,              outlet: 'project' },
     { path: 'user/:uid/admin/new',                 component: AdminUserNewComponent,              outlet: 'project' },
     { path: 'user/:uid/admin/:puid',               component: AdminUserEditComponent,             outlet: 'project' },

     { path: 'user/:uid/list',                      component: PlaylistListComponent,             outlet: 'project' },
     { path: 'user/:uid/list/search',               component: PlaylistSearchComponent,           outlet: 'project' },
     { path: 'user/:uid/list/search/:plid',         component: PlaylistSearchViewComponent,       outlet: 'project' },
     { path: 'user/:uid/list/search/:plid/:idx',    component: PlaylistSearchSongDetailsComponent,outlet: 'project' },
     { path: 'user/:uid/list/new',                  component: PlaylistNewComponent,              outlet: 'project' },
     { path: 'user/:uid/list/:plid',                component: PlaylistEditComponent,             outlet: 'project' },
     { path: 'user/:uid/list/:plid/songs',          component: PlaylistSongsComponent,            outlet: 'project' },
     { path: 'user/:uid/list/:plid/songs/:idx',     component: PlaylistSongDetailsComponent,            outlet: 'project' },
     { path: 'user/:uid/list/:plid/upload',         component: PlaylistUploadComponent,           outlet: 'project' },
     { path: 'user/:uid/list/:plid/add',            component: PlaylistAddComponent,              outlet: 'project' },
     { path: 'user/:uid/list/:plid/add/:videoId',   component: PlaylistAddComponent,              outlet: 'project' },
     { path: 'user/:uid/list/:plid/add/details/:idx',          component: PlaylistAddSongDetailsComponent,   outlet: 'project' },
     { path: 'user/:uid/list/:plid/add/:videoId/details/:idx', component: PlaylistAddSongDetailsComponent,   outlet: 'project' },

    ]},
  { path: 'project/search/pl',                    component: PlaylistSearchComponent },
  { path: 'project/search/pl/:plid',              component: PlaylistSearchViewComponent },
  { path: 'project/search/pl/:plid/:idx',         component: PlaylistSearchSongDetailsComponent },
  { path: 'project/search/user/:puid',            component: ProjectProfilePublicComponent },
  { path: 'project/search/user/:puid/:plid',      component: PlaylistSearchViewComponent },
  { path: 'project/search/user/:puid/:plid/:idx', component: PlaylistSearchSongDetailsComponent },
  { path: 'project/search/s',                     component: PlaylistAddComponent },
  { path: 'project/search/s/details/:idx',        component: PlaylistAddSongDetailsComponent },
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { enableTracing: false });
