/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      // eslint-disable-next-line max-len
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      // eslint-disable-next-line max-len
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://bakerbynature.com/wp-content/uploads/2013/12/IMG_5993-21.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];
  constructor() { }

  getAllRecipes() {

    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    console.log('getRecipe', this.recipes.find(recipe => recipe.id === recipeId));
    console.log('spread getRecipe', { ...this.recipes.find(recipe => recipe.id === recipeId) });
    return { ...this.recipes.find(recipe => recipe.id === recipeId) };
  }

}
