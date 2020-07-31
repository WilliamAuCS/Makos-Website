import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
  }

}
