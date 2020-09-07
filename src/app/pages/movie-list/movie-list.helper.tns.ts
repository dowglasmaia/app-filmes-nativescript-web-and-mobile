/** para a versão mobile */

// /https://docs.nativescript.org/angular/ui/dialogs

import * as dialogs from "@nativescript/core/ui/dialogs";

export class MovieListHelper {

  static showDeleteMovieConfirmation(message: string): Promise<boolean> {
    return dialogs.confirm({
      title: "Excluir filme",
      message: message,
      okButtonText: "Excluir",
      cancelButtonText: "Manter filme",
    });
  }

}