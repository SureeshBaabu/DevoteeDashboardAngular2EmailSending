


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
    selector: 'app-editprofile',
    templateUrl: './editprofile.component.html',
    // styleUrls: ['./editprofile.component.css']
  })
  export class  EditProfileComponent implements OnInit {

    // event: any;
    seller: Seller;
    sellerprofile: any;
    // profile: any;
    // profile: Profile;
    sellers: Seller[] = [];
    // relation: Relation[] = [];
    // isLoading = true;
    isEditing = false;
    isFNEditing = false;
    isLNEditing = false;
    isLocEditing = false;
    isContactEditing = false;
    // isStatusEditing = false;

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
    
   updateSellerProfileForm: FormGroup;

   updateSellerTypeForm: FormGroup;




    sellertype = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      // Validators.pattern('[a-zA-Z0-9_-\\s]*')
    ]);

    firstname = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      // Validators.pattern('[a-zA-Z0-9_-\\s]*')
    ]);
    lastname = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      // Validators.pattern('[a-zA-Z0-9_-\\s]*')
    ]);
    location = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      // Validators.pattern('[a-zA-Z0-9_-\\s]*')
    ]);
    
    contactno = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      // Validators.pattern('[a-zA-Z0-9_-\\s]*')
    ]);
    status = new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        // Validators.pattern('[a-zA-Z0-9_-\\s]*')
      ]);

      enableEditing(){
        this.isEditing = true;
      }
      cancelEditing(){
        this.isEditing = false;
      }
      enableFNEditing(){
        this.isFNEditing = true;
      }
      cancelFNEditing(){
        this.isFNEditing = false;
      }
      enableLNEditing(){
        this.isLNEditing = true;
      }
      cancelLNEditing(){
        this.isLNEditing = false;
      }
      enableLocEditing(){
        this.isLocEditing = true;
      }
      cancelLocEditing(){
        this.isLocEditing = false;
      }
      enableContactEditing(){
        this.isContactEditing = true;
      }
      cancelContactEditing(){
        this.isContactEditing = false;
      }
      // enableStatusEditing(){
      //   this.isStatusEditing = true;
      // }
      // cancelStatusEditing(){
      //   this.isStatusEditing = false;
      // }
  ngOnInit() {
  
    this.getProfileDetails();
 
    const sellerid = localStorage.getItem('sellerid');
    this.updateSellerProfileForm = this.formBuilder.group({
      sellertype: this.sellertype,
      firstname: this.firstname,
      lastname: this.lastname,
      location: this.location,
      contactno: this.contactno,
      status: this.status,
      sellerid,
    });
    this.updateSellerTypeForm = this.formBuilder.group({
      sellertype: this.sellertype,
      // firstname: this.firstname,
      // lastname: this.lastname,
      // location: this.location,
      // contactno: this.contactno,
      // status: this.status,
      sellerid,
    });
   
  }

  setClassSellerType() {
    return { 'has-danger': !this.sellertype.pristine && !this.sellertype.valid };
  }
  setClassFirstName() {
    return { 'has-danger': !this.firstname.pristine && !this.firstname.valid };
  }
  
  setClassLastName() {
    return { 'has-danger': !this.lastname.pristine && !this.lastname.valid };
  }
  
  setClassLocation() {
    return { 'has-danger': !this.location.pristine && !this.location.valid };
  }
  
  setClassContactNo() {
    return { 'has-danger': !this.contactno.pristine && !this.contactno.valid };
  }
  
  setClassStatus() {
    return { 'has-danger': !this.status.pristine && !this.status.valid };
  }
  
  
  getProfileDetails(){

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

 
  saveProfile(){
  
    const sellerid = localStorage.getItem('sellerid');
    // const id =  this.seller._id;
  
        this.profileService.updateSellerProfile(this.updateSellerTypeForm.value).subscribe(
        data => {
          // this.isEditing = false;
          this.sellerprofile.sellertype = data;
          console.log(data);
          this.toast.setMessage('item edited successfully.', 'success');
          this.router.navigate(['./admin-home/update-profile']);
        },
        error => console.log(error)
      );

  }

    // editSellerProfile() {
  
    //   const sellerid = localStorage.getItem('sellerid');
    //   // const id =  this.seller._id;
  
    //     this.profileService.updateSellerProfile(this.updateSellerProfileForm.value).subscribe(
    //     data => {
    //       // this.isEditing = false;
    //       this.sellerprofile = data;
    //       console.log(data);
    //       this.toast.setMessage('item edited successfully.', 'success');
    //       this.router.navigate(['./admin-home/update-profile']);
    //     },
    //     error => console.log(error)
    //   );
    // }

  
 }
  