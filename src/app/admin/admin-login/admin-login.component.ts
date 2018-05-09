import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FormBuilder, FormControl, FormGroup, Validators  } from "@angular/forms";
import { AdminAuthService } from '../dashboard-services/admin-auth.service';
import { Router } from '@angular/router';
import { DashboardToastComponent } from '../dashboard-shared/dashboard-toast/dashboard-toast.component';
// import { AdminLoginService } from '../dashboard-services/admin-login.service';
// import { AdminAuthGuard } from '../dashboard-gaurds/auth.guard';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private auth: AdminAuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              public toast: DashboardToastComponent) { }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/admin-home/admin-home']);
    }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      
      res => this.router.navigate(['/admin-home/admin-home']),
      error => this.toast.setMessage('invalid email or password!', 'danger')
    );
   console.log();
  }

}