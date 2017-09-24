import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {ProjectService} from './services/project.service.client';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { ProjectComponent } from './components/project/project.component';
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
import { WidgetHeadingComponent } from './components/assignment/widget/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './components/assignment/widget/widget-image/widget-image.component';
import { WidgetListComponent } from './components/assignment/widget/widget-list/widget-list.component';
import { WidgetYoutubeComponent } from './components/assignment/widget/widget-youtube/widget-youtube.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    AssignmentComponent,
    ProjectComponent,
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
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetListComponent,
    WidgetYoutubeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
