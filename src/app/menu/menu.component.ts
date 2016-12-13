import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item'; 
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
    
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenu();
  }

  onMenuClick(menuItem: MenuItem){
      // console.log(menuItem);
      this.menuService.setActiveMenuItem(menuItem);
  }

}
