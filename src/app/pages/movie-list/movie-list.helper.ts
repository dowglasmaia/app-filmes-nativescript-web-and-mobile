import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';


@Component({
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }
  `],
  providers: [MessageService]
})
export class MovieListHelper {

  position: string;
  msgs: Message[] = [];

  constructor(private messageService: MessageService) { }

  
    static showDeleteMovieConfirmation(message: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        resolve(
          confirm(message)
          
          )
      });
    }
  



}
