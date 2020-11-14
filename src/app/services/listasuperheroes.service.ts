import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listaSuperheroes } from '../interfaces/listasuperheroes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ListasuperheroesService {
  info: listaSuperheroes = {};
  cargada = false;
  constructor(private http: HttpClient) {
    // console.log('pagina Recargada para api superheroes');

    // leer archivo JSON
    this.http
      .get(
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
      )
      .subscribe((resp: listaSuperheroes) => {
        // console.log(resp);
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
