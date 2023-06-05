import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Nav } from "react-bootstrap";
import { Inputfields } from "../../components/inputField/InputField";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserAction } from "../../components/user/UserAction";
import { MainLayout } from "../../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";

export const Register = () => {
  const [form, setForm] = useState();
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   user?.uid && navigate("/dashboard");
  // }, [user?.uid, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isUserCreated = await registerUserAction(form);
    isUserCreated && navigate("/");
  };

  return (
    <MainLayout>
      <div className="form-container m-auto mt-4" style={{ width: "555px" }}>
        <Form
          className="border p-5 rounded shadow-lg"
          onSubmit={handleOnSubmit}
        >
          <Form.Text>
            <h3 className="text-center mb-5">Create Your Account !!</h3>
          </Form.Text>
          {Inputfields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          ></Form.Group>

          <div className="d-grid">
            <Button type="submit" variant="success">
              Register <BsBoxArrowInRight />
            </Button>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
