'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Recipe } from '../types/recipe';
import { useRecipes } from '../context/recipe-context';
import Pagination from './pagination';

interface RecipeTableProps {
  recipes: Recipe[];
}

const ITEMS_PER_PAGE = 10;

export default function RecipeTable({ recipes }: RecipeTableProps) {
  const { selectedDifficulty } = useRecipes();
  const [currentPage, setCurrentPage] = useState(1);

  const { filteredRecipes, totalPages, paginatedRecipes, shouldResetPage } =
    useMemo(() => {
      const filtered =
        selectedDifficulty === 'All'
          ? recipes
          : recipes.filter(
              (recipe) => recipe.difficulty === selectedDifficulty
            );

      const total = Math.ceil(filtered.length / ITEMS_PER_PAGE);

      // Ajustar página si está fuera de rango
      const validPage = currentPage > total ? 1 : currentPage;
      const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
      const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

      return {
        filteredRecipes: filtered,
        totalPages: total,
        paginatedRecipes: paginated,
        shouldResetPage: currentPage > total && total > 0,
      };
    }, [recipes, selectedDifficulty, currentPage]);

  // Reset page only when needed
  if (shouldResetPage) {
    setCurrentPage(1);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
        <table className="w-full">
          <thead className="bg-linear-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Nombre Receta
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Cocina
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Prep.
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Cocción
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Raciones
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Dificultad
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {paginatedRecipes.map((recipe) => (
              <tr
                key={recipe.id}
                className="hover:bg-blue-50/50 transition-colors"
              >
                <td className="px-6 py-3">
                  <Link
                    href={`/recipe/${recipe.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold hover:underline inline-flex items-center gap-2 group"
                  >
                    {recipe.name}
                  </Link>
                </td>
                <td className="px-6 py-3">
                  <span className="text-sm text-slate-700 font-medium">
                    {recipe.cuisine}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <span className="inline-flex items-center gap-1 text-sm text-slate-600">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {recipe.prepTimeMinutes}min
                  </span>
                </td>
                <td className="px-6 py-3">
                  <span className="inline-flex items-center gap-1 text-sm text-slate-600">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                    </svg>
                    {recipe.cookTimeMinutes}min
                  </span>
                </td>
                <td className="px-6 py-3">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {recipe.servings}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1.5 text-xs font-bold rounded-full shadow-sm ${
                      recipe.difficulty === 'Easy'
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        : recipe.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-700 border border-amber-200'
                        : 'bg-rose-100 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredRecipes.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
