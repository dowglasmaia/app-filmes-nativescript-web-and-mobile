import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  movies = [ ];

  ngOnInit() {
    console.log(this.movies)
  }

  test(){
    alert(`Teste BTN - Label`)
  }

}
