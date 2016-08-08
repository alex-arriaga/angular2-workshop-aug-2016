import { Component, EventEmitter } from '@angular/core';
import { PokeCatalogComponent } from "./poke-catalog/poke-catalog.component";
import { PokeNavigationComponent } from "./poke-navigation/poke-navigation.component";

@Component({
  selector: 'my-app',
  template: `
    <poke-navigation (searchValueUpdated)="searchValueUpdated($event)"></poke-navigation>
    <poke-catalog [searchValueInput]="parentSearchValue"></poke-catalog>`,
  directives: [PokeCatalogComponent, PokeNavigationComponent]
})
export class AppComponent {
  parentSearchValue: string = "";

  searchValueUpdated(event: EventEmitter<any>) {
    console.log("Value received in parent component:", event.valueFromSearchComponent);
    this.parentSearchValue = event.valueFromSearchComponent;
  }

}
