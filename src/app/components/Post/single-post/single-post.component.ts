import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
postId: number = 0;
postTitle: string = '';
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    this.getParams();
    let idPost = this.postId;

    this.service.getPosts().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == idPost) {
          this.postTitle = data[i].title;
        }
      }
      
    })
  }

  getParams() {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
      
    })
  }
}
