import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html',
  providers: [MycheckService],
})
export class HelloComponent implements OnInit {
  title!: string;
  message!: string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello app';
    this.message = 'sample message.';
  }
}
