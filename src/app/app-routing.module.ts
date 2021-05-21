import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
  {path: 'new-blog', component: CreateBlogComponent},
  {path: '', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
