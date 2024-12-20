import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order/order.model';

const baseUrl = 'http://localhost:8081/service/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  addOrder(data: any):Observable<any>{
    return this.http.post(`${baseUrl}/add-order`, data);
  }

  cancelOrder(id: any):Observable<any>{
    return this.http.post(`${baseUrl}/cancel-order/${id}`,{});
  }

  deliveredOrder(id: any):Observable<any>{
    return this.http.post(`${baseUrl}/delivered-order/${id}`,{});
  }

  successOrder(id: any):Observable<any>{
    return this.http.post(`${baseUrl}/success-order/${id}`,{});
  }

  updateOrderStatus(data: any, id:any): Observable<any>{
    return this.http.post(`${baseUrl}/update-order-status/${id}`, data);
  }

  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>(`${baseUrl}/get-all`);
  }

  get(id:any): Observable<Order>{
    return this.http.get<Order>(`${baseUrl}/get/${id}`);
  }

  deleteOrderItem(orderId: any, orderItemId: any): Observable<any> {
    return this.http.post(`${baseUrl}/delete-order-item?orderId=${orderId}&orderItemId=${orderItemId}`, {});
  }

  updateOrderItemQuantity(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/update-order-item-quantity`, data);
  }
  
}
