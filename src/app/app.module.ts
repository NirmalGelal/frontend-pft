import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from "./layouts/default/default.module";
import { VisualsComponent } from './modules/visuals/visuals.component';
import {CardModule} from "primeng/card";
import {ConfirmationService, MessageService} from "primeng/api";
import {DataService} from "./shared/services/dataService";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './layouts/login/login.component';
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {DialogService} from "primeng/dynamicdialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  declarations: [
    AppComponent,
    VisualsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, DataService, DialogService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
