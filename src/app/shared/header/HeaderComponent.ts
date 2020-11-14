import { Component, OnInit } from '@angular/core';
import { ListasuperheroesService } from '../../services/listasuperheroes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public listasuperheroesService: ListasuperheroesService) {}
  ngOnInit(): void {}
}
