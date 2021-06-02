import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  blogUrl: string = 'https://mi-blogs.azurewebsites.net/api/Posts';

  constructor(private http: HttpClient) { }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.blogUrl, post);
  }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.blogUrl);
  }

  
}
