import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductsService) { }

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
