import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1', 'http://www.leanphysiquemeals.co.uk/wp-content/uploads/2015/02/food1.jpg',[]),
    new Recipe('Dummy1', 'Dummy2', 'http://www.leanphysiquemeals.co.uk/wp-content/uploads/2015/02/153902892-1024x683.jpg',[])
  ];

  // recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');

  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
   this.recipeSelected.emit(recipe);
  }

}
