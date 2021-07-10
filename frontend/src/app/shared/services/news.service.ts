import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interfaces';


const baseUrl = 'http://127.0.0.1:8000/news';



@Injectable({
  providedIn: 'root'
})
export class NewsService {


  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(`${baseUrl}/`);
  }

  getById(id): Observable<News> {
    return this.http.get<News>(`${baseUrl}/${id}/`);
  }

  create(data: News): Observable<News> {
    return this.http.post<News>(`${baseUrl}/`, data, { headers: this.httpHeaders });
  }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }
}