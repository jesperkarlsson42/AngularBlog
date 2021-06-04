import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/models/Posts';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  postId: number = 0;
  postTitle: string = '';
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private service: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getParams();
    let idPost = this.postId;

    this.service.getPost(idPost).subscribe((data) => {
      this.post = data;
    });

    this.service.posts$.subscribe((post) => {
      this.service.getPost(idPost).subscribe((data) => {
        this.post = data;
      });
    });
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }
  delete() {
    this.service.deletePost(this.postId).subscribe((data) => {
      this.location.back();
    });
  }

  edit(input, post: Post) {
    post.title = input.value;

    this.service.editPost(post).subscribe((data) => {
      this.service.getPosts();
    });
  }
}
