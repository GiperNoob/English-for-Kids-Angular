import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { MainCardComponent } from './main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitlePageComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
