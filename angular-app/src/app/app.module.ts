import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'msg/:id', component: MessageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  bootstrap: [AppComponent]
  // bootstrap: [HelloComponent],
})
export class AppModule {
  constructor() {}
}
