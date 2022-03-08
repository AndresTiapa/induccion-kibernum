import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ListOfHeroesComponent } from './list-of-heroes/list-of-heroes.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

const routes: Routes = [
  { path: 'heroes-list', component: ListOfHeroesComponent },
  { path: 'heroe/:id', component: HeroProfileComponent },
  { path: 'modal-poll', component: ModalPollComponent },
  { path: '**', redirectTo: '/listado-heroes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
