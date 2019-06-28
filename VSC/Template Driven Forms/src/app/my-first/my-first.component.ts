import { Component,  OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})


export class MyFirstComponent implements OnInit {
  public Users: Array<string> = [];
  
  
  constructor() { }

  ngOnInit(){}
  
  public AddUser(myform : NgForm) {
    this.Users.push(myform.value.txfirstname +  ' | '  + myform.value.txlastname);
  }

  public Delete(index: number) {
    this.Users.splice(index, 1);
  }

  

  

}
