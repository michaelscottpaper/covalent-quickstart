import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { StockMarketNewsForm } from './stock-market-news-form/stock-market-news-form.component';

const routes: Routes = [
  {
    path: 'add-story',
    component: MainComponent,
    children: [
      {
        component: StockMarketNewsForm,
        path: '',
      },
    ],
  },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        component: DashboardComponent,
        path: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

export const appRoutes: any = RouterModule.forRoot(routes);
