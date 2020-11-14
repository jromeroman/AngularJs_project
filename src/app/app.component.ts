import { Component } from '@angular/core';
import { ListasuperheroesService } from './services/listasuperheroes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public apiHeroes: ListasuperheroesService) {}
}
