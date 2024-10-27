import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIControllerService {

  // URL base de la API
  apiURL = "http://localhost:3000";

  
  constructor(private http: HttpClient) { }


  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiURL}/adminuser`);
  }


  postUsuarios(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/adminuser`, data);
  }


  updateUsuarios(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiURL}/adminuser/${id}`, data);
  }


  deleteUsuarios(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/adminuser/${id}`);
  }
}


