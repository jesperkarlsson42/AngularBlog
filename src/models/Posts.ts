import { Comment } from '@angular/compiler';


export class Post {
  id: number;
  title: string;
  content: string;
  created: Date;
  modified: Date;
  blogId: number;
  comments: Comment[];
}
