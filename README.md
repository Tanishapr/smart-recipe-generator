# Smart Recipe Generator

A React-based intelligent recipe recommendation app that suggests recipes based on available ingredients, dietary preferences, and cooking difficulty. It integrates smart filtering, ingredient matching, and optional image-based ingredient recognition for a modern, AI-assisted cooking experience.

## Features

- **Ingredient Input** – Enter available ingredients or upload images for automatic detection.
- **Smart Matching** – Recipes are suggested based on available ingredients and missing ones.
- **Filters** – Apply dietary restrictions, difficulty level, and maximum preparation time.
- **Recipe Details** – View full recipes with nutritional info and scalable servings.
- **Save & Storage** – Save your favorite recipes using browser local storage.

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Utilities:** Local storage & custom matching algorithm
- **Optional:** TensorFlow.js for ingredient image recognition



##  Installation and Setup

--bash
# 1. Clone the repository
git clone https://github.com/<your-username>/smart-recipe-generator.git

# 2. Move into the project directory
cd SMART-RECIPE-GERNERATOR

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

## How It Works
1.Ingredient Input: Users enter ingredients or upload an image. The image is analyzed (if enabled) to detect ingredient names.
2.Matching Logic:The app compares available ingredients to recipes in recipes.json using a similarity score.
3.Suggestions:Recipes with the highest match percentage are displayed with details.
4.Filters & Customization:Users can filter by dietary restrictions, difficulty, or preparation time.
5.User Feedback:Favorites and ratings are saved in local storage (utils/storage.js).
