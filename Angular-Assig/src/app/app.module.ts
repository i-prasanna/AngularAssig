import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentTableComponent } from './dynamic-table/student-table.component';
import { ViewsComponent } from './ecommerce/views.component';
import { BoxesComponent } from './banner/boxes.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollComponent } from './div-generator/scroll.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './countDownTimer/timer/timer.component';
import { DisplayComponent } from './countDownTimer/display/display.component';
import { ControlComponent } from './countDownTimer/control/control.component';
import { LogComponent } from './countDownTimer/log/log.component';
import { TrackDataComponent } from './countDownTimer/track-data/track-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    ViewsComponent,
    BoxesComponent,
    ScrollComponent,
    HomeComponent,
    TimerComponent,
    DisplayComponent,
    ControlComponent,
    LogComponent,
    TrackDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'Boxes', component: BoxesComponent },
      {path: 'Views', component: ViewsComponent },
      {path: 'Tables', component: StudentTableComponent },
      {path: 'Scroll', component: ScrollComponent },
      {path: 'Timer', component: TimerComponent },
    ]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
