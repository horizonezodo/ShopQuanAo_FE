import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../../models/Order/order-history.model';

const baseUrl = 'http://localhost:8081/service/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryServiceService {

  constructor(private http: HttpClient) { }

  getAllOrder():Observable<OrderHistory[]>{
    return this.http.get<OrderHistory[]>(`${baseUrl}/get-all-order`);
  }

  get(id: any): Observable<OrderHistory>{
    return this.http.get<OrderHistory>(`${baseUrl}/get/${id}`);
  }  

}
