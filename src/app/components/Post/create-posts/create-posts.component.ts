import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/models/Comments';
import { Post } from 'src/models/Posts';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss'],
})
export class CreatePostsComponent implements OnInit {
  blogId: number = 0;
  postTitle: string = '';
  content: string = '';
  posts: Post[] = [];
  comments: Comments[] = [];

  constructor(private route: ActivatedRoute, private service: PostService) {}

  ngOnInit(): void {
  this.getParams();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });
  }

  onSubmit(data: NgForm): void {
    this.postTitle = data.value.postTitle;
    this.content = data.value.content;

    let newPost: Post = {
      id: 0,
      title: this.postTitle,
      content: this.content,
      created: new Date(),
      modified: new Date(),
      blogId: this.blogId,
      comments: [],
    };


    this.service.createPost(newPost);
  }
}
