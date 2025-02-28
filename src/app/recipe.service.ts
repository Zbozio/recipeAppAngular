import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from 'express';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private API_URL = 'https://api.spoonacular.com/recipes';
  private API_KEY = '8c7c315aaf5d4dfcb74b8d7a39569362';

  constructor(private http: HttpClient) {}

  getRecipes(query: string) {
    return this.http.get(
      `${this.API_URL}/complexSearch?query=${query}&apiKey=${this.API_KEY}`
    );
  }
}
