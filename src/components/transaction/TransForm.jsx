import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionAction } from "./TransAction";

export const TransForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addTransactionAction({ ...form, uid: user.uid }));
  };
  return (
    <div className="mt-5">
      <Form
        className="border rounded p-3 shadow-lg bg-warning"
        onSubmit={handleOnSubmit}
      >
        <Row>
          <Col md="2">
            <Form.Group>
              <Form.Select name="type" onChange={handleOnChange} required>
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
              onChange={handleOnChange}
              required={true}
            />
          </Col>

          <Col md="2">
            <CustomInput
              name="amount"
              type="number"
              placeholder="12000"
              onChange={handleOnChange}
              requiured={true}
            />
          </Col>

          <Col md="3">
            <CustomInput
              name="date"
              type="date"
              required={true}
              onChange={handleOnChange}
            />
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
