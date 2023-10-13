import { Component } from '@angular/core';
import { Input } from "@angular/core";
import {Comic} from '../../../Ressource/model';
import {movie} from '../details-movie/details-movie.component';

@Component({
  selector: 'app-liste-des-stories',
  templateUrl: './liste-des-stories.component.html',
  styleUrls: ['./liste-des-stories.component.css']
})
export class ListeDesStoriesComponent {
  @Input() inter:Comic[]=movie;

}
