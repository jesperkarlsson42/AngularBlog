import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Blog } from 'src/models/Blog';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent implements OnInit {
  blogTitle: string = '';
  blogs: Blog[] = [];
  blogId: number = 0;
  activeBlog : Blog;

  constructor(private route: ActivatedRoute, private service: ApiService) {}

  ngOnInit(): void {
    this.getParams();
    this.service.blogs$.subscribe((data : Blog[]) => {
    this.activeBlog = data.find(x => x.id === this.blogId);
    this.service.getBlogs();
  });
  }

  onSubmit(data: NgForm) {
    this.activeBlog.title = data.value;
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });
  }

  
  
}
