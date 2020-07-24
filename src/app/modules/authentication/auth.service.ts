import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  public isLoggedIn: boolean;

  constructor(private http: HttpClient, 
    private _router: Router) {
      this.isLoggedIn = this.loggedIn();
     }


  // Sends http POST request to backend api url containing user credentials
  registerUser(user: {email: string, password: string}) {
    // Register user to db and return response details as observable
    this.http.post<any>(this._registerURL, user)
    // Subscribing to observable
    .subscribe(
      // Log either response or error
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/'])
      },
      err => { console.log(err) }
    )
  }
  
  // Sends http POST request to backend api url containing user credentials
  loginUser(user) {
    this.http.post<{token: string}>(this._loginUrl, user)
    // Subscribing to observable
    .subscribe(
      // Log either response or error
      res => {
        localStorage.setItem('token', res.token)

        this.isLoggedIn = true;

        this._router.navigate(['/'])
      },
      err => { console.log(err) }
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
