import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comments } from 'src/models/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comments[] = [];
  private commentSubject = new Subject<Comments[]>();
  comments$ = this.commentSubject.asObservable();

  blogUrl: string = 'https://mi-blogs.azurewebsites.net/api/Comments';

  constructor(private http: HttpClient) { }

  createComment(comment: Comments) : void {
    this.http.post<Comments>(this.blogUrl, comment).subscribe(comment => {
      this.comments.push(comment);
      this.commentSubject.next(this.comments);
    })
  }

  getComments() : void {
    this.http.get<Comments[]>(this.blogUrl).subscribe(comment => {
      this.comments = comment;
      this.commentSubject.next(this.comments);
    })
  }
}
