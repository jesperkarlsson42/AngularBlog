import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comments } from 'src/models/Comments';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.scss'],
})
export class CreateCommentsComponent implements OnInit {
  comment: string = '';
  comments: Comments[] = [];
  id: number = 0;
  content: string = '';
  postId: number = 0;

  constructor(private service: CommentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParams();
  }

  onSubmit(comment): void {
    this.comment = comment.value.comment;

    let newComment: Comments = {
      id: 0,
      content: this.comment,
      postId: this.postId,
    };

    console.log(newComment);

    this.service.createComment(newComment);
  }
  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }
}
