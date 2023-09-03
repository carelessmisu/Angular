import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],

  // インラインテンプレート
  // template: `
  //   <div id="body">
  //     <h1>{{title}}</h1>
  //     <p>{{message}}</p>
  //   </div>
  // `
})
export class HelloComponent implements OnInit {
  title: string | undefined;
  message: string | undefined;
  switch: string | undefined;
  // data: string[] | undefined;
  // visible: boolean;
  // input: string | undefined;
  // count: number;
  // styleClass: string | undefined;
  // now: Date;
  // price: number;

  constructor(){
    // this.now = new Date();
    // setInterval(
    //   () => {this.now = new Date();}, 1000);
    // setInterval(
    //   () => {
    //     this.styleClass = this.styleClass == 'red' ? '' : 'red';
    //     console.log(this.styleClass);
    //   },1000
    // );

  }

  ngOnInit(){
    this.title = 'Hello-app';
    // this.message = 'This is My First Compornent!!';
    // this.message = 'This is inline-template!!';
    // this.message = '※ボタンをクリック!!'
    // this.input = ''
    // this.visible = true;
    // this.message = 'please type...'
    // this.message = 'data list.';
    this.message = 'select menu:';
    this.switch = "one";


    // this.data = [
    //   '最初の項目です。',
    //   '2番目の項目です。',
    //   '最後の項目です。'
    // ]

    // this.styleClass = 'red'
    // this.price = 123450;
    // this.count = 0;
  }

  // today(){
  //   return this.now.toLocaleString();
  // }

  // doClick(){
  //   // this.message = ++this.count + "回、クリックしました。";
  //   this.visible = !this.visible;
  // }

  // doType(val: string) {
  //   this.input = val;
  //   this.message = 'you type: ' + this.input;
  // }

  doSelect(val: string){
    this.switch = val;
  }
}
