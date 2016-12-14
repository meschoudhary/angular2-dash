import { Routes } from "@angular/router";

import { DashDetailComponent } from './dash-detail/dash-detail.component';

export const DASH_ROUTES: Routes = [
    { path: '**', component: DashDetailComponent }
];
