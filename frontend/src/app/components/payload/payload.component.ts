import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { ActivatedRoute, Router} from '@angular/router'

import { User } from "../../models/user";

@Component({
  selector: 'app-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.css']
})
export class PayloadComponent implements OnInit {

  edit: boolean = false
  list: User[];
  data: User = new User()

  constructor(public productService: ProductsService,
              public userService: UsersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.show_Users()
    this.routing_canvas()
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

  show_products() {
    this.productService.get_Products().subscribe(
    res => {this.productService.products = res},
    err => console.error(err)
    )
  }

  routing_canvas() {
    const params = this.activatedRoute.snapshot.params
    if(params._id){
      this.productService.get_ProductById(params._id).subscribe(
        res => {
          this.productService.selectedProduct = res
          this.edit = true
        }
      )
    }
  }

  

}
