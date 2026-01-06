'use client';

import { useState } from 'react';
import { useRecipes } from '../context/recipe-context';
import { Difficulty } from '../types/recipe';

export default function Sidebar() {
  const { selectedDifficulty, setSelectedDifficulty } = useRecipes();
  const [isOpen, setIsOpen] = useState(false);

  const difficulties: (Difficulty | 'All')[] = [
    'All',
    'Easy',
    'Medium',
    'Hard',
  ];

  const handleDifficultyClick = (difficulty: Difficulty | 'All') => {
    setSelectedDifficulty(difficulty);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-3 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 bg-white border-r border-slate-200 p-6 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-1">
            Filtrar por dificultad
          </h2>
          <p className="text-sm text-slate-500">Selecciona la dificultad</p>
        </div>
        <nav className="space-y-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => handleDifficultyClick(difficulty)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                selectedDifficulty === difficulty
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'text-slate-700 hover:bg-slate-100 hover:scale-102'
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={` ${
                    selectedDifficulty === difficulty
                      ? 'bg-white'
                      : 'bg-slate-400'
                  }`}
                ></span>
                {difficulty === 'All'
                  ? 'Todas las recetas'
                  : `Dificultad ${difficulty}`}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
