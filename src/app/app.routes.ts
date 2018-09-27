import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { StockMarketDashboardComponent } from './stock-market-dashboard/stock-market-dashboard.component';
import { StockMarketNewsForm } from './stock-market-news-form/stock-market-news-form.component';

const routes: Routes = [
  {
    path: 'add-story',
    component: MainComponent,
    // TODO: Add route guard
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
        component: StockMarketDashboardComponent,
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
