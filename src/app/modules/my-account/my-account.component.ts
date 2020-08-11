import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  userEmail: String;

  constructor(public _auth: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userEmail = this._auth.getEmail().split("@")[0];
  }

  logoutUser() {
    this._auth.logoutUser();
  }

  deleteAccount() {
    this._auth.deleteAccount();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === true) {
        this._auth.deleteAccount();
      }
    })
  }

}

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: "confirm-delete-dialog.html",
})
export class ConfirmDeleteDialog { }