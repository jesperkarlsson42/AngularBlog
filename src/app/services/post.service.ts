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
      this.posts = [...this.posts, post];
      this.postSubject.next(this.posts);
      
    })
  }

  getPosts(): void{
    this.http.get<Post[]>(this.blogUrl).subscribe(post => {
      this.posts = post;
      this.postSubject.next(this.posts);
    });
  }

  getPost(idPost): Observable<Post> {
    return this.http.get<Post>(`${this.blogUrl}/${idPost}`);
  }

  deletePost(postId: number) {
    return this.http.delete('https://mi-blogs.azurewebsites.net/api/Posts/' + postId)
  }

  editPost(post : Post): Observable<Post> {
    return this.http.put<Post>('https://mi-blogs.azurewebsites.net/api/Posts/' + post.id, post)

  }
}
