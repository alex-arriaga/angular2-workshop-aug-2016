import { Component } from '@angular/core';
import { PokeCatalogComponent } from "./poke-catalog/poke-catalog.component";

@Component({
  selector: 'my-app',
  template: '<poke-catalog></poke-catalog>',
  directives: [PokeCatalogComponent]
})
export class AppComponent {

}
