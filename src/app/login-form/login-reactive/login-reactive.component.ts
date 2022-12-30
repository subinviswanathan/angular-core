import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { validateUsername } from 'src/app/validators/password-validators';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
  // email = new FormControl('', {
  //   validators: [Validators.required, Validators.email],
  //   updateOn: 'blur'
  // });
  // password = new FormControl('', [Validators.required, Validators.minLength(8), validateUsername()]);
  // date = new FormControl('', [Validators.required]);
  // form = new FormGroup({
  //   email: this.email,
  //   password: this.password,
  //   date: this.date
  // });

  getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDay();
    const formattedMonth = month < 10 ? ('0' + month) : month;
    const formattedDay = day < 10 ? ('0' + day) : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  form = this.fb.group({
    email: ['asda', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }],
    // email: this.fb.nonNullable.control('', {
    //   validators: [Validators.required, Validators.email],
    //   updateOn: 'blur'
    // }),
    password: ['asda', [Validators.required, Validators.minLength(8), validateUsername()]],
    date: [new Date(), [Validators.required]]
  });

  // constructor(private fb: FormBuilder) {
  // }

  constructor(private fb: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(ev: any, form: any) {
    console.log(this.form.value);
    console.log(this.form.controls);
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get date() {
    return this.form.controls['date'];
  }

  reset() {
    this.form.reset();
    console.log(this.form);
  }

}
