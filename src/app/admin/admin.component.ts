import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AdminLoginService } from './dashboard-services/admin-login.service';
import { AdminAuthService } from "./dashboard-services/admin-auth.service";
import { Seller } from "./dashboard-shared/dashboard-models/seller.model";
import { SellerProfileService} from './dashboard-services/seller-profile.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  currentSeller: Seller = new Seller();

  constructor(private router: Router,
    private authService: AdminLoginService,
    private flashMessagesService: FlashMessagesService,
    private sellerprofileService : SellerProfileService,
    public auth: AdminAuthService) { }

   // Function to logout user
   onLogoutClick() {
    this.auth.logout(); // Logout user
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page
  }

  goToSellerProfile(){

    const sellerid = localStorage.getItem('sellerid');
 
    this.sellerprofileService.getSellerProfileDetails(sellerid).subscribe(
      data => {
       if(data == null){
        this.router.navigate(['./admin-home/seller-details']);
       } else {
         this.router.navigate(['./admin-home/update-profile'])
       }
      }
    );
  }

  ngOnInit() {
  }

}
