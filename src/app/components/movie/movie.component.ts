import { Component } from '@angular/core';
import { Comic } from 'src/Ressource/model';
import {COMICS} from 'src/Ressource/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  COMICSt: Comic[]|any=COMICS;
  
  COMICSAVECIMAGES:Comic[]=[];
  currentURL:string;
  img:string|any;
  newDescrition:string='';

  handleevnt(film:any){
    this.router.navigate(['/details-movies',film.id]);

  }
  constructor(private router:Router){
   
    // console.log(this.COMICSt[5].description);
    this.currentURL=this.router.url;
    for (let index = 0; index < this.COMICSt.length; index++) {
      
      
        if (this.COMICSt[index].thumbnail.path!='image/image_not_available') {
          
       this.COMICSAVECIMAGES.push(this.COMICSt[index]);
        }
    }
   
  }

  }
  

