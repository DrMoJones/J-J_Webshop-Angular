import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  titleForm = new FormControl();

  ngOnInit(): void {
  }

  Search(title){
    //Should probably use Filter. With the current setup and timeconstraint i'm using find
    //let movie = this.OMDBArray.find(x => x.imdb.Title === title);
    //console.log(movie.imdb.imdbID);
    //this.router.navigateByUrl('/Movie/' + movie.imdb.imdbID);
  }

}
