/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
