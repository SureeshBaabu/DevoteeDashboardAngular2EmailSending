import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FormBuilder, FormControl, FormGroup, Validators  } from "@angular/forms";
import { AdminAuthService } from '../dashboard-services/admin-auth.service';
import { Router } from '@angular/router';
import { DashboardToastComponent } from '../dashboard-shared/dashboard-toast/dashboard-toast.component';


@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.css']
})
export class AdminForgetPasswordComponent implements OnInit {
  adminService: any;
  changepasswordForm: FormGroup;
  newpassword = new FormControl('', [
    Validators.required,
    Validators.maxLength(6)
  ]);
  confirmnewpassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private auth: AdminAuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public toast: DashboardToastComponent) { }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/admin-home/admin-forget']);
    }
    this.changepasswordForm = this.formBuilder.group({
      newpassword: this.newpassword,
      confirmnewpassword: this.confirmnewpassword
    });
  }
  setClassNewPassword() {
    return { 'has-danger': !this.newpassword.pristine && !this.newpassword.valid };
  }

  setClassConfirmNewPassword() {
    return { 'has-danger': !this.confirmnewpassword.pristine && !this.confirmnewpassword.valid };
  }

  
  updateNewPassword(newpassword) {
    console.log(newpassword);
    this.adminService.editUser(newpassword).subscribe(
      () => {
        // this.isEditing = false;
        this.newpassword = newpassword;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }
  }



