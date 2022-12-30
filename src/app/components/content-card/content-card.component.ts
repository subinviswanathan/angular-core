import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy {
  @Input() course: Course | undefined;
  @Input() index: number | undefined;
  @Input() blank: TemplateRef<any> | undefined;
  @Input() type: string | undefined;

  @Output() action = new EventEmitter<Course>();

  @ViewChild('view')
  view: ElementRef | undefined;

  @ContentChild('desc')
  desc: ElementRef | undefined;

  // constructor(private cd: ChangeDetectorRef,
  //   /* @Attribute('type') private type: string */) {
  //   // console.log(this.index + ' Constructor ');
  //   // console.log(this.type);
  // }

  ngAfterContentChecked(): void {
    // console.log(this.index + ' ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    // console.log(this.index + ' ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // console.log(this.index + ' ngOnDestroy');
  }

  ngDoCheck(): void {
    // console.log(this.index + ' ngDoCheck');
  }

  ngAfterViewInit(): void {
    //(this.course as any).description = 'Subin';
    //this.cd.detectChanges();
    // console.log('ngAfterViewInit ', this.view);
  }

  ngAfterContentInit(): void {
    // console.log(this.index + ' ngAfterContentInit ', this.desc);
  }

  ngOnInit(): void {
    console.log('ngOnInit ', this.view, this.desc);
    console.log(this.index + ' ngOnInit ');
    console.log(this.type);
  }

  ngOnChanges() {
    // console.log(this.index + ' ngOnChanges');
  }

  viewCourse() {
    this.action.emit(this.course);
  }

  descChanged(val: string) {
    if (this.course)
      this.course.description = val;
  }
}
