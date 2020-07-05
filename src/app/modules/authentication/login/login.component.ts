import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userInfo: FormGroup;

  constructor(private fb: FormBuilder,
     private _auth: AuthService, 
     private _router: Router) { }

  ngOnInit(): void {
    // Initializing userInfo group
    this.userInfo = this.fb.group({
      email: [null, Validators.required], 
      password: [null, Validators.required],
    });
  }

  loginUser() {
    this._auth.loginUser(this.userInfo.value)
      .subscribe(
        res => {
          console.log(res)
          //localStorage.setItem('token', res.token) 
          //this._router.navigate(['/special'])
          }, 
        err => console.log(err)
      )
  }

}
