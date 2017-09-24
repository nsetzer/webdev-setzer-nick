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

import {WidgetYoutubeComponent} from './components/assignment/widget/widget-youtube/widget-youtube.component';
import {WidgetListComponent} from './components/assignment/widget/widget-list/widget-list.component';
import {WidgetImageComponent} from './components/assignment/widget/widget-image/widget-image.component';
import {WidgetHeadingComponent} from './components/assignment/widget/widget-heading/widget-heading.component';
import {WidgetChooseComponent} from './components/assignment/widget/widget-choose/widget-choose.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'assignment', component: AssignmentComponent},
  {path: 'project', component: ProjectComponent},

  {path: 'view/assignment/user/login',    component: LoginComponent},
  {path: 'view/assignment/user/register', component: RegisterComponent},
  {path: 'view/assignment/user/profile',  component: ProfileComponent},

  {path: 'view/assignment/page/edit',    component: PageEditComponent},
  {path: 'view/assignment/page/list',    component: PageListComponent},
  {path: 'view/assignment/page/new',    component: PageNewComponent},

  {path: 'view/assignment/website/edit',    component: WebsiteEditComponent},
  {path: 'view/assignment/website/list',    component: WebsiteListComponent},
  {path: 'view/assignment/website/new',    component: WebsiteNewComponent},

  {path: 'view/assignment/widget/youtube',    component: WidgetYoutubeComponent},
  {path: 'view/assignment/widget/list',    component: WidgetListComponent},
  {path: 'view/assignment/widget/image',    component: WidgetImageComponent},
  {path: 'view/assignment/widget/heading',    component: WidgetHeadingComponent},
  {path: 'view/assignment/widget/choose',    component: WidgetChooseComponent},


];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { enableTracing: true });
