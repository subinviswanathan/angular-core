import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { cousrseTitleValidator } from 'src/app/validators/course-title-validator';

export interface CourseCategory {
  code: string;
  description: string;
}

@Component({
  selector: 'app-create-course-step-first',
  templateUrl: './create-course-step-first.component.html',
  styleUrls: ['./create-course-step-first.component.scss']
})
export class CreateCourseStepFirstComponent implements OnInit {
  form = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ],
      asyncValidators: [cousrseTitleValidator(this.service)],
      updateOn: 'blur'
    }],
    releasedAt: [new Date(), [Validators.required]],
    downlaodAllowed: [false, Validators.requiredTrue],
    longDescription: ['Test', [Validators.required, Validators.minLength(6)]],
    category: ['', [Validators.required]]
  });

  courseCategories$: Observable<any> | undefined;

  constructor(private fb: FormBuilder, public service: PostsService) { }

  ngOnInit(): void {
    this.courseCategories$ = this.service.loadPosts();
    const draft = localStorage.getItem('STEP_1');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges.pipe(
      filter(() => this.form.valid)
    ).subscribe(val => {
      localStorage.setItem('STEP_1', JSON.stringify(val));
    })
  }

}
