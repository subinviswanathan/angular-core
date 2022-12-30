import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CourseImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
