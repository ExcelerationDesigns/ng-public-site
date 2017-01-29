import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthGuardService } from './../../core/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';

const adminPageRoutes: Routes = [
  {
    canActivate: [AuthGuardService],
    children: [
      {
        canActivateChild: [AuthGuardService],
        children: [
          { component: BlogsComponent, path: 'blogs' },
          { component: DetailsComponent, path: 'details' },
          { component: DashboardComponent, path: '' }
        ],
        path: '',
      }
    ],
    component: AdminPageComponent,
    path: '',
  }

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(adminPageRoutes)
  ]
})
export class AdminPageRoutingModule { }
