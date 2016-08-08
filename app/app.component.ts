import { Component } from '@angular/core';
import { PokeCatalogComponent } from "./poke-catalog/poke-catalog.component";
import { PokeNavigationComponent } from "./poke-navigation/poke-navigation.component";

@Component({
  selector: 'my-app',
  template: '<poke-navigation></poke-navigation><poke-catalog></poke-catalog>',
  directives: [PokeCatalogComponent, PokeNavigationComponent]
})
export class AppComponent {

}
