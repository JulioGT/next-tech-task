'use server';

import axios from 'axios';
import { Recipe, RecipesResponse } from '../types/recipe';

/**
 * Fetches all recipes from the DummyJSON API
 * @returns Promise with array of recipes or null if error occurs
 */
export async function fetchRecipes(): Promise<Recipe[] | null> {
  try {
    const response = await axios.get<RecipesResponse>(process.env.NEXT_PUBLIC_API_BASE_URL!);
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
}

/**
 * Fetches a single recipe by ID from the DummyJSON API
 * @param id - Recipe ID
 * @returns Promise with recipe data or null if error occurs
 */
export async function fetchRecipeById(id: string): Promise<Recipe | null> {
  try {
    const response = await axios.get<Recipe>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe ${id}:`, error);
    return null;
  }
}
