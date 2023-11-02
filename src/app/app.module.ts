import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { CircularCardComponent } from './components/circular-card/circular-card.component';
import { SquareCardComponent } from './components/square-card/square-card.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { SideLibraryComponent } from './components/side-library/side-library.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalCardComponent,
    CircularCardComponent,
    SquareCardComponent,
    MusicPlayerComponent,
    SideLibraryComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
