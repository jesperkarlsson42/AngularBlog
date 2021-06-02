import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/models/Blog';
import { Comments } from 'src/models/Comments';
import { Post } from 'src/models/Posts';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
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

  onSubmit(data): void {
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

    console.log(newPost);
    

    this.service.createPost(newPost).subscribe((data) => {
      this.posts.push(data);
      console.log(data);
      
    });
  }
}
