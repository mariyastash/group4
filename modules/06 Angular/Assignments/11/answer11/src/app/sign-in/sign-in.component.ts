import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm : FormGroup;

  constructor(builder: FormBuilder) {
    this.signinForm = builder.group({
      //sign-in info
      signinInfo: builder.group({
        username: [
          "",
          []
        ],
        password: [
          "",
          []
        ]
      })
    })
   }

  ngOnInit() {
  }

  onSubmit(){}

}
