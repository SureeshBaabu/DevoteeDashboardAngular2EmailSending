import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { SellerService } from './seller.service';
import { Seller } from '../dashboard-shared/dashboard-models/seller.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentSeller: Seller = new Seller();
  currentEmail: Seller = new Seller();

  constructor(private sellerService: SellerService,
              private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedSeller = this.decodeSellerFromToken(token);
      const decodedEmail = this.decodeSellerFromToken(token);
      this.setCurrentSeller(decodedSeller);
    }
  }

  login(emailAndPassword) {
    return this.sellerService.login(emailAndPassword).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedSeller = this.decodeSellerFromToken(res.token);
        const decodedEmail = this.decodeSellerFromToken(res.token);
        this.setCurrentSeller(decodedSeller);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    // this.isAdmin = false;
    this.currentSeller = new Seller();
    this.router.navigate(['/admin']);
  }

  decodeSellerFromToken(token) {
    return this.jwtHelper.decodeToken(token).seller;
  }

  setCurrentSeller(decodedSeller) {
    this.loggedIn = true;
    this.currentSeller._id = decodedSeller._id;
    this.currentSeller.sellername = decodedSeller.sellername;
    this.currentEmail.email =decodedSeller.email;
    localStorage.setItem('sellerid',this.currentSeller._id );
    localStorage.setItem('email',this.currentEmail.email );
    // this.currentSeller.role = decodedSeller.role;
    // decodedSeller.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    // delete decodedSeller.role;
  }

  


}

