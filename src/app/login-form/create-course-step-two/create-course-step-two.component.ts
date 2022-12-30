import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createPromoRangeValidator } from 'src/app/validators/date-range-validator';

@Component({
  selector: 'app-create-course-step-two',
  templateUrl: './create-course-step-two.component.html',
  styleUrls: ['./create-course-step-two.component.scss']
})
export class CreateCourseStepTwoComponent implements OnInit {

  form = this.fb.group({
    courseType: ['premium', [Validators.required]],
    price: [null, [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern('[0-9]+')]],
    promoStartAt: [null],
    promoEndAt: [null]
  }, {
    validators: [createPromoRangeValidator()],
    updateOn: 'blur'
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(val => {
      const priceControl = this.form.controls['price'];

      if (val.courseType === 'free' && priceControl.enabled) {
        priceControl.disable({ emitEvent: false });
      } else if (val.courseType === 'premium' && priceControl.disabled) {
        priceControl.enable({ emitEvent: false });
      }
    });
  }

}
