import { Form, Button, Col, Row } from "react-bootstrap";
import "./RecipeList.css";

export default function RecipeList() {
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
        {/* Map over alphabet and organize each recipe alphabetically by searchBy term */}
        <h1 id="fancyText" style={{ textAlign: "left" }}>
          A <hr />
        </h1>
      </div>
    </div>
  );
}
