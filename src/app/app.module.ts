import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from "./layouts/default/default.module";
import { VisualsComponent } from './modules/visuals/visuals.component';
import {CardModule} from "primeng/card";
import {MessageService} from "primeng/api";
import {DataService} from "./shared/services/dataService";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VisualsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    CardModule,
    HttpClientModule
  ],
  providers: [MessageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
