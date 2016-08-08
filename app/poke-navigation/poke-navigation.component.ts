import { Component, OnInit, Output, EventEmitter } from "@angular/core";

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

  searchValue: string = "";
  @Output() searchValueUpdated = new EventEmitter();

  constructor() {

  }

  onClick(event: Event) {
    event.preventDefault();
    this.notifyToParentComponent();
  }

  onKeyUp(event: Event) {
    this.notifyToParentComponent();
  }

  notifyToParentComponent() {
    console.warn("Value to search in child component:", this.searchValue);

    this.searchValueUpdated.emit({
      valueFromSearchComponent: this.searchValue
    });
  }

  ngOnInit() {

  }
}
