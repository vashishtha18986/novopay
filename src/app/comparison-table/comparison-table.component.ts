import { Component } from '@angular/core';
import beforeDatas from './../jsons/before.json';
import afterDatas from './../jsons/after.json';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss']
})
export class ComparisonTableComponent {
  beforeData: any = beforeDatas;
  afterData: any = afterDatas;
  combinedResponse: any;
  topHeading: any

  constructor() { }

  ngOnInit() {
    this.topHeading = Object.entries(this.beforeData)
    this.topHeading.forEach((el: any, index: number) => {
      let key = el[0]
      if (this.afterData.hasOwnProperty(key)) {
          this.topHeading[index].push(this.afterData[key])
      }
    });
  }
  isCheckArray(val:any){
   return Array.isArray(val);
  }
  getValue(obj:any,key:any){
    return obj[key]
  }
  isDiffValue(before:any,after:any){
    return before==after;
  }

  key(str:any) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  upperCase(str:any) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ').toUpperCase();
  }
}
