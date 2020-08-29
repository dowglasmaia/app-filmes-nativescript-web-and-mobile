import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  urlImg = 'assets/img/logo-my-movies.png'
  title = 'My Moveis | Gerenciador de Filmes';
  descripton = 'Sistema de Gerenciamento de Filmes  para assistir';
  buttonText = 'SAIBA MAIS';



  ngOnInit() {
  }

  public getTest() {
    alert('Teste Saiba Mais!')
  }

}
