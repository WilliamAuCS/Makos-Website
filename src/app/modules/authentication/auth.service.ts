import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _deleteAccountUrl = "http://localhost:3000/api/deleteAccount"

  public isLoggedIn: boolean;
  public invalidEmailFormat: boolean = false;
  public invalidCredentials: boolean = false;

  public userEmail: string; 

  constructor(private http: HttpClient,
    private _router: Router) {
    this.isLoggedIn = this.loggedIn();
  }


  // Sends http POST request to backend api url containing user credentials
  registerUser(user: { email: string, password: string }) {
    // Register user to db and return response details as observable
    this.http.post<any>(this._registerURL, user)
      // Subscribing to observable
      .subscribe(
        // Log either response or error
        res => {
          this.setCookie("token", res.token, 365);
          this.invalidEmailFormat = false;
          this.userEmail = user.email.split('@')[0];
          this._router.navigate(['/'])
        },
        err => {
          if (err.error == "Invalid Email Format") {
            this.invalidEmailFormat = true;
          }
          console.log(err)
        },

      )
  }

  // Sends http POST request to backend api url containing user credentials
  loginUser(user) {
    this.http.post<{ token: string }>(this._loginUrl, user)
      // Subscribing to observable
      .subscribe(
        // Log either response or error
        res => {
          this.invalidCredentials = false;
          this.setCookie("token", res.token, 365);
          this.isLoggedIn = true;
          this.userEmail = user.email.split('@')[0];
          this._router.navigate(['/'])
        },
        err => {
          if (err.error == "Invalid Email Format" || err.error == "Invalid email") 
          {
            this.invalidCredentials = true;
          }
          console.log(err)
        }
      );
  }

  logoutUser() {
    this.setCookie("token", "", 0);
    this.isLoggedIn = false;
    this.userEmail = "";
    this._router.navigate(["/"]);
    window.location.reload();
  }

  loggedIn() {
    return !!this.getCookie("token");
  }

  getToken() {
    return this.getCookie("token");
  }

  deleteAccount() {
    this.logoutUser();
    this.http.put(this._deleteAccountUrl, this.userEmail)
    .subscribe(
      res => {
        console.log(res);
      }
    );
  }


  /* 
  Cookie API found at https://www.w3schools.com/js/js_cookies.asp
  */

  // Setting cookie in browser
  setCookie(cname, cvalue, exdays) 
  {
    // Creating date object
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    // Creating cookie in browser
    // ** ADD ;secure;httpOnly when testing is complete **
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
  }

  // Cookie retreval
  getCookie(cname)
  {
    var name = cname + "=";
    // Creating array to hold cookie parts split off of ';'
    var ca = document.cookie.split(';');
    // Looping through array
    for(var i = 0; i < ca.length; i++)
    {
      var c = ca[i];
      while(c.charAt(0) == ' ')
      {
        c = c.substring(1);
      }
      if(c.indexOf(name) == 0)
      {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}
