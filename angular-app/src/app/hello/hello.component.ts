import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.message = 'Use FormBuilder';
    // this.text1 = '';
    // this.myControl = new FormGroup({
    //   control: new FormControl()
    // });
    this.myControl = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.email]),
      age: new FormControl(0, [Validators.min(1), Validators.max(150)]),
    });
  }

  get name() {
    return this.myControl.get('name');
  }
  get mail() {
    return this.myControl.get('mail');
  }
  get age() {
    return this.myControl.get('age');
  }

  // doClick() {
  //   this.message = '「' + this.myControl.value + '」と書きましたね。';
  // }
  onSubmit() {
    if (this.myControl.invalid) {
      this.message = 'VALIDATION ERROR';
    } else {
      let result = this.myControl.value;
      this.message = JSON.stringify(result);
    }
  }
}
