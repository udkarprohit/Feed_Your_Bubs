import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Login } from '../shared/login';
import { UserdataService } from '../services/userdata.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private userdataService:UserdataService,private router: Router ) { }

  //username!: String;
 //password!:String;
  login!: Login[];
  users!:User[];
  message:String=' ';

  onSubmit(login:Login){
   // console.log(this.username);
   
    this.users.forEach((user) =>{
      if(user.username == login.username){
        if(user.password == login.password){
          this.router.navigate(['/body']); 
        }
      }
      else{
        this.message = 'Username or Password does not match!';
      }
   })
   
  }

  ngOnInit(): void {
    this.userdataService.getUsers().subscribe(users => this.users = users);
  }

}
