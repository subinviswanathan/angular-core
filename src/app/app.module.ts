import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { CourseImageComponent } from './course-image/course-image.component';
import { HttpClientModule } from '@angular/common/http';
import { CONFIG_TOKEN, APP_CONFIG } from './config';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormModule } from './login-form/login-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    CourseImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginFormModule
  ],
  // providers: [
  //   { provide: CONFIG_TOKEN, useValue: APP_CONFIG },
  //   // { provide: CONFIG_TOKEN, useFactory: () => APP_CONFIG }
  // ],
  // providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
