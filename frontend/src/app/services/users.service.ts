import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API = 'http://localhost:4000/api/users'

  users: User[];
  selectedUser: User

  constructor(private http: HttpClient, private router: Router) { this.selectedUser = new User()}

  get_Users(){
    return this.http.get<User[]>(this.URL_API)
  }

  create_User(user: User){
    return this.http.post<any>(this.URL_API + '/register', user)
  }

  log_in(user: User){
    return this.http.post<any>(this.URL_API + '/login', user)
  }

  status_login(){
    return !!localStorage.getItem('token')
  }
  log_out() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  get_token(): string {
    return localStorage.getItem('token')
  }

  decode_token(token: string): object {
    return jwt_decode(token)
  }

  is_admin(): boolean {
    const token = this.decode_token(this.get_token())
    if (token['roles'][0].name === 'admin') {
      return true
    }
    return false
  }

}
