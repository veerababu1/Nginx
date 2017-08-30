import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import {Observable} from 'Rxjs';
import 'rxjs/Rx';
//import {Subject, Observable} from 'Rxjs';

@Injectable()
export class UserService {
  constructor(private http: Http) {

  }
      register(userInfo) {
        let url = 'http://localhost:3000/users/register';
        return this.http.post(url, { data : userInfo})
          .map(response => response.json(), error => error.json());
        // console.log(userInfo);
      }
      getCountries(): Observable<any> {
        let url = 'http://localhost:3000/users/countries';
        return this.http.get(url)
          .map(response => response.json(), error => error.json());
      }

  login(uesrInfo) {
    let url = 'http://localhost:3000/users/login';
    return this.http.get(url)
      .map(response => response.json(), error => error.json());
  }
  logOut() {
  }
}
