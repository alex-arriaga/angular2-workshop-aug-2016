import { OnInit, Component, Input, EventEmitter } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { ExternalImageURLPipe } from "./../pipes/external-image-url.pipe";
import { PokeCatalogService } from "./poke-catalog.service";

@Component({
  selector: "poke-catalog",
  pipes: [ExternalImageURLPipe],
  providers: [PokeCatalogService],
  templateUrl: "app/poke-catalog/poke-catalog.component.html",
  styleUrls: ["app/poke-catalog/poke-catalog.component.css"]
})
export class PokeCatalogComponent implements OnInit {
  originalPokemonList: Array<Pokemon> = [];
  pokemonList: Array<Pokemon> = [];
  searchValue: string = "";

  @Input() set searchValueInput(value: string) {
    this.searchValue = value;
    this.filterPokemon();
  };

  constructor(private _pokeCatalogService: PokeCatalogService) {
    console.log(">> PokeCatalogComponent()");
  }

  filterPokemon() {
    this.pokemonList = this.originalPokemonList.filter((pokemon, index)=> {
      // If the value to search is a substring of the pokemon name; then the pokemonList will have the current pokemon
      return pokemon.name.includes(this.searchValue);
    });
  }

  public ngOnInit() {
    this._pokeCatalogService.getPokemonList().then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      this.originalPokemonList = pokemonList;
    });
  }
}
