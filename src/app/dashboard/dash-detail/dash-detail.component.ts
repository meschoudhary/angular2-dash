import { Component, OnInit, Input, Type, ViewChild, ViewContainerRef, Compiler } 
	from '@angular/core';

import { NavService } from '../../nav.service';
import { LectureItem } from '../dash-list/lecture-item';
import { NavModule } from '../../nav.module';

@Component({
  selector: 'app-dash-detail',
  templateUrl: './dash-detail.component.html'
})
export class DashDetailComponent implements OnInit {
	
	@ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
	private lecture: LectureItem;

	constructor(private navService: NavService, private compiler: Compiler) { }

	ngOnInit() {

		this.lecture = this.navService.activeLectureItem;
		if(this.lecture){
			this.loadComponent(this.lecture.component);
		}

		this.navService.activeLectureEmitter.subscribe(
				(lecture: LectureItem) => {
					if(lecture && lecture !== this.lecture){
						this.lecture = lecture;
						console.log(lecture.title);
						this.loadComponent(lecture.component);
					}
				}
			);
	}

	loadComponent(targetComponent: Type<any>){
		if(typeof this.container !== 'undefined' && typeof targetComponent !== 'undefined'){
			const mod = this.compiler.compileModuleAndAllComponentsSync(NavModule);
		    const factory = mod.componentFactories.find((comp) =>
		      comp.componentType === targetComponent
		    );
		    this.container.clear();
		    this.container.createComponent(factory);
		}
	}

}
