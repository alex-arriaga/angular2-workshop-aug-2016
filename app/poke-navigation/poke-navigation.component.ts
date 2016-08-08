import { Component, OnInit } from "@angular/core";
@Component({
  selector: "poke-navigation",
  templateUrl: "app/poke-navigation/poke-navigation.component.html",
  styles: [
    `
      .navbar-default .navbar-nav > .active >a {
         margin-top: 3px;
      }
    `
  ]
})
export class PokeNavigationComponent implements OnInit {

  constructor() {

  }

  search(event: Event) {
    event.preventDefault();
  }

  ngOnInit() {

  }
}
