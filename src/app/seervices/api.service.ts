import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/models/Blog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private 

  constructor(private http: HttpClient) { 

  }

  postBlog(blog: Blog): Observable<Blog> {
   return this.http.post('https://mi-blogs.azurewebsites.net/api/Blogs/', blog);
  }
}
