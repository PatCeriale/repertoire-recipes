import { Form, Button, Col } from 'react-bootstrap';
import React, { useState } from 'react';
// import { cloudinary } from "cloudinary";
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import IngredientListItem from '../../components/IngredientListItem/IngredientListItem';
import './NewRecipe.css';
import {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from '../../utils/API';

getAllRecipes();

export default function NewRecipe() {
  const [recipeState, setRecipeState] = useState({
    title: '',
    author: '',
    description: '',
    imageUrl: '',
    preptime: '',
    cooktime: '',
    servingsize: '',
    // ingredients: "",
    // instructions: "",
    // ingredients: [{ type: "" }],
    // instructions: [{ type: "" }],
    course: '',
    // tags: "",
  });
  const [recipeTitle, setRecipeTiltle] = useState('');
  const [recipeAuthor, setRecipeAuthor] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeImageUrl, setRecipeImageUrl] = useState('');
  const [recipePrepTime, setRecipePrepTime] = useState('');
  const [recipeCookTime, setRecipeCookTime] = useState('');
  const [recipeServingSize, setRecipeServingSize] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const [recipeCourse, setRecipeCourse] = useState('');

  const addRecipeState = () => {
    setRecipeState({
      title: recipeTitle,
      author: recipeAuthor,
      description: recipeDescription,
      imageUrl: recipeImageUrl,
      preptime: recipePrepTime,
      cooktime: recipeCookTime,
      servingsize: recipeCourse,
      course: recipeCourse,
      ingredients: [],
      instructions: [],
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(recipeState);
    createRecipe({
      title: recipeState.title,
      // description: recipeState.description,
      // imageUrl: recipeState,
      // preptime: recipeState,
      // cooktime: recipeState,
      // servingsize: recipeState,
      // ingredients: recipeState,
      // instructions: recipeState,
      // course: recipeState,
    });
  };

  const handleAddIngredient = (event) => {
    event.preventDefault();
    document.getElementById('ingredientListBox').append(<IngredientListItem />);
    console.log('ingredient list expanded');
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    console.log('preparation list expanded');
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

  const stateCheck = () => {
    console.log(
      'Title: ' + recipeTitle,
      'Author: ' + recipeAuthor,
      'Description: ' + recipeDescription,
      'Image Url: ' + recipeImageUrl,
      'Prep time: ' + recipePrepTime,
      'Cook time: ' + recipeCookTime,
      'Serving size: ' + recipeServingSize
    );
    console.log(recipeState);
  };

  const dropdownStyle = {
    width: '33%',
    display: 'inline',
  };
  // const { imageUrl, imageAlt } = this.recipeState;
  // const [imageUrl, setImageUrl] = useState({
  //   image: "",
  // });
  return (
    <div className='NewRecipe'>
      <button onClick={stateCheck}>State Check</button>
      <button onClick={addRecipeState}>Set recipe state</button>
      <div className='card' style={{ width: '90vw' }}>
        <h1 id='fancyText'>Add a recipe</h1>
        <hr />
        {recipeImageUrl === '' ? (
          <img
            src='http://res.cloudinary.com/dx93raqjk/image/upload/v1636054727/repertoire-recipes/nmsxp77lk80o0q3vt7zx.png'
            alt='Dish'
            className='displayed-image'
          />
        ) : (
          <img src='recipeImageUrl' alt='Dish' className='displayed-image' />
        )}
        image url = {setRecipeImageUrl}
        <ImageUpload handleSetImageUrl={setRecipeImageUrl} />
        <br />
        <Form onSubmit={handleFormSubmit}>
          <Form.Group
            controlId='title'
            onChange={(e) => setRecipeTiltle(e.target.value)}
          >
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control type='title' placeholder='Enter title' />
          </Form.Group>
          <Form.Group
            controlId='author'
            onChange={(e) => setRecipeAuthor(e.target.value)}
          >
            <Form.Label>Author</Form.Label>
            <Form.Control type='author' placeholder='Insert Name Here' />
          </Form.Group>
          <Form.Group
            controlId='description'
            onChange={(e) => setRecipeDescription(e.target.value)}
          >
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Group
                controlId='preptime'
                onChange={(e) => setRecipePrepTime(e.target.value)}
              >
                <Form.Label>Prep time</Form.Label>
                <Form.Control type='preptime' placeholder='in minutes' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                controlId='cooktime'
                onChange={(e) => setRecipeCookTime(e.target.value)}
              >
                <Form.Label>Cook time</Form.Label>
                <Form.Control type='cooktime' placeholder='in minutes' />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group
            controlId='servingsize'
            onChange={(e) => setRecipeServingSize(e.target.value)}
            style={dropdownStyle}
          >
            <Form.Label>Serving Size</Form.Label>
            <Form.Control
              as='select'
              //   className="mr-sm-2"
              //   id="inlineFormCustomSelect"
              //   custom
            >
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId='course'
            onChange={(e) => setRecipeCourse(e.target.value)}
            style={dropdownStyle}
          >
            <Form.Label>Course</Form.Label>
            <Form.Control
              as='select'
              //   className="mr-sm-2"
              //   id="inlineFormCustomSelect"
              //   custom
            >
              <option value='0'> </option>
              <option value='1'>Breakfast</option>
              <option value='2'>Lunch</option>
              <option value='3'>Dinner</option>
              <option value='4'>Dessert</option>
              <option value='5'>Appetizer</option>
            </Form.Control>
          </Form.Group>
          <div id='ingredientListBox'>
            <Form.Group controlId='formBasicTitle'>
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter ingredients and amounts'
              />
            </Form.Group>
          </div>
          {/* <Button variant="primary" type="submit" onClick={handleAddIngredient}>
            <i className="fas fa-plus-circle"></i> Add Ingredient
          </Button> */}
          <div id='stepListBox'>
            <Form.Group controlId='formBasicTitle'>
              <Form.Label>Preparation</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter step by step preparation'
              />
            </Form.Group>
          </div>
          {/* <Button variant="primary" type="submit" onClick={handleAddStep}>
            <i className="fas fa-plus-circle"></i> Add another step
          </Button> */}
          {/* <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add recipe image" />
          </Form.Group> */}
          <br />
          <br />
          <Button variant='success' type='submit' onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
