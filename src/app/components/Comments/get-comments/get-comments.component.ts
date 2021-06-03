import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comments } from 'src/models/Comments';

@Component({
  selector: 'app-get-comments',
  templateUrl: './get-comments.component.html',
  styleUrls: ['./get-comments.component.scss']
})
export class GetCommentsComponent implements OnInit {
  postId: number = 0;
  comments: Comments[] = [];
  constructor(private service: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    this.service.comments$.subscribe(data => {
     
      for(let i = 0; i < data.length; i++) {
        
        if(data[i].postId === this.postId) {
           let c = data[i];
           console.log(c);
           this.comments.push(c);
           
        }
      }
      
     });
     this.service.getComments();
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }

}
