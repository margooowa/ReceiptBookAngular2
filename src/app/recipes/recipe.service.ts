import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1', 'http://www.leanphysiquemeals.co.uk/wp-content/uploads/2015/02/food1.jpg',[
      new Ingredient('French fries',2),
      new Ingredient('Pork meat',1)
    ]),
    new Recipe('Dummy1', 'Dummy2', 'http://www.leanphysiquemeals.co.uk/wp-content/uploads/2015/02/153902892-1024x683.jpg',[
      new Ingredient('Tomatoes',2),
      new Ingredient('Meat',1)
    ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
  return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
