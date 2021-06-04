import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models/Posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss'],
})
export class GetPostsComponent implements OnInit {
  postId: number = 0;

  constructor(private route: ActivatedRoute) {}
  @Input() posts: Post[];

  ngOnInit() {}

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }
}
