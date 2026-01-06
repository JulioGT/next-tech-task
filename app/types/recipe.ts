/**
 * Recipe difficulty levels
 */
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

/**
 * Recipe interface based on DummyJSON API response
 */
export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: Difficulty;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

/**
 * API response structure for recipes list
 */
export interface RecipesResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}
