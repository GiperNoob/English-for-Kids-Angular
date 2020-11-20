import { WinnerPageComponent } from './winner-page/winner-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LosingPageComponent } from './losing-page/losing-page.component';

const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'content/:id', component: ContentPageComponent },
  { path: 'game-page/:id', component: GamePageComponent },
  { path: 'winner', component: WinnerPageComponent },
  { path: 'losing', component: LosingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
