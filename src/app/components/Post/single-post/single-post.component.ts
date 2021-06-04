import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
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
    private router: Router,
    private blogService: ApiService
  ) {}

  ngOnInit(): void {
    this.getParams();
    let idPost = this.postId;

    this.service.getPost(idPost).subscribe((data) => {
      this.post = data;
      console.log(data);
    });

    this.service.posts$.subscribe((post) => {
      this.service.getPost(idPost).subscribe((data) => {
        this.post = data;
        console.log(data);
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
      console.log('post raderad' + data);
      // this.router.navigate(['/blogs/']);
    });
  }

  edit(input, post: Post) {
    post.title = input.value;

    this.service.editPost(post).subscribe((data) => {
      this.service.getPosts();
    })
  }
}
