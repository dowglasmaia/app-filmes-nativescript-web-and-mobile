import { Component, OnInit } from '@angular/core';
import { Movie } from '@src/app/shared/movie.model';
import { MovieService } from '@src/app/shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[] = [];

  ngOnInit() {
    this.getMovies();
  }

  public getMovies() {
    this.movieService.getAll().subscribe(result => {
      this.movies = result
    })
  }

  test() {
    alert(`Teste BTN - Label`)
  }

}
