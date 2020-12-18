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

  constructor(private http: HttpClient) { this.selectedProduct = new Product()}

  get_Products(){
    return this.http.get<Product[]>(this.URL_API)
  }

  create_Product(product: Product){
    return this.http.post<any>(this.URL_API, product)
  }

  delete_Product(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }

  update_Product(_id: String, updateCanva: Product) {
    return this.http.put(this.URL_API + `/${_id}`, updateCanva)
  }

  get_ProductById(_id: String) {
    return this.http.get<Product>(this.URL_API + `/${_id}`)
  }

}
