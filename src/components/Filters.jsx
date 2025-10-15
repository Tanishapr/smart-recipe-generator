import React, { useState } from 'react';

export default function Filters({ recipes = [], setFilteredRecipes = () => {} }) {
  const [diet, setDiet] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const handleFilter = () => {
    const filtered = (recipes || []).filter(recipe => {
      let match = true;
      if (diet) match = match && recipe.diet.includes(diet);
      if (difficulty) match = match && recipe.difficulty === difficulty;
      if (maxTime) match = match && recipe.time <= parseInt(maxTime);
      return match;
    });
    setFilteredRecipes(filtered);
  };

  return (
    <div className="flex gap-4 mb-4">
      <select value={diet} onChange={e => setDiet(e.target.value)}>
        <option value="">All Diets</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="pescatarian">Pescatarian</option>
      </select>

      <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
        <option value="">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <input
        type="number"
        placeholder="Max time (min)"
        value={maxTime}
        onChange={e => setMaxTime(e.target.value)}
        className="border px-2"
      />

      <button onClick={handleFilter} className="px-4 py-1 bg-green-500 text-white rounded">
        Filter
      </button>
    </div>
  );
}