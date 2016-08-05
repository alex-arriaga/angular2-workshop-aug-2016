import { OnInit, Component } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { ExternalImageURLPipe } from "./../pipes/external-image-url.pipe";

@Component({
  selector: "poke-catalog",
  pipes: [ExternalImageURLPipe],
  template: `
    <h2>Catalog</h2>
    <div *ngFor="let pokemon of pokemonList">
      {{ pokemon.name }}
      <img src="{{ pokemon.url | externalImageURL }}" alt="{{ pokemon.name }}">
    </div>
`
})
export class PokeCatalogComponent implements OnInit {

  pokemonList: Array<Pokemon> = [
    {"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/", "name": "bulbasaur"},
    {"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/", "name": "ivysaur"},
    {"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/3\/", "name": "venusaur"},
    {"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/4\/", "name": "charmander"},
    {"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/5\/", "name": "charmeleon"},
  ];

  public constructor() {
    console.log(">> PokeCatalogComponent()");
  }

  public ngOnInit() {

  }
}
