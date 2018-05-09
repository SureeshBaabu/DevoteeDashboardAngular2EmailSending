import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
 
import { SendEmailService } from '../dashboard-services/sendemail.service';
import { RequestOptions } from '@angular/http';
@Component({
  selector: 'app-admin-dropdown',
  templateUrl: './admin-dropdown.component.html',
  styleUrls: ['./admin-dropdown.component.css']
})
export class AdminDropdownComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public sendemailservice : SendEmailService
  ) { }

  contactForm: FormGroup ;
  username = new FormControl ('',[
    Validators.required,
    Validators.maxLength(2),
    Validators.maxLength(15),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.maxLength(2),
    Validators.maxLength(15),
  ]);
  message = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
    Validators.maxLength(100),
  ]);
  phoneno = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
    Validators.maxLength(10),
  ]);

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
    username:this.username,
    email:this.email,
    message:this.message,
    phoneno : this.phoneno,

    });

  }

  sendEmail() {
    // const username = localStorage.getItem('username');
    // const email = localStorage.getItem('email');
    // const message = localStorage.getItem('message');
    

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    // let options = new RequestOptions({
    //     headers: Headers
    // });

    this.sendemailservice.sendEmail(this.contactForm.value).subscribe (
      res => {
        console.log(this.contactForm);
      }
    );

  }

}
