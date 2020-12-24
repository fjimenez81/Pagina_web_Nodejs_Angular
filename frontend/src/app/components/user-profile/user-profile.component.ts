import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute, Router} from '@angular/router'
import { User } from "../../models/user";
import { NgForm } from "@angular/forms";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public userService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }
  
  data: User = new User()

  ngOnInit(): void {
    this.show_Users()
    this.routing_User()
    
  }

  show_Users() {
    this.userService.get_Users().subscribe(
      res => {
        this.userService.users = res
      }
    )
    for (let i = 0; i < this.userService.users.length; i++) {
      if (this.userService.users[i]._id == this.userService.get_User_id()) {
        this.data = this.userService.users[i]
      } 
    }
  }

  routing_User() {
    const params = this.activatedRoute.snapshot.params
    if(params._id){
      this.userService.get_UserById(params._id).subscribe(
        res => {
          this.userService.selectedUser.name = res.name
          this.userService.selectedUser.surname = res.surname
          this.userService.selectedUser.address = res.address
          this.userService.selectedUser.city = res.city
          this.userService.selectedUser.email = res.email
        }
      )
    }
  }

  update_User(form: NgForm) {

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
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Updated!',
          'Your file has been updated.',
          'success'
        )
        this.userService
              .update_UserById(this.userService.get_User_id(), form.value)
              .subscribe(
                res => {
                  console.log(res)
                }
              )
        form.reset()
        this.router.navigate(['/home'])
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
