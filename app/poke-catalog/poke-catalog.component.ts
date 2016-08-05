import { OnInit, Component } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { ExternalImageURLPipe } from "./../pipes/external-image-url.pipe";
import { PokeCatalogService } from "./poke-catalog.service";

@Component({
  selector: "poke-catalog",
  pipes: [ExternalImageURLPipe],
  providers: [PokeCatalogService],
  templateUrl: "app/poke-catalog/poke-catalog.component.html"
})
export class PokeCatalogComponent implements OnInit {

  pokemonList: Array<Pokemon> = [];

  constructor(private _pokeCatalogService: PokeCatalogService) {
    console.log(">> PokeCatalogComponent()");
  }

  public ngOnInit() {
    this._pokeCatalogService.getPokemonList().then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
    });
  }
}
