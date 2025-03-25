import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecipes } from "../contextApi/reteteContext";
import "./Retete.css";
const Retete = () => {
  const { recipes, loading } = useRecipes(); // Accesăm rețetele și loading din context

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "black", margin: "0" }}>
      {/* Titlul secțiunii */}
      <div className="text-center" style={{ margin: "30px 0", color: "gold" }}>
        <h1>Rețete Noastre Tradiționale</h1>
        <p style={{ fontStyle: "italic", color: "gold" }}>
          Descoperă cele mai gustoase rețete din tradiția noastră, preparate cu
          ingrediente naturale și iubire!
        </p>
      </div>

      {/* Lista de rețete */}
      <Row>
        {recipes.map((recipe) => (
          <Col
            key={recipe.id}
            sm={12}
            md={6}
            lg={4}
            style={{ marginBottom: "20px" }}
          >
            <Card
              style={{
                backgroundColor: "#D3D3D3", // Fundal argintiu
                color: "black", // Textul negru
                cursor: "pointer",
              }}
            >
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                  <strong>Calorii per serving:</strong>{" "}
                  {recipe.caloriesPerServing} kcal <br />
                  <strong>Timp de preparare:</strong> {recipe.prepTimeMinutes}{" "}
                  min <br />
                  <strong>Gătit:</strong> {recipe.cookTimeMinutes} min
                </Card.Text>
                {/* Butonul de navigare către pagina detaliilor */}
                <Link
                  to={`/retete/${recipe.id}`}
                  style={{ color: "black", textDecoration: "underline" }}
                >
                  Vezi rețeta
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Retete;
