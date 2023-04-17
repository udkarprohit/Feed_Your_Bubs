import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // users : User[] =[]; 
 // user!: User;

  constructor(private userdataService: UserdataService,private router: Router ) { }

  onSubmit(user: User){
    //console.log(JSON.stringify(user));
    this.userdataService.addUser(user).subscribe();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
   
  }

}