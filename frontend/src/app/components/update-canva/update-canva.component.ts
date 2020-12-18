import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Router} from '@angular/router'

@Component({
  selector: 'app-update-canva',
  templateUrl: './update-canva.component.html',
  styleUrls: ['./update-canva.component.css']
})
export class UpdateCanvaComponent implements OnInit {

  @HostBinding('class') class = 'row'

  p: number = 1

  constructor(public productService: ProductsService,
              private router: Router
              ) { }

  ngOnInit(): void {
    
    this.show_products()
  }

  show_products() {
    this.productService.get_Products().subscribe(
    res => {this.productService.products = res},
    err => console.error(err)
    )
  }

  delete_Canva(_id: String) {
    this.productService.delete_Product(_id).subscribe(
    res => {
      console.log("deleted!")
      this.show_products()
      }
    )
  }
}
