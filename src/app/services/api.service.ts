import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Blog } from 'src/models/Blog';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userId: number = 1337;
  blogUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/user/'+ this.userId;
  private blogs: Blog[] = [];
  private blogSubject = new Subject<Blog[]>();
  blogs$ = this.blogSubject.asObservable();

  private isCreatedSubject = new Subject<boolean>();
  isCreated$ = this.isCreatedSubject.asObservable();

  constructor(private http: HttpClient) { 

  }

  getBlogs(): void  {
    this.http.get<Blog[]>(`${this.blogUrl}`).subscribe(blog => {
      this.blogs = blog;
      this.blogSubject.next(this.blogs);
    })
  }
  getBlog(blogId : number): Observable<Blog> {
   return this.http.get<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/'+ blogId);
  }

  postBlog(blog: Blog): void {
    this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/', blog).subscribe(blog => {
      this.blogs.push(blog);
      this.blogSubject.next(this.blogs);

      this.isCreatedSubject.next(true);
    })
  }

  deleteBlog(blogId : number) {
    return this.http.delete('https://mi-blogs.azurewebsites.net/api/Blogs/'+ blogId)
  }

  editBlog(blog : Blog) : Observable<Blog> {
    return this.http.put<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/' + blog.id, blog);
  }

}
