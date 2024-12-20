import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category/category.model';

const baseUrl = 'http://localhost:8081/service/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  createParentCate(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/create-parent-cate`, data);
  }

  addChildCate(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/add-child-cate`, data);
  }

  updateCate(data: any, id:any): Observable<any>{
    return this.http.post(`${baseUrl}/update-cate/${id}`, data);
  }  

  deleteParent(id: any): Observable<any>{
    return this.http.post(`${baseUrl}/delete-parent/${id}`, {});
  }

  deleteChild(id: any): Observable<any>{
    return this.http.post(`${baseUrl}/delete-child/${id}`, {})
  }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${baseUrl}/get-all`);
  }

  get(id: any): Observable<Category>{
    return this.http.get<Category>(`${baseUrl}/get-cate/${id}`);
  }

  activateCate(id:any): Observable<any>{
    return this.http.post(`${baseUrl}/activate-cate/${id}`,{});
  }

  findAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${baseUrl}/find-all`);
  }

}
