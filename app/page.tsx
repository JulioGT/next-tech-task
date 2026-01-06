import { fetchRecipes } from './actions/recipe-actions';
import Sidebar from './components/sidebar';
import RecipeTable from './components/recipe-table';

export default async function Home() {
  const recipes = await fetchRecipes();

  if (!recipes) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-red-600">
          Error al cargar las recetas. Por favor, intenta de nuevo.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 lg:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Explora Nuestras <span className="text-blue-600">Recetas</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Descubre deliciosas recetas de todo el mundo, filtradas por
            dificultad
          </p>
        </div>
        <RecipeTable recipes={recipes} />
      </div>
    </div>
  );
}
