
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Blog } from 'src/models/Blog';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  blogTitle: string = "";
  blogs: Blog[] = [];
  
  constructor(private service: ApiService) {

   }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm){
   this.blogTitle = data.value.newBlog;

   let newBlog : Blog = {
    id: 0,
    title: this.blogTitle,
    created: new Date(),
    userId: 1337,
    posts: []

   }
   

   this.service.postBlog(newBlog);
   
  }

}
