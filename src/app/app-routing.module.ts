import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './layout/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    loadChildren: 'app/pages/about-page/about-page.module#AboutPageModule',
    path: 'about',
  },
  {
    loadChildren: 'app/pages/admin-page/admin-page.module#AdminPageModule',
    path: 'admin',
  },
  {
    loadChildren: 'app/pages/contact-page/contact-page.module#ContactPageModule',
    path: 'contact',
  },
  {
    loadChildren: 'app/pages/home-page/home-page.module#HomePageModule',
    path: 'home',
  },
  {
    loadChildren: 'app/pages/service-page/service-page.module#ServicePageModule',
    path: 'services',
  },
  {
    component: NotFoundComponent,
    path: '**',
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ]
})
export class AppRoutingModule { }
