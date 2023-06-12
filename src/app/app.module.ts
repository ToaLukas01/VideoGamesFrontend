import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VideoGameCardComponent } from './components/video-game-card/video-game-card.component';
import { VideoGameDetailComponent } from './components/video-game-detail/video-game-detail.component';
import { CreateEditVideogameComponent } from './components/create-edit-videogame/create-edit-videogame.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoGameCardComponent,
    VideoGameDetailComponent,
    CreateEditVideogameComponent,
    PaginationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
