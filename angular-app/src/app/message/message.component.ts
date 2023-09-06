import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})
export class MessageComponent implements OnInit {
  @Input()
  content!: string[];
  @Output() action = new EventEmitter<MouseEvent>();

  constructor(private service: MycheckService) {
    service.push('message data');
  }

  ngOnInit() {
    this.content = this.service.list;
  }

  doAction(event: any) {
    this.action.emit(event);
  }
}
