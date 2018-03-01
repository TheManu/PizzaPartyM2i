import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  value = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(){
    if (this.value < 10)
      ++this.value;
  }

  decrement(){
    if (this.value > 0)
      --this.value;
  }
}
