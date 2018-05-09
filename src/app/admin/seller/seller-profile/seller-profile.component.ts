import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';
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
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {

  seller: Seller;
  currentSeller: Seller = new Seller();
  currentEmail: Seller = new Seller();


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
  profileForm: FormGroup;
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
  

  ngOnInit() {
    const sellerid = localStorage.getItem('sellerid');
    const id = this._route.snapshot.params.id;
    const seller_id = this._route.snapshot.params.userid;
    

    this.profileForm = this.formBuilder.group({
      sellertype: this.sellertype,
      firstname: this.firstname,
      lastname: this.lastname,
      location : this.location,
      contactno : this.contactno,
      status : this.status,
      sellerid,
      // eventid
    });
  }

  setClassSellerType() {
    return { 'has-danger': !this.sellertype.pristine && !this.sellertype.valid };
  }

  setClassSellerFirstName() {
    return { 'has-danger': !this.firstname.pristine && !this.firstname.valid };
  }

  setClassSellerLastName() {
    return { 'has-danger': !this.lastname.pristine && !this.lastname.valid };
  }

  setClassSellerShopLocation() {
    return { 'has-danger': !this.location.pristine && !this.location.valid };
  }

  setClassSellerShopContactNo() {
    return { 'has-danger': !this.contactno.pristine && !this.contactno.valid };
  }

  setClassShopStatus() {
    return { 'has-danger': !this.status.pristine && !this.status.valid };
  }

  addprofile() {

    const sellerid = localStorage.getItem('sellerid');

    this.profileService.addsellerprofile(this.profileForm.value).subscribe(
      res => {
        this.toast.setMessage('you successfully registered!', 'success');
        console.log(this.profileForm);
        this.router.navigate(['./admin-home/edit-profile']);
      },
      error => this.toast.setMessage('email already exists', 'danger')
    );
  }

}
