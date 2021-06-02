import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/models/Blog';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userId: number = 1337;
  blogUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/user/'+ this.userId;

  constructor(private http: HttpClient) { 

  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.blogUrl}`);
  }

  postBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/', blog);
  }

}
