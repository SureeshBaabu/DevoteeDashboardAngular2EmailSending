import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { AdminLoginService } from './admin-login.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SellerProfile } from '../dashboard-shared/dashboard-models/seller-profile.model';

@Injectable()
export class SellerProfileService {

  constructor(private http: HttpClient) { }

  addsellerprofile(sellerprofile: SellerProfile): Observable<SellerProfile> {
    return this.http.post<SellerProfile>('/api/sellerprofile', sellerprofile);
  }

  sellerlogin(credentials): Observable<any> {
    return this.http.post<any>('/api/sellerlogin', credentials);
  }

  getsellerProfiles(): Observable<SellerProfile[]> {
    return this.http.get<SellerProfile[]>('/api/sellerprofiles');
  }

  countsellerProfiles(): Observable<number> {
    return this.http.get<number>('/api/sellerprofiles/count');
  }

  // addsellerProfile(sellerprofile): Observable<any> {
  //   return this.http.post<any>('/api/sellerprofile', sellerprofile);
  // }

  getSellerProfileDetails(id) {
    // const id = JSON.stringify(userid);
    return this.http.get(`/api/getsellerprofile/`+id);
  }

  updateSellerProfile(sellerprofile: SellerProfile): Observable<string> {
    return this.http.put(`/api/updatesellerprofile/${sellerprofile.sellerid}`, sellerprofile.sellertype, { responseType: 'text' });
  }
}