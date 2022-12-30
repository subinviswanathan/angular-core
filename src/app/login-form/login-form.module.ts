import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { PasswordStrengthDirective } from '../directives/password-strength.directive';
import { OnlySingleErrorPipe } from '../pipes/only-single-error.pipe';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { AddNewCourseComponent } from '../components/add-new-course/add-new-course.component';
import { RouterModule } from '@angular/router';
import { CreateCourseStepFirstComponent } from './create-course-step-first/create-course-step-first.component';
import { CreateCourseStepTwoComponent } from './create-course-step-two/create-course-step-two.component';
import { CreateCourseStepThreeComponent } from './create-course-step-three/create-course-step-three.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginReactiveComponent,
    PasswordStrengthDirective,
    OnlySingleErrorPipe,
    AddNewCourseComponent,
    CreateCourseStepFirstComponent,
    CreateCourseStepTwoComponent,
    CreateCourseStepThreeComponent,
    FileUploadComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginFormModule { }
