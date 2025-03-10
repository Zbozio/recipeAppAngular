import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from './api-config';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private API_URL = 'https://api.spoonacular.com/recipes';
  private API_CONFIG = API_CONFIG;

  constructor(private http: HttpClient) {}

  getRecipes(query: string) {
    return this.http.get(
      `${this.API_URL}/complexSearch?query=${query}&apiKey=${this.API_CONFIG.apiKey}`
    );
  }
  getRecipeDetails(id: string) {
    return this.http.get(
      `${this.API_URL}/${id}/information?apiKey=${this.API_CONFIG.apiKey}`
    );
  }
}
