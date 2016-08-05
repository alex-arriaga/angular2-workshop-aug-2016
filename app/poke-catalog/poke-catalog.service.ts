import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Pokemon } from "./pokemon.model";

@Injectable()
export class PokeCatalogService {
  private serviceURL: string = "/data/get-250-pokemon.json";

  constructor(private http: Http) {

  }

  getPokemonList(): Promise<Pokemon[]> {
    return this.http.get(this.serviceURL).toPromise()
      .then(response => response.json().results as Pokemon[])
      .catch((err) => {
        console.error(err);
      })
  }

}
