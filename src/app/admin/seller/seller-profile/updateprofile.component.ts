

import { Component, OnInit,  Directive, Input, ViewChild } from '@angular/core';
import { Seller } from '../../dashboard-shared/dashboard-models/seller.model';
import { AdminAuthService } from '../../dashboard-services/admin-auth.service';
import { AdminLoginService } from '../../dashboard-services/admin-login.service';
import { Observable } from 'rxjs/Observable';
import { SellerProfileService } from '../../dashboard-services/seller-profile.service';
import { SellerService } from '../../dashboard-services/seller.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { DashboardToastComponent } from '../../dashboard-shared/dashboard-toast/dashboard-toast.component';
// import { Relation } from "../../shared/models/relation";
import { SellerProfile } from "../../dashboard-shared/dashboard-models/seller-profile.model";

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  // styleUrls: ['./profile.component.css'][]
})
export class UpdateProfileComponent implements OnInit {

  // event: any;
  seller: Seller;
  sellerprofile: any;
  sellers: Seller[] = [];
  // relation: Relation[] = [];
  // isLoading = true;
  isEditing = false;

  constructor(
    public auth: AdminAuthService,
      public authService: AdminLoginService,
      public profileService: SellerProfileService,
      public sellerService: SellerService,
      private http: HttpClient,
      private router : Router,
      private route : ActivatedRoute,
      public toast: DashboardToastComponent,
      private formBuilder: FormBuilder,
      private _route : ActivatedRoute
  ) { }
    // this.getUser();
    // this.getProfile();
  
  ngOnInit() {
    this.getSellerProfileDetails();
  }


  getSellerProfileDetails(){

    const sellerid = localStorage.getItem('sellerid');
    const id = this._route.snapshot.params.id;
    // const user_id = this._route.snapshot.params.userid;

    this.profileService.getSellerProfileDetails(sellerid).subscribe(
      data => {
        this.sellerprofile = data;
      console.log(data);
   
      }
    );
  }

  enableEditing(sellerprofile: SellerProfile) {
    this.isEditing = true;
    this.sellerprofile = sellerprofile;
    this.router.navigate(['./admin-home/edit-profile']);
  }

  // cancelEditing() {
  //   this.isEditing = false;
  //   this.profile = new Profile();
  //   this.toast.setMessage('item editing cancelled.', 'warning');
  //   // reload the cats to reset the editing
  //   this.getProfileDetails();
  // }

  // editProfile(profile: Profile) {
  //   this.profileService.updateProfile(profile).subscribe(
  //     () => {
  //       // this.isEditing = false;
  //       this.profile = profile;
  //       console.log(profile);
  //       this.toast.setMessage('item edited successfully.', 'success');
  //     },
  //     error => console.log(error)
  //   );
  // }

}