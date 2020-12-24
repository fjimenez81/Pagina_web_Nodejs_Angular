import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode'
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API = 'http://localhost:4000/api/users'

  users: User[] = []
  selectedUser: User
  status:boolean = false
  //user_id: string = this.get_User_id()


  constructor(private http: HttpClient, private router: Router) { this.selectedUser = new User()}

  get_Users(){
    return this.http.get<User[]>(this.URL_API)
  }

  create_User(user: User){
    return this.http.post<any>(this.URL_API + '/register', user)
  }

  get_UserById(id: String) {
    return this.http.get<User>(this.URL_API + '/' + id)
  }

  update_UserById(id: String, user: User) {
    return this.http.put<User>(this.URL_API + '/' + id, user)
  }

  log_in(user: User){
    return this.http.post<any>(this.URL_API + '/login', user)
  }

  status_login(){
    return !!localStorage.getItem('token')
  }
  log_out() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
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

  get_User_id(): string {
    const token = this.decode_token(this.get_token())
    let aux: string = ""
   
    for (let i = 0; i < token['id'].length; i++) {
        aux += token['id'][i]
    }
    return aux
  }
  get_name(): string {
    const token = this.decode_token(this.get_token())
    let aux: string = ""

    for (let i = 0; i < token['name'].length; i++) {
      aux += token['name'][i]
    }
    return aux

  }
}
