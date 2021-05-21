import { Comment } from '@angular/compiler';
import { Blog } from './Blog';


export class Post {
  id: number;
  title: {
    type: string;
    required: true;
  };
  content: {
    type: string;
    maxLength: 250;
    minLength: 1;
  };
  created: Date;
  modified: Date;
  blogId: number;
  blog: Blog;
  comments: Comment[];
}
