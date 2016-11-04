import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
