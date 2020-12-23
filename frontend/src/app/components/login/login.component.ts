import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userLogin: UsersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    this.userLogin.log_in(form.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', this.userLogin.get_name())
        NavbarComponent.updateUserStatus.next(true);
        form.reset()
        this.router.navigate([''])
      },
      err => console.error(err)
    )
  }

}
