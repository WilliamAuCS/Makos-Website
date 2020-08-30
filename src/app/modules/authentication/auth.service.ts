import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = "https://server.makosusa.com/api/register";
  private _loginUrl = "https://server.makosusa.com/api/login";
  private _deleteAccountUrl = "https://server.makosusa.com/api/user/";
  private _verification = "https://server.makosusa.com/api/verification/";

  // FOR TESTING PURPOSES ONLY
  // private _registerURL = "http://localhost:8080/api/register";
  // private _loginUrl = "http://localhost:8080/api/login";
  // private _deleteAccountUrl = "http://localhost:8080/api/user/";
  // private _verification = "http://localhost:8080/api/verification/";

  public isLoggedIn: boolean;

  // Used to handle register errors
  public register_error: boolean = false;
  public register_error_response: String;

  // Used to handle login errors
  public login_error: boolean = false;
  public login_error_response: String;

  constructor(private http: HttpClient,
    private _router: Router) {
    this.isLoggedIn = this.loggedIn();
  }


  // Sends http POST request to backend api url containing user credentials
  registerUser(user: { email: string, password: string }) {
    // Register user to db and return response details as observable
    this.http.post<{ token: string, payloadEmail: string }>(this._registerURL, user)
      // Subscribing to observable
      .subscribe(
        // Log either response or error
        res => {
          this.register_error = false;
          this.logginProcess(res);
        },
        err => {
          if (err.error == "Invalid Email Format") {
            this.register_error = true;
            this.register_error_response = "Invalid Email Format";
          }
          else if (err.error == "Email in use") {
            this.register_error = true;
            this.register_error_response = "Email already in use";
          }
          console.log(err);
        },

      )
  }

  // Sends http POST request to backend api url containing user credentials
  loginUser(user) {
    this.http.post<{ token: String, payloadEmail: String}>(this._loginUrl, user)
      // Subscribing to observable
      .subscribe(
        // Log either response or error
        res => {
          this.login_error = false;
          this.logginProcess(res);
        },
        err => {
          if (err.error == "Invalid Email Format") {
            this.login_error = true;
            this.login_error_response = "Invalid email format";
          }
          else if(err.error == "Invalid credentials") {
            this.login_error = true;
            this.login_error_response = "Invalid credentials";
          }
          console.log(err)
        }
      );
  }

  // Standard user loggin process
  logginProcess(res) {
    // Setting JWT token in cookie
    this.setCookie("token", res.token, 365);
    // Encoding user email with base64 and setting in cookie
    this.setCookie("usem", btoa(res.payloadEmail), 365);
    this.isLoggedIn = true;
    // Navigation to homepage
    this._router.navigate(['/']);
  }

  // Logging out the user
  logoutUser() {
    // Removing cookies (2)
    this.setCookie("token", "", 0);
    this.setCookie("usem", "", 0);
    this.isLoggedIn = false;
    // Navigation to homepage
    this._router.navigate(["/"]);
  }

  loggedIn() {
    return !!this.getCookie("token");
  }

  getToken() {
    return this.getCookie("token");
  }

  deleteAccount() {
    this.http.delete<{ statusCode: String }>(this._deleteAccountUrl + this.getEmail())
      .subscribe(
        res => {
          if (res.statusCode == "200") {
            console.log("Acount deleted");
            this.logoutUser();
          }
        },
        err => {
          console.error(err);
        }
      );
  }

  verifyToken() {
    return this.http.get<any>(this._verification)
    
  }

  // Retrieves email from cookie and decodes using base64
  getEmail() {
    return atob(this.getCookie("usem"));
  }


  /* 
  Cookie API found at https://www.w3schools.com/js/js_cookies.asp
  */

  // Setting cookie in browser
  setCookie(cname, cvalue, exdays) {
    // Creating date object
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    // Creating cookie in browser
    // ** ADD ;secure;httpOnly when testing is complete **
    document.cookie = cname + "=" + cvalue + ";" + expires + ";secure;path=/";
  }

  // Cookie retreval
  getCookie(cname) {
    var name = cname + "=";
    // Creating array to hold cookie parts split off of ';'
    var ca = document.cookie.split(';');
    // Looping through array
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}
