import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";

export const TransForm = () => {
  return (
    <div className="mt-5">
      <Form className="border rounded p-3 shadow-lg bg-warning">
        <Row>
          <Col md="2">
            <Form.Group>
              <Form.Select name="type" required>
                <option value="">Select</option>
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md="3">
            <CustomInput
              name="name"
              type="text"
              placeholder="purchase"
              required={true}
            />
          </Col>

          <Col md="2">
            <CustomInput
              name="amount"
              type="number"
              placeholder="12000"
              requiured={true}
            />
          </Col>

          <Col md="3">
            <CustomInput name="date" type="date" required={true} />
          </Col>

          <Col md="2">
            <Form.Group className="mb-3 d-grid">
              <Button variant="primary" type="submit">
                +Add
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
