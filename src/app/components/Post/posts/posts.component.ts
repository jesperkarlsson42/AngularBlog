import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  blogId: number = 0;
  blogTitle: string = "";

  constructor(private route: ActivatedRoute, private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.getParams();
    let idBlog = this.blogId;

    this.service.blogs$.subscribe(data => {
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

  delete() {
    this.service.deleteBlog(this.blogId).subscribe(data => {
        console.log('deleted');
        this.router.navigate(['/'])
    })
  }

}
