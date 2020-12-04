import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { NgForm } from "@angular/forms";
import { Router} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    
    //this.getUsers()
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
        console.log(res)
        localStorage.setItem('token', res.token)
        form.reset()
        this.router.navigate([''])
      },
      err => console.error(err)
    )
  }

}
