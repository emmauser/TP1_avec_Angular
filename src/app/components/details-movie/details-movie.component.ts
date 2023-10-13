import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {SimpleComic,Comic} from '../../../Ressource/model';
import {COMICS,COMIC} from '../../../Ressource/data';
import { ActivatedRoute } from '@angular/router';
export const movie:Comic[]=[];
@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent {
  id:string|null='';
@Input() comic:SimpleComic=COMIC;
@Input() comics:Comic[]=COMICS;
 inter:Comic|any;

constructor(private router:ActivatedRoute){
    // console.log(this.comic);
    // console.log(this.comics);
    
    
}

ngOnInit(){
  this.id=this.router.snapshot.paramMap.get("id");
  for (let index = 0; index < this.comics.length; index++) {
    if (this.comics[index].description==null) {
            this.comics[index].description=this.comic.description;
    }
    if (this.comics[index].id.toString()===this.id) {
       this.inter=this.comics[index];
        movie[0]=this.comics[index];
    }      
}
}
}
