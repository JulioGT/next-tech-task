'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Difficulty } from '../types/recipe';

interface RecipeContextType {
  selectedDifficulty: Difficulty | 'All';
  setSelectedDifficulty: (difficulty: Difficulty | 'All') => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');

  return (
    <RecipeContext.Provider
      value={{
        selectedDifficulty,
        setSelectedDifficulty,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};
