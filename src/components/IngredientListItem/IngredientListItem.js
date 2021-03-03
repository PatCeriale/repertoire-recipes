import { Form, Button, Col } from "react-bootstrap";

export default function IngredientListItem() {
  return (
    <div>
      <Form.Group controlId="formBasicTitle">
        <Form.Control type="text" placeholder="Enter ingredient and amount" />
      </Form.Group>
    </div>
  );
}
