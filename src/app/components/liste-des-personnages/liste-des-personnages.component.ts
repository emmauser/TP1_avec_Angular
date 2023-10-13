import { Component } from '@angular/core';
import {movie} from '../details-movie/details-movie.component';
import { Input } from "@angular/core";
import {SimpleComic,Comic} from '../../../Ressource/model';
@Component({
  selector: 'app-liste-des-personnages',
  templateUrl: './liste-des-personnages.component.html',
  styleUrls: ['./liste-des-personnages.component.css']
})
export class ListeDesPersonnagesComponent {
  @Input() inter:Comic[]=movie;

}
