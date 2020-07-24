import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/authentication/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public isLoggedIn: boolean = false;

  constructor(private _auth: AuthService) { }


  ngOnInit(): void {
    
  }

  checkLogIn() {
    this.isLoggedIn = this._auth.loggedIn();
    console.log(this.isLoggedIn);
  }

}
