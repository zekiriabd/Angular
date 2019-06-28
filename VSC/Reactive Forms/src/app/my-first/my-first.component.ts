import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})


export class MyFirstComponent implements OnInit {
  public Users: Array<string> = [];
  public userForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            firstName:'',
            lastName: '',
        });
  }
  
  public AddUser() {
    this.Users.push(this.userForm.value.firstName +  ' | '  + this.userForm.value.lastName);
  }

  public Delete(index: number) {
    this.Users.splice(index, 1);
  }

  

  

}
