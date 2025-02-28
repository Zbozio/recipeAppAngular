import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'list-recipe', component: ListRecipeComponent },
];
