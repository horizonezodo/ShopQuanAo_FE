import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product/product.model';
import { Category } from '../../models/Category/category.model';

const baseUrl = 'http://localhost:8081/public'

@Injectable({
  providedIn: 'root'
})
export class PublicServiceService {

  constructor(private http:HttpClient) { }

  getTopProductByCate(id: any): Observable<Product[]>{
    return this.http.get<Product[]>(`${baseUrl}/get-top-product-by-cate/${id}`);
  }

  getAllCate(): Observable<Category[]>{
    return this.http.get<Category[]>(`${baseUrl}/get-all-cate`);
  }

  searchProduct(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/search-product`, data);
  }  

}
