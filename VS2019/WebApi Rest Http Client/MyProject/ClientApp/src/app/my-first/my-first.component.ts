import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { UserM } from '../models/UserM';
import { HttpParamsOptions } from '@angular/common/http/src/params';

@Component({
    selector: 'app-my-first',
    templateUrl: './my-first.component.html',
    styleUrls: ['./my-first.component.css']
})
/** my-First component*/
export class MyFirstComponent {

  public User: UserM = new UserM();
  public Users: UserM[] = [];
  private url;
  private http: HttpClient;
  constructor(http: HttpClient, @Inject('BASE_URL') url: string) {
    this.url = url;
    this.http = http;
    this.GetUsers();
  }

  
  GetUsers() {
    const url = this.url + 'api/user/GetUsers';
    this.http.get<UserM[]>(url).subscribe(result => {
      this.Users = result;
    }, error => console.error(error));
  }

  AddUser() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.url + "api/user/SetUser";
    this.http.post<UserM>(url, this.User, httpOptions).subscribe(result => {
      console.log('POST Request is successful ', result);
    }, error => console.error(error));
  }

  Delete(index: number) {
    this.Users.splice(index, 1);
  }

  ngOnInit() { }

}
