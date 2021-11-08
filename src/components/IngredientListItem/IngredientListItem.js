import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

export default function IngredientListItem() {
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

  return (
    <div>
      Ingredient List
      <hr />
      <ul>
        {ingredientList.map((x, i) => {
          return (
            <Container key={i}>
              <li>
                <Row style={{ width: '100%' }}>
                  <Col xs={11}>{x}</Col>
                  <Col xs={1}>
                    <Button
                      variant='danger'
                      style={{ width: '40px', margin: '3px' }}
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
      <Button
        variant='info'
        onClick={() => {
          console.log(ingredientList);
        }}
      >
        Ingredient state check
      </Button>
    </div>
  );
}
