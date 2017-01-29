import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth/auth.service';
@Component({
  selector: 'app-login-page',
  styleUrls: ['./login-page.component.scss'],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  loginGitHub() {
    this.authService.loginGitHub().then((authState) => {
      this.redirectToAdmin();
    });
  }

  loginGoogle() {
    this.authService.loginGoogle().then((authState) => {
      this.redirectToAdmin();
    });
  }

  loginFacebook() {
    this.authService.loginFacebook().then((authState) => {
      this.redirectToAdmin();
    });
  }

  redirectToAdmin() {
    this.router.navigate(['/admin']);
  }
}
