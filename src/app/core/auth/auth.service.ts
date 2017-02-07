import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  firebaseAuthState: FirebaseAuthState = null;
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string = '';

  constructor(private af: AngularFire,
              private translate: TranslateService,
              private router: Router) {

    this.subscribeToLogin();
  }

  getDisplayName() {
    return this.firebaseAuthState ? this.firebaseAuthState.auth.displayName : null;
  }

  logout() {
    this.af.auth.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

  loginGitHub() {
    // Social provider popup
    return this.af.auth.login({
      method: AuthMethods.Popup,
      provider: AuthProviders.Github
    });
  }

  loginGoogle() {
    // Social provider popup
    return this.af.auth.login({
      method: AuthMethods.Popup,
      provider: AuthProviders.Google,
    });
  }

  loginFacebook() {
    // Social provider popup
    return this.af.auth.login({
      method: AuthMethods.Popup,
      provider: AuthProviders.Facebook,
    });
  }

  private subscribeToLogin() {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.firebaseAuthState = user;
        this.isLoggedIn = true;
        if (this.redirectUrl.length > 0) {
          this.router.navigate([this.redirectUrl]);
        }
      } else {
        // user not logged in
        this.firebaseAuthState = null;
        this.isLoggedIn = false;
      }
    });
  }

}
