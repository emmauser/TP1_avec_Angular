import { Component } from '@angular/core';
import {Comic} from '../../../Ressource/model';
import {Input } from '@angular/core';
import {movie} from '../details-movie/details-movie.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-images-du-film',
  templateUrl: './images-du-film.component.html',
  styleUrls: ['./images-du-film.component.css']
})
export class ImagesDuFilmComponent {

@Input() inter:Comic[]=movie;
constructor(private router:ActivatedRoute){
  // console.log(this.comic);
  // console.log(this.comics);
  console.log(this.inter);
  
  
  
}
}
