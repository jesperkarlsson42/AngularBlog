import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/models/Posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss']
})
export class GetPostsComponent implements OnInit {
  posts: Post[] = [];
  postId: number = 0;
 
  

  constructor(private service: PostService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.getParams();
    this.service.getPosts().subscribe(data => {
     
     for(let i = 0; i < data.length; i++) {
       if(data[i].blogId === this.postId) {
          let p = data[i];
          this.posts.push(p);
          
       }
     }
     
    })
  }


  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }
}
