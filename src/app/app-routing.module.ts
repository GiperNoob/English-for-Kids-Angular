import { ContentPageComponent } from './content-page/content-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'content', component: ContentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
