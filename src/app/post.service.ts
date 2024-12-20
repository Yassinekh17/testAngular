import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts'; // JSON-server URL

  constructor(private http: HttpClient) {}

  postList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }
}
