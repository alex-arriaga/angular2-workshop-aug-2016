import { Component, EventEmitter } from '@angular/core';
import { PokeCatalogComponent } from "./poke-catalog/poke-catalog.component";
import { PokeNavigationComponent } from "./poke-navigation/poke-navigation.component";
import { SearchValue } from "./poke-navigation/search-value.model";

@Component({
  selector: 'my-app',
  template: `
    <poke-navigation (searchValueUpdated)="searchValueUpdated($event)"></poke-navigation>
    <poke-catalog [searchValueInput]="parentSearchValue"></poke-catalog>`,
  directives: [PokeCatalogComponent, PokeNavigationComponent]
})
export class AppComponent {
  parentSearchValue: string = "";

  searchValueUpdated(event: SearchValue) {
    console.log("Value received in parent component:", event.value);
    this.parentSearchValue = event.value;
  }

}
