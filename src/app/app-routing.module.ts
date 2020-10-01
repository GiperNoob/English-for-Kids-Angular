import { GamePageComponent } from './game-page/game-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'content/:id', component: ContentPageComponent },
  { path: 'game-page/:id', component: GamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
