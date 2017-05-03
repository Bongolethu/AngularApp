import { routing } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { TreeviewService } from "./treeview.service";
import { TreeModule } from 'angular-tree-component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
     BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule,
    TreeModule
  ],
  providers:[TreeviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
