import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public state = {
    Name: 'zekiri abdelali',
    Now : new Date(),
    RealNb: 9.9885,
  };

  myjson = JSON.stringify(this.state);
  }
