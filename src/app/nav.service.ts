import { Injectable, EventEmitter } from '@angular/core';
import { MenuItem } from './menu/menu-item';
import { LectureItem } from './dashboard/dash-list/lecture-item';
import { Http, Response } from '@angular/http';
import { NAV_ITEMS } from './nav-items';
import 'rxjs/Rx';

@Injectable()
export class NavService {
  
  menuItems: MenuItem[] = [];
  activeMenuItem: MenuItem;
  activeLectureItem: LectureItem;
  activeMenuEmitter = new EventEmitter<MenuItem>();
  activeLectureEmitter = new EventEmitter<LectureItem>();

  constructor(private http: Http) {
    this.populateMenu(NAV_ITEMS);
    console.log(this.menuItems);
  }

  getMenu(){
      return this.menuItems;
  }

  setActiveMenuItem(menuItem: MenuItem){
      this.activeMenuEmitter.emit(menuItem);
      this.activeMenuItem = menuItem;
  }

  setActiveLectureItem(lectureItem: LectureItem){
      this.activeLectureEmitter.emit(lectureItem);
      this.activeLectureItem = lectureItem;
  }

  populateMenu(items){
      for (var i = 0; i < items.length; i++) {
        let currentItem = items[i];  
        let name: string = currentItem.name;
        let lectures: LectureItem[] = [];
        if(currentItem.lectures){
            for (var j = 0; j < currentItem.lectures.length; j++) {
                let lectureItem = currentItem.lectures[j];
                lectures.push(new LectureItem(lectureItem.title, lectureItem.component));
            }
        }
        this.menuItems.push(new MenuItem(name, lectures));
      }
  }

}