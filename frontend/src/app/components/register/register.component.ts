import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { NavbarComponent } from "../navbar/navbar.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { NgForm } from "@angular/forms";
import { Router} from '@angular/router'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {




  constructor(public userService: UsersService,
             // private updateUser: UserProfileComponent,
              private router: Router) { }

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

    if (!this.validate_Form(form))
      return
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, register me!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Registered!',
          'Now login in, please!'
        )
        this.userService.create_User(form.value).subscribe(
          res => {
            form.reset()
            this.router.navigate(['/login'])
          },
          err => console.error(err)
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled'
        )
      }
    })
    
  }

  validate_Form(form: NgForm): boolean {

    let pass: string = form.value['password']
    let email: string = form.value['email']
    let name: string = form.value['name']
    let surname: string = form.value['surname']
    let address: string = form.value['address']
    let city: string = form.value['city']
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (name.length === 0) {
      Swal.fire('Fill input name field, please try again')
      return false
    }
    if (surname.length === 0) {
      Swal.fire('Fill input surname field, please try again')
      return false
    }
    if (address.length === 0) {
      Swal.fire('Fill input address field, please try again')
      return false
    }
    if (city.length === 0) {
      Swal.fire('Fill input city field, please try again')
      return false
    }
    if (!EMAIL_REGEXP.test(email)) {
      Swal.fire('Email is not valid, please try again')
      return false
    }
    if (pass.length < 4) {
      Swal.fire('Password very short, please try again')
      return false
    }
    return true
  }

}
