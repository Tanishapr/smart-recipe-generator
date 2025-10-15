import React from "react";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null; // Safety check

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">{recipe.name}</h2>
      <p>Diet: {recipe.diet}</p>
      <p>Time: {recipe.time} min</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
    </div>
  );
}