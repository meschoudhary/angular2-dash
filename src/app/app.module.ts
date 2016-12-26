import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { NavModule } from './menu/nav.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavService } from './menu/nav.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { DashListComponent } from './dashboard/dash-list/dash-list.component';
import { DashDetailComponent } from './dashboard/dash-detail/dash-detail.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    HomeComponent,
    DashListComponent,
    DashDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NavModule,
    routing
  ],
  providers: [
      NavService
      // { provide: APP_INITIALIZER, useFactory: (config: MenuService) => () => config.buildMenu(), deps: [MenuService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
