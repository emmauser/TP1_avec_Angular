import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';

const routes: Routes = [
 {path :'',component: AcceuilComponent
},
{path :'acceuil',component: AcceuilComponent
},
{path :'acceuil',component: AcceuilComponent
} ,
{path :'cinema',component: CinemaComponent
},
{path :'Apropos',component: AproposComponent},
{path :'details-movies/:id',component: DetailsMovieComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
