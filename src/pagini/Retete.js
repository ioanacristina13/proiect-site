import React from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";

const Retete = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes); // Luăm rețetele din Redux
  const loading = useSelector((state) => state.recipes.loading); // Luăm statusul de loading
  const favorites = useSelector((state) => state.favorites); // Luăm rețetele favorite
  console.log(recipes);
  const handleFavoriteToggle = (recipe) => {
    if (favorites.some((fav) => fav.id === recipe.id)) {
      dispatch(removeFromFavorites(recipe.id));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "black", margin: "0", minHeight: "100vh" }}>
      {/* Titlul secțiunii */}
      <div className="text-center" style={{ margin: "30px 0", color: "gold" }}>
        <h1>Rețete Noastre Tradiționale</h1>
        <p style={{ fontStyle: "italic", color: "gold" }}>
          Descoperă cele mai gustoase rețete din tradiția noastră, preparate cu
          ingrediente naturale și iubire!
        </p>
      </div>

      {/* Lista de rețete */}
      <Container>
        <Row>
          {recipes &&
            recipes?.map((recipe) => {
              const isFavorite = favorites.some((fav) => fav.id === recipe.id);

              return (
                <Col key={recipe.id} sm={12} md={6} lg={4} className="mb-4">
                  <Card
                    style={{
                      backgroundColor: "#D3D3D3", // Fundal argintiu
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                      <Card.Title>{recipe.name}</Card.Title>
                      <Card.Text>
                        <strong>Calorii per serving:</strong>{" "}
                        {recipe.caloriesPerServing} kcal <br />
                        <strong>Timp de preparare:</strong>{" "}
                        {recipe.prepTimeMinutes} min <br />
                        <strong>Gătit:</strong> {recipe.cookTimeMinutes} min
                      </Card.Text>

                      {/* Link către pagina de detalii */}
                      <Link
                        to={`/retete/${recipe.id}`}
                        style={{ color: "black", textDecoration: "underline" }}
                      >
                        Vezi rețeta
                      </Link>

                      {/* Buton Adaugă la favorite */}
                      <Button
                        variant={isFavorite ? "danger" : "primary"}
                        className="mt-2 w-100"
                        onClick={() => handleFavoriteToggle(recipe)}
                      >
                        {isFavorite
                          ? "Șterge din favorite"
                          : "Adaugă la favorite"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Retete;
