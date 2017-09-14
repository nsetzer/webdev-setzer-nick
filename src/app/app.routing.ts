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



const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'assignment', component: AssignmentComponent},
  {path: 'project', component: ProjectComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
