import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router} from '@angular/router'
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-add-canva',
  templateUrl: './add-canva.component.html',
  styleUrls: ['./add-canva.component.css']
})
export class AddCanvaComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  canva: Product = this.productService.selectedProduct
  edit: boolean = false

  constructor(public productService: ProductsService,
              private router: Router,
              private ativatedRoute: ActivatedRoute) {}

  

  ngOnInit(): void {
    console.log(this.edit)
    this.routing_canvas()
    this.show_products()
  }

  show_products() {
    this.productService.get_Products().subscribe(
    res => {this.productService.products = res},
    err => console.error(err)
    )
  }

  addCanva(form: NgForm) {
    this.productService.create_Product(form.value).subscribe(
      res => {
          console.log(res)
          //localStorage.setItem('token', res.token)
          //form.reset()
          this.router.navigate(['/update-canva'])
        },
      err => console.error(err)
    )
  }

  update_Canva() {
    this.productService.update_Product(this.productService.selectedProduct._id, this.productService.selectedProduct).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/update-canva'])
      }
    )
  }

  get_Canva(_id: String) {
    this.productService.get_ProductById(_id).subscribe(
    res => {this.productService.selectedProduct = res}
    )

  }

  routing_canvas() {
    const params = this.ativatedRoute.snapshot.params
    console.log(params)
    if(params._id){
      this.productService.get_ProductById(params._id).subscribe(
        res => {
          console.log(res)
          this.productService.selectedProduct = res
          this.edit = true
        }
      )
    }
  }

}
