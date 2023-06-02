import React from "react";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Nav } from "react-bootstrap";
import { Inputfields } from "../../components/inputField/InputField";
import { BsBoxArrowInRight } from "react-icons/bs";

export const Login = () => {
  const loginField = Inputfields.filter(
    (field) => field.name === "email" || field.name === "password"
  );
  return (
    <div className="form-container m-auto mt-4" style={{ width: "555px" }}>
      <Form className="border p-5 rounded shadow-lg">
        <Form.Text>
          <h3 className="text-center mb-5">Welcome back</h3>
        </Form.Text>
        {loginField.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></Form.Group>

        <div className="d-grid">
          <Button type="submit" variant="primary">
            login <BsBoxArrowInRight />
          </Button>
          <p className="text-center mt-2 ">Forget Your password ??</p>
          <div className="text-center ">
            <a href="https://pranx.com/fbi-warning/" className="text-danger">
              Click Here !!
            </a>
          </div>
        </div>
      </Form>
    </div>
  );
};
