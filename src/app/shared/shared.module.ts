import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {PanelMenuModule} from "primeng/panelmenu";
import {MessageModule} from "primeng/message";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {MatCardModule} from "@angular/material/card";
import {TableModule} from "primeng/table";
import { FormatDatePipe } from './pipes/format-date.pipe';
import { IncomeComponent } from './components/income/income.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FormatDatePipe,
    IncomeComponent,
    AddIncomeComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    PanelMenuModule,
    MessageModule,
    FormsModule,
    InputTextModule,
    KeyFilterModule,
    ButtonModule,
    RippleModule,
    InputTextareaModule,
    DropdownModule,
    MatCardModule,
    TableModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
