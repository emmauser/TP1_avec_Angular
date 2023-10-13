import { Component } from '@angular/core';
import {movie} from '../details-movie/details-movie.component';
import {Comic} from '../../../Ressource/model';
import {Input } from '@angular/core';

@Component({
  selector: 'app-liste-des-evenements',
  templateUrl: './liste-des-evenements.component.html',
  styleUrls: ['./liste-des-evenements.component.css']
})
export class ListeDesEvenementsComponent {
  @Input() inter:Comic[]=movie;

}
