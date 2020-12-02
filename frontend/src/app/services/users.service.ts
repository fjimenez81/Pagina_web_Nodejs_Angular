import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API = 'http://localhost:4000/api/users'

  users: User[];
  selectedUser: User

  constructor(private http: HttpClient) { this.selectedUser = new User()}

  get_Users(){
    return this.http.get<User[]>(this.URL_API)
  }

  create_User(user: User){
    return this.http.post(this.URL_API, user)
  }

}
