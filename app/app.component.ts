import { Component } from '@angular/core';
import { PokeCatalogComponent } from "./poke-catalog/poke-catalog.component";

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1><poke-catalog></poke-catalog>',
  directives: [PokeCatalogComponent]
})
export class AppComponent {

}
