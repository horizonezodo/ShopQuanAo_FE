import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product/product.model';

const baseUrl = 'http://localhost:8081/service/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(`${baseUrl}/get-all`);
  }

  get(id: any): Observable<Product>{
    return this.http.get<Product>(`${baseUrl}/get/${id}`);
  }

  addProduct(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/add-product`, data);
  }

  updateProduct(data: any, id: any): Observable<any>{
    return this.http.post(`${baseUrl}/update-product/${id}`,data);
  }

  activateProduct(id:any):Observable<any>{
    return this.http.post(`${baseUrl}/activate/${id}`,{});
  }

  deActivateProduct(id:any):Observable<any>{
    return this.http.post(`${baseUrl}/deactivate/${id}`,{});
  }

  addTop(id: any):Observable<any>{
    return this.http.post(`${baseUrl}/add-top/${id}`,{});
  }

  updateVariant(id: any, data:any): Observable<any>{
    return this.http.post(`${baseUrl}/update-variant/${id}`, data);
  }

  deleteVariant(id: any): Observable<any>{
    return this.http.post(`${baseUrl}/delete-variant/${id}`,{});
  }

  addListVariant(id: any,data: any[]): Observable<any>{
    return this.http.post(`${baseUrl}/add-list-variant/${id}`, data);
  }

}
