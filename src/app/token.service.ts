import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {

  constructor() {
  }

  store(userData: Object) {
    sessionStorage.setItem('user', JSON.stringify(userData));
  }

  retrieve() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  getUserId() {
    if (sessionStorage.getItem('user') !== null) {
      const userData = sessionStorage.getItem('user');
      return (JSON.parse(userData))['id'];
    } else {
      return null;
    }
  }

  isUserAdmin() {
    if (sessionStorage.getItem('user') !== null) {
      const userData = sessionStorage.getItem('user');
      return (JSON.parse(userData))['admin'];
    } else {
      return null;
    }
  }

  getUserToken() {
    if (sessionStorage.getItem('user') !== null) {
      const userData = sessionStorage.getItem('user');
      return (JSON.parse(userData))['token'];
    } else {
      return null;
    }
  }

  getUsername() {
    if (sessionStorage.getItem('user') !== null) {
      const userData = sessionStorage.getItem('user');
      return (JSON.parse(userData))['username'];
    } else {
      return null;
    }
  }

  delete() {
    sessionStorage.clear();
  }
}
