import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  movies = [
    {
      id: 1,
      title: "Game of Thrones",
      obs: "Etiam auctor dictum mauris, ac euismod libero molestie et. Fusce at tellus vulputate, vulputate elit vel, porta magna. Nunc sit amet consequat diam. Praesent gravida nunc vel tempor malesuada.",
      rating: 5,
      toWatchNext: true
    },
    {
      id: 2,
      title: "Vingadores",
      obs: "Fusce at tellus vulputate, vulputate elit vel, porta magna. Nunc sit amet consequat diam. Praesent gravida nunc vel tempor malesuada.",
      rating: 5,
      toWatchNext: false
    },
    {
      id: 3,
      title: "Pirates of the Caribbean",
      obs: "Etiam auctor dictum mauris, ac euismod libero molestie et. Fusce at tellus vulputate, vulputate elit vel, porta magna. Nunc sit amet consequat diam. Praesent gravida nunc vel tempor malesuada.",
      rating: 4.5,
      toWatchNext: false
    },
    {
      id: 4,
      title: "Vikings",
      obs: "Etiam auctor dictum mauris, ac euismod libero molestie et. Fusce at tellus vulputate, vulputate elit vel, porta magna. Nunc sit amet consequat diam. Praesent gravida nunc vel tempor malesuada.",
      rating: 5,
      toWatchNext: true
    }
  ]

  ngOnInit() {
    console.log(this.movies)
  }

}
