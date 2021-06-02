import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from 'src/models/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  blogUrl: string = 'https://mi-blogs.azurewebsites.net/api/Comments';

  constructor(private http: HttpClient) { }

  createComment(comment: Comments) : Observable<Comments> {
    return this.http.post<Comments>(this.blogUrl, comment);
  }

  getComments() : Observable<Comments[]> {
    return this.http.get<Comments[]>(this.blogUrl);
  }
}
