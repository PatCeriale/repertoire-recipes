import { Form, Button, Col } from "react-bootstrap";
import React, { useState } from "react";
// import { cloudinary } from "cloudinary";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import "./NewRecipe.css";
import {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../../utils/API";

export default function NewRecipe() {
  const [mystate, setMyState] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: "",
    preptime: "",
    cooktime: "",
    servingsize: "",
    ingredients: "",
    instructions: "",
    // ingredients: [{ type: "" }],
    // instructions: [{ type: "" }],
    course: "",
    // tags: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMyState({
      ...mystate,
      [name]: value,
      // title: value,
      // author: value,
      // description: value,
    });
    // console.log(mystate);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(mystate);
    createRecipe({
      title: mystate.title,
      description: mystate.description,
      imageUrl: mystate,
      preptime: mystate,
      cooktime: mystate,
      servingsize: mystate,
      ingredients: mystate,
      instructions: mystate,
      course: mystate,
    });
  };

  const handleAddIngredient = (event) => {
    event.preventDefault();
    document.getElementById("ingredientListBox").append(<IngredientListItem />);
    console.log("ingredient list expanded");
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    console.log("preparation list expanded");
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

  const dropdownStyle = {
    width: "33%",
    display: "inline",
  };
  // const { imageUrl, imageAlt } = this.state;
  // const [imageUrl, setImageUrl] = useState({
  //   image: "",
  // });
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
          <Form.Group controlId="author" onChange={handleInputChange}>
            <Form.Label>Author</Form.Label>
            <Form.Control type="author" placeholder="Insert Name Here" />
          </Form.Group>
          <Form.Group controlId="description" onChange={handleInputChange}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <img src="#" alt="Dish" className="displayed-image" />

          <ImageUpload />
          <br />
          {/* <img
            src="https://cdn.arstechnica.net/wp-content/uploads/2019/09/GettyImages-512362812-1-800x534.jpg"
            // Display default image and then the uploaded image
            alt="Dish"
            style={{ width: "50vw", justifyContent: "center" }}
          ></img> 
          <br />
          <br />*/}

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
          <Form.Group
            controlId="servingsize"
            onChange={handleInputChange}
            style={dropdownStyle}
          >
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

          <Form.Group
            controlId="course"
            onChange={handleInputChange}
            style={dropdownStyle}
          >
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="select"
              //   className="mr-sm-2"
              //   id="inlineFormCustomSelect"
              //   custom
            >
              <option value="0"> </option>
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Dinner</option>
              <option value="4">Dessert</option>
              <option value="5">Appetizer</option>
            </Form.Control>
          </Form.Group>
          <div id="ingredientListBox">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ingredient and amount"
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" onClick={handleAddIngredient}>
            <i className="fas fa-plus-circle"></i> Add Ingredient
          </Button>

          <div id="stepListBox">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Preparation</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter step by step preparation"
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" onClick={handleAddStep}>
            <i className="fas fa-plus-circle"></i> Add another step
          </Button>
          {/* <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add recipe image" />
          </Form.Group> */}
          <br />
          <br />
          <Button variant="success" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
