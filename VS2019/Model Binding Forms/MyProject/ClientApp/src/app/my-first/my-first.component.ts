import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserM } from '../models/UserM';

@Component({
    selector: 'app-my-first',
    templateUrl: './my-first.component.html',
    styleUrls: ['./my-first.component.css']
})
/** my-First component*/
export class MyFirstComponent {

  public User: UserM = new UserM(0, "", "");
  public Users: Array<UserM> = [];

  constructor() { }

  ngOnInit() { }

  AddUser() {
    this.Users.push({ ...this.User });
  }

  Delete(index: number) {
    this.Users.splice(index, 1);
  }

}
