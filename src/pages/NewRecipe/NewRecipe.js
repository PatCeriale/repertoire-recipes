import { Form, Button, Col } from "react-bootstrap";
import "./NewRecipe.css";

export default function NewRecipe() {
  return (
    <div className="NewRecipe">
      <div className="card" style={{ width: "90vw" }}>
        <h1>Add a recipe</h1>
        <hr />
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
            <Form.Text className="text-muted">
              {/* We'll never share your text with anyone else. */}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="formBasicTitle">
            <Form.Row>
              <Col>
                {" "}
                <Form.Label>Prep time</Form.Label>
                <Form.Control type="text" placeholder="in minutes" />
                <Form.Text className="text-muted"></Form.Text>
              </Col>
              <Col>
                <Form.Label>Cook time</Form.Label>
                <Form.Control type="text" placeholder="in minutes" />
                <Form.Text className="text-muted"></Form.Text>{" "}
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Serving Size</Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add recipe image" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
