import { ConstService } from './../utility/const.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate, Router, CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private af: AngularFire,
              private translate: TranslateService,
              private router: Router,
              private authService: AuthService,
              private constService: ConstService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate([this.constService.loginRoute]);
    return false;
  }

}
