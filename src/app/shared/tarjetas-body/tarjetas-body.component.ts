import { Component, OnInit } from '@angular/core';
import { ListasuperheroesService } from '../../services/listasuperheroes.service';
@Component({
  selector: 'app-tarjetas-body',
  templateUrl: './tarjetas-body.component.html',
  styleUrls: ['./tarjetas-body.component.css'],
})
export class TarjetasBodyComponent implements OnInit {
  constructor(public listasuperheroesService: ListasuperheroesService) {}

  ngOnInit(): void {}
}
