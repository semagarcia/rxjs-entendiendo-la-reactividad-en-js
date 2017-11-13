import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  logIn() {
    return {
      logged: true,
      user: 'Sema García',
      profile: 'USER'
    }
  }

  logOut() {
    return {
      logged: false
    }
  }

}
