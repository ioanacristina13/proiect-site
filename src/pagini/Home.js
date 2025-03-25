import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [soupsAndPizzas, setSoupsAndPizzas] = useState([]); // Supe și Pizza
  const [dessertsAndSalads, setDessertsAndSalads] = useState([]); // Deserturi și Salate

  useEffect(() => {
    // Apel API pentru rețete
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        // Filtrăm rețetele
        setPopularRecipes(data.recipes.slice(0, 4)); // Primele 4 rețete populare
        setSoupsAndPizzas(
          data.recipes
            .filter(
              (recipe) =>
                recipe.tags.includes("Soup") || recipe.tags.includes("Pizza")
            )
            .slice(0, 4)
        ); // Supe și Pizza
        setDessertsAndSalads(
          data.recipes
            .filter(
              (recipe) =>
                recipe.tags.includes("Dessert") || recipe.tags.includes("Salad")
            )
            .slice(0, 4)
        ); // Deserturi și Salate
      } catch (error) {
        console.error("Eroare la apelul API: ", error);
      }
    };

    fetchRecipes();
  }, []); // Apelăm o singură dată la montarea componentei

  return (
    <div className="home-container">
      {/* Imaginea de fundal */}
      <img src="/wallpaper.jpg" alt="Wallpaper" className="home-wallpaper" />

      {/* Titlu și mesaj de bun venit */}
      <h1 className="home-title">Rețete Delicioase</h1>
      <p className="home-welcome">
        Bine ai venit în lumea aromelor și gusturilor! Alege o rețetă și
        bucură-te de gătit! 🍽️
      </p>

      {/* Secțiunea "Rețete Populare" */}
      <Container>
        <h2 className="section-title">Rețete Populare</h2>
        <p className="section-description">
          Descoperă cele mai iubite rețete alese de bucătari pasionați!
        </p>

        <Row>
          {popularRecipes.map((recipe) => (
            <Col
              key={recipe.id}
              xs={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Link to={`/retete/${recipe.id}`} className="recipe-link">
                <Card className="recipe-card">
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <div className="card-info">
                      <span>{recipe.caloriesPerServing} kcal</span>
                      <span>{recipe.prepTimeMinutes} min</span>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Secțiunea "Supe și Pizza" */}
      <Container>
        <h2 className="section-title">Supe și Pizza</h2>
        <p className="section-description">
          Descoperă cele mai gustoase supe și pizze, perfecte pentru orice
          ocazie!
        </p>

        <Row>
          {soupsAndPizzas.map((recipe) => (
            <Col
              key={recipe.id}
              xs={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Link to={`/retete/${recipe.id}`} className="recipe-link">
                <Card className="recipe-card">
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <div className="card-info">
                      <span>{recipe.caloriesPerServing} kcal</span>
                      <span>{recipe.prepTimeMinutes} min</span>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Secțiunea "Deserturi și Salate" */}
      <Container>
        <h2 className="section-title">Deserturi și Salate</h2>
        <p className="section-description">
          Gustă din cele mai delicioase deserturi și salate, perfecte pentru
          orice gust!
        </p>

        <Row>
          {dessertsAndSalads.map((recipe) => (
            <Col
              key={recipe.id}
              xs={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Link to={`/retete/${recipe.id}`} className="recipe-link">
                <Card className="recipe-card">
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <div className="card-info">
                      <span>{recipe.caloriesPerServing} kcal</span>
                      <span>{recipe.prepTimeMinutes} min</span>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Secțiunea finală cu mesajul și butonul */}
      <Container className="text-center mt-5">
        <p className="discover-recipes-text">
          Descoperă toate rețetele noastre și fii creativ în bucătărie!
        </p>
        {/* Link către pagina de rețete */}
        <Link to="/retete">
          <Button variant="primary">Către Rețete</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;
