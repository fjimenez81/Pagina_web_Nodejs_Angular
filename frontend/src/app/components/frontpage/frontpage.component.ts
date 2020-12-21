import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(public productService: ProductsService,
              public userService: UsersService) { }

  ngOnInit(): void {
    this.show_products()
  }

  show_products(){
    this.productService.get_Products().subscribe(
      res => {this.productService.products = res},
      err => console.error(err)
    )
  }

}
