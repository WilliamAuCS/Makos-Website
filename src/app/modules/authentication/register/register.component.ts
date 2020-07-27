import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userInfo: FormGroup;

  constructor(private fb: FormBuilder,
    public _auth: AuthService,
    private _router: Router) 
    { }

  ngOnInit(): void {
    // Initializing userInfo group
    this.userInfo = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  registerUser() {
    // Passing userInfo to registerUser auth.service
    this._auth.registerUser(this.userInfo.value);
  }

  loginUser() {
    // Passing userInfo to registerUser auth.service
    this._auth.loginUser(this.userInfo.value);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
