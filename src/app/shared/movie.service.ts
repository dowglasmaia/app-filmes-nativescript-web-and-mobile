import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Movie } from './movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  private basePath = 'api/movies';

  getAll(urlParams = ''): Observable<Movie[]> {
    const utl = this.basePath + '?' + urlParams;

    return this.http.get(utl).pipe(
      map(this.jsonDataToMoveis),
      map(movies => movies.sort((a, b) => b.id - a.id)),
      catchError(this.handleErrror)
    );
  }

  getById(id: number): Observable<Movie> {
    const url = `${this.basePath}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToMovie),
      catchError(this.handleErrror)
    );
  }

  getMoviesToWatchNext(): Observable<Movie[]> {
    return this.getAll('toWatchNext=true');
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post(this.basePath, movie).pipe(
      map(this.jsonDataToMovie),
      catchError(this.handleErrror)
    );
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${this.basePath}/${movie.id}`;

    return this.http.put(url, movie).pipe(
      map(this.jsonDataToMovie),
      catchError(this.handleErrror)
    );
  }

  delete(movie: Movie): Observable<any> {
    const url = `${this.basePath}/${movie.id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleErrror)
    );
  }

  //atualiza a flag do filme.
  updateToggleMovieWatchNext(movie: Movie): Observable<Movie> {
    movie.toggleMovieWatchNext();

    return this.update(movie);
  }


  //-------------------------------
  //      PRIVATE METHODS        //
  //-------------------------------
  jsonDataToMoveis(jsonDataToMoveis: any[]): Movie[] {
    const movies: Movie[] = [];

    jsonDataToMoveis.forEach(
      element => movies.push(Movie.fromJson(element))
    )
    return movies;
  }

  private jsonDataToMovie(jsonData: any): Movie {
    return Movie.fromJson(jsonData);
  }


  private handleErrror(error: any): Observable<any> {
    console.log("ERROR NA REQUISIÇÃO", error);
    return throwError(error);
  }

}