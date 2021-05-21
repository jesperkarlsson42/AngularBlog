import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CreateBlogComponent
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
