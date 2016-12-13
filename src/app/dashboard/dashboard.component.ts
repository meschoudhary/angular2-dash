import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { MenuItem } from '../menu/menu-item';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedMenuItem: MenuItem;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
      this.selectedMenuItem = this.menuService.activeMenuItem;
      if(typeof this.selectedMenuItem === 'undefined'){
          this.router.navigate(['/']);
      }else{
          //listens to changes in selection
          this.menuService.activeMenuEmitter.subscribe(
            (item: MenuItem) => {
                this.selectedMenuItem = item;
            }
          );
      }
  }

}
