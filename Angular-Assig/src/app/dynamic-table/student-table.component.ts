import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assig-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})

export class StudentTableComponent implements OnInit {
  studentsData: Array<any> = [];
  propertyClick: any = {};

  ngOnInit(): void {
    this.studentsData = this.getStudentData();
    this.setColumns();
  }
  
  constructor(){
  }

  displayedColumns : string[] = [];

  getStudentData(){
    return [
      { Name: 'John', Class: '3', Section: 'D', Sub1: 23, Sub2: 54, Sub3: 65 },
      { Name: 'Smith', Class: '3', Section: 'E', Sub1: 23.2, Sub2: 45, Sub3: 67 },
      { Name: 'Naple', Class: '3', Section: 'F', Sub1: 26, Sub2: 34, Sub3: 45 },
      { Name: 'Derry', Class: '3', Section: 'A', Sub1: 34, Sub2: 34, Sub3: 71 },
    ];
  }
  
  setColumns(){
    console.log(this.studentsData);
    for (let val of Object.keys(this.studentsData[0])) {
      this.displayedColumns.push(val);
      this.propertyClick[val] = 0;
    }
    console.log(this.propertyClick);
  }

  sort(column: any){
    console.log(column);
    if(this.propertyClick[column] == 0){
      this.sortAsc(column);
      this.propertyClick[column] = 1;
    }
    else if(this.propertyClick[column] == 1){
      this.sortDsc(column);
      this.propertyClick[column] = 2;
    }
    else{
      for(let val of Object.keys(this.propertyClick)){
        this.propertyClick[val] = 0;
      }
      this.studentsData = this.getStudentData();
    }

  }

  sortAsc(value: any) {
    let valuex = value;
    console.log(valuex);
    this.studentsData = this.studentsData.sort(function (low, high) {
      if (low[valuex] < high[valuex]) {
        return -1;
      }
      else if (low[valuex] > high[valuex]) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }

  sortDsc(value: any) {
    let valuex = value;
    console.log(valuex);
    this.studentsData = this.studentsData.sort(function (low, high) {
      if (low[valuex] > high[valuex]) {
        return -1;
      }
      else if (low[valuex] < high[valuex]) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }

}
