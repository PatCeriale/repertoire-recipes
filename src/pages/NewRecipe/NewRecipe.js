import { Form, Button, Col } from "react-bootstrap";
import React, { useState } from "react";
import "./NewRecipe.css";

export default function NewRecipe() {
  const [mystate, setMyState] = useState({
    title: "",
    description: "",
    image: "",
    preptime: Number,
    cookime: Number,
    servingsize: Number,
    ingredients: [{ type: "" }],
    instructions: [{ type: "" }],
    tags: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMyState({
      ...mystate,

      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(mystate);

    // createNewUser(mystate)
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("token", res.data.token);
    //     history.push("/signin");
    //   })
    //   // add an alert to let user know their signup didn't work
    //   .catch((error) => {
    //     alert("user registration failed, try again", error);
    //     // console.log("user registration failed:", error);
    //   });
  };
  return (
    <div className="NewRecipe">
      <div className="card" style={{ width: "90vw" }}>
        <h1>Add a recipe</h1>
        <hr />
        <Form onChange={handleInputChange}>
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

          <Form.Group controlId="formBasicTime">
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

          <Form.Group controlId="formBasicTitle">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ingredient and amount"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Ingredient
          </Button>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Preparation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter step by step preparation"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add another step
          </Button>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add recipe image" />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
