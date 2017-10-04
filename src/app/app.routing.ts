/**
 * Created by sesha on 7/26/17.
 *
 * creating a component:
 * ng g component <component name>
 * update this file for new routing
 * you may need to update import path in app.module.ts
 */



import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {AssignmentComponent} from './components/assignment/assignment.component';
import {ProjectComponent} from './components/project/project.component';

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

import {ProjectLoginComponent} from './components/project/user/project-login/project-login.component';
import {ProjectRegisterComponent} from './components/project/user/project-register/project-register.component';
import {ProjectProfileComponent} from './components/project/user/project-profile/project-profile.component';
import {ProjectProfilePublicComponent} from './components/project/user/project-profile-public/project-profile-public.component';

import {ApiTestComponent} from './components/project/test/api-test/api-test.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test',       component: TestComponent},
  {path: 'assignment', component: AssignmentComponent},
  {path: 'project',    component: ProjectComponent},

  {path: 'login',     component: LoginComponent},
  {path: 'register',  component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent},

  {path: 'user/:uid/website',      component: WebsiteListComponent},
  {path: 'user/:uid/website/new',  component: WebsiteNewComponent},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent},

  {path: 'user/:uid/website/:wid/page',      component: PageListComponent},
  {path: 'user/:uid/website/:wid/page/new',  component: PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},

  {path: 'user/:uid/website/:wid/page/:pid/widget',       component: WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new',   component: WidgetChooseComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},

  {path: 'project/test',              component: ApiTestComponent},
  {path: 'project/login',             component: ProjectLoginComponent},
  {path: 'project/register',          component: ProjectRegisterComponent},
  {path: 'project/user/:uid',         component: ProjectProfileComponent},
  {path: 'project/user/:uid/profile', component: ProjectProfilePublicComponent}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { enableTracing: false });
