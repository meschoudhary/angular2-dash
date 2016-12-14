import { Type } from '@angular/core';

export class LectureItem {
	constructor(public title: string, public component: Type<any>){}
}
