import React, { useState } from "react";

function scaledIngredients(ingredients, factor) {
  return ingredients.map(i => ({
    ...i,
    scaledQuantity: typeof i.quantity === "number" ? (i.quantity * factor) : i.quantity
  }));
}

export default function RecipeDetail({ recipe, onClose }) {
  const [servings, setServings] = useState(recipe.servings);
  const factor = servings / recipe.servings;
  const scaled = scaledIngredients(recipe.ingredients, factor);

  return (
    <div style={{ padding: 12, border: "1px solid #aaa", borderRadius: 8, marginTop: 12 }}>
      <h2>{recipe.title}</h2>
      <div>
        Servings: <input type="number" value={servings} min={1} onChange={e => setServings(Math.max(1, Number(e.target.value)))} />
      </div>

      <h4>Ingredients</h4>
      <ul>
        {scaled.map((ing, idx) => (
          <li key={idx}>{ing.scaledQuantity} {ing.unit} {ing.name}</li>
        ))}
      </ul>

      <h4>Steps</h4>
      <ol>{recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>

      <div>Calories per serving: {recipe.nutrition?.calories}</div>
      <div>Protein per serving: {recipe.nutrition?.protein_g}g</div>

      <button onClick={onClose} style={{ marginTop: 8 }}>Close</button>
    </div>
  );
}