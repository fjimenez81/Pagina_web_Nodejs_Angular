import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  name: string = this.userService.status_login() ? localStorage.getItem('user') : ""
  id: string = this.userService.status_login() ? this.userService.get_User_id() : ""
  public static updateUserStatus: Subject<boolean> = new Subject();

  constructor(public userService: UsersService) {}

  ngOnInit(): void {

    NavbarComponent.updateUserStatus.subscribe(
      res => { 
        this.name = localStorage.getItem('user'); 
      })

    NavbarComponent.updateUserStatus.subscribe(
      res => {
        this.id = this.userService.get_User_id()
      }
    )
  }

}
