import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API = 'http://localhost:4000/api/products'

  products: Product[];
  selectedProduct: Product

  constructor(private http: HttpClient) { }

  get_Products(){
    return this.http.get<Product[]>(this.URL_API)
  }

  create_Product(product: Product){
    this.http.post(this.URL_API, product)
  }

}
