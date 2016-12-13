import { Injectable, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MenuService {

  menuItems: MenuItem[] = [];
  activeMenuItem: MenuItem;
  activeMenuEmitter = new EventEmitter<MenuItem>();

  constructor(private http: Http) {}

  getMenu(){
      return this.menuItems;
  }

  setActiveMenuItem(menuItem: MenuItem){
      this.activeMenuEmitter.emit(menuItem);
      this.activeMenuItem = menuItem;
  }

  //used in AppModule
  buildMenu(){
    return new Promise((resolve, reject) => {
        this.http.get('app/menu/menu-items.json')
            .map((res: Response) => res.json())
            .subscribe((val) => {
                console.log(val);
                let items = val.menu;
                this.populateMenu(items);
                console.log(this.menuItems);
                resolve(true);
        });
    });
  }

  populateMenu(items){
      for (var i = 0; i < items.length; i++) {
        let currentItem = items[i];  
        let name: string = currentItem.name;
        let lectures: string[] = [];
        if(currentItem.lectures){
            for (var j = 0; j < currentItem.lectures.length; j++) {
                lectures.push(currentItem.lectures[j].name);
            }
        }
        this.menuItems.push(new MenuItem(name, lectures));
      }
  }

}