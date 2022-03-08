import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// modulos importados
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Locale
import { ListOfHeroesComponent } from './list-of-heroes/list-of-heroes.component';
import { HeroesService } from './services/heroes.service';
import { FormsModule } from '@angular/forms';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

@NgModule({
  declarations: [AppComponent, ListOfHeroesComponent, HeroProfileComponent, ModalPollComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
