import { Component, OnInit } from '@angular/core';
//import { MovieListHelper } from '@src/app/pages/movie-list/movie-list.helper.tns'; 
import { MovieListHelper } from '@src/app/pages/movie-list/movie-list.helper'; // remover o .tns ou .ts do inport
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
      result => {
        this.movies.unshift(result);
        this.newMovieTitle = '';
      }
    )
  }

  async deleteMovie(movie: Movie) {
    const message = `Deseja realmente excluir o filme ${movie.title}`;
    const mustDelete = await MovieListHelper.showDeleteMovieConfirmation(message);

    if(mustDelete){
      this.movieService.delete(movie).subscribe(
        () => this.movies = this.movies.filter(obj => obj != movie) // retorna uma lista sem o obj deletado.
      )
    }
  }

  test() {
    alert(`Teste BTN - Label`)
  }

}
