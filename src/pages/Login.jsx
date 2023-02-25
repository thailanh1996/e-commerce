import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Form, Spinner } from "reactstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../style/login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

//
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      setLoading(true);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <Spinner>Loading...</Spinner>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold fs-3">Login</h3>

                <Form className="auth__form mt-4" onSubmit={signIn}>
                  <FormGroup className="form__group">
                    <input
                      className="mb-3"
                      type="email"
                      placeholder="Enter yor email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <button type="submit" className="buy__btn login__btn">
                    Login
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Create an account</Link>{" "}
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
