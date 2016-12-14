import { LectureItem } from '../dashboard/dash-list/lecture-item';

export class MenuItem {
    constructor(public name: string, public lectures?: LectureItem[], public children?: MenuItem[]){}
}
