import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useRecipes } from "../contextApi/reteteContext";

const RetetaDetail = () => {
  const { id } = useParams(); // Obținem ID-ul din URL
  const { recipes } = useRecipes(); // Accesăm rețetele din context
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Căutăm rețeta pe baza ID-ului din URL
    const selectedRecipe = recipes.find((r) => r.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id, recipes]);

  if (!recipe) return <div>Loading...</div>; // Afișăm un mesaj de încărcare până când rețeta este găsită

  return (
    <div style={{ color: "gold", backgroundColor: "black", padding: "20px" }}>
      {/* Butonul "Inapoi" */}
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

      {/* Detaliile rețetei */}
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
          style={{
            width: "30%",
            height: "auto",
            marginBottom: "20px",
          }}
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

        {/* Instrucțiuni */}
        <h3>Instrucțiuni:</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RetetaDetail;
