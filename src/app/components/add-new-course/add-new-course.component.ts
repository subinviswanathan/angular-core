import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        showError: true
      }
    }
  ]
})
export class AddNewCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
