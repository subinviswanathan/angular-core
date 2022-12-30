import { Component, ElementRef, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG_TOKEN, AppCofig } from 'src/app/config';
import { HighlightedDirective } from 'src/app/directives/highlighted.directive';
import { Course } from 'src/app/model/course.model';
import { PostsService } from 'src/app/services/posts.service';
import { courses } from 'src/data/courses.data';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  // providers: [
  //   { provide: CONFIG_TOKEN, useValue: APP_CONFIG },
  //   // { provide: CONFIG_TOKEN, useFactory: () => APP_CONFIG }
  // ]
})
export class HomeComponent implements OnInit {

  title = 'Angular-Core';
  courses: Course[] = courses;
  posts$: Observable<any> | undefined;
  todos: any;

  @ViewChild('id') divElem: ElementRef | undefined;
  @ViewChild(ContentCardComponent) content: ElementRef | undefined;
  @ViewChild(HighlightedDirective) high: ElementRef | undefined;

  // constructor(private postService: PostsService) { }// @Self() @SkipSelf() @Host()
  constructor(@Optional() private postService: PostsService, @Inject(CONFIG_TOKEN) private _config: AppCofig) { }

  ngOnInit(): void {
    this.posts$ = this.postService.loadPosts();
    this.postService.loadTodos().subscribe((todos) => this.todos = todos);
  }

  actionTriggered(ev: Course) {
    console.log(ev);
    console.log(this.divElem);
    console.log(this.content);
  }

  ngAfterViewInit(): void {
    //console.log(this.high)
  }
  ngAfterContentInit(): void {
    //console.log(this.content)
  }

  onEditFirstCourse() {
    const course = { ...this.courses[0] };
    course.description = 'Changed'
    this.courses[0] = course;

    // this.courses[0].description = 'Changed';
  }

}
