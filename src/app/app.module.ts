
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { AppComponent } from "./app.component";
import { AdminComponent } from './admin/admin.component';
  import { DashboardLoginComponent } from './admin/dashboard-login/dashboard-login.component';
  import { DashboardRegisterComponent } from './admin/dashboard-register/dashboard-register.component';
  import { SellerComponent } from './admin/seller/seller.component';
  import { SellerProfileComponent } from './admin/seller/seller-profile/seller-profile.component';
  import { SellerToBankComponent } from './admin/seller/seller-to-bank/seller-to-bank.component';
  import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
  import { AdminFormsComponent } from './admin/admin-forms/admin-forms.component';
  import { AdminChartsComponent } from './admin/admin-charts/admin-charts.component';
  import { AdminTablesComponent } from './admin/admin-tables/admin-tables.component';
  import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
  import { AdminDropdownComponent } from './admin/admin-dropdown/admin-dropdown.component';
  import { AdminDemoComponent } from './admin/admin-demo/admin-demo.component';
  
import { routing } from './app.routes';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminForgetPasswordComponent } from './admin/admin-forget-password/admin-forget-password.component';
import { DashboardSharedModule } from './admin/dashboard-shared/dashboard-shared.module';
// import { AuthGuard } from "./admin/dashboard-gaurds/auth.guard";
// import { NotAuthGuard } from "./admin/dashboard-gaurds/notAuth.guard";
import { AdminLoginService } from "./admin/dashboard-services/admin-login.service";
import { AdminAuthService } from "./admin/dashboard-services/admin-auth.service";
import { SellerService } from "./admin/dashboard-services/seller.service";
import { EditProfileComponent } from "./admin/seller/seller-profile/editprofile.component";
import { UpdateProfileComponent } from "./admin/seller/seller-profile/updateprofile.component";
import { SellerProfileService } from "./admin/dashboard-services/seller-profile.service";
import { SendEmailService } from "./admin/dashboard-services/sendemail.service";

@NgModule({
  declarations: [
    AppComponent,
    // NotAuthGuard,
    // AuthGuard,
    AdminComponent,
      DashboardLoginComponent,
      DashboardRegisterComponent,
      SellerComponent,
      SellerProfileComponent,
      SellerToBankComponent,
      AdminHomeComponent,
      AdminFormsComponent,
      AdminChartsComponent,
      AdminTablesComponent,
      AdminLoginComponent,
      AdminDropdownComponent,
      AdminDemoComponent,
      AdminRegisterComponent,
      AdminForgetPasswordComponent,
      EditProfileComponent,
      UpdateProfileComponent
     
      
  ],

  imports: [
    BrowserModule, routing, FormsModule, HttpModule, ReactiveFormsModule, DashboardSharedModule, FlashMessagesModule.forRoot()
  ],
  
  providers: [ AdminLoginService, AdminAuthService, SellerService,SellerProfileService,SendEmailService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
