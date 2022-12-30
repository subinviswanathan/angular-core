import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { CourseCategory } from '../login-form/create-course-step-first/create-course-step-first.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  loadPosts() {
    return this.http.get(this.url)
  }

  loadTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.loadPosts()
        .pipe(
          map(res => {
            return res ? null : { 'userNameExists': true };
          })
        );
    };

  }
}
