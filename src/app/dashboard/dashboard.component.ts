import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { MenuItem } from '../menu/menu-item';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedMenuItem: MenuItem;

  constructor(private navService: NavService, private router: Router) {}

  ngOnInit() {
      this.selectedMenuItem = this.navService.activeMenuItem;
      if(typeof this.selectedMenuItem === 'undefined'){
          this.router.navigate(['/']);
      }else{
          //listens to changes in selection
          this.navService.activeMenuEmitter.subscribe(
            (item: MenuItem) => {
                this.selectedMenuItem = item;
            }
          );
      }
  }

}
