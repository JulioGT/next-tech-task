import Link from 'next/link';
import { fetchRecipeById } from '@/app/actions/recipe-actions';

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { id } = await params;
  const recipe = await fetchRecipeById(id);

  if (!recipe) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">Receta no encontrada</p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Volver a la lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-semibold group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver a la lista
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              {recipe.name}
            </h1>

            <div className="flex justify-center gap-6 text-sm flex-wrap">
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="font-semibold">{recipe.cuisine}</span>
              </span>
              <span
                className={`px-4 py-2 rounded-lg text-sm font-bold ${
                  recipe.difficulty === 'Easy'
                    ? 'bg-emerald-100 text-emerald-700'
                    : recipe.difficulty === 'Medium'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                {recipe.difficulty}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 text-center">
                <p className="text-sm text-blue-600 font-semibold mb-1">
                  Preparación
                </p>
                <p className="text-3xl font-bold text-blue-900">
                  {recipe.prepTimeMinutes}
                </p>
                <p className="text-xs text-blue-600">minutos</p>
              </div>
              <div className="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200 text-center">
                <p className="text-sm text-orange-600 font-semibold mb-1">
                  Cocción
                </p>
                <p className="text-3xl font-bold text-orange-900">
                  {recipe.cookTimeMinutes}
                </p>
                <p className="text-xs text-orange-600">minutos</p>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 text-center">
                <p className="text-sm text-purple-600 font-semibold mb-1">
                  Raciones
                </p>
                <p className="text-3xl font-bold text-purple-900">
                  {recipe.servings}
                </p>
                <p className="text-xs text-purple-600">personas</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Ingredientes
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200"
                  >
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 font-medium">
                      {ingredient}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Instrucciones
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 bg-linear-to-r from-slate-50 to-white p-4 rounded-xl border border-slate-200"
                  >
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-base font-bold shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed pt-1">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t-2 border-slate-200 pt-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Valoraciones
              </h2>
              <div className="bg-linear-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-bold text-yellow-600">
                    {recipe.rating}
                  </span>
                  <div>
                    <div className="flex text-yellow-500 text-2xl mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      Basado en{' '}
                      <span className="font-bold text-slate-800">
                        {recipe.reviewCount}
                      </span>{' '}
                      reseñas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
