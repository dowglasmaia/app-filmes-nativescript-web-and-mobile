import { InMemoryDbService } from 'angular-in-memory-web-api';

/**API Back-End em Memoria */

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
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
      }];
    return { movies }; // => api/movies
  }
}