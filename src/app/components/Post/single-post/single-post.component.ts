import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
postId: number = 0;
postTitle: string = '';
  constructor(private route: ActivatedRoute, private service: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getParams();
    let idPost = this.postId;

    this.service.posts$.subscribe(data => {
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
  delete() {
    this.service.deletePost(this.postId).subscribe(data => {
      console.log('post raderad' + data);
      // this.router.navigate(['/blogs/']);
      
    })
  }
}
