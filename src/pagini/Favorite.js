import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../redux/favoritesSlice";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        color: "gold",
        backgroundColor: "black",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-center mb-4">🍽️ Rețetele Favorite ❤️</h2>

      {favorites.length === 0 ? (
        <p className="text-center">Nu ai adăugat nicio rețetă la favorite.</p>
      ) : (
        <Row>
          {favorites.map((recipe) => (
            <Col key={recipe.id} xs={12} md={6} lg={4} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#222",
                  color: "gold",
                  border: "1px solid gold",
                  borderRadius: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={recipe.image}
                  alt={recipe.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    <strong>Calorii:</strong> {recipe.caloriesPerServing} kcal
                    <br />
                    <strong>Timp de preparare:</strong> {recipe.prepTimeMinutes}{" "}
                    min
                    <br />
                    <strong>Timp de gătit:</strong> {recipe.cookTimeMinutes} min
                    <br />
                    <strong>Difficulty:</strong> {recipe.difficulty}
                    <br />
                    <strong>Cuisine:</strong> {recipe.cuisine}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to={`/retete/${recipe.id}`}>
                      <Button variant="warning">🔍 Vezi detalii</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromFavorites(recipe.id))}
                    >
                      ❌ Șterge
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Favorite;
