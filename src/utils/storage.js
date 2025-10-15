const FAVORITES_KEY = "sr_favorites_v1";
const RATINGS_KEY = "sr_ratings_v1";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
}

export function toggleFavorite(recipeId) {
  const fav = new Set(getFavorites());
  if (fav.has(recipeId)) fav.delete(recipeId); else fav.add(recipeId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(fav)));
}

export function getRating(recipeId) {
  const ratings = JSON.parse(localStorage.getItem(RATINGS_KEY) || "{}");
  return ratings[recipeId] || null;
}

export function setRating(recipeId, score) {
  const ratings = JSON.parse(localStorage.getItem(RATINGS_KEY) || "{}");
  ratings[recipeId] = score;
  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
}