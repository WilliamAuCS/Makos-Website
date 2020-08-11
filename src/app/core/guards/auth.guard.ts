import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../modules/authentication/auth.service';

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

export class TokenGuard implements CanActivate {
  
  constructor(private _authService: AuthService,
     private _router: Router) {}
  
  // Check if user is logged in before allowing access
  canActivate(): boolean {
    if(this._authService.verifyToken()) {
      return true;
    }
    else {
      this._router.navigate(['/register']);
      return false;
    }
  }
}
