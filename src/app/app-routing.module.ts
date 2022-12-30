import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule, Routes } from "@angular/router";
import { AddNewCourseComponent } from "./components/add-new-course/add-new-course.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./login-form/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: AddNewCourseComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), MatInputModule,
    MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
