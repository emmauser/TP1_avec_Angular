import { Component } from '@angular/core';
import {Input } from '@angular/core';
import {movie} from '../details-movie/details-movie.component';
import { ActivatedRoute } from '@angular/router';
import {SimpleComic,Comic} from '../../../Ressource/model';

@Component({
  selector: 'app-liste-des-collections',
  templateUrl: './liste-des-collections.component.html',
  styleUrls: ['./liste-des-collections.component.css']
})
export class ListeDesCollectionsComponent {
  @Input() inter:Comic[]=movie;
}
