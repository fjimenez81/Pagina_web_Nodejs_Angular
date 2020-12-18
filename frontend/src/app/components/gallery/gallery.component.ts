import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

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

  delete_Canva(_id: String) {
    this.productService.delete_Product(_id).subscribe(
      res => {
        console.log("deleted!")
      },
      err => console.error(err)
    )
  }

}
