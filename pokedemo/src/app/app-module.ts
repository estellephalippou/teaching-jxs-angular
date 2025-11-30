import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './features/components/my-component/my-component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './shared/pipes/filter-pokemon--pipe-pipe';


import { PokeApiService } from './services/poke-api-service';
import { Pokedetail } from './features/components/pokedetail/pokedetail';

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
