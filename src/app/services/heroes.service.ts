import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../classes/heroe';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private protocol = 'https:';
  private ApiUrl = '//gateway.marvel.com:443/v1/public/';
  public heroes: Heroe[] = [];

  public page = 0;
  public step = 4;
  public total = 0;

  public teams = new Map();

  public group_colors = {
    azul: '#1f8ff7',
    violeta: '#a43de3',
    naranjo: '#df5c0f',
    verde: '#0ea521',
  };

  constructor(private http: HttpClient) {}

  resetPager() {
    this.page = 0;
  }
  getHeroes(nameStartsWith?: string, page?: number) {
    if (page || page === 0) {
      this.page = page;
    }
    const url =
      this.protocol +
      this.ApiUrl +
      'characters?apikey=56d2cc44b1c84eb7c6c9673565a9eb4b' +
      '&offset=' +
      this.page * this.step +
      (nameStartsWith ? '&nameStartsWith=' + nameStartsWith : '');
    this.http.get<any>(url).subscribe((data) => {
      this.heroes = [];
      this.total = Math.ceil(data.data.total / this.step);
      data.data.results.forEach((result) => {
        this.heroes.push(
          new Heroe(
            result.id,
            result.name,
            result.description,
            result.modified,
            result.thumbnail,
            result.resourceURI,
            this.getTeamColor(result.id)
          )
        );
      });
    });
  }

  getHeroe(id) {
    const url =
      this.protocol +
      this.ApiUrl +
      'characters/' +
      id +
      '?apikey=56d2cc44b1c84eb7c6c9673565a9eb4b';
    return this.http.get<any>(url);
  }

  getTeamColor(id): string {
    if (this.teams.get(id) != undefined) {
      return this.teams.get(id);
    } else {
      return '';
    }
  }
}
