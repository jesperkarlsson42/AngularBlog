import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  blogId: number = 0;
  blogTitle: string = "";

  constructor(private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit() {
    this.getParams();
    let idBlog = this.blogId;

    this.service.getBlogs().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == idBlog) {
          this.blogTitle = data[i].title;
        }
      }
      
    })
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
      
    })
  }

}
