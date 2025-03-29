import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";

const RetetaDetail = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes); // Luăm rețetele din Redux
  const [recipe, setRecipe] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id, recipes]);

  if (!recipe) return <div>Loading...</div>;

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  return (
    <div style={{ color: "gold", backgroundColor: "black", padding: "20px" }}>
      <Link to="/retete">
        <button
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          Înapoi
        </button>
      </Link>

      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: "30%", height: "auto", marginBottom: "20px" }}
        />
        <h2>{recipe.name}</h2>
        <p>
          <strong>Calorii per serving:</strong> {recipe.caloriesPerServing} kcal
        </p>
        <p>
          <strong>Timp de preparare:</strong> {recipe.prepTimeMinutes} min
        </p>
        <p>
          <strong>Timp de gătit:</strong> {recipe.cookTimeMinutes} min
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>

        {/* Butonul de adăugare/ștergere din favorite */}
        <button
          style={{
            backgroundColor: isFavorite ? "red" : "green",
            color: "white",
            padding: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (isFavorite) {
              dispatch(removeFromFavorites(recipe.id));
            } else {
              dispatch(addToFavorites(recipe));
            }
          }}
        >
          {isFavorite ? "Șterge din favorite ❤️" : "Adaugă la favorite 💚"}
        </button>
      </div>
    </div>
  );
};

export default RetetaDetail;
