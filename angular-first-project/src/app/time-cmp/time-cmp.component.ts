import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-cmp',
  templateUrl: './time-cmp.component.html',
  styleUrls: ['./time-cmp.component.css']
})
export class TimeCmpComponent implements OnInit {

  values = {val1 : null, 
            val2 : null,
            val3 : null
          }

  onSelect(): void {
    this.values.val3 = this.values.val1 + this.values.val2; 
  }     
  
  onEnter(): void {
       if(this.values.val1 == null || this.values.val2 == null) {
         
       }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
