import { Component } from '@angular/core';
import { NavigationStart, Router, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  message = ''

  routes: Routes = [
    {path: 'hello', component: HelloComponent},
    {path: 'msg/:id', component: MessageComponent}
  ]

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.navigate(event)
      }
    })
  }

 navigate(event: any) {
  this.message = event.url;
 }

  // doClick() {
  //   this.router.navigate(['']);
  // }
}
