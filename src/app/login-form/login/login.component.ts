import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: any;

  val = {
    email: 'abc@gmail.com',
    password: '12345',
    date: this.getTodaysDate()
  };
  reactive = false;

  getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDay();
    const formattedMonth = month < 10 ? ('0' + month) : month;
    const formattedDay = day < 10 ? ('0' + day) : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  modelChange(e: any) {
    console.log(e);
    console.log(this.form);
  }

  onSubmit(ev: any, form: any) {
    console.log(ev, form);
  }

}
