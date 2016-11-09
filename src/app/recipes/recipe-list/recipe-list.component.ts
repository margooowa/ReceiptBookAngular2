import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  // recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');

 // @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor(private recipeService:RecipeService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[]) => this.recipes = recipes
    );
  }

  // onSelected(recipe: Recipe) {
  //  this.recipeSelected.emit(recipe);
  // }

}
