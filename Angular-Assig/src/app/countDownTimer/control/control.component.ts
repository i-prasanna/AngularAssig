import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core'
// import { interval } from 'rxjs'
// import { map, take } from 'rxjs/operators'
// import { Observable } from 'rxjs/rx';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit{

  @Output() eventChange = new EventEmitter<Event>();
  @Output() eventChangeStart = new EventEmitter<Event>();
  @Output() eventChangePause = new EventEmitter<Event>();
  @Output() eventChangeReset = new EventEmitter<Event>();
  valueTime : any ;
  starterStopper : any = false;
  pauser : any =false;

  @ViewChild("valueTime", {static: false})
  // this InputVar is a reference to our input.   
  InputVar: ElementRef<HTMLInputElement> = {} as ElementRef;

  onClick(event: any) {
    this.eventChange.emit(event);
  }

  ngOnInit(){
  }

  handleStarter(value : any) {
    if (this.starterStopper) {
      if (this.pauser) {
        this.eventChangePause.emit(this.pauser);
        this.pauser = false
      } else {
        this.eventChangePause.emit(this.pauser);
        this.pauser = true
      }
    } else {
      this.valueTime = value;
      this.eventChange.emit(this.valueTime);
      this.starterStopper = true;
      this.eventChangeStart.emit(this.starterStopper);
    }
  }

  handleReset() {
    this.InputVar.nativeElement.value = '0';
    this.onClick('0');
    if(this.starterStopper == true){
      this.eventChangeReset.emit(this.pauser);
    }
    this.starterStopper = false;
    this.pauser =false;
    this.eventChangeStart.emit(this.starterStopper);
  }
  
}
