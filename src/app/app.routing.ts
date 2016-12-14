import { Routes, RouterModule } from "@angular/router";

import { DASH_ROUTES } from './dashboard/dashboard.routes';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    { path: '',  component: HomeComponent},
    { path: 'dash', redirectTo: '' , pathMatch: 'full'},
    { path: 'dash/:menuName', component: DashboardComponent, children: DASH_ROUTES},
    { path: '**', redirectTo: '' , pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);