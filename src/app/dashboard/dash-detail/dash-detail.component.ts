import { Component, OnInit, Input, Type } from '@angular/core';

import { NavService } from '../../nav.service';
import { LectureItem } from '../dash-list/lecture-item';

@Component({
  selector: 'app-dash-detail',
  templateUrl: './dash-detail.component.html'
})
export class DashDetailComponent implements OnInit {
	private lecture: LectureItem;

	constructor(private navService: NavService) { }

	ngOnInit() {
		this.lecture = this.navService.activeLectureItem;
		this.navService.activeLectureEmitter.subscribe(
				(lecture: LectureItem) => {
					this.lecture = lecture;
					this.loadComponent(lecture.component);
					console.log(lecture.title);
				}
			);
	}

	loadComponent(component: Type<any>){}

}
