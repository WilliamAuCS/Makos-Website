import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../modules/authentication/auth.service';
import { map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable(

)
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthService,
     private _router: Router) {}
  
  // Check if user is logged in before allowing access
  canActivate(): boolean {
    if(this._authService.loggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['/register']);
      return false;
    }
  }
}

@Injectable(

  )
export class TokenGuard implements CanActivate {
  
  constructor(private _authService: AuthService,
     private _router: Router) {}
  
  // Check if user is logged in before allowing access
  canActivate(): Observable<boolean> {
    return this._authService.verifyToken()
    .pipe(
      map( (res) => {
        if(res.response === "Authorized") 
        {
          return true;
        }
        else {
          return false;
        }
      })
    )


    // .subscribe(
      
    //   res => {
    //     if(res.status == "200") 
    //     {
    //       return true;
    //     }
    //   }, 
    //   err => {
    //     console.error(err);
    //     return false;
    //   }
    // )


    // if(this._authService.verifyToken()) {
    //   return true;
    // }
    // else {
    //   this._router.navigate(['/register']);
    //   return false;
    // }
  }
}
