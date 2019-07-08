import { Component, OnInit } from '@angular/core';
import { UserM } from '../models/UserM';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})


export class MyFirstComponent implements OnInit {
  public User: UserM = new UserM();
  public Users: UserM[] = [];
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
    this.GetUsers();
  }
   
  GetUsers() {
    const url = 'http://localhost:57312/api/users/GetUsers';
    this.http.get<UserM[]>(url).subscribe(result => {
      this.Users = result;
    }, error => console.error(error));
  }


  AddUser() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = 'http://localhost:57312/api/users/SetUser';
    this.http.post<UserM>(url, this.User, httpOptions).subscribe(result => {
      console.log('POST Request is successful ', result);
    }, error => console.error(error));
  }
  

  Delete(index: number) {
    this.Users.splice(index, 1);
  }

  ngOnInit() { }

}
