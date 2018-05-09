import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardLoadingComponent } from './dashboard-loading/dashboard-loading.component';
import { DashboardToastComponent } from './dashboard-toast/dashboard-toast.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Shared Components
    DashboardLoadingComponent,
    DashboardToastComponent
  ],
  declarations: [
    DashboardLoadingComponent,
    DashboardToastComponent
  ],
  providers: [
    DashboardToastComponent
  ]
})
export class DashboardSharedModule { }
