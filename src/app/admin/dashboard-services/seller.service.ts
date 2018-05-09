import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Seller } from '../dashboard-shared/dashboard-models/seller.model';

@Injectable()

export class SellerService {



  // addprofile(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  //   updateSeller(arg0: any): any {
  //       throw new Error("Method not implemented.");
  //   }
  //   getSellerProfileDetails(arg0: any): any {
  //       throw new Error("Method not implemented.");
  //   }
  constructor(private http: HttpClient) { }

  register(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>('/api/seller', seller);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

  getUsers(): Observable<Seller[]> {
    return this.http.get<Seller[]>('/api/sellers');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/sellers/count');
  }

  addUser(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>('/api/seller', seller);
  }

  getUser(seller: Seller): Observable<Seller> {
    return this.http.get<Seller>(`/api/seller/${seller._id}`);
  }

  editUser(seller: Seller): Observable<string> {
    return this.http.put(`/api/seller/${seller._id}`, seller, { responseType: 'text' });
  }

  deleteUser(seller: Seller): Observable<string> {
    return this.http.delete(`/api/seller/${seller._id}`, { responseType: 'text' });
  }

}
