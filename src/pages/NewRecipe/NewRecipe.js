import { Form, Button, Col } from "react-bootstrap";
import React, { useState } from "react";
// import { cloudinary } from "cloudinary";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import "./NewRecipe.css";

export default function NewRecipe() {
  const [mystate, setMyState] = useState({
    title: "",
    description: "",
    image: "",
    preptime: "",
    cooktime: "",
    servingsize: "",
    ingredients: [{ type: "" }],
    instructions: [{ type: "" }],
    course: "",
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

  // var cl = cloudinary.Cloudinary.new();
  // cl.config("dx93raqjk", "demo");
  // let showWidget = () => {
  //   let myWidget = cloudinary.createUploadWidget(
  //     {
  //       cloudName: "dx93raqjk",
  //       uploadPreset: "elpxwocs",
  //     },
  //     (error, result) => {
  //       if (!error && result && result.event === "success") {
  //         console.log("Done! Here is the image info: ", result.info.url);
  //       }
  //     }
  //   );
  //   myWidget.open();
  // };

  // const showWidget = (myWidget) => {
  //   myWidget.open();
  // };
  return (
    <div className="NewRecipe">
      <div className="card" style={{ width: "90vw" }}>
        <h1 id="fancyText">Add a recipe</h1>
        <hr />
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="title" onChange={handleInputChange}>
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control type="title" placeholder="Enter title" />
          </Form.Group>
          <Form.Group controlId="description" onChange={handleInputChange}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Group controlId="preptime" onChange={handleInputChange}>
                <Form.Label>Prep time</Form.Label>
                <Form.Control type="preptime" placeholder="in minutes" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cooktime" onChange={handleInputChange}>
                <Form.Label>Cook time</Form.Label>
                <Form.Control type="cooktime" placeholder="in minutes" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="servingsize" onChange={handleInputChange}>
            <Form.Label>Serving Size</Form.Label>
            <Form.Control
              as="select"
              //   className="mr-sm-2"
              //   id="inlineFormCustomSelect"
              //   custom
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
            <i className="fas fa-plus-circle"></i> Add Ingredient
          </Button>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Preparation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter step by step preparation"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <i className="fas fa-plus-circle"></i> Add another step
          </Button>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add recipe image" />
          </Form.Group>
          <ImageUpload />
          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
