import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 UserDetails: any;
  Counries: Array<any>;
  YearList: any;
  MonthList: any;
  numbersPat: any;
  alphabetsOnly: any;
  passwordPattern: any;
  usernamePattern: any;
    constructor(private userSvc: UserService) {
      this.numbersPat = /^\d+$/;
      this.alphabetsOnly = /^[a-zA-Z]*$/ ;
      this.passwordPattern = /^[0-9a-zA-Z]+$/;
      this.usernamePattern = /^[0-9a-zA-Z]+$/;
    this.UserDetails = { };
    this.YearList = [{text: '2017', value: 2017}, {text: '2018', value: 2018},
                      {text: '2019', value: 2019}, {text: '2020', value: 2020}];
    this.MonthList = [{text: 'Jan', value: 1}, {text: 'Feb', value: 2},
                      {text: 'Mar', value: 3}, {text: 'Apr', value: 4}];

    /*this.Counries = [{name: " India " , code: "IND"},
                   {name:"England",code:"END"},
                   {name:"Australia",code:"AUS"},
                   {name:"America",code:"US"}];
    */
              this.userSvc.getCountries()
                .subscribe(result => {
                  this.Counries = result;
                },
                error => {
                  console.log(error);
                })
            }
          registerUser() {
            this.userSvc.register(this.UserDetails)
              .subscribe(response => {
                  console.log(response);
                },
                error => {
                  console.log(error);
                })
            // console.log(this.UserDetails);
          }
  ngOnInit() {  }
  test() {
    console.log(' key pressed ');
  }
  CountryChanged() {
    console.log(this.UserDetails.Counries);
  }
  childSelectedYear(data) {
      console.log(data);
  }
  childSelectedMonth(data) {
      console.log(data);
  }
}
