import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeSection = ({ title, description, recipes }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleFavoriteToggle = (recipe) => {
    if (favorites.some((fav) => fav.id === recipe.id)) {
      dispatch(removeFromFavorites(recipe.id));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };

  return (
    <Container>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
      <Row>
        {recipes.map((recipe) => {
          const isFavorite = favorites.some((fav) => fav.id === recipe.id);

          return (
            <Col
              key={recipe.id}
              xs={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="recipe-card">
                <Link to={`/retete/${recipe.id}`} className="recipe-link">
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
                </Link>
                <Button
                  variant={isFavorite ? "danger" : "primary"}
                  className="m-2"
                  onClick={() => handleFavoriteToggle(recipe)}
                >
                  {isFavorite ? "Șterge din favorite" : "Adaugă la favorite"}
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default RecipeSection;
