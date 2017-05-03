
import { Routes, RouterModule  } from '@angular/router';
import {ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
 //should implement a page not found but no routing required for this assessment
const appRoutes: Routes = [

  { path: 'Home', component: AppComponent }

];

export const routing = RouterModule.forRoot(appRoutes);
