import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }
  canActivate(
    next : ActivatedRouteSnapshot,
    state :RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{

      return this.authService.isLoggedIn();
    }
}

