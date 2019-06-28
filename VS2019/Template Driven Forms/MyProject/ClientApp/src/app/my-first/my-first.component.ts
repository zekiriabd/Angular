import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-my-first',
    templateUrl: './my-first.component.html',
    styleUrls: ['./my-first.component.css']
})
/** my-First component*/
export class MyFirstComponent {
  public Users: Array<string> = [];
  constructor() { }

  ngOnInit(){}
  public AddUser(myform: NgForm) {
    this.Users.push(myform.value.txfirstname + ' | ' + myform.value.txlastname);
  }

  public Delete(index: number) {
    this.Users.splice(index, 1);
  }


}
