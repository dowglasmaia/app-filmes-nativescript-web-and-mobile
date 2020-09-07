/** para a versão web */
export class MovieListHelper {

  static showDeleteMovieConfirmation(message: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(confirm(message))
    });
  }
}