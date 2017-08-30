import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Tabs:Array<any>;
  currentDate: Date;
  constructor() {
    this.currentDate = new Date();
    this.Tabs=[{name:"home",display:"Home"},
      {name:"login",display:"Login"},
      {name:"register",display:"Register"},
      {name:"jobs",display:"Jobs"},
      {name:"more",dispplay:"More"}]
  }

  ngOnInit() {
  }

}
