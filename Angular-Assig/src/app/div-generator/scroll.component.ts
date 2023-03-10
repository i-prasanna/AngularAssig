import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent {
  listArray : string[] = [];
  sum = 10;
  direction = "";

  constructor() {
    this.appendItems();
  }


  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 10;
    this.appendItems();
    
    this.direction = "scroll down";
  }

  appendItems() {
    this.addItems("push");
  }

  addItems(_method: string) {
    for (let i = this.sum-10; i < this.sum; ++i) {
      if( _method === 'push'){
        this.listArray.push([i].join(""));
      }
    }
  }

  alertButton(i:string){
    alert(`Button in ${i}th div clicked!`);
  }
}
