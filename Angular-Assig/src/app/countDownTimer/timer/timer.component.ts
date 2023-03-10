import { Component } from '@angular/core';

@Component({
  selector: 'count-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  countLimit: any;
  start: any;
  pause: any;
  reset: any;

  onChangeCountLimit(event: Event) {
    console.log('timer------>event',event);
    this.countLimit = event;
  }

  onChangeStart(event: Event) {
    console.log('timer------>event',event);
    this.start = event;
  }

  onChangePause(event: Event) {
    console.log('timer------>event',event);
    this.pause = event;
  }

  onChangeReset(event: Event) {
    console.log('timer------>event',event);
    this.reset = event;
  }
}
