import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  logIn() {
    return {
      result: true,
      user: 'Sema García',
      profile: 'USER'
    }
  }

}
