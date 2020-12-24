import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router} from '@angular/router'
import { Product } from 'src/app/models/products';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-canva',
  templateUrl: './add-canva.component.html',
  styleUrls: ['./add-canva.component.css']
})
export class AddCanvaComponent implements OnInit {

  //@HostBinding('class') classes = 'row'
  canva: Product = this.productService.selectedProduct
  edit: boolean = false

  constructor(public productService: ProductsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  

  ngOnInit(): void {
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
      confirmButtonText: 'Yes, Add it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'ADD!',
          'Your file has been ADD.',
          'success'
        )
        this.productService.create_Product(form.value).subscribe(
          res => {
              console.log(res) 
            },
          err => console.error(err)
        )
        form.reset()
        this.router.navigate(['/update-canva'])
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

  update_Canva(form: NgForm) {
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
        this.productService.update_Product(this.productService.selectedProduct._id, this.productService.selectedProduct).subscribe(
          res => {
            //console.log(res) 
          }
        )
        form.reset()
        this.router.navigate(['/update-canva'])
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

  get_Canva(_id: String) {
    this.productService.get_ProductById(_id).subscribe(
    res => {this.productService.selectedProduct = res}
    )

  }

  routing_canvas() {
    const params = this.activatedRoute.snapshot.params
    console.log(params)
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
