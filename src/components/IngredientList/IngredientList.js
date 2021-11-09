import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

export default function IngredientList() {
  const [ingredientItem, setIngredientItem] = useState('');
  const [ingredientList, setIngredientList] = useState([]);

  const logIngredient = () => {
    ingredientList.push(ingredientItem);
    setIngredientList(ingredientList);
    console.log(ingredientList);
    setIngredientItem('');
    document.getElementById('ingredient-input').value = '';
  };

  const addToList = () => {
    ingredientItem !== '' ? logIngredient() : console.log('empty input');
  };

  const removeIngredient = (id) => {
    const newList = ingredientList.filter((item) => item !== id);
    console.log(`Remove id: ${id}`, newList);
    setIngredientList(newList);
  };

  return (
    <div>
      Ingredient List
      <hr />
      <ul>
        {ingredientList.map((item, index) => {
          return (
            <Container key={index}>
              <li>
                <Row style={{ width: '100%' }}>
                  <Col xs={11}>{item}</Col>
                  <Col xs={1}>
                    <Button
                      variant='danger'
                      style={{ width: '40px', margin: '3px' }}
                      key={index}
                      onClick={() => {
                        removeIngredient(item);
                      }}
                    >
                      X
                    </Button>
                  </Col>
                </Row>
              </li>
              <hr />
            </Container>
          );
        })}
      </ul>
      <hr />
      <Form.Group
        // controlId='formBasicTitle'
        onChange={(e) => setIngredientItem(e.target.value)}
      >
        <Form.Control
          type='text'
          placeholder='Enter ingredient and amount'
          id='ingredient-input'
        />
      </Form.Group>
      <Button variant='info' onClick={addToList}>
        Add Ingredient
      </Button>
      {/* <Button
        variant='info'
        onClick={() => {
          console.log(ingredientList);
        }}
      >
        Ingredient state check
      </Button> */}
    </div>
  );
}
