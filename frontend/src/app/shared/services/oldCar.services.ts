import { OldCar } from '../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseUrl = 'http://127.0.0.1:8000/oldCars/auto';

@Injectable({
  providedIn: 'root'
})
export class OldCarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<OldCar[]> {
    return this.http.get<OldCar[]>(`${baseUrl}/`);
  }

  getById(id): Observable<OldCar>{
    return this.http.get<OldCar>(`${baseUrl}/${id}/`);
  }

  create(data: OldCar): Observable<OldCar> {
    return this.http.post<OldCar>(`${baseUrl}/`, data);
  }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }
}