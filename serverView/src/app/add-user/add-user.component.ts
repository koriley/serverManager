import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }
  addUser(e){
    e.preventDefault();
    var uname = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
    this.http.post("/adduser", {email:uname, password:pass}).subscribe((e)=>{
      console.log(e.json);
    })
    return false;
  }
}
