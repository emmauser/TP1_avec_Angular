import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { MovieComponent } from './components/movie/movie.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';
import { ImagesDuFilmComponent } from './components/images-du-film/images-du-film.component';
import { ListeDesCollectionsComponent } from './components/liste-des-collections/liste-des-collections.component';
import { ListeDesAuteursComponent } from './components/liste-des-auteurs/liste-des-auteurs.component';
import { ListeDesPersonnagesComponent } from './components/liste-des-personnages/liste-des-personnages.component';
import { ListeDesStoriesComponent } from './components/liste-des-stories/liste-des-stories.component';
import { ListeDesEvenementsComponent } from './components/liste-des-evenements/liste-des-evenements.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    MovieComponent,
    CinemaComponent,
    AcceuilComponent,
    AproposComponent,
    DetailsMovieComponent,
    ImagesDuFilmComponent,
    ListeDesCollectionsComponent,
    ListeDesAuteursComponent,
    ListeDesPersonnagesComponent,
    ListeDesStoriesComponent,
    ListeDesEvenementsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
