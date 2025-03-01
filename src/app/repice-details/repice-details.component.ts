import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repice-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repice-details.component.html',
  styleUrls: ['./repice-details.component.scss'],
})
export class RepiceDetailsComponent implements OnInit {
  recipe: Recipe | null = null;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');

    if (recipeId) {
      this.recipeService.getRecipeDetails(recipeId).subscribe((data: any) => {
        this.recipe = data as Recipe;
      });
    }
  }
}
