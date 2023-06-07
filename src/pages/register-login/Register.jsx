import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Nav } from "react-bootstrap";
import { Inputfields } from "../../components/inputField/InputField";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserAction } from "../../components/user/UserAction";
import { MainLayout } from "../../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ maxWidth: 400 });

  return (
    <MainLayout>
      <div className="register py-5">
        <div
          className="form-container m-auto "
          style={{ width: isMobile ? "96vw" : "600px", background: "white" }}
        >
          <Form
            className="border p-5 rounded shadow-lg m-auto"
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
              <Button type="submit" variant="primary">
                Register <BsBoxArrowInRight />
              </Button>

              <p className="text-center mt-2 ">Already have an account??</p>
              <div className="text-center ">
                <Link to="/" className="text-secondary">
                  Redirect to login !
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};
