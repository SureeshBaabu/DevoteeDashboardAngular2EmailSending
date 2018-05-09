import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardToastComponent } from '../dashboard-shared/dashboard-toast/dashboard-toast.component';
import { SellerService } from '../dashboard-services/seller.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup;
  sellername = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  // role = new FormControl('', [
  //   Validators.required
  // ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public toast: DashboardToastComponent,
              private userService: SellerService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      sellername: this.sellername,
      email: this.email,
      password: this.password,
      // role: this.role
    });
  }

  setClassUsername() {
    return { 'has-danger': !this.sellername.pristine && !this.sellername.valid };
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.setMessage('you successfully registered!', 'success');
        this.router.navigate(['/admin/admin-login']);
      },
      error => this.toast.setMessage('email already exists', 'danger')
    );
  }


}
