import { Component,  OnInit } from '@angular/core';
import { UserM } from '../models/UserM';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})


export class MyFirstComponent implements OnInit {
  public User: UserM = new UserM();
  public Users: Array<UserM> = [];

  constructor() {
  }

  public AddUser() {
    
    this.Users.push({...this.User});
  }

  public Delete(index: number) {
    this.Users.splice(index, 1);
  }

  ngOnInit() { }

}
