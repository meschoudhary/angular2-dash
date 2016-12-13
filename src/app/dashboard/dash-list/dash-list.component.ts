import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css']
})
export class DashListComponent implements OnInit {

  @Input() list: string[];
  selectedLecture: string;

  constructor() { }

  ngOnInit() {

  }

  onSelected(lecture: string){
      this.selectedLecture = lecture;
  }

  isSelectedLecture(lecture: string){
      return this.selectedLecture === lecture;
  }

}
