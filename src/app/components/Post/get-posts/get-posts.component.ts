import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/models/Posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss'],
})
export class GetPostsComponent implements OnInit {
  
  postId: number = 0;

  constructor(private service: PostService, private route: ActivatedRoute) {}
  @Input() posts: Post[]

  ngOnInit() {
    // this.getParams();
    // this.service.posts$.subscribe((data) => {

    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].blogId === this.postId) {
    //       let p = data[i];
    //       this.posts.push(p);
    //     }
    //   }
    // });
    // this.service.getPosts();
  }

  // loadPost() {
  //   this.service.posts$.subscribe((data) => {
  //     this.posts = data;

  //     for (let i = 0; i < data.length; i++) {
  //       if (data[i].blogId === this.postId) {
  //         let p = data[i];
  //         this.posts.push(p);
  //       }
  //     }
  //   });
  // }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }
}
