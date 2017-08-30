import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Validator, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginDetails: any;
  errorDisplay: boolean;
  loginForm: FormGroup;
  alphabetsPattern: any;
   constructor(private fb: FormBuilder, private userSvc: UserService) {
    this.LoginDetails = {   };
    this.buildForm();
    this.alphabetsPattern = /^[a-zA-Z]*$/;
  }
  buildForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(14),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8),
      Validators.pattern(/^[a-z0-9]+$/i)])]
    })
  }
  ngOnInit() {
  }
  Login() {
   /*   this.userSvc.login(this.LoginDetails)
        .subscribe(
          res => {
        console.log(res);
        if (res.data) {
          localStorage.setItem("token", res.data); // we are storing the tonken in local storage
        }
      },
      err => {
        this.errorDisplay = true;
      })*/
    // console.log(this.LoginDetails);
     console.log(this.loginForm.valid);
  }

}
