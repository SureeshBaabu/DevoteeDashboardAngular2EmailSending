
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";

import { AdminComponent } from "./admin/admin.component";
    import { SellerComponent } from "./admin/seller/seller.component";
    import { DashboardLoginComponent } from "./admin/dashboard-login/dashboard-login.component";
    import { DashboardRegisterComponent } from "./admin/dashboard-register/dashboard-register.component";
    import { SellerProfileComponent } from "./admin/seller/seller-profile/seller-profile.component";
    import { SellerToBankComponent } from "./admin/seller/seller-to-bank/seller-to-bank.component";
    import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
    import { AdminDemoComponent } from "./admin/admin-demo/admin-demo.component";
    import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
    import { AdminTablesComponent } from "./admin/admin-tables/admin-tables.component";
    import { AdminChartsComponent } from "./admin/admin-charts/admin-charts.component";
    import { AdminFormsComponent } from "./admin/admin-forms/admin-forms.component";
    import { AdminRegisterComponent } from "./admin/admin-register/admin-register.component";
    import { AdminDropdownComponent } from "./admin/admin-dropdown/admin-dropdown.component";

import { AdminForgetPasswordComponent } from "./admin/admin-forget-password/admin-forget-password.component";
import { EditProfileComponent } from './admin/seller/seller-profile/editprofile.component';
import { UpdateProfileComponent } from './admin/seller/seller-profile/updateprofile.component';


const routes: Routes = [
    
    { path: 'admin', component: AdminLoginComponent},
    {
		path: 'admin',
		pathMatch: "full",
		redirectTo: "admin"
    },
    { path: 'admin-register', component: AdminRegisterComponent},
    { path: 'admin-home', component: AdminComponent,
        children :[
         {
        	path: '',
        	pathMatch: "full",
        	redirectTo: "admin-home"
        },
        { path: 'admin-home', component: AdminHomeComponent },
        { path: 'admin-forms', component: AdminFormsComponent },
        { path: 'admin-charts', component: AdminChartsComponent },
        { path: 'admin-tables', component: AdminTablesComponent },
        // { path: 'admin-login', component: AdminLoginComponent },
        { path: 'admin-dropdown', component: AdminDropdownComponent},
        { path: 'admin-demo', component: AdminDemoComponent },
        // { path: 'admin-register', component: AdminRegisterComponent},
        { path: 'admin-forget', component: AdminForgetPasswordComponent},
        { path: 'seller', component: SellerComponent},
        { path: 'dashboard_login', component: DashboardLoginComponent},
        { path: 'dashboard_register', component: DashboardRegisterComponent},
        { path: 'seller-to-bank', component:SellerToBankComponent},
        { path: 'seller-details', component: SellerProfileComponent},
        { path: 'update-profile', component: UpdateProfileComponent},
        { path: 'edit-profile', component: EditProfileComponent}
        ]
    },
  ];
  
  
  export const routing = RouterModule.forRoot(routes);  