import { Routes } from "@angular/router";

import { HomeComponent } from '../home.component';
import { DashDetailComponent } from './dash-detail/dash-detail.component';

export const DASH_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: ':lecture', component: DashDetailComponent }
];
