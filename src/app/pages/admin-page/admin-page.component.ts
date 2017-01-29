import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth/auth.service';

@Component({
  selector: 'app-admin-page',
  styleUrls: ['./admin-page.component.scss'],
  templateUrl: './admin-page.component.html'
})
export class AdminPageComponent implements OnInit {

  displayName = this.getDisplayName();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  getDisplayName() {
    return { value: this.authService.getDisplayName() };
  }

}
