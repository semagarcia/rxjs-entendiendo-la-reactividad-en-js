import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  loginStatus: boolean;

  constructor() { }

  ngOnInit() {
    this.loginStatus = false;
  }

  loginLogout() {
    this.loginStatus = !this.loginStatus;
  }

}
