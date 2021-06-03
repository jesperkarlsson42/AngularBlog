import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CreateBlogComponent } from './components/Blogs/create-blog/create-blog.component';
import { GetBlogComponent } from './components/Blogs/get-blog/get-blog.component';
import { CreatePostsComponent } from './components/Post/create-posts/create-posts.component';
import { PostsComponent } from './components/Post/posts/posts.component';
import { GetPostsComponent } from './components/Post/get-posts/get-posts.component';
import { CreateCommentsComponent } from './components/Comments/create-comments/create-comments.component';
import { SinglePostComponent } from './components/Post/single-post/single-post.component';
import { GetCommentsComponent } from './components/Comments/get-comments/get-comments.component';
import { EditBlogComponent } from './components/Blogs/edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CreateBlogComponent,
    GetBlogComponent,
    CreatePostsComponent,
    PostsComponent,
    GetPostsComponent,
    CreateCommentsComponent,
    SinglePostComponent,
    GetCommentsComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
