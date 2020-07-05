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
      private _auth: AuthService,
      private _router: Router) { }

  ngOnInit(): void {
    // Initializing userInfo group
    this.userInfo = this.fb.group({
      email: [null, Validators.required], 
      password: [null, Validators.required],
    });
  }

  registerUser()
  {
    // passing userInfo to registerUser auth.service
    this._auth.registerUser(this.userInfo.value)
    // Subscribing to observable
    .subscribe(
      // Log either response or error
      res => {
        console.log(res)
        //localStorage.setItem('token', res.token) 
        //this._router.navigate(['/special'])
      },
      err => console.log(err)
    )
    // console.log(this.userInfo.valid)
  }

}
