import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
