import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-list-of-heroes',
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.css'],
})
export class ListOfHeroesComponent implements OnInit {
  public heroes: Heroe[] = [];
  title: string = 'Heroes';
  public searchString: string;

  constructor(public heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes();
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(
      this.searchString,
      this.heroesService.page - 1
    );
  }

  nextPage() {
    this.heroesService.getHeroes(
      this.searchString,
      this.heroesService.page + 1
    );
  }
}
