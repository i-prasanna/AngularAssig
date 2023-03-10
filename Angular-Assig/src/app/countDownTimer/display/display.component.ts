import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() count: any = 1; 
  @Input() start: any ;
  @Input() pause: any ;
  @Input() resume: any;
  @Input() reset: any ;


  myObservable = new Observable((observer) => {
    // if(((this.start) && (this.pause == false))){
      setInterval(() => {
        observer.next(this.count);
        if (this.count > 0 ) {
          this.count--;
        }
      }, 1000);
    // }
    // else{
    //   this.count = 0;
    // }
  });

  mySubscription : any;
  // mySubscription = this.myObservable.subscribe((data : any) => {
  //   console.log(data)
  //   if(data==0){
  //     this.mySubscription.unsubscribe();
  //   }
  // }
  // );

  ngOnInit(){
    console.log('observable',this.start,this.pause,this.resume)
    this.mySubscription = this.myObservable.subscribe((data : any) => {
      console.log(data)
      if(data==0){
        this.mySubscription.unsubscribe();
      }
    }
    );
    
  }

  constructor() {}

}
