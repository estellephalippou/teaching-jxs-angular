import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './my-component/my-component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { PokeApiService } from './poke-api-service';
import { Pokedetail } from './pokedetail/pokedetail';

import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    MyComponent,
    FilterPokemonPipePipe,
    Pokedetail
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    PokeApiService
  ],
  bootstrap: [App],
})
export class AppModule { }
