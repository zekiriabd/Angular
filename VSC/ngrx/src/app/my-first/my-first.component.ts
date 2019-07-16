import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})


export class MyFirstComponent implements OnInit {
  
  constructor(private store: Store<any>) {}

  count = 0;

  increment() {
    this.store.dispatch({type: 'INC'});
    this.count = this.store.source.value.myStat.count;
  }
  
  decrement() {
    this.store.dispatch({type: 'DEC'});
    this.count = this.store.source.value.myStat.count;
  }

  ngOnInit() { }

}
