import React, { createContext, useState, useContext, useEffect } from "react";

// Creăm contextul pentru rețete
const RecipeContext = createContext();

// Hook personalizat pentru a accesa contextul
export const useRecipes = () => useContext(RecipeContext);

// Componentele din aplicație vor accesa acest provider
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, loading }}>
      {children}
    </RecipeContext.Provider>
  );
};
