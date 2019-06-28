import { Component,  OnInit } from '@angular/core';
import {   } from '@angular/forms';
import { UserM } from '../models/UserM';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})


export class MyFirstComponent implements OnInit {
  
  public User : UserM = new UserM(0,"","");
  public Users: Array<UserM> = [];
  
  
  constructor() { }
  
  public AddUser() {
    console.log(this.User);
    this.Users.push({...this.User});
    console.log(this.Users);
  }

  public Delete(index: number) {
    this.Users.splice(index, 1);
  }

  ngOnInit() { }

  

}
