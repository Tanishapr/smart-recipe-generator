// Module: App.jsx  
// Author: Tanisha Priya  
// Date: 2025-10-15  
// Description:  
//     The main React component that serves as the container for the Smart Recipe Generator application.  
//     It manages the layout of the app, integrates the IngredientInput, Filters, RecipeCard, and RecipeDetail  
//     components, handles state for selected ingredients, recipe results, and user preferences,  
//     and passes necessary data to child components.
import React, { useState } from "react";
import IngredientInput from "./components/IngredientInput";
import Filters from "./components/Filters";
import RecipeCard from "./components/RecipeCard";
import recipesData from "./data/recipes.json";

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  // Create a pool of all ingredients for suggestions
  const ingredientPool = Array.from(
    new Set(recipesData.flatMap(r => r.ingredients))
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-green-600">Smart Recipe Generator</h1>

      {/* Ingredient Input */}
      <IngredientInput
        pool={ingredientPool}
        value={ingredients}
        onChange={setIngredients}
      />

      {/* Filters */}
      <Filters
        recipes={recipesData}
        setFilteredRecipes={setFilteredRecipes}
      />

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import recipesData from "./data/recipes.json";
// import { buildIngredientPool, matchRecipes } from "./utils/matcher";
// import { getFavorites, toggleFavorite } from "./utils/storage";

// import IngredientInput from "./components/IngredientInput";
// import Filters from "./components/Filters";
// import RecipeCard from "./components/RecipeCard";
// import RecipeDetail from "./components/RecipeDetail";

// export default function App() {
//   const [recipes] = useState(recipesData);
//   const pool = buildIngredientPool(recipes);

//   const [userIngredients, setUserIngredients] = useState([]);
//   const [options, setOptions] = useState({});
//   const [results, setResults] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [favorites, setFavorites] = useState(getFavorites());

//   useEffect(() => {
//     try {
//       const substitutions = {}; // optional: load from substitutions.json
//       const matched = matchRecipes(recipes, userIngredients, options, 20, substitutions);
//       setResults(matched);
//     } catch (err) {
//       console.error("Error matching recipes:", err);
//       setResults([]);
//     }
//   }, [recipes, userIngredients, options]);

//   function handleToggleFav(id) {
//     toggleFavorite(id);
//     setFavorites(getFavorites());
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//     {/* Tailwind test */}
//     <h1 className="text-3xl font-bold text-green-500 mb-4">Tailwind Test</h1>

//     <h1 className="text-3xl font-bold text-center mb-6">🍳 Smart Recipe Generator</h1>

//       <IngredientInput pool={pool} value={userIngredients} onChange={setUserIngredients} />

//       <Filters options={options} setOptions={setOptions} />

//       <div style={{ marginTop: 20 }}>
//         {results.length === 0 ? (
//           <div>No matching recipes. Add more ingredients or adjust filters.</div>
//         ) : (
//           results.map(r => (
//             <RecipeCard
//               key={r.recipe.id}
//               item={r}
//               onView={(id) => setSelectedRecipe(recipes.find(x => x.id === id))}
//               onToggleFav={handleToggleFav}
//               isFav={favorites.includes(r.recipe.id)}
//             />
//           ))
//         )}
//       </div>

//       {selectedRecipe && (
//         <RecipeDetail
//           recipe={selectedRecipe}
//           onClose={() => setSelectedRecipe(null)}
//         />
//       )}
//     </div>
//   );
// }
