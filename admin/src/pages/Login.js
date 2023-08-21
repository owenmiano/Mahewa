import React, { useContext, useState } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState;

  const { loginUser, isLoading, loginError } = useContext(AuthContext);
  const onSubmit = (data) => loginUser(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row className="vh-80 align-items-center mt-4">
          <Col xs={12} sm={8} md={6} lg={4} xl={3} className="mx-auto mb-0">
            <Stack gap={3}>
              <h2>Login</h2>
              {loginError && (
                <Alert variant="danger">
                  <p>{loginError}</p>
                </Alert>
              )}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                <p style={{ color: "red" }}>{errors.email?.message}</p>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Password</Form.Label>
                <div style={{ position: "relative" }}>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        message:
                          "Password should be at least 8 characters long and should contain at least one lowercase letter, one uppercase letter, and one digit",
                      },
                    })}
                  />
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      top: "30%",
                      right: "10px", // Adjust the value for proper positioning
                      transform: "translateY(-50%)",
                      zIndex: "2",
                    }}
                  />
                  <label
                    htmlFor="showPassword"
                    style={{
                      width: "20px", // Adjust the size of the icon
                      height: "20px", // Adjust the size of the icon
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                  ></label>
                </div>
                <p style={{ color: "red" }}>{errors.password?.message}</p>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Link to="/forgot-password" className="text-body">
                  Forgot password?
                </Link>
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLoading ? "Signing in..." : "Login"}
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Login;