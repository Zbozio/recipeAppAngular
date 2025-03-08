import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
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

  removeRecipe(i: number) {
    this.favoriteRecipes.splice(i, 1);
    this.saveFavoriteRecipes();
  }
  saveFavoriteRecipes() {
    localStorage.setItem(
      'Favorite recipes',
      JSON.stringify(this.favoriteRecipes)
    );
  }
}
