import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Product } from "../../models/products";
import { Router} from '@angular/router'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-canva',
  templateUrl: './update-canva.component.html',
  styleUrls: ['./update-canva.component.css']
})
export class UpdateCanvaComponent implements OnInit {

  p: number = 1
  list: Product[] = []

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
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.productService.delete_Product(_id).subscribe(
          res => {
            console.log("deleted!")
            this.show_products()
            }
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
}
