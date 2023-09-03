import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {
  title: string | undefined;
  message: string | undefined;
  // text1: string | undefined;
  myControl!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'Use FormControl';
    // this.text1 = '';
    this.myControl = new FormGroup({
      control: new FormControl()
    });
  }

  // doClick() {
  //   this.message = '「' + this.myControl.value + '」と書きましたね。';
  // }
  onSubmit() {
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }
}
