import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-recipe',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './list-recipe.component.html',
  styleUrl: './list-recipe.component.scss',
})
export class ListRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  query: string = '';
  favoriteRecipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    const favoriteRecipes = localStorage.getItem('Favorite recipes');
    if (favoriteRecipes) {
      this.favoriteRecipes = JSON.parse(favoriteRecipes);
    }
  }
  searchRecipes(query: string) {
    this.recipeService.getRecipes(query).subscribe((data: any) => {
      this.recipes = data.results;
    });
  }
  favoriteRecipe(recipe: Recipe) {
    this.favoriteRecipes.push(recipe);
    this.saveFavoriteRecipes();
  }
  saveFavoriteRecipes() {
    localStorage.setItem(
      'Favorite recipes',
      JSON.stringify(this.favoriteRecipes)
    );
  }
}
