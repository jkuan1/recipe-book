import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Schnitzel recipe',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
          new Ingredient('Meat', 1),
          new Ingredient("Fries", 20)
      ]
    ),
    new Recipe(
      'Cheese and Bacon Burger',
      'Not for the weak of stomach',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Cheese', 2),
        new Ingredient('Buns', 2)
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
