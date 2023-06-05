import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Nav } from "react-bootstrap";
import { Inputfields } from "../../components/inputField/InputField";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MainLayout } from "../../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../components/user/UserAction";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.uid && navigate("/dashboard");
  }, [user?.uid, navigate]);

  const loginField = Inputfields.filter(
    (field) => field.name === "email" || field.name === "password"
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };
  return (
    <MainLayout>
      <div className="form-container m-auto mt-4" style={{ width: "555px" }}>
        <Form
          className="border p-5 rounded shadow-lg"
          onSubmit={handleOnSubmit}
        >
          <Form.Text>
            <h3 className="text-center mb-5">Welcome back</h3>
          </Form.Text>
          {loginField.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
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
    </MainLayout>
  );
};
