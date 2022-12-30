import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseStepFirstComponent } from './create-course-step-first.component';

describe('CreateCourseStepFirstComponent', () => {
  let component: CreateCourseStepFirstComponent;
  let fixture: ComponentFixture<CreateCourseStepFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCourseStepFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCourseStepFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
