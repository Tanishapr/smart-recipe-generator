export function normalize(s) {
    return s.trim().toLowerCase();
  }
  
  export function buildIngredientPool(recipes) {
    const set = new Set();
    recipes.forEach(r => r.ingredients.forEach(i => set.add(normalize(i.name))));
    return Array.from(set).sort();
  }
  
  export function matchRecipes(recipes, userIngredients, options = {}, topN = 10, substitutions = {}) {
    const userSet = new Set(userIngredients.map(normalize));
    let filtered = recipes.filter(r => {
      if (options.diet && !r.dietTags.includes(options.diet)) return false;
      if (options.maxTime && r.timeMinutes > options.maxTime) return false;
      if (options.difficulty && r.difficulty !== options.difficulty) return false;
      return true;
    });
  
    const scored = filtered.map(r => {
      const recipeIngredientNames = r.ingredients.map(i => normalize(i.name));
      const present = recipeIngredientNames.filter(x => userSet.has(x));
      const missing = recipeIngredientNames.filter(x => !userSet.has(x));
      const substitutionsFound = missing.map(m => ({ miss: m, subs: substitutions[m] || [] }));
      const matchScore = recipeIngredientNames.length ? present.length / recipeIngredientNames.length : 0;
      return { recipe: r, matchScore, presentCount: present.length, missing, substitutionsFound };
    });
  
    scored.sort((a, b) => b.matchScore - a.matchScore || b.presentCount - a.presentCount);
    return scored.slice(0, topN);
  }