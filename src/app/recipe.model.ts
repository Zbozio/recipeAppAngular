export interface Recipe {
  id: number;
  title: string;
  image: string;
  instructions: string;
  vegan: boolean;
  servings: number;
  diets: string[];
  dishTypes: string[];
  readyInMinutes: number;
}
