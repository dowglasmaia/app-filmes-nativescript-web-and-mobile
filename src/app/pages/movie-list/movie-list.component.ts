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

  newMovieTitle: string = '';

  ngOnInit() {
    this.loadMovies();
  }

  public loadMovies() {
    this.movieService.getAll().subscribe(result => {
      this.movies = result
    })
  }

  createMovie() {
    if (!this.newMovieTitle) { return; }

    const movie = Movie.fromJson({ title: this.newMovieTitle });

    this.movieService.create(movie).subscribe(
      movie => {
        this.movies.unshift(movie);
        this.newMovieTitle ='';
      }
    )
  }

  test() {
    alert(`Teste BTN - Label`)
  }

}
