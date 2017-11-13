import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logInState = 'Logged out';

  constructor(private _authSrv: AuthenticationService) { }

  ngOnInit() {
    this._authSrv.getAuthChanges().subscribe(
      (result: { logged: boolean, user?: string, profile?: string }) => {
        this.logInState = (result.logged) ? 'Logged In' : 'Logged out';
      }
    );
  }

}
