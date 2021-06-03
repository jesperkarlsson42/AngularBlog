import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './components/Blogs/create-blog/create-blog.component';
import { EditBlogComponent } from './components/Blogs/edit-blog/edit-blog.component';
import { GetBlogComponent } from './components/Blogs/get-blog/get-blog.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { PostsComponent } from './components/Post/posts/posts.component';
import { SinglePostComponent } from './components/Post/single-post/single-post.component';

const routes: Routes = [
  {path: 'edit-blog', component: EditBlogComponent},
  {path: 'new-blog', component: CreateBlogComponent},
  {path: 'get-blogs', component: GetBlogComponent},
  {path: 'blogs/:id', component: PostsComponent},
  {path: 'post/:id', component: SinglePostComponent},
  {path: '', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
