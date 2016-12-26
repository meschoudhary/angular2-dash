import { Injectable, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item';
import { LectureItem } from '../dashboard/dash-list/lecture-item';
import { Http, Response } from '@angular/http';
import { NAV_ITEMS } from './nav-items';
import 'rxjs/Rx';

@Injectable()
export class NavService {
  
  menuItems: MenuItem[];
  activeMenuItem: MenuItem;
  activeLectureItem: LectureItem;
  activeMenuEmitter = new EventEmitter<MenuItem>();
  activeLectureEmitter = new EventEmitter<LectureItem>();

  constructor(private http: Http) {
    this.menuItems = this.populateMenu(NAV_ITEMS);
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

  private populateMenu(items): MenuItem[]{
      let menuItems: MenuItem[] = [];
      for (var i = 0; i < items.length; i++) {
        let currentItem = items[i];  
        let lectures: LectureItem[] = [];
        let children: MenuItem[] = []; 
        if(currentItem.lectures){
            for (var j = 0; j < currentItem.lectures.length; j++) {
                let lectureItem = currentItem.lectures[j];
                lectures.push(new LectureItem(lectureItem.title, lectureItem.component));
            }
        }
        if(currentItem.children){
          children = this.populateMenu(currentItem.children);
        }
        menuItems.push(new MenuItem(currentItem.name, lectures, children));
      }
      return menuItems;
  }

}