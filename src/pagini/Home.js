import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recepiesSlice";
import "./Home.css";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import RecipeSection from "../componente/RecipeSection";

function Home() {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipes);
  const favorites = useSelector((state) => state.favorites);

  const handleFavoriteToggle = (recipe) => {
    if (favorites.some((fav) => fav.id === recipe.id)) {
      dispatch(removeFromFavorites(recipe.id));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };
  useEffect(() => {
    dispatch(fetchRecipes()); // Apel API la montare
  }, [dispatch]);

  // Filtrăm rețetele
  const popularRecipes = recipes.slice(0, 4);
  const soupsAndPizzas = recipes
    .filter(
      (recipe) => recipe.tags.includes("Soup") || recipe.tags.includes("Pizza")
    )
    .slice(0, 4);
  const dessertsAndSalads = recipes
    .filter(
      (recipe) =>
        recipe.tags.includes("Dessert") || recipe.tags.includes("Salad")
    )
    .slice(0, 4);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(recipes);
  return (
    <div className="home-container">
      <img src="/wallpaper.jpg" alt="Wallpaper" className="home-wallpaper" />

      <h1 className="home-title">Rețete Delicioase</h1>
      <p className="home-welcome">
        Bine ai venit în lumea aromelor și gusturilor! Alege o rețetă și
        bucură-te de gătit! 🍽️
      </p>

      <RecipeSection
        title="Rețete Populare"
        description="Descoperă cele mai iubite rețete alese de bucătari pasionați!"
        recipes={popularRecipes}
      />

      <RecipeSection
        title="Supe și Pizza"
        description="Descoperă cele mai gustoase supe și pizze, perfecte pentru orice ocazie!"
        recipes={soupsAndPizzas}
      />

      <RecipeSection
        title="Deserturi și Salate"
        description="Gustă din cele mai delicioase deserturi și salate, perfecte pentru orice gust!"
        recipes={dessertsAndSalads}
      />

      <Container className="text-center mt-5">
        <p className="discover-recipes-text">
          Descoperă toate rețetele noastre și fii creativ în bucătărie!
        </p>
        <Link to="/retete">
          <Button variant="primary">Către Rețete</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;
