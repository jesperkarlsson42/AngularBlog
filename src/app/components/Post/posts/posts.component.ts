import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';
import { Blog } from 'src/models/Blog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  blogId: number = 0;
  blogTitle: string = '';
  blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getParams();
    let idBlog = this.blogId;

    this.service.getBlog(idBlog).subscribe((data) => {
      console.log(data);
      this.blog = data;
      
    });

    this.postService.posts$.subscribe(data => {
      this.service.getBlog(idBlog).subscribe((data) => {
        console.log(data);
        this.blog = data;
        
      });
      
    })
    
    
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });
  }

  delete() {
    this.service.deleteBlog(this.blogId).subscribe((data) => {
      console.log('deleted');
    });
  }

  edit(input, blog: Blog) {
    blog.title = input.value;
    this.service.editBlog(blog).subscribe(data => {
      console.log(data);
      this.service.getBlogs();
      
    })
  }
}
