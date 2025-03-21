import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { RepiceDetailsComponent } from './repice-details/repice-details.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'listRecipe', component: ListRecipeComponent },
  { path: 'favorites', component: MyRecipesComponent },
  { path: 'bookDetails/:id', component: RepiceDetailsComponent },
];
