import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   loginUser(e){
     e.preventDefault();
     var uname = e.target.elements[0].value;
     var pass = e.target.elements[1].value;
     console.log(uname+" "+pass);
     return false;
   }
}
