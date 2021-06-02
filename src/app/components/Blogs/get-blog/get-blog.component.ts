import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Blog } from 'src/models/Blog';

@Component({
  selector: 'app-get-blog',
  templateUrl: './get-blog.component.html',
  styleUrls: ['./get-blog.component.scss']
})
export class GetBlogComponent implements OnInit {
  blogs: Blog[] = [];
  

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.getBlogs().subscribe(data => {
      console.log(data);
      this.blogs= data
      
    })
  }


}
