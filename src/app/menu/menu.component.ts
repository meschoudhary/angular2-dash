import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item'; 
import { NavService } from './nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
    
  constructor(private navService: NavService) { }

  ngOnInit() {
    this.menuItems = this.navService.getMenu();
  }

  onMenuClick(menuItem: MenuItem){
      // console.log(menuItem);
      this.navService.setActiveMenuItem(menuItem);
  }

}
