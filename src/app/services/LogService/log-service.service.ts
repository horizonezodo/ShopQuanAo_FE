import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogApi } from '../../models/Log/log-api.model';

const baseUrl = 'http://localhost:8081/service';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor(private http: HttpClient) { }

  getALLLog(): Observable<LogApi[]>{
    return this.http.get<LogApi[]>(`${baseUrl}/getALLLog`);
  }

  get(id: any): Observable<LogApi>{
    return this.http.get<LogApi>(`${baseUrl}/get/${id}`);
  }
}
