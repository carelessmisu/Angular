import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MycheckService } from '../mycheck.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})
export class MessageComponent implements OnInit {
  // content!: string[];
  // @Output() action = new EventEmitter<MouseEvent>();

  input!: FormControl;
  message!: string;
  @ViewChild('btn')
  btn!: ElementRef;

  constructor(private service: MycheckService) {}

  ngOnInit() {
    this.input = new FormControl('');
    this.message = 'message list';
    const btn = this.btn.nativeElement;
    // fromEvent(btn, 'click').subscribe((event: any) => {
    //   this.doAction();
    // });
    fromEvent(btn, 'click')
    .pipe(filter((res:MouseEvent, n:number) =>{
      console.log(n)
      if (res: shiftKey){
        return false
      }
      return true
    }))
    .subscribe((evet: MouseEvent) =>{
      this.doAction();
    })
  }

  updateData(ck) {
    this.service.updateData(ck)
  }

  getData() {
    return this.service.data;
  }

  getList() {
    return this.service.list.map((v) => {
      v.name = '******';
      return v;
    });
  }

  doAction() {
    let n = parseInt(this.input.value);
    let p = this.service.get(n);
    this.message = JSON.stringify(p);
  }
}
