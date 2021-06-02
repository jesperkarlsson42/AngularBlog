import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Post } from 'src/models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postSubject = new Subject<Post[]>();
  posts$ = this.postSubject.asObservable();

  blogUrl: string = 'https://mi-blogs.azurewebsites.net/api/Posts';

  constructor(private http: HttpClient) { }

  createPost(post: Post): void {
    this.http.post<Post>(this.blogUrl, post).subscribe(post => {
      this.posts.push(post);
      this.postSubject.next(this.posts);
    })
  }

  getPosts(): void {
    this.http.get<Post[]>(this.blogUrl).subscribe(post => {
      this.posts = post;
      this.postSubject.next(this.posts);
    });
  }
}
