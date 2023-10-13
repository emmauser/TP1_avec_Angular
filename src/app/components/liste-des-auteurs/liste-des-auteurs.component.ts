import { Component } from '@angular/core';
import {Comic} from '../../../Ressource/model';
import {Input } from '@angular/core';
import {movie} from '../details-movie/details-movie.component';
@Component({
  selector: 'app-liste-des-auteurs',
  templateUrl: './liste-des-auteurs.component.html',
  styleUrls: ['./liste-des-auteurs.component.css']
})
export class ListeDesAuteursComponent {
  @Input() inter:Comic[]=movie;

}
