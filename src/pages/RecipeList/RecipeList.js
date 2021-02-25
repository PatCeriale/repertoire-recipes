import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./RecipeList.css";

export default function RecipeList() {
  const getRandomRecipe = (event) => {
    event.preventDefault();
    console.log(Math.floor(Math.random() * Math.floor(10)));
  };
  return (
    <div className="Home">
      <div className="card" style={{ width: "90vw" }}>
        <h1 id="fancyText">
          Select a recipe from your <i>Repertoire</i>
        </h1>
        <hr />
        <Form>
          <Row>
            <Col xsm={10}>
              <Form.Group id="searchBar" controlId="searchTerm">
                <Form.Control type="text" placeholder="Search by..." />
              </Form.Group>
            </Col>
            <Col xsm={2}>
              <Form.Group controlId="searchBy">
                <Form.Control as="select">
                  <option>Title</option>
                  <option>Ingredient</option>
                  <option>Course</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Button variant="success" onClick={getRandomRecipe}>
          Get a Random Recipe
        </Button>
        {/* Map over alphabet and organize each recipe alphabetically by searchBy term */}
        <h1 id="fancyText" style={{ textAlign: "left" }}>
          A <hr />
        </h1>
        <ul>
          <li>
            <Link to="/recipe?">Recipe 1</Link>
          </li>
          <li>
            <Link to="/recipe?">Recipe 2</Link>
          </li>
          <li>
            <Link to="/recipe?">Recipe 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
