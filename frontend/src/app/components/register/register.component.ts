import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userService.get_Users().subscribe(
    (res) => {this.userService.users = res
    },
		err => console.error(err))
  }

  addUser(form: NgForm) {
    this.userService.create_User(form.value).subscribe(
      res => {
        console.log(res),
        form.reset()},
      err => console.error(err)
    )
  }
}
