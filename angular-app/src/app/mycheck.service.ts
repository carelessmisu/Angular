import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, filter} from 'rxjs/operators'

class MyData {
  data: string = '';
  list: Person[] = [];
}

class Person {
  name!: string;
  mail!: string;
  tel!: string;
}

@Injectable({
  providedIn: 'root',
})
export class MycheckService {
  // private mydata: MyData = new MyData();
  private mydata!: MyData;

  constructor(private client: HttpClient) {
    // this.client.get('/assets/data.json').subscribe((result: any) => {
    //   this.mydata = result;
    // });

    // fetch('/assets/data.json')
    // .then((resp) =>{
    //   resp.json().then((val)=>{
    //     this.mydata = val
    //   })
    // })

    // let ob: Observable<any> = from(fetch('/assets/data.json'))
    // ob.subscribe((resp) =>{
    //   resp.json().then((val: MyData) =>{
    //     this.mydata = val
    //   })
    // })

    this.updateData(true);
    this.mydata = new MyData();
  }

  updateData(f: boolean){
  this.client.get('/assets/data.json')
  .pipe(
    map((res: any) => {
      return f ? res: null
    })
  )
    .subscribe((result) =>{
    if(result != null){
      this.mydata = result
    } else {
      this.mydata = new MyData()
    }
  })
 }
  get(n: number) {
    return this.mydata.list[n];
  }

  get size() {
    return this.list.length;
  }

  get list() {
    return this.mydata.list;
  }
  get data() {
    return this.mydata.data;
  }
}
