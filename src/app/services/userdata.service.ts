import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) { }

  getUsers(): Observable<User[]> { //users
    return this.http.get<User[]>(baseURL + 'users');
  }

  addUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<User>(baseURL + 'users',user,httpOptions);
  }

}
/*firstname: user.firstname,
    lastname:  user.lastname,
    phoneno:  user.phoneno,
    emailid:  user.emailid,
    password:  user.password,
    confirmpassword:  user.confirmpassword,
    username:  user.username,
    address:  user.address,
    zipcode:  user.zipcode*/