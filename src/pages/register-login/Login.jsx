import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Nav } from "react-bootstrap";
import { Inputfields } from "../../components/inputField/InputField";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MainLayout } from "../../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../components/user/UserAction";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.JPG";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ maxWidth: 400 });

  return (
    <MainLayout>
      <div className="login py-5">
        <Form
          className="border p-5 rounded shadow-lg  m-auto login-container"
          style={{ background: "white", width: isMobile ? "96vw" : "600px" }}
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
            <Link to="https://pranx.com/hacker/" className="text-center">
              Click here !!{" "}
            </Link>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
