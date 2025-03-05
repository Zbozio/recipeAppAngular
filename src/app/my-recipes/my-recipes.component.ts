import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.scss',
})
export class MyRecipesComponent implements OnInit {
  favoriteRecipes = [] as Recipe[];
  constructor() {}

  ngOnInit(): void {
    const favoriteRecipes = localStorage.getItem('Favorite recipes');
    if (favoriteRecipes) {
      this.favoriteRecipes = JSON.parse(favoriteRecipes);
    }
  }
}
