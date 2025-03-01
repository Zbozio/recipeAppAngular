import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RepiceDetailsComponent } from './repice-details/repice-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'recipeAppAngular';
}
